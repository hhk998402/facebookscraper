const childProcess = require('child_process');
const fbScraper = require('./bin/facebook-nologin-scraper');
const w2vUtils = require('./bin/w2vUtils');

//childProcess.execSync('node bin/facebook-nologin-scraper.js https://www.facebook.com/zuck');
console.log('Done!');

fbScraper.scrape('https://www.facebook.com/zuck', (json) => {
    if (!json) {
        console.log("It fucking failed");
    } else {
        console.log(json);
    }

    text = [];
    favourites = json.favorites;
    for(var i = 0; i < favourites.length; i++){
        if(favourites[i].label!="Other"){continue}

        arr = favourites[i].items;
        for(var j = 0; j < arr.length; j++){
            t = arr[j].text;
            t = t.toLowerCase();
            tArr = t.aplit(' ');
            text = text.concat(tArr);
        }
    }

    w2vUtils.getDomains(text, (iDomains) => {
        if(!iDomains){
            console.log("No interested domains");
        } else{
            console.log(iDomains);
        }
    });


});