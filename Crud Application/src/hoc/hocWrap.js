import React from 'react'

export const hocWrap = (Component,bgColor='yellowgreen')=>{

    const styles = {backgroundColor : bgColor}


  return (props)=>{
    return (
      <div style = {styles}>
        <Component {...props}/>
      </div>
    ) 

  
  }
}