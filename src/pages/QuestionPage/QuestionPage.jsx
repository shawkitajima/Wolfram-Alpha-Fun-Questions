import React, {useState, useEffect} from 'react';
import wolframService from '../../utils/wolframService';

const QuestionPage = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [loaded, setLoaded] = useState(false);

    const askQustion = question => {
        console.log(question);
        wolframService.ask(question).then(res => setAnswer(res.answer));
    }

    return (
        <div>
            <h1>Ask any question you want!</h1>
            <input placeholder="Ask whatever you want" onChange={evt => setQuestion(evt.target.value)}></input>
            <button onClick={() => askQustion(question)}>Submit</button>
        </div>
    )
}

export default QuestionPage;