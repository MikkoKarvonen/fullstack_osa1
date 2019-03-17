import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value, pre}) => {
    return(
        <div>
            <p>{text} {value} {pre}</p>
        </div>
    )
}

const Statistics = ({good, bad, neutral}) => {
    const total = good + bad + neutral;
    const statistics = (total > 0) ? (
        <div>
            <Statistic text="hyvä" value={good} />
            <Statistic text="neutraali" value={neutral} />
            <Statistic text="huono" value={bad} />
            <Statistic text="yhteensä" value={good + bad + neutral} />
            <Statistic text="keskiarvo" value={(good + bad * (-1) + neutral * 0) / (good + bad + neutral)} />
            <Statistic text="positiivisia" value={good / (good + bad + neutral) * 100} pre='%'/>
        </div>
    ) : (
        <p>Ei yhtään palautetta annettu</p>
    )
    return(
        <div>
            <h1>Statistiikka</h1>
            {statistics}
        </div>
    )
}

const Button = ({text, set}) => {
    return(
        <span>
            <button onClick={set}>{text}</button>
        </span>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const addGood = () => {
        const newVal = good + 1;
        setGood(newVal)
    }

    const addNeutral = () => {
        const newVal = neutral + 1;
        setNeutral(newVal)
    }

    const addBad = () => {
        const newVal = bad + 1;
        setBad(newVal)
    }

    return (
        <div>
            <Button text="hyvä" set={() => addGood()}/>
            <Button text="neutraali" set={() => addNeutral()}/>
            <Button text="huono" set={() => addBad()}/>
            <Statistics good={good} bad={bad} neutral={neutral}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)