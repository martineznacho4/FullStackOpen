
// Header takes care of rendering the name of the course
// Content renders the parts and their number of exercises
// Total renders the total number of exercises

const Header = (param) => {

  return(
    <h1>{param.name}</h1>
  )
}

const Content = (param) => {
  return (
    <p> {param.part} {param.exercises}</p>
    )
}

const Total = (param) => {
  let res = 0
  param.totalExercises.forEach(e => {
    res += e
  });

  return (<p>Number of exercises {res}</p>)
}




const App = () => {
  const course = "Half Stack application development"
  
  const part1 = "Fundamentals  of React"
  const exercises1 = 10

  const part2 = "Using props to pass data"
  const exercises2 = 7

  const part3 = "State of a component"
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      
      <Content  part={part1} exercises={exercises1} />
      <Content  part={part2} exercises={exercises2} />
      <Content  part={part3} exercises={exercises3} />

      <Total totalExercises={[exercises1, exercises2, exercises3]}/>
      
    </div>
  )
}
  
export default App;
