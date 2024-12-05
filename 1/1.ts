import fs from 'fs'

const input = fs
	.readFileSync('input.txt', 'utf-8')
	.trim()
	.split('\n')
	.map((row) => row.match(/(\d+)\s+(\d+)/))

const arr1: number[] = input.map((v) => (v && +v[1]) || 0).toSorted()
const arr2: number[] = input.map((v) => (v && +v[2]) || 0).toSorted()

const sum = input.reduce((acc, _, i) => {
	return (acc += Math.abs(arr1[i] - arr2[i]))
}, 0)

console.log(sum)
