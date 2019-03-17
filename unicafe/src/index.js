import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, bad, neutral}) => {
    const total = good + bad + neutral;
    const statistics = (total > 0) ? (
        <div>
            <p>hyvä {good}</p>
            <p>neutraali {neutral}</p>
            <p>huono {bad}</p>
            <p>yhteensä {good + bad + neutral}</p>
            <p>keskiarvo {(good + bad * (-1) + neutral * 0) / (good + bad + neutral)}</p>
            <p>positiivisia {good / (good + bad + neutral) * 100} %</p>
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
            <h1>Anna palautetta</h1>
            <button onClick={() => addGood()}>hyvä</button>
            <button onClick={() => addNeutral()}>neutraali</button>
            <button onClick={() => addBad()}>huono</button>
            <Statistics good={good} bad={bad} neutral={neutral}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)