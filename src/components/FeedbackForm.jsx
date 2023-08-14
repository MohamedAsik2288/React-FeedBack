import Card from "../Shared/Card"
import { useState } from "react"
import Button from "../Shared/Button";
import RatingSelect from "./RatingSelect";
import {useContext,useEffect} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {

    const {addFeedback,feedbackEdit,updateFeedback} =useContext(FeedbackContext);

useEffect(()=> {
setBtnDisabled(false)
setText(feedbackEdit.item.text)
setRating(feedbackEdit.item.rating)

},[feedbackEdit])


    const [text,setText] =useState('');
    const [rating,setRating] =useState(10);
 const [btnDisabled,setBtnDisabled] =useState(true);

 const [message,setMessage] =useState('');

 const handleSubmit =(e) =>{
    e.preventDefault();
    if(text !==undefined &&  text.trim().length >10){
        const newFeedback = {
            text,
            rating
        }

        if(feedbackEdit.edit===true){
           
          updateFeedback(feedbackEdit.item.id,newFeedback);
        }else{
            addFeedback(newFeedback);

        }
                  setText('');

                  feedbackEdit.edit=false;
                  
    }
}


    const handleTextChange =(e)=>{

        if(text === ''){
            setBtnDisabled(true)
            setMessage(null);

        }else if(text !== '' && text !==undefined && text.trim().length <=10){
             setMessage('Text must be atleast 10 characters! ');
            setBtnDisabled(true);
        }else{
            setMessage(null);
            setBtnDisabled(false);
        }
                
        setText(e.target.value);
    }




  return (
   <Card>
    <form onSubmit={handleSubmit}>
      <h2> How would you rate our service with us ? </h2> 
      <RatingSelect select ={(rating)=>setRating(rating)}/>

<div className="input-group">

<input onChange={handleTextChange}
        type='text'
            placeholder="Please share your review"
            value={text}
/>
<Button type="submit" isDisabled={btnDisabled}>Send</Button>
</div>
{message && (<div className="message">{message}</div>)}
    </form>
   </Card>
  )
}

export default FeedbackForm;
