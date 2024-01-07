import axios from "axios";

axios.defaults.baseURL = 'https://3cf5-79-155-45-199.eu.ngrok.io';

export function submitForm(data) {
    return axios({
        url: '/',
        method: 'POST',
        data
    })
}