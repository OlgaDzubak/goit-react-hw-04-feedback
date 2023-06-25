import React from 'react';
import {useState} from "react";
import './App.css';

import {Section} from './Feedback/section';
import {FeedbackOptions} from './Feedback/feedback_options';
import {Statistics} from './Feedback/statictics';

export const App = () => {

    const [good, setGood] = useState(null);
    const [neutral, setNeutral] = useState(null);
    const [bad, setBad] = useState(null);

  
    const onClickButton = (evt) => {
        switch (evt.target.name) {
            case 'good':    setGood(good+1); break;
            case 'neutral': setNeutral(neutral+1); break;
            case 'bad':     setBad(bad+1); break;
            default: break;
        };
    }

    const countTotalFeedback = () => { return good + neutral + bad;}
    
    const countPositiveFeedbackPercentage = () => {
        if (!countTotalFeedback()) return 0;
        return Math.round(100 * (good / countTotalFeedback()));
    }

    return (
        <>
            <Section title="Please leave feedback">
                <FeedbackOptions options={["good","neutral","bad"]} onLeaveFeedback={onClickButton}/>
            </Section>

            <Section title="Statistics">
                <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positive_percentage={countPositiveFeedbackPercentage()} />
            </Section>
        </>
    )
}