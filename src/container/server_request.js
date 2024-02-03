import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HOST_URL = "http://mafia.altf1.ir:3434/";
const SERVER_URL = "http://localhost:5252/";

const server_request = {
    async get_request({ path }) {
        const headers = {}
        const token = localStorage.getItem("token")
        if (token) headers["token"] = token
        const { data } = await axios.get(SERVER_URL + path, { headers })
        return data;
    },
    async post_request({ path, payload }) {
        const headers = {}
        const token = localStorage.getItem("token")
        if (token) headers["token"] = token
        try {
            const { data } = await axios.post(SERVER_URL + path, payload, { headers })
            if (!data.msg) return data;
            if (data.status) {
                toast(data.msg, {
                    theme: "dark",
                    type: "success"
                })
            } else {
                toast(data.msg, {
                    theme: "dark",
                    type: "error"
                })
            }
            return data;
        } catch (error) {
            toast(error.response.data.msg, {
                theme: "dark",
                type: "error"
            })
        }
    },
    async heros_request({ path }) {
        const { data } = await axios.get(HOST_URL + path)
        return data;
    },
    async rank_request({ path, payload }) {
        const { data } = await axios.post(HOST_URL + path, payload)
        return data;
    }
}

export default server_request;