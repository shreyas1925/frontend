import React from 'react';
import './Modal.css';
import axios from 'axios';
import PropTypes from 'prop-types';

export default function Modal(props) {
    const [name, setName] = React.useState('');

    if (!props.show) {
        return null;
    }

    const handleChange = (e) => {
        setName(e.target.value);
    };

    // const addField = async() => {
    //     const res = await axios({
    //         method:'POST',
    //         url:`http://localhost:5000/api/addFields/${props.contentId}`,
    //         data:{newfield:name}
    //     });

    //     console.log(res);
    //     // window.location.reload();
    // };
  
    const handleSubmit = async() => {
        if(props.contentId){
            const res = await axios({
                method:'PATCH',
                url:`http://localhost:5000/api/updateContent/${props.contentId}`,
                data:{newContent:name}
            });
            console.log(res);
            window.location.reload();
        }else{
            const res = await axios({
                method:'POST',
                url:'http://localhost:5000/api/addContent',
                data:{content:name}
            });
            console.log(res);
            window.location.reload();
        }
    };
   

    return (
        <div className="modal-post" onClick={props.onClose}>
            <div className="modal-content-post" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header-post">
                    <span className="modal-title-post">Create a new content type</span>
                </div>
                <div className="modal-body-post">
                    <span>Name of the content type</span>
                    <input type="text" name="content" onChange={handleChange} value={name} />
                </div>
                <div className="modal-footer-post">
                    <button onClick={props.onClose} className="modal-close-button-post">
            Close
                    </button>
                    <button className="modal-create-button-post" onClick={()=>{handleSubmit();}}>
                        {props.contentId ? 'Update' : 'Create'}
                    </button>
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    contentId: PropTypes.string,
};