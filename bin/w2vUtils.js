const w2v = require('word2vec');

domains = ['backend', 'frontend', 'machine', 'robotics', 'ai', 'web', 'development', 'design', 'app', 'ml','electronics','embedded'];
function getDomains(text, callback){
    interestedDomains = [];
    w2v.loadModel('./model.txt', (err, model) => {
        for (var i; i < text.length; i++){
            for(var j; j < domains.length; j++){
                similarity = model.similarity(text[i],domains[j]);
                if (similarity > 0.5){
                    interestedDomains.push(domains[j]);
                }
            }
        }
    });
    callback(interestedDomains);
}

module.exports = {
    getDomains
}




