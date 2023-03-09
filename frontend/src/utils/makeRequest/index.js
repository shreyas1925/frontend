import axios from "axios";

const makeRequest = async (
  apiEndPoint,
  dynamicConfig,
  token,
) => {
  try{
    const requestDetails = {
      baseURL: "http://localhost:5000",
      url: apiEndPoint.url,
      method: apiEndPoint.method,
    //   headers: {
    //     authorization: `Bearer ${token}`,
    //   },
      ...dynamicConfig,
    };

    console.log("aaaa")
    const {data}  = await axios(requestDetails);
    console.log("bbbb",data)
    return data;
  }
  catch(e){
   console.log(e.message)
  }
};

export default makeRequest;