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
    let text = document.getElementById('myBox-1')
    text.select();
    navigator.clipboard.writeText(text.value);
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
            style={{backgroundColor: props.mode==='dark'? 'grey' : 'white',color: props.mode==='dark'? 'white' : '#042743'}}
            value={text}
            defaultValue={""}
            onChange={handleOnChange}
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpCase}>change to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoCase}>change to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleClearExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white' : '#042743'}}>
      <h1>Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters.</p>
      <p>{0.08 * text.split(" ").length} minutes</p>
      <h3>Preview</h3>
      <p>{text.length>0? text: "Enter Some Text Above In The Box To Preview Here"}</p>
    </div>
    </>
  );
}
