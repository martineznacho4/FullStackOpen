import { useState } from 'react'


const Anecdote = ({anecdotes, index, votes}) => {

  return(

    <p>{anecdotes[index]}</p>
        
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]



  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
   
  const [selected, setSelected] = useState(0)


  const selectRandom = () =>{

    setSelected(Math.floor(Math.random() * anecdotes.length ))

  }

  const handleVote = () => {

    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    
  }

  return (
    <div>

      <button onClick={handleVote}>Vote</button>
      <button onClick={selectRandom}>Random anecdote</button>
      <br></br>
      <br></br>
      <table>
        <tbody>
          <tr>
            <td>Votes</td>
            <td> | </td>
            <td>Anecdote</td>
          </tr>
          <tr>
            <td>{votes[selected]}</td>
            <td></td>
            <td><Anecdote anecdotes={anecdotes} index={selected} votes={votes}/></td>
          </tr>
        </tbody>
      </table>
      
      
      
    </div>
  )
}

export default App