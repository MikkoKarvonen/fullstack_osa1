import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const votes = new Array(6 + 1).join('0').split('').map(parseFloat)
    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState(votes)
    const [max, setMax] = useState(0);

    const changeSelected = () => {
        const newSelected = Math.floor(Math.random() * anecdotes.length);
        setSelected(newSelected);
    }

    const addVote = () => {
        const copyVotes = [...vote];
        copyVotes[selected] += 1;
        setVote(copyVotes)
        findMax(copyVotes);
    }

    const findMax = (copyVotes) => {
        const max = Math.max(...copyVotes);
        setMax(copyVotes.indexOf(max));
    }

    return (
        <div>
            <h1>Anecdote of the Day</h1>
            <p>{props.anecdotes[selected]}</p>
            <p>has {vote[selected]} votes</p>
            <button onClick={() => addVote()}>vote</button>
            <button onClick={() => changeSelected()}>next anecdote</button>
            <h1>Anecdote of the Day</h1>
            <p>{props.anecdotes[max]}</p>
            <p>has {vote[max]} votes</p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)