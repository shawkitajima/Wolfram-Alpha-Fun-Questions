const BASE_URL = '/api/wolfram';

export default {
    ask
}

function ask(question) {
    return fetch(`${BASE_URL}/question/${question}`).then(res => res.json());
}

