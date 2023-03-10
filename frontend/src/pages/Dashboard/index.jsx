import React from 'react';
import './Dashboard.css';
import { Viewbar, FieldModal } from '../../components';
import icon from '../../assets/icon.png';
import axios from 'axios';
import pencil from '../../assets/pencil.png';
import edit from '../../assets/edit.png';
import deleteIcon from '../../assets/delete.png';
import Modal from '../../components/Modal';

const Dashboard = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [showModal1, setShowModal1] = React.useState(false);
    const [contents, setContents] = React.useState([]);
    const [contentById, setContentById] = React.useState([]);
    const [contentName, setContentName] = React.useState('');

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

    const getContentInfo = (id) => {
        axios
            .get(`http://localhost:5000/api/contents/${id}`)
            .then((res) => {
                console.log(res);
                setContentById(res.data);
                setContentName(res.data.name);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelete = async (ele, id) => {
        console.log(ele, id);
        const res = await axios({
            method: 'DELETE',
            url: `http://localhost:5000/api/deleteContentField/${id}`,
            data: { fieldKey: ele },
        });
        console.log(res);
        window.location.reload();
    };

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

                    {contents &&
            contents.map((content, id) => {
                return (
                    <div
                        key={id}
                        className="content-list"
                        onClick={() => getContentInfo(content.id)}
                    >
                        <h2>{content.name}</h2>
                        <p>{Object.keys(content.fields).length}</p>
                    </div>
                );
            })}
                </div>
                {contentById && (
                    <div className="dashboard--content--right">
                        <div className="dashboard--header"></div>
                        <div className="content--header">
                            <div>
                                <h1>{contentName ? contentName : 'Company_Profile'}</h1>
                                <p>
                                    {contentById.fields &&
                    `${Object.keys(contentById.fields).length} fields`}
                                </p>
                            </div>
                            <img src={pencil} alt="" onClick={() => setShowModal(true)} />
                        </div>
                        <Modal
                            onClose={() => setShowModal(false)}
                            show={showModal}
                            contentId={contentById.id}
                        />
                        <div
                            className="content-type--btn"
                            onClick={() => setShowModal1(true)}
                        >
              Add Another field
                        </div>
                        <FieldModal
                            onClose={() => setShowModal1(false)}
                            show={showModal1}
                            contentId={contentById.id}
                        />

                        {contentById.fields &&
              Object.keys(contentById.fields).map((ele) => {
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
                                  <img
                                      src={edit}
                                      alt=""
                                      onClick={() => setShowModal(true)}
                                  />
                                  <Modal
                                      onClose={() => setShowModal(false)}
                                      show={showModal}
                                      contentId={contentById.id}
                                      oldKey={ele}
                                  />
                                  <img
                                      src={deleteIcon}
                                      alt=""
                                      onClick={() => handleDelete(ele, contentById.id)}
                                  />
                              </div>
                          </div>
                          {/* </div> */}
                      </>
                  );
              })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
