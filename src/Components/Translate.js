//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React ,{useState}from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";


const options = [
    {
      label: 'Afrikaans',
      value: 'af',
    },
    {
      label: 'Arabic',
      value: 'ar',
    },
    {
      label: 'hindi',
      value: 'hi',
    },
    {
      label:'Telugu',
      value:'te',
    },
    {
      label:'English',
      value:'en'
    }
  ];
  

const Translate = ()=>{
  const[language,setLanguage]= useState(options[0]);
  const[text,setText] = useState('');
  return (
    <div>
    <div className="ui form">
    <div className="field">
    <label>Enter the Text</label>
    <input value={text} onChange={(e) => setText(e.target.value)}/>
    </div>  
    </div>
      <Dropdown 
      label="select a Language"
      selected={language} 
      onSelectedChange={setLanguage} 
      options={options} />

      <hr />
      <h3 className="ui header">OutPut</h3>
      <Convert text={text} language={language}/>
      </div>
  );
}


export default Translate;