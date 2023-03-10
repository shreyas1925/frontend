import React from 'react';
import editIcon from '../../assets/edit.png';
import binIcon from '../../assets/delete.png';
import './DashboardDetails.css';
import axios from 'axios';

import { EntryModal, Viewbar } from '../../components';

export default function DashboardDetails() {
    const [contents, setContents] = React.useState([]);

    React.useEffect(() => {
        axios
            .get('http://localhost:5000/api/getContents')
            .then((res) => {
                console.log(res);
                setContents(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className='details'>
            <Viewbar contents={contents} />
            <div className='content-entry-container'>
                <div className='content-entrie-title'>
                    <span className='entrie-count'>13 Entries Found</span>
                    <div onClick={() => setShowModal(true)} className='new-entry-div'>
                        <span className='new-entry-text'>Add a new entry</span>
                    </div>
                    <EntryModal onClose={() => setShowModal(false)} show={showModal} />
                </div>
                <div className='table-content-title'>
                    <div className='content-entries-fields'>
                        <span>Id</span>
                        <span>Name</span>
                        <span>Website</span>
                        <span>Contact</span>
                    </div>
                    <span>Actions</span>
                </div>
                <div className='content-entries'>
                    <div className='content-fields-container'>
                        <div className='content-entries-fields' style={{ marginLeft: '10px' }}>
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className='icon' src={editIcon} alt="" />
                            <img className='icon' src={binIcon} alt="" />
                        </div>
                    </div>
                    <div className='content-fields-container'>
                        <div className='content-entries-fields' style={{ marginLeft: '10px' }}>
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className='icon' src={editIcon} alt="" />
                            <img className='icon' src={binIcon} alt="" />
                        </div>
                    </div>
                    <div className='content-fields-container'>
                        <div className='content-entries-fields' style={{ marginLeft: '10px' }}>
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className='icon' src={editIcon} alt="" />
                            <img className='icon' src={binIcon} alt="" />
                        </div>
                    </div>
                    <div className='content-fields-container'>
                        <div className='content-entries-fields' style={{ marginLeft: '10px' }}>
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className='icon' src={editIcon} alt="" />
                            <img className='icon' src={binIcon} alt="" />
                        </div>
                    </div>
                    <div className='content-fields-container'>
                        <div className='content-entries-fields' style={{ marginLeft: '10px' }}>
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className='icon' src={editIcon} alt="" />
                            <img className='icon' src={binIcon} alt="" />
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
        
    );
}