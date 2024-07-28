import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpCase =() => {
    // console.log('Uppercase Was Clicked'+ text);
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted To Uppercase", "success");
  }
  const handleLoCase =() => {
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Converted To Lowercase", "success");
  }
  const handleClearExtraSpace = ()=> {
    let newText = text.split(/[  ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Has Been Cleared", "success");
  }
  const handleCopy =() => {
    // let text = document.getElementById('myBox-1')
    // text.select();
    // document.getSelection().removeAllRanges()
    navigator.clipboard.writeText(text);
    props.showAlert("Text Has Been Copied", "success");
  }
  const handleClear =() => {
    let newText= ("");
    setText(newText)
    props.showAlert("Text Is Cleared", "success");
  }
  const handleOnChange =(event)=> {
    // console.log('on Change');
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter The Text Here.');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            
            id="myBox-1"
            rows={10}
            style={{backgroundColor: props.mode==='dark'? '#13466e' : 'white',color: props.mode==='dark'? 'white' : '#042743'}}
            value={text}
            defaultValue={""}
            onChange={handleOnChange}
          />
        </div>
        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleUpCase}>change to uppercase</button>
        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleLoCase}>change to lowercase</button>
        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleClearExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white' : '#042743'}}>
      <h1>Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
      <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
      <h3>Preview</h3>
      <p>{text.length>0? text: "Enter Some Text Above In The Box To Preview Here"}</p>
    </div>
    </>
  );
}
