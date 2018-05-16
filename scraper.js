
	let axios = require('axios');
	let cheerio = require('cheerio');
	let fs = require('fs');

	axios.get('https://www.math.purdue.edu/~sbasu/teaching/fall2017/453/453.html')
	    .then((response) => {
	        if(response.status === 200) {
	        	const html = response.data;
	            const $ = cheerio.load(html);
	            $('a').each(function(i, elem) {
	            	let link = $(this).attr('href');
	            	console.log(link);
	            });
	    	}
	    }, (error) => console.log(err) );