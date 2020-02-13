const BASE_URL = '/api/wolfram';

export default {
    ask,
    getLog,
}

function ask(question) {
    return fetch(`${BASE_URL}/question/${question}`).then(res => res.json());
}

function getLog() {
    return fetch(`${BASE_URL}/log`).then(res => res.json());
}
