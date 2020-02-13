import React, {useState, useEffect} from 'react';
import wolframService from '../../utils/wolframService';
import QaLog from '../../components/QaLog/QaLog';
import styles from './QuestionPage.module.css';

const QuestionPage = () => {
    const [question, setQuestion] = useState('');
    const [log, setLog] = useState([]);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        wolframService.getLog().then(res => setLog(res));
    }, []);

    const askQustion = question => {
        wolframService.ask(question).then(res => {
            if (res.error) {
                setError(true);
            }
            else {
                setError(false);
                setLog(res);
            }
        });
    }

    return (
        <div className={styles.container}>
            <h1>Ask any question you want!</h1>
            <input placeholder="Ask whatever you want" onChange={evt => setQuestion(evt.target.value)}></input>
            <button onClick={() => askQustion(question)}>Submit</button>
            {error && (
                <h3>We are sorry, your question generated an error</h3>
            )}
            <h1>The Log of All Answered Questions</h1>
            <div>
                {log.map((conv, idx) => (
                    <QaLog conv={conv} key={idx}/>
                ))}
            </div>
        </div>
    )
}

export default QuestionPage;