import React, {useState, useEffect} from "react";
import Axios from "axios";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import "./App.css";


function App() {
  const [state, setState] = useState({});
  useEffect ( 
    () => 
    Axios
    .get("https://api.nasa.gov/planetary/apod?api_key=4Fzpq6RywH8RjUtir6EiJFcUTWJZuiCbUcLng44u")
    .then(response => setState(response.data)) 
    .catch (error => console.log("dude...this is bad", error))
    , []);



  return (
    <div className="App">
      <Header title={state.title} date={state.date}/>
      <PostCard src={state.hdurl} alt={state.title} info={state.explanation} thanks={state.copyright}/>
      <p>
       <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
