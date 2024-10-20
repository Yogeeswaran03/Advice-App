import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [advice,setAdvice]=useState("Please Click the button to get Advice");
   
  async function getadvice(){
    const response=await fetch
    ("https://api.adviceslip.com/advice");
    const data=await response.json();
    setAdvice(data.slip.advice);
  }

  useEffect(function(){
    getadvice();
  },[]);
  return (
    <div className="App">
      <h1>"{advice}"</h1>
      <button onClick={getadvice}>Get Advice</button>
      <p><a href='https://yogeeswaran-m.vercel.app/'>Developed by Yogeeswaran M</a> </p>
    </div>
  );
}

export default App;
