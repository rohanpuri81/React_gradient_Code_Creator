import React, { useEffect, useState } from 'react'
import randomColor from 'randomcolor'
import SyntaxHighlighter from "react-syntax-highlighter"
import { arduinoLight } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { CopyToClipboard } from "react-copy-to-clipboard"

export default function Gradient({gradient,setGradient}){
    const [color1,setColor1]=useState(randomColor())
    const [color2,setColor2]=useState(randomColor())
    const [btnBg,setBtnBg]= useState('')
    const [output, setOutput] = useState("");
    useEffect(()=>{
           setGradient(`linear-gradient(to right, ${color1},${color2})`)
           setBtnBg(`linear-gradient(to right, ${color2},${color1})`)
           setOutput(`linear-gradient(to right, ${color1},${color2})`)
    },[color1,color2])

    const handleChangeColor=(e)=>{
        const {name,value}= e.target
        if(name=='color1'){
            setColor1(value)
        }else{
            setColor2(value)
        }
    }
 
    const handleRandomClick=()=>{
        setColor1(randomColor())
        setColor2(randomColor())
    }

    return(
        <div className='gradient'>
            <h1>Create your own gradient!</h1>
            <div className="colorPicker">
                <input type="color" name='color1' value={color1} onChange={(e)=>{handleChangeColor(e)}}/>
                <input type="color" name='color2' value={color2} onChange={(e)=>{handleChangeColor(e)}}/>
            </div>
            <button 
            className='btnRandom'
            style={{background:btnBg}}
            onClick={handleRandomClick}
            >Generate Random gradient!</button>
            <div className="output">
            <SyntaxHighlighter language='css' style={arduinoLight}>
          {output} gtfsdv
        </SyntaxHighlighter>
        <CopyToClipboard text={`background: ${output}`}>
        <i class="fa-solid fa-copy"></i>
        </CopyToClipboard>
            </div>
        </div>
    );
}