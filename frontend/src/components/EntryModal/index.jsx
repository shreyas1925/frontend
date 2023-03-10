import React from 'react';
import './EntryModal.css';
import PropTypes from 'prop-types';
export default function EntryModal(props) {
    if (!props.show) {
        return null;
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-contents" onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <span className='modal-title'>New Company Profile</span>
                </div>
                <div className='modal-body'>
                    <div>
                        <span>Name</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span>website</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span>contact</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span>Input</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span>Input</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span>Input</span>
                        <input type="text" />
                    </div>
                </div>
                <div className='modal-footer'>
                    <button onClick={props.onClose} className='modal-close-button'>Close</button>
                    <button className='modal-Add-button'>Add</button>
                </div>
            </div>
        </div>
    );
}

EntryModal.propTypes = {
    onClose: PropTypes.func,
    show: PropTypes.bool,
};