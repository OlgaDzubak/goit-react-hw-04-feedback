import css from './section.module.css';

export const Section = ({title, children}) => {
    return (
        <section className={css.section}>
            <h2 className={css.section_title}>{title}</h2>
            {children}
        </section> 
    );
    
}