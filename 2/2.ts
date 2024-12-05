/* --- Day 2: Red-Nosed Reports --- */
/* https://adventofcode.com/2024/day/2*/

const fs = require('fs')

type Report = number[]

const reports: Report[] = fs
	.readFileSync('input.txt', 'utf-8')
	.split('\n')
	.map((row) => row.split(' ').map((v) => +v))

const isInRange = (arr: number[], i: number) => {
	return (
		Math.abs(arr[i] - arr[i + 1]) > 0 && Math.abs(arr[i] - arr[i + 1]) <= 3
	)
}

const isContinuousDirection = (arr: number[], i: number) => {
	if (i === 0) i++
	if (arr[i - 1] > arr[i] && arr[i] > arr[i + 1]) return true
	if (arr[i - 1] < arr[i] && arr[i] < arr[i + 1]) return true
	return false
}

const filterReportStatus = (reports: Report[]) => {
	const unsafeReports: Report[] = []
	const safeReports: Report[] = reports.reduce((acc, report) => {
		for (let i = 0; i < report.length - 1; i++) {
			if (!isInRange(report, i) || !isContinuousDirection(report, i)) {
				unsafeReports.push(report)
				return acc
			}
		}
		return [...acc, report]
	}, [] as Report[])
	return { unsafeReports, safeReports }
}

const { safeReports, unsafeReports } = filterReportStatus(reports)
let safeCount: number = safeReports.length

unsafeReports.forEach((report) => {
	const newReports: Report[] = []
	for (let i = 0; i < report.length; i++) {
		const newReport = report.filter((_, index) => i !== index)
		newReports.push(newReport)
	}
	if (filterReportStatus(newReports).safeReports.length >= 1) safeCount++
})

console.log(safeCount++)
