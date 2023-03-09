import React from 'react'
import { RegisterPage,LoginPage,Dashboard } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContentTypeContext from './context/ContentTypeContext'
import axios from 'axios';
const App = () => {

  // const [ContentType, setContentType] = React.useState([]);
  //   React.useEffect(() => {
  //       // makeRequest(GET_ALL_CONTENTS).then((response) => ()=>{
  //       //     console.log('sd',response.data);
  //       //     setContentType(response.data);
  //       // });
  //       // console.log('ContentType', ContentType);
  //       const getContents = async()=>{
  //           const response = await axios('http://localhost:5000/api/getContents');
  //           setContentType(response.data);
  //       };
  //       getContents();
  //   },[]);
  //   const value = { ContentType, setContentType };

  return (
    <>
    <BrowserRouter>
      {/* <ContentTypeContext.Provider > */}
      <Routes>
        <Route path="/" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      {/* </ContentTypeContext.Provider> */}
    
    </BrowserRouter>
     

    </>
  )
}

export default App