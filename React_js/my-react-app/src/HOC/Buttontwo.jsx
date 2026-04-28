import React from 'react'

function Buttontwo(Mycomponent) {
    function Anjali(){
      
  return (
    <div style={{border:"2px solid blue", padding:"10px"}}>
      <p>This message is added by HOC</p>
      <Mycomponent/>
    </div>

  );
}
return Anjali;
}

export default Buttontwo