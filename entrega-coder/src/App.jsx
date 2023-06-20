import header from "./componentes/header/header"
import itemlistcontainer from ".componentes/itemlistcontainer/itemlistcontainer"
import "bootstrap/dist/css/bootstrap.min.css"
import "./app.css"
import { button } from "react-bootstrap" 
function App() {

  return (
    
      <div>
        <header />
        <itemlistcontainer mensaje="hola como va"/>

      <button variant= "danger"> click me </button>
      </div>
      
    
  )
}

export default App
