
// Header takes care of rendering the name of the course
// Content renders the parts and their number of exercises
// Total renders the total number of exercises

const Header = (param) => {

  return(
    <h1>{param.name}</h1>
  )
}

const Content = (props) => {

  
  return (
    <div>
      <Part part= {props.parts[0]}/>
      <Part part= {props.parts[1]}/>
      <Part part= {props.parts[2]}/>
      
    </div>
    )
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Total = (props) => {
  let res = 0

  props.totalExercises.forEach(e => {
    res += e.exercises
  });

  return (<p>Number of exercises {res}</p>)
}




const App = () => {

  const course = "Half Stack application development"
  
  const parts = 
  [
    {
      name: "Fundamentals  of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises : 7,
    },
    {
      name : "State of a component",
      exercises : 14,
    }
  ]
    
  return (
    <div>
      <Header name={course}/>
      
      <Content  parts={parts}/>

      <Total totalExercises={parts}/>
      
    </div>
  )
}
  
export default App;
