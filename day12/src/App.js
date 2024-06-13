
const App = () =>{
  const array1 = ["a","b","c"]
  const array2 = ["d","e","f"]
  const array = [
    ...array1,
    ...array2
  ]
  console.log(array)
  
  const marks1 = {
    math: 80,
    english: 70,
    science: 40
  }
  const marks2 = {
    nepali: 90,
    computer: 80,
    health: 50
  }
  const allMarks = {
    ...marks1,
    ...marks2
  }
  console.log(allMarks)
  console.log({...marks1,...marks2})
  
  
  return(
    <div></div>        
  )
}
export default App;