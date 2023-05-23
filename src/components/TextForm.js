import React,{useState} from 'react'

export default function TextFrom(props) {
  const handleclear=()=>{
     setText("");
  }
  const handleUpClick=()=>{
   // console.log("uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handlelowClick=()=>{
    let newtext=text.toLocaleLowerCase();
    setText(newtext);
  }
  const handleOnChange=(event)=>{
    //console.log("onchange");
    setText(event.target.value);
  }
  const Reverse = ()=>{
    let spl = text.split(" ")
    let rev = spl.reverse();
    let join = rev.join(" ");
    setText(join)
  }
  const removespaces = ()=>{
    let words = text.split(' ');
    let joinedWords = '';
    // console.log(words);
    words.forEach((elem)=>{
        if(elem[0] !==undefined){
            joinedWords += elem + " ";
            console.log(joinedWords);
        }
    })
    setText(joinedWords);
  }
  const capital = () => {
    let newText = text.split(" ").map((currentValue) => {
        let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
        return newText;
    });
    setText(newText.join(" "));
}
   
  
  const [text,setText]=useState("enter text");

  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">

       {/* <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="type text"/> */}
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
       </div>
       <button className="btn btn-primary mx-3"  onClick={handleUpClick}>Enter to convert to upper case</button>
       <button className="btn btn-primary mx-3"  onClick={handlelowClick}>Enter to convert to upper case</button>
       <button className="btn btn-primary mx-3"  onClick={handleclear}>Clear</button>
       <button className="btn btn-primary mx-3" onClick={Reverse}>Reverse words</button>
       <button className="btn btn-primary mx-3" onClick={removespaces}>Remove extra spaces</button>
       <button className="btn btn-primary mx-3" onClick={capital}>capitalize the sentence</button>
    
    </div>
    <div className="container">
      <h1>Summary of your text</h1>
      <p>Number of words={text.split(" ").length}</p>
      <p>Number of chaarcters={text.length}</p>
      <p>Average time to read in minutes={text.length*0.008}</p>
      <h1>Preview</h1>
      <p>{text}</p>
     </div>
    </>
  )
 }
