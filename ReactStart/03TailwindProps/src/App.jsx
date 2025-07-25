
import './App.css'
import Card from './Components/Card'

function App() {
  
  return (
    <>
      <h1>Tailwind Css</h1>
      <br />
      <Card Title='Props with TailwindCss' content='This card uses props. While in props we can send any values but if the value is object or array we
      store tht obj/array in variable and pass it using the curly brackets.'/>
      <br />
      <Card Title='TimePass'/>
    </>
  )
}

export default App
