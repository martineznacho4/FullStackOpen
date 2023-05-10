
// Header takes care of rendering the name of the course
// Content renders the parts and their number of exercises
// Total renders the total number of exercises

const Header = (param) => {

  return(
    <h1>{param.courseName.name}</h1>
  )
}

const Content = (props) => {

  
  return (
    <div>
      <Part part= {props.parts.parts[0]}/>
      <Part part= {props.parts.parts[1]}/>
      <Part part= {props.parts.parts[2]}/>
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

  props.totalExercises.parts.forEach(e => {
    res += e.exercises
  });

  return (<p>Number of exercises {res}</p>)
}




const App = () => {

  const course = {

    name: "Half Stack application development",
    
    parts :
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
  }

  return (
    <div>
      <Header courseName={course}/>
      
      <Content  parts={course}/>

      <Total totalExercises={course}/>
      
    </div>
  )
}
  
export default App;
