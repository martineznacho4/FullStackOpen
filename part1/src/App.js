import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <>
        <h2>Statistics</h2>
        <StatisticLine text='Good' value={good}/>
        <StatisticLine text='Neutral' value={neutral}/>
        <StatisticLine text='Bad' value={bad}/>
        <StatisticLine text='All' value={good + neutral + bad}/>
        <StatisticLine text='Average' value={(good + neutral + bad)/3}/>
        <StatisticLine text='Positive' value={good/(good + neutral + bad) * 100}/>
      </>
    );
  } else {
    return <h2>No feedback given</h2>;
  }
};

const StatisticLine = ({text, value}) => {

  return(
    <>
    <p>{text}: {value}</p>
    </>
  )
}


const Button = ({value, updateValue, text}) => {

  const handleClick = () => {
    updateValue(value + 1)
  }

  return(
    <button onClick={handleClick}>{text}</button>
  )

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>

      <Button value={good} updateValue={setGood} text='Good'/>
      <Button value={neutral} updateValue={setNeutral} text='Neutral'/>
      <Button value={bad} updateValue={setBad} text='Bad'/>

      

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App