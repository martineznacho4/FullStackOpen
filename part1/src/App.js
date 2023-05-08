
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
    <div>
      <Part name= {param.part1} numExercises= {param.exercises1}/>
      <Part name= {param.part2} numExercises= {param.exercises2}/>
      <Part name= {param.part3} numExercises= {param.exercises3}/>
    </div>
    )
}

const Part = (param) => {
  return (
    <p>{param.name} {param.numExercises}</p>
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
      
      <Content  part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>

      <Total totalExercises={[exercises1, exercises2, exercises3]}/>
      
    </div>
  )
}
  
export default App;
