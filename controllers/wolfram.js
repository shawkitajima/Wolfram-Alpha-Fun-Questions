const request = require('request');

module.exports = {
    ask
}

function ask(req, res) {
    console.log(req.params.question);
    request(`http://api.wolframalpha.com/v1/result?appid=${process.env.WOLFRAM_KEY}&i=${req.params.question}`, function(err, response) {
        let answer = response.body;
        console.log(answer);
        res.send({answer});
    })
}