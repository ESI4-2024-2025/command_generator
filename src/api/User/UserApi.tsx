import axios from 'axios'



/*                   GET                     */

export const getAllUsers = async () => {
    const url = process.env.REACT_APP_BASE_URL + 'users'
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.error(error);
    }
} // OK

export const getCurrentProfile = async (email: any) => {
    const url = process.env.REACT_APP_BASE_URL + 'users/current'
    try {
        const response = await axios.put(url, email);
        return response.data
    } catch (error) {
        console.error(error);
    }
} // OK

export const emailValidationUpdate = async (email: any) => {
    const url = process.env.REACT_APP_BASE_URL + 'users/email/validationupdate/'
    try {
        const response = await axios.get(url, email)
        return response.data
    } catch (error) {
        console.error(error);
    }
} //Email Not Tested in API


/*                   PUT                     */

export const updateProfile = async (data: any) => {
    const url = process.env.REACT_APP_BASE_URL + 'users/update'
    try {
        const response = await axios.put(url, data)
        return response.data
    } catch (error) {
        console.error(error);
    }
}// Need Token

export const passwordModify = async (data: any) => {
    const url = process.env.REACT_APP_BASE_URL + 'users/email/password-modify'
    try {
        const response = await axios.put(url, data)
        return response.data
    } catch (error) {
        console.error(error);
    }
} // OK

export const emailVerify = async (data: any) => {
    const url = process.env.REACT_APP_BASE_URL + 'users/email/verify'
    try {
        const response = await axios.put(url, data)
        return response.data
    } catch (error) {
        console.error(error);
    }
} // OK

export const addFavorite = async (data: any) => {
    const url = process.env.REACT_APP_BASE_URL + 'users/addFavorite'
    try {
        const response = await axios.put(url, data)
        return response.data
    } catch (error) {
        console.error(error);
    }
} // OK

/*                   POST                     */

export const register = async (data: any) => {
    const url = process.env.REACT_APP_BASE_URL + 'users/register'
    try {
        const response = await axios.post(url, data)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export const emailPasswordReset = async (data: any) => {
    const url = process.env.REACT_APP_BASE_URL + 'users/email/PasswordReset'
    try {
        const response = await axios.post(url, data)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

/*                   DELETE                     */

export const deleteFavorite = async (data: any) => {
    const url = process.env.REACT_APP_BASE_URL + 'users/deleteFavorite'
    try {
        const response = await axios.delete(url, data)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export const deleteUser = async (data: any) => {
    const url = process.env.REACT_APP_BASE_URL + 'users/deleteUser'
    try {
        const response = await axios.delete(url, data)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

/*                   TOKEN                     */

export const verifyToken = async () => {
    const url = process.env.REACT_APP_BASE_URL + 'verify-token'
    try {
        const response = await axios.put(url)
        return response.data
    } catch (error) {
        console.error(error);
    }
}