import axios from 'axios'

export const getRequest = async () => {
    const url = process.env.REACT_APP_BASE_URL + 'getRequest'
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export const postRequest = async (data: any) => {
    const url = process.env.REACT_APP_BASE_URL + 'ARequest'
    try {
        const response = await axios.post(url, data)
        return response.data
    } catch (error) {
        console.error(error);
    }
}


//All Good