import React from 'react';
import css from './feedback_options.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
        return  (
                <div className={css.feedback_div}> { 
                        options.map((option, idx) => {
                                const optionCapitalize = option.charAt(0).toUpperCase() + option.slice(1);
                                return <button type='button' className={css.feedback_btn} name={option} onClick={onLeaveFeedback} key={idx}>{optionCapitalize}</button>;
                        })}
                </div>
        )               
}
