import React from 'react';
import styles from './QaLog.module.css';

const QaLog = props => {
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <div className={styles.bubbleRight}>
                    <h2>{props.conv.question}</h2>
                </div>
            </div>
            <div className={styles.left}>
                <div className={styles.bubbleLeft}>
                    <h2>{props.conv.answer}</h2>
                </div>
            </div>
        </div>
    )
}

export default QaLog;