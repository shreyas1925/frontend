import React from 'react';
import editIcon from '../../assets/edit.png';
import binIcon from '../../assets/delete.png';
import './DashboardDetails.css';
import axios from 'axios';

import { EntryModal, Viewbar } from '../../components';
import { useParams } from 'react-router-dom';

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

    const [fields, setFields] = React.useState({});
    const [showModal, setShowModal] = React.useState(false);
    const [result,setResult] = React.useState([]);

    const { id } = useParams();
    React.useEffect(() => {
        axios.get(`http://localhost:5000/api/contents/${id}`).then((res) => {
            console.log(res.data);
            setFields(res.data.fields);
            console.log('fields', res.data.fields);
        });
    }, []);

    React.useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:5000/api/getContentEntries/${id}`
        }).then((res) => {
            setResult(res.data[0][props.field]);
        });
    }, []);
      
    console.log('result', result);
    return (
        <div className="details">
            <Viewbar contents={contents} />
            <div className="content-entry-container">
                <div className="header">
                    <h1>Content Types</h1>
                </div>
                <div className="content-entrie-title">
                    <span className="entrie-count">13 Entries Found</span>
                    <div onClick={() => setShowModal(true)} className="new-entry-div">
                        <span className="new-entry-text">Add a new entry</span>
                    </div>
                    <EntryModal
                        onClose={() => setShowModal(false)}
                        show={showModal}
                        value={fields}
                    />
                </div>
                <div className="table-content-title">
                    <div className="content-entries-fields">
                        {Object.keys(fields).map((key, id) => {
                            return (
                                <div key={id}>
                                    <span>{key}</span>
                                </div>
                            );
                        })}
                    </div>
                    <span>Actions</span>
                </div>
                <div className="content-entries">

                    <div className="content-fields-container">
                        <div
                            className="content-entries-fields"
                            style={{ marginLeft: '10px' }}
                        >
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className="icon" src={editIcon} alt="" />
                            <img className="icon" src={binIcon} alt="" />
                        </div>
                    </div>

                    {/*                     
                    <div className="content-fields-container">
                        <div
                            className="content-entries-fields"
                            style={{ marginLeft: '10px' }}
                        >
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className="icon" src={editIcon} alt="" />
                            <img className="icon" src={binIcon} alt="" />
                        </div>
                    </div> */}
                    {/* <div className="content-fields-container">
                        <div
                            className="content-entries-fields"
                            style={{ marginLeft: '10px' }}
                        >
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className="icon" src={editIcon} alt="" />
                            <img className="icon" src={binIcon} alt="" />
                        </div>
                    </div> */}
                    {/* <div className="content-fields-container">
                        <div
                            className="content-entries-fields"
                            style={{ marginLeft: '10px' }}
                        >
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className="icon" src={editIcon} alt="" />
                            <img className="icon" src={binIcon} alt="" />
                        </div>
                    </div> */}
                    {/* <div className="content-fields-container">
                        <div
                            className="content-entries-fields"
                            style={{ marginLeft: '10px' }}
                        >
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className="icon" src={editIcon} alt="" />
                            <img className="icon" src={binIcon} alt="" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
