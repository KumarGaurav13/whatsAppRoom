import React from 'react';

function MyInfo(){
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    color: "#FF8C00",
    backgroundColor: "#FF2D00",
    fontSize: "50px"
  }

  if(hours < 12)
    timeOfDay = "Good Morning";
  else if(hours > 12 && hours < 17)
    timeOfDay = "Good Eve";
  else
    timeOfDay = "Good Night";
    

  return(
      <h1 style = {styles}> {timeOfDay}</h1>

          
  )
  }

  export default MyInfo;