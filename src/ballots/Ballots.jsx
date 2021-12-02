import { useState } from "react"
import { Ballot } from "../ballot/Ballot";

import s from './ballots.module.scss'




export function Ballots() {
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(10);
    const [array, setArray] = useState([]);

    //[...Array(100).keys()] => [0 , 1 , ... , 99 , 100]

    function newFrom(e) {
        console.log(e.target.value);
        setFrom(e.target.value)
        // makeNewArray();
    }

    function newTo(e) {
        console.log(e.target.value);
        setTo(e.target.value)
        // makeNewArray();
    }

    function makeNewArray() {
        if (from <= to) {
            // debugger;
            let tmpArray = [...Array((to - from)).keys()].map((nr) => {
                return (parseInt(nr) + parseInt(from));
            })
            console.log(tmpArray);
            setArray(tmpArray);
        }
    }


    return (
        <div className={s.page}>
            <div className={s.toFrom}>
                <label for="from">From</label>
                <input type="number" id="from" name="from" onChange={newFrom}/>
                <label for="to">To</label>
                <input type="number" id="to" name="to" onChange={newTo}/>
                <button onClick={makeNewArray}>generate</button>
            </div>

            <div className={s.ballots}>
                {array.map((nr) => {
                    return <Ballot number={nr}/>
                })}
            </div>

            {/* <Ballot number={number}/> */}
        </div>
    )
}