import React from 'react';
import './FieldModal.css';
import axios from 'axios';
import PropTypes from 'prop-types';

export default function FieldModal(props) {
    const [field, setField] = React.useState('');

    if (!props.show) {
        return null;
    }

    const handleChange = (e) => {
        setField(e.target.value);
    };

    const addField = async() => {
        const res = await axios({
            method:'POST',
            url:`http://localhost:5000/api/addFields/${props.contentId}`,
            data:{newfield:field}
        });

        console.log(res);
        window.location.reload();
    };


    return (
        <div className="modal-post" onClick={props.onClose}>
            <div className="modal-content-post" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header-post">
                    <span className="modal-title-post">Create a new content type</span>
                </div>
                <div className="modal-body-post">
                    <span>Name of the content type</span>
                    <input type="text" name="content" onChange={handleChange} value={field} />
                </div>
                <div className="modal-footer-post">
                    <button onClick={props.onClose} className="modal-close-button-post">
            Close
                    </button>
                    <button className="modal-create-button-post" onClick={addField}>
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
}

FieldModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    contentId: PropTypes.string,
};