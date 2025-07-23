import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c565bab2d59841ddb098f580d162fa25'
    }
})