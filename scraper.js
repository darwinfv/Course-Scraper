
	let axios = require('axios');
	let cheerio = require('cheerio');
	let fs = require('fs');
	let download = require('download');

	let files = [];

	axios.get('https://www.math.purdue.edu/~sbasu/teaching/fall2017/453/453.html')
	    .then((response) => {
	        if(response.status === 200) {
	        	const html = response.data;
	            const $ = cheerio.load(html);
	            fs.writeFile('index.html', response.data, (err) => console.log('File successfully written!'));
	            $('a').each(function(i, elem) {
	            	let link = $(this).attr('href');
	            	if(link != undefined)
	            		files.push(link.substring(2));
	            });
	            console.log(files);
	            files.forEach(function(link) {
					download('https://www.math.purdue.edu/~sbasu/teaching/fall2017/453/' + link, 'dist').then(() => {
					    console.log('done!');
					});
				});
				Promise.all([].map(x => download(x, 'dist'))).then(() => {
				    console.log('files downloaded!');
				});
	    	}
	    }, (error) => console.log(err) );