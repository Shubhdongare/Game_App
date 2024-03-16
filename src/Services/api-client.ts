import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c56c8adbc2864cf0a62d8bab67b0892a'
    }
});