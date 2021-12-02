
import s from './ballot.module.scss';




export function Ballot({ number }) {
    return (
        <div className={s.ballot}>
            <img src='/ballot.jpg' id={number} className={s.image}></img>
            <p className={s.number}>{number}</p>
        </div>
    )
}