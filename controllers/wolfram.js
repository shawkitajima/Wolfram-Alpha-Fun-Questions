const request = require('request');
const Qa = require('../models/qa');

module.exports = {
    ask,
    getLog,
}

function ask(req, res) {
    console.log(req.params.question);
    request(`http://api.wolframalpha.com/v1/result?appid=${process.env.WOLFRAM_KEY}&i=${req.params.question}`, function(err, response) {
        let answer = response.body;
        console.log(answer);
        if (answer === 'Wolfram|Alpha did not understand your input' || answer === 'No short answer available') {
            return res.send({error: 'error'})
        }
        else {
            Qa.findById(process.env.DB_ID, function(err, qa) {
                let log = qa.log;
                log.unshift({
                    question: req.params.question,
                    answer,
                });
                qa.save(function(err) {
                    if (err) console.log(err);
                    res.send(log);
                });
            });
        }
    });
}

function getLog(req, res) {
    Qa.findById(process.env.DB_ID, function(err, qa) {
        let log = qa.log;
        res.send(log);
    });
}

