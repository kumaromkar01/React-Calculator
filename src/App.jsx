import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display  from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";

function App() {
  
  let items = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

  let [calVal, setCalVal] = useState("");
  const calci = (btn)=>{
    console.log(btn);
    if(btn=='C'){
      calVal = "";
      setCalVal(calVal);
    }
    else if(btn=='='){
      calVal  = calVal + "="+ eval(calVal);
      setCalVal(calVal);
    }
    else{
      calVal+=btn;
      setCalVal(calVal);
    }
  }
  return (
    <div className={styles.calculator}>
       <Display calVal={calVal} />
      <ButtonContainer digits = {items} setCalVal={calci}/>
    </div>
  );
}

export default App;
