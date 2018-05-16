
	let axios = require('axios');
	let cheerio = require('cheerio');
	let fs = require('fs');
	let download = require('download');

	let files = [];
	let website = 'https://www.math.purdue.edu/~catlin/MA341-spring2018/';

	axios.get(website)
	    .then((response) => {
	        if(response.status === 200) {
	        	const html = response.data;
	            const $ = cheerio.load(html);
	            fs.writeFile('index.html', response.data, (err) => console.log('File successfully written!'));
	            $('a').each(function(i, elem) {
	            	let link = $(this).attr('href');
            		files.push(link.substring(2));
	            });
	            files.shift();
	            console.log(files);
	            files.forEach(function(link) {
					download(website + link, 'dist').then(() => {
					    console.log('done!');
					});
				});
				Promise.all([].map(x => download(x, 'dist'))).then(() => {
				    console.log('files downloaded!');
				});
	    	}
	    }, (error) => console.log(err) );