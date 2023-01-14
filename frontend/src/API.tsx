import axios from "axios";

//interface for the Helper
interface Params {
  baseUrl: string;
  headers: any;
  method: string;
}
//helper config
const config: Params = {
  baseUrl: "https://localhost:5001/WeatherForecast/Get",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  method: "post",
};
const postConfig: Params = {
  baseUrl: "",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  method: "post",
};
//config for get request note that the method as changed to get this is very important
const getConfig: Params = {
  baseUrl: "https://localhost:5001/WeatherForecast/Get",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  method: "get",
};
//helper function to be exported
export const postAPI = async (url: string, data: any): Promise<any> => {
  return await axios({
    ...postConfig,
    url: `${postConfig.baseUrl}/${url}`,
    data,
  })
    .then((response) => {
      console.log(response);
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};
export const getAPI = async (url: string, data: any): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}`,
    // url: `${getConfig.baseUrl}/${url}/${data}`,
  })
    .then((response) => {
      console.log(response);
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};
