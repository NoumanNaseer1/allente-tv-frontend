import React from 'react';
import ProgramItem from './ProgramItem';
const ProgramList=({programs,onProgramSelect})=>{
  const renderedList=  programs.map((program)=>{
        return (
            <ProgramItem onProgramSelect={onProgramSelect} program={program}></ProgramItem>
        )
    });
    return(
        <div >
         

           {renderedList}
           </div> 
       
           
           
           
        
      
    
        
    )
}
export default ProgramList;