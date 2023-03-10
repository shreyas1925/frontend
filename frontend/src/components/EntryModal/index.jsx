import React from 'react';
import './EntryModal.css';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EntryModal({onClose,show,fields}) {
    if (!show) {
        return null;
    }

    const [values, setValues] = React.useState([]);
   

    const { id } = useParams();
    const handleAddEntries = async () => {
        const res = await axios({
            method: 'POST',
            url: `http://localhost:5000/api/addContentEntries/${id}`,
            data: {
                newEntry: values
            },
        });

        console.log(res.data.fields);
    };


    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <span className="modal-title">New Company Profile</span>
                </div>
                <div className="modal-body">
                    {fields.map((key, id) => {
                        return (
                            <div key={id}>
                                <span>{key}</span>
                                <input
                                    key={id}
                                    value={values[key]}
                                    onChange={(event) => setValues({...values,[key]:event.target.value})}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="modal-footer">
                    <button onClick={onClose} className="modal-close-button">
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
    fields: PropTypes.array.isRequired,

};
