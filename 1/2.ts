import * as fs from 'fs'

const input = fs
	.readFileSync('ex.txt', 'utf-8')
	.trim()
	.split('\n')
	.map((row) => row.match(/(\d+)\s+(\d+)/))

const arr1: number[] = input.map((v) => (v && +v[1]) || 0).sort()
const arr2: number[] = input.map((v) => (v && +v[2]) || 0).sort()

const similarityScores: number[] = arr1.reduce((acc, a) => {
	const count = arr2.reduce((count, b) => (a === b ? count + 1 : count), 0)
	return [...acc, a * count]
}, [])

const sum = similarityScores.reduce((acc, v) => acc + v, 0)

console.log(sum)
