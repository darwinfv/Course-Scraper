
	let axios = require('axios');
	let cheerio = require('cheerio');
	let fs = require('fs');
	let download = require('download');

	let files = [];
	let websites = ['https://www.math.purdue.edu/~catlin/MA162/'];

	function scrape(website) {
		axios.get(website)
		    .then((response) => {
		        if(response.status === 200) {
		        	const html = response.data;
		            const $ = cheerio.load(html);
		            fs.writeFile('index.html', response.data, (err) => console.log('File successfully written!'));
		            $('a').each(function(i, elem) {
		            	let link = $(this).attr('href');
		            	if(link != undefined && !link.startsWith("http")) {
		            		if(link.startsWith("./"))
		            			files.push(link.substring(2));
		            		else
		            			files.push(link);
		            	}
		            });
		            files.forEach(function(link) {
						download(website + link, 'data').then(() => {
						    console.log(link + ' : Done');
						});
					});
					Promise.all([].map(x => download(x, 'data'))).then(() => {
					    console.log('files downloaded!');
					});
		    	}
		    }, (error) => console.log(err) );
	}

	function discoverFiles(website) {
		axios.get(website)
		    .then((response) => {
		        if(response.status === 200) {
		        	const html = response.data;
		            const $ = cheerio.load(html);
		            $('a').each(function(i, elem) {
		            	let link = $(this).attr('href');
	            		files.push(link);
		            });
		            console.log(files);
		        }
		    }, (error) => console.log(err) );
	}

	function save(website) {
		files.forEach(function(link) {
			download(website + link, 'data').then(() => {
			    console.log(link + ' : Done');
			});
		});
		Promise.all([].map(x => download(x, 'data'))).then(() => {
		    console.log('files downloaded!');
		});
	}

	websites.forEach(function(site) {
		scrape(site);
	});