import {createContext,useState} from 'react';
import { FaLess } from 'react-icons/fa';
import {v4 as uuidv4} from "uuid";

const FeedbackContext =createContext();

export const FeedbackProvider =({children})=> {
    const [feedback,setFeedback] =useState([
        {
            
                id:1,
                rating:10,
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
            
        },
        {
            
            id:3,
            rating:4,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
        
    },
    {
            
        id:3,
        rating:9,
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
    
}
    ]);

    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
    });



    const deleteFeedBack =(id)=>{
        if(window.confirm('Are You Sure You Want to delete?')){
            setFeedback(feedback.filter((item)=>item.id!==id))
        }
    }

    const addFeedback =(newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback,...feedback]);
       
       }
       const editFeedback=(item) => {
        setFeedbackEdit({
         item:item,
         edit:true
        })
     }


       const updateFeedback=(id,updItem) => {
        setFeedback(
            feedback.map((item)=>(item.id===id ?
                {
                ...item,...updItem
            }:item))
        )
       }
       

    return(
       <FeedbackContext.Provider
       value={{feedback,deleteFeedBack,addFeedback,feedbackEdit,editFeedback ,updateFeedback
       }}>


             {children}

       </FeedbackContext.Provider>
    )
}
export default FeedbackContext;
