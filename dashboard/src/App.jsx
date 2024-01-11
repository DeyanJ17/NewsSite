import { useState } from "react"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"

const App = () => {
  const [category,setCategory] = useState("home")

  if(category == "home" || category == "todo" || category == "weather") {
    return (
      <div>
        <Navbar setCategory = {setCategory}/>
        <NewsBoard category = {category}/>
      </div>
    )
  }
  else {
    return (
      <div>
        <Navbar setCategory = {setCategory}/>
        <NewsBoard category = {category}/>
      </div>
    )
  }
}

export default App