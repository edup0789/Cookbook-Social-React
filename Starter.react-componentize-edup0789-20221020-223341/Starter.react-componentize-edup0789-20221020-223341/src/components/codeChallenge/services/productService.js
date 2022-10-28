import axios from "axios";

const productService = {endpoint: "https://api.remotebootcamp.dev/api/entities/Products"}

const addProduct = (payload) => {

    const config = {
      method: "POST",
      url: productService.endpoint,
      data: payload,
    //   withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };


export { addProduct }
