import React from 'react';
import './ProgramItem.css';
const ProgramItem =({program,onProgramSelect})=>{

  return(
      
         <div className="program-item" onClick={()=> onProgramSelect(program)} >
            <img  src={program.images.background.url} alt={program.title} ></img>
           
           <h3 style={{width:'170px',fontSize:'10px'}}>{program.title}</h3>
           <span >{program.genres}</span> 
          
      </div>
  )
};
export default ProgramItem;