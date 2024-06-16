import { useRef, useState } from "react";
import "./Quiz.css"
import Data from "./data"
import Timer from "../Timer";

const Quiz = () => {
  let [index,setIndex] =  useState(0);
  let [question,setQuestion] = useState(Data[index]);
  let [lock,setLock] = useState(false);
  let [score,setScore]= useState(0);
  let [result,setResult] = useState(false);
  
  let Option1 = useRef(null)
  let Option2 = useRef(null)
  let Option3 = useRef(null)
  let Option4 = useRef(null)

  let option_array = [Option1,Option2,Option3,Option4] 

  const checkAns = (e,ans) =>{
    if(lock === false){
      if(question.ans===ans){
        e.target.classList.add("currect");
        setLock(true)
        setScore(prev=>prev+1)
       }
       else{
          e.target.classList.add("wrong");
          setLock(true)
          option_array[question.ans-1].current.classList.add("currect")
       }
    }
  }
  const Next = ()=>{
       if(lock === true){
        if(index === Data.length -1){
              setResult(true);
              return 0;
        }
        setIndex(++index);
        setQuestion(Data[index])
        setLock(false);
        option_array.map((option)=>{
          option.current.classList.remove("wrong");
          option.current.classList.remove("currect");
          return null;
        })
       }
  }

  return (
    <div className='conteiner'>
      <Timer initialSeconds={600}/>
      <h2>{index+1}.{question.question}</h2>
      <ul>
        <li ref={Option1}  onClick={(e)=>{checkAns(e,1)}} >{question.option1}</li>
        <li ref={Option2}  onClick={(e)=>{checkAns(e,2)}} >{question.option2}</li>
        <li ref={Option3}  onClick={(e)=>{checkAns(e,3)}} >{question.option3}</li>
        <li ref={Option4}  onClick={(e)=>{checkAns(e,4)}} >{question.option4}</li>
      </ul>
      <button onClick={Next} >Next</button>
      <div className='index'>question{index+1}/{Data.length} </div>
    </div>
  )
}
export default Quiz;
