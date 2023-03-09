import React from "react";
import "./Dashboard.css";
import { Viewbar } from "../../components";
import icon from "../../assets/icon.png";
import axios from 'axios'
import pencil from '../../assets/pencil.png'
import edit from '../../assets/edit.png'
import deleteIcon from '../../assets/delete.png'
import Modal from "../../components/Modal";

const Dashboard = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [contents,setContents] = React.useState([])
  React.useEffect(() => {
    axios.get('http://localhost:5000/api/getContents').then(res => {
      console.log(res);
      setContents(res.data)
    }).catch(err => {
      console.log(err);
    })
    },[])

  return (
    <div className="dashboard--container">
      <Viewbar contents={contents}/>
      
      <div className="dashboard--content">
        
        <div className="dashboard--content--left">
        <div className="header">
            <h1>Content Types</h1>
        </div>
             
        <div className='dashboard--types'>
          <h1>7 Types</h1>
          <img src={icon} alt="" />
        </div>

          <div className="content-type--button" onClick={() => setShowModal(true)}>
            + New Type
          </div>

          <Modal onClose={() => setShowModal(false)} show={showModal} />
          
            {
              contents.map((content)=>{
                return (
                  <div className="content-list">
                    <h2>{content.name}</h2>
                    <p>13</p>
                  </div>
                )
              })
            }
            
        </div>

        <div className="dashboard--content--right">
        <div className='dashboard--header'>
            
        </div>
        <div className="content--header">
         <div>
         <h1>Company profile</h1>
         <p>13 Fields</p>
          </div> 
          <img src={pencil} alt="" />
        </div>
        
        <div className="content-type--btn">
            Add Another field
        </div>

        {
          contents.map((content)=>{
            return (
              <>
                <div className="string">
                  <p>Ab</p> 
                </div>
           
              <div className="content--field">
                {/* <div className="contents"> */}
                  <div>
                    <h2>name</h2>
                  </div>
                  <div>
                    <h3>String</h3>
                  </div>
                
                  <div className="images">
                    <img src={edit} alt="" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
              {/* </div> */}
              </>
            )
          })
        }

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
