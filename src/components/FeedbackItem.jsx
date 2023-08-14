
import { useState } from 'react';
import Card from '../Shared/Card';
import {FaTimes,FaEdit} from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa';
import { useContext } from "react";

import FeedbackContext from "../context/FeedbackContext";


function FeedbackItem({item}) {

const {deleteFeedBack,editFeedback}=useContext(FeedbackContext);


const [likeCount,setLikeCount]=useState(0)
const [unlikeCount,setUnLikeCount]=useState(0)
const handleLike =() =>{
  setLikeCount(likeCount+1);
}
const handleUnlike =() => {
  setUnLikeCount(unlikeCount+1);
}

    return(
    
   <Card>   

        <div className="num-display">{item.rating}</div>

        <button 
        onClick={()=> deleteFeedBack(item.id)}
        className='close'>
<FaTimes color='purple'/>
        </button>

        <button className='edit'onClick={()=>editFeedback(item)}>
          <FaEdit color='purple'/>

        </button>


        <div className='text-displaay'>{item.text}</div>

        <button style={{border:'none'}} onClick={handleLike}>
        <FaHeart style={{color:"red"}} />
        ({likeCount})
      </button>

      <button style={{border:'none'}} onClick={handleUnlike}>
        <FaHeart color="black" />
        ({unlikeCount})
      </button>

        </Card>
      
    

    )
}
export default FeedbackItem;
