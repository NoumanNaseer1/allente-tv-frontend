import React from 'react';
import './ProgramDetail.css';
const ProgramDetail = ({programs}) => {
    if(!programs){
        return(
            <div></div>
        )
    }
    
    return (
        <div className="program-detail" >

            <img src={programs.images.background.url} alt={programs.title} style={{width:'500px'}}></img>
            <br></br> 
            <div className="program-description">
             <h2></h2> 
           <h3 >Description  <br>
           </br>{programs.description.long} </h3>
           
          </div>

        </div>
    );
};

export default ProgramDetail;