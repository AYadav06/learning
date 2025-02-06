
import {BrowserRouter,Routes,Route} from "react-router-dom"
import'./App.css'

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/neet/online-coaching" element={<Class11Program />}/>
        <Route path="/" element={<Landing />}/>
      </Routes>
      </BrowserRouter>
      </div>
}


function Class11Program(){
  return <div>
    Neet Programs for class 11 student
    </div>
}
function Landing(){
  return <div>Welcome to Allen</div>
}
export default App
