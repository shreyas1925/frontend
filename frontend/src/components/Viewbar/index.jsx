import React from 'react'
import "./Viewbar.css"
import makeRequest from '../../utils/makeRequest'

import icon from '../../assets/icon.png'
// import ContentTypeContext from '../../context/ContentTypeContext'
const Viewbar = ({contents}) => {

  return (
    <div className='viewbar--container'>
      <div className='viewbar--header'>
        CMS+ 
      </div>
      <div className='viewbar--types'>
          <h1>Collection Types</h1>
          <img src={icon} alt="" />
      </div>
      <div className='viewbar--contents'>
        {
        contents.map((content)=>{
          return (
            <li>{content.name}</li>
          )
        })
        }
      </div>
      <div className='builder'>
        <h2> Content type builder</h2>
      </div>
    </div>
  )
}

export default Viewbar