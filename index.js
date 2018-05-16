
	let axios = require('axios');
	let cheerio = require('cheerio');
	let fs = require('fs');
	let download = require('download');

	axios.get('http://www.math.purdue.edu/~li2285/courses/453f/ma453.html')
	    .then((response) => {
	        if(response.status === 200) {
	        	const html = response.data;
	            const $ = cheerio.load(html);
	            // fs.writeFile('index.html', response.data, (err) => console.log('File successfully written!'));
	            $('a').each(function(i, elem) {
	            	let link = $(this).attr('href');
	            	console.log(link);
                    download('link', 'dist').then(() => {
					    console.log('done!');
					});
					Promise.all([].map(x => download(x, 'dist'))).then(() => {
				    	console.log('files downloaded!');
					});
	            });
	    	}
	    }, (error) => console.log(err) );

	/*axios.get('http://www.math.purdue.edu/~li2285/courses/453f/ma453.html')
	    .then((response) => {
	        if(response.status === 200) {
	            const html = response.data;
	            const $ = cheerio.load(html); 
	            let devtoList = [];
	            $('.single-article').each(function(i, elem) {
	                devtoList[i] = {
	                    title: "$(this).find('h3').text().trim(),",
	                    url: $(this).children('.index-article-link').attr('href'),
	                    tags: $(this).find('.tags').text().split('#')
	                          .map(tag =>tag.trim())
	                          .filter(function(n){ return n != "" })
	                }      
	            });
	            const devtoListTrimmed = devtoList.filter(n => n != undefined )
	            fs.writeFile('devtoList.json', 
	                          JSON.stringify(devtoListTrimmed, null, 4), 
	                          (err)=> console.log('File successfully written!'))
	    }
	}, (error) => console.log(err) );*/