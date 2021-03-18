import React ,{useEffect, useState } from 'react';
import axios from 'axios';


const Convert = ({language,text})=>{
    const [translated,setTranslated] = useState('');
     const [debouncedText,SetDebouncedText] = useState(text);
    useEffect(()=>
    {
        const TimerId = setTimeout(()=>{
         SetDebouncedText(text);
        },1000); 
        return () =>{
            clearTimeout(TimerId);
        }
          
    },[text]); 

    useEffect(()=>{
        const doTranslated = async()=>{
        const {data} =await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params:{
                        q:text,
                        target:language.value,
                        key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
      
                         }
            });
            setTranslated(data.data.translations[0].translatedText);     
           };
     doTranslated();
    },[language,debouncedText]);
    return (
        <div>
        <h3 className="ui header">{translated}</h3>
        </div>
    );
}

export default Convert;