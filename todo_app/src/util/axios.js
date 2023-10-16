import axios from "axios";

const serviceConfig = {
    baseURL:"https://651e198b44e393af2d5a8283.mockapi.io",
    useTokenAuthorization: false
}

const serviceAxios = axios.create({
    baseURL: serviceConfig.baseURL,
    timeout: 10*1000,
    withCredentials: false,
});

serviceAxios.interceptors.request.use(
    (config) => {
        if (serviceConfig.useTokenAuthorization) {
            config.headers["Authorization"] = localStorage.getItem("token");
        }
        console.log("request-method:", config.method);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

serviceAxios.interceptors.response.use(
    (res) => {

        console.log("response-status",res);
        return [res.status, res.data]
    },
    (error) => {
        if (error && error.response) {
            
            return [error.response.status, error.response.data]
        }
    }
);

export default serviceAxios;