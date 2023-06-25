import { Notification } from "./notification";
import css from './statistics.module.css';

export const Statistics = ({good, neutral, bad, total, positive_percentage}) => {
    return ( 
        total === 0 
        ? <Notification  message="There is no feedback"/> 
        :   (
                <div className={css.statistics_div}>
                    <p className={css.stat_p}>Good : {good}</p>
                    <p className={css.stat_p}>Neutral : {neutral}</p>
                    <p className={css.stat_p}>Bad : {bad}</p>
                    <div className={css.stat_total_div}>
                        <p className={css.stat_total}>Total : {total}</p>
                        <p className={css.stat_positive_per}>Positive percentage : {positive_percentage}<span>%</span></p>
                    </div>
                </div>
            )
    )
}