import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
       // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = () => {
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to Lowercase","success");
     }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces has been removed","success");
    }
    const [text, setText] = useState('Enter text here');
  return (
   <>
   <div className='container'style={{color :props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode === 'dark'?'grey':'light',color :props.mode === 'dark'?'white':'light'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color :props.mode === 'dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters.</p>
        <p>{0.008*text.split(" ").length} Minutes read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to Preview"}</p>
    </div>
   </> 
  )
}
