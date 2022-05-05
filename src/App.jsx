import { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState(1);
  const arr = new Array(page*25).fill(0);
  window.addEventListener('scroll',()=>{
    if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-1){
      setPage(page+1);
    }
  })
  return (
    <div className="App">
       {arr.map((e,i)=>
         <h1 key={i}>Masai School {i+1}</h1>)}
    </div>
  );
}

export default App;
