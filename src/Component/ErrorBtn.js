
import React from 'react'
import removeDuplicates from './removeduplicate';
import mergeDuplicateData from './MergeDuplicate';

 const ErrorBtn = (props)=> {

  const handleKeep = ()=>{
    
    
    
    let trans = props.data.trim().split("\n");
    
    props.setData(removeDuplicates(trans));
    props.setValidationError("");
    props.setToggle(false);
    
  }

  const handleMerge = ()=>{
    let trans = props.data.trim().split("\n");
    console.log(trans);
    props.setData(mergeDuplicateData(trans));
    props.setValidationError("");
    props.setToggle(false);

  }
  return (
    <div style={{color:'crimson', textAlign:"center"}} >
    <span id='KeepFirst' onClick={handleKeep} >Keep the First One</span> |
    <span id='MergeBal' onClick={handleMerge}>Combine Balance</span>
    </div>
  )
}

export default ErrorBtn;