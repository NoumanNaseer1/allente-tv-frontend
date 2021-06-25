import React,{useState,useEffect} from 'react';
import ProgramList from './ProgramList';
import ProgramDetail from './ProgramDetail';
import './App.css';

const FEATURED_API='https://stoplight.io/mocks/sci-code/diggit:master/12726515/recommendations';
const  App=()=>{
  const [program,setprogram]=useState([]);
  const [selectedprogram,setselectedprogram]=useState(null);
  
  useEffect(()=>{
    fetch(FEATURED_API)
    .then((res) => res.json())
    .then((data) => {
      setprogram(data);
    });
  },[]);
  
   const onProgramSelect =(program)=>{
    setselectedprogram(program); 
  }
  return (
  <div >
   
  
    
      <div className="program-detail">
      <ProgramDetail programs={selectedprogram}></ProgramDetail>
        </div>    
   
   <div className="program-list">
   
   <ProgramList onProgramSelect={onProgramSelect} programs={program}></ProgramList>
   </div>
   
    
    
     
    
  </div>
   
  );
}

export default App;
