import React from "react";
import "./Dashboard.css";
import { Viewbar } from "../../components";
import icon from "../../assets/icon.png";
import axios from "axios";
import pencil from "../../assets/pencil.png";
import edit from "../../assets/edit.png";
import deleteIcon from "../../assets/delete.png";
import Modal from "../../components/Modal";

const Dashboard = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [contents, setContents] = React.useState([]);
  const [contentById, setContentById] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/getContents")
      .then((res) => {
        console.log(res);
        setContents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getContentInfo = (id) => {
    axios
      .get(`http://localhost:5000/api/contents/${id}`)
      .then((res) => {
        console.log(res);
        setContentById(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
   
  };

  console.log("sa",contentById);
// console.log(Object.keys(contents.fields).length);

console.log(contents);
  return (
    <div className="dashboard--container">
      <Viewbar contents={contents} />

      <div className="dashboard--content">
        <div className="dashboard--content--left">
          <div className="header">
            <h1>Content Types</h1>
          </div>

          <div className="dashboard--types">
            <h1>{contents.length} Types</h1>
            <img src={icon} alt="" />
          </div>

          <div
            className="content-type--button"
            onClick={() => setShowModal(true)}
          >
            + New Type
          </div>

          <Modal onClose={() => setShowModal(false)} show={showModal} />

          {contents.map((content) => {
            return (
              <div className="content-list" onClick={()=>getContentInfo(content.id)}>
                <h2>
                  {content.name}
                </h2>
                <p>{Object.keys(content.fields).length}</p>
              </div>
            );
          })}
        </div>

        <div className="dashboard--content--right">
          <div className="dashboard--header"></div>
          <div className="content--header">
            <div>
              <h1>Company profile</h1>
              <p>{`${Object.keys(contentById.fields).length} fields`}</p>
            </div>
            <img src={pencil} alt="" />
          </div>

          <div className="content-type--btn">Add Another field</div>

          {contentById.fields && Object.keys(contentById.fields).map((ele) => {
            return (
              <>
                <div className="string">
                  <p>Ab</p>
                </div>

                <div className="content--field">
                  {/* <div className="contents"> */}
                  <div>
                    <h2>{ele}</h2>
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
            );
           })} 
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
