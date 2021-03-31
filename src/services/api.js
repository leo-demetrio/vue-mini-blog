import axios from 'axios';
const api = axios.create({
    baseURL:'https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/api',
    // withCredentials: false,
    //     headers: {
    //       'Access-Control-Allow-Origin' : '*',
    //       'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //     }
});
export default  api;