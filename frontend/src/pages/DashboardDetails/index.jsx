import React from 'react';
import editIcon from '../../assets/edit.png';
import binIcon from '../../assets/delete.png';
import './DashboardDetails.css';
import axios from 'axios';

import { EntryModal, Viewbar } from '../../components';
import { useParams } from 'react-router-dom';

export default function DashboardDetails() {
    const [fields, setFields] = React.useState({});
    const [showModal, setShowModal] = React.useState(false);
    const [content, setContent] = React.useState();
    const [contentEntries, setContentType] = React.useState();
    const { id } = useParams();
    const [contents,setContents] = React.useState([]);
    React.useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:5000/api/contents/${id}`,
        })
            .then((res) => {
                setFields(Object.keys(res.data.fields));
                setContent(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/getContents/',
        }).then((res) => {
            console.log(res);
            setContents(res.data);
           
        });

        axios({
            method: 'GET',
            url: `http://localhost:5000/api/getContentEntries/${id}`,
        })
            .then((res) => {
                setContentType(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [contents]);

    const handleDelete = async (entryId) => {
        axios({
            method: 'DELETE',
            url: `http://localhost:5000/api/deleteEntries/${entryId}`,
        })
            .then((res) => {
                console.log(res);
                setContents(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }; 

    return content && contentEntries && contents ? (
        <div className="details">
            <Viewbar contents={contents} />
            <div>
                
                <div className="content-entry-container">
                    <div className="header">
                        <h1>Content Types</h1>
                    </div>
                    <div className="content-entrie-title">
                        <span className="entrie-count">{`${
                            Object.keys(content.fields).length
                        } Entries Found`}</span>
                        <div onClick={() => setShowModal(true)} className="new-entry-div">
                            <span className="new-entry-text">Add a new entry</span>
                        </div>
                        <EntryModal
                            onClose={() => setShowModal(false)}
                            show={showModal}
                            fields={fields}
                        />
                    </div>
                    <div className="table-content-title">
                        <div className="content-entries-fields">
                            {fields.map((key, id) => {
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
                        {Object.keys(contentEntries).map((key, id) => {
                            return (
                                <div key={id} className="content-fields-container">
                                    <div
                                        className="content-entries-fields"
                                        style={{ marginLeft: '15px',paddingLeft:'15px' }}
                                    >
                                        {/* <span>{contentEntries[key].id}</span> */}
                                        <span>{contentEntries[key].fields[fields[0]]}</span>
                                        <span>{contentEntries[key].fields[fields[1]]}</span>
                                        <span>{contentEntries[key].fields[fields[2]]}</span>
                                        <span>{contentEntries[key].fields[fields[3]]}</span>
                                    </div>
                                    <div className="content-entries-actions">
                                        <img src={editIcon} alt="edit" />
                                        <img
                                            src={binIcon}
                                            alt="delete"
                                            onClick={() => handleDelete(contentEntries[key].id)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div>
            <h1>loading</h1>
        </div>
    );
}
