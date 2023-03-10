import React from 'react';
import './EntryModal.css';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EntryModal(props) {
    if (!props.show) {
        return null;
    }

    const [values, setValues] = React.useState([]);
   

    const { id } = useParams();
    const handleAddEntries = async () => {
        const res = await axios({
            method: 'POST',
            url: `http://localhost:5000/api/addContentEntries/${id}`,
            data: {
                newEntry: [...values]
            },
        });

        console.log(res);
    };

    const handleChange = (event, index) => {
        const newValues = [...values];
        newValues[index] = event.target.value;
        setValues(newValues);
    };


    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <span className="modal-title">New Company Profile</span>
                </div>
                <div className="modal-body">
                    {Object.keys(props.value).map((key, id) => {
                        return (
                            <div key={id}>
                                <span>{key}</span>
                                <input
                                    key={id}
                                    value={values[id] || ''}
                                    onChange={(event) => handleChange(event, id)}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="modal-close-button">
            Close
                    </button>
                    <button className="modal-Add-button" onClick={handleAddEntries}>
            Add
                    </button>
                </div>
            </div>
        </div>
    );
}

EntryModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    value: PropTypes.object.isRequired,
    field: PropTypes.string.isRequired,
};
