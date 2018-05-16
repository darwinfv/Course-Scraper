	
	const fs = require('fs');
	const download = require('download');

	let files = [
		"ch1-2.pdf",
		"ch3.pdf",
		"hw1_sol.pdf",
		"ch4.pdf",
		"ch5.pdf",
		"hw2_sol.pdf",
		"ch6.pdf",
		"ch7.pdf",
		"hw3_sol.pdf",
		"quiz1_sol.pdf",
		"hw4_sol.pdf",
		"ch8.pdf",
		"ch9.pdf",
		"hw5_sol.pdf",
		"ch10.pdf",
		"hw6_sol.pdf",
		"ch11.pdf",
		"ch12.pdf",
		"hw7_sol.pdf",
		"mid.pdf",
		"ch13.pdf",
		"midsol1.pdf",
		"midsol2.pdf",
		"mid.jpg",
		"hw8_sol.pdf",
		"ch14.pdf",
		"ch15.pdf",
		"hw9_sol.pdf",
		"ch16.pdf",
		"hw10_sol.pdf",
		"ch17.pdf",
		"ch18.pdf",
		"hw11_sol.pdf",
		"quiz2_sol.pdf",
		"ch19.pdf",
		"ch20.pdf",
		"hw12_sol.pdf",
		"ch21-22.pdf",
		"ch23.pdf",
		"hw13_sol.pdf",
		"ch24.pdf",
		"review.pdf",
		"finalkey.pdf",
		"total.jpg"
	]

	

	files.forEach(function(link) {
		download('http://www.math.purdue.edu/~li2285/courses/453f/' + link, 'dist').then(() => {
		    console.log('done!');
		});
	});

	Promise.all([].map(x => download(x, 'dist'))).then(() => {
	    console.log('files downloaded!');
	});