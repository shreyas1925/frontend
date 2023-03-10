import React from 'react';
import './Viewbar.css';
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/icon.png';
// import ContentTypeContext from '../../context/ContentTypeContext'
import PropTypes from 'prop-types';
export default function Viewbar ({contents}) {
    const navigate = useNavigate();
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
                    contents.map((content,id)=>{
                        return (
                            <li key={id} onClick={()=>navigate(`/dashboard/${content.id}`)}>{content.name}</li>
                        );
                    })
                }
            </div>
            <div className='builder'>
                <h2> Content type builder</h2>
            </div>
        </div>
    );
}

Viewbar.propTypes = {
    contents: PropTypes.array
};

