import React from "react";
import "./Modal.css";
import axios from "axios";

export default function Modal(props) {
  const [content, setContent] = React.useState("");
  const [result,setResult] = React.useState({})

  if (!props.show) {
    return null;
  }

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async() => {
    setResult({...result,content})
    const res = await axios.post("http://localhost:5000/api/addContent",result)
    // console.log(res);
    setContent(res.data)
  };

  console.log(typeof content);
  console.log(content);

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">Create a new content type</span>
        </div>
        <div className="modal-body">
          <span>Name of the content type</span>
          <input type="text" name="content" onChange={handleChange} value={content} />
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="modal-close-button">
            Close
          </button>
          <button className="modal-create-button" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
