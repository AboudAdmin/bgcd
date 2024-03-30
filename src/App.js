
import './App.css';

import React, { useState } from 'react';

function PGCD() {
  const [a,setA] = useState('')
  const [b,setB] = useState('')
  const pgcdcalcule = (event) =>{
    //event.preventDefault()
    
    while (b !== 0) {
      var temp = b;
      num2 = a % b;
      num1 = temp;
    }
    return a;
  }
  
  let num1 = Math.abs(a);
  let num2 = Math.abs(b);
  const result = pgcdcalcule(num1, num2);

  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="num1" class="form-label">num 1</label>
          <input type="number" class="form-control" id="num1" aria-describedby="emailHelp"
          onChange={(e)=>setA(e.target.value)}/>
           
        </div>
        <div class="mb-3">
          <label for="num2" class="form-label">num 2</label>
          <input type="number" class="form-control" id="num2"
           onChange={(e)=>setB(e.target.value)}/>
        </div>
        
        <button type="button" class="btn btn-primary" onClick={pgcdcalcule} >calcule</button>
      </form>




      <h2>PGCD للأعداد {num1} و {num2} : {result}</h2>
    </div>
  );
}

export default PGCD;
