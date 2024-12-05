// /* --- Day 2: Red-Nosed Reports --- */
// const fs = require('fs')

// const reports = fs
// 	.readFileSync('input.txt', 'utf-8')
// 	.split('\n')
// 	.map((row) => row.split(' ').map((v) => +v))

// const isInRange = (arr, i) => {
// 	return (
// 		Math.abs(arr[i] - arr[i + 1]) > 0 && Math.abs(arr[i] - arr[i + 1]) <= 3
// 	)
// }

// const isContinuousDirection = (arr, i) => {
// 	if (i === 0) return true
// 	if (arr[i - 1] > arr[i] && arr[i] > arr[i + 1]) return true
// 	if (arr[i - 1] < arr[i] && arr[i] < arr[i + 1]) return true
// 	return false
// }

// let safeCount = 0
// reports.forEach((report) => {
// 	for (let i = 0; i < report.length - 1; i++) {
// 		if (!isInRange(report, i) || !isContinuousDirection(report, i)) {
// 			console.log('Unsafe')
// 			return
// 		}
// 	}
// 	safeCount++
// 	console.log('Safe')
// })

// console.log(safeCount)
