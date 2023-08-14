import Header from "./components/Header";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";

import FeedbackStates from "./components/FeedbackStates";
import FeedbackForm from "./components/FeedbackForm";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AboutPage from './components/pages/AboutPage';
import AboutLinkIcon from "./components/AboutLinkIcon";

import { FeedbackProvider } from "./context/FeedbackContext";


function App(){
    





return (
<FeedbackProvider>
    <Router>  
<Header/>
<div className="container">
<Routes> 
<Route path="/" element={
    <> 
    <FeedbackForm />

<FeedbackStates
    
/>
<FeedbackList/>
<AboutLinkIcon/>

</> 

}> 

</Route>

<Route path="/about" element={<AboutPage/>}/>

</Routes>

</div>


</Router>
</FeedbackProvider>

)




}
export default App;



