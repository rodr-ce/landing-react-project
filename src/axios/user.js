import axios from "axios";
import { BASE_URL } from "../utils/constatns";

export const createUser = async (username, email, password) => {
    try {
        await axios.post(`${BASE_URL}/auth/register`, {
            username,
            email,
            password
        })
        const user = await loginUser(email, password)
        return user
    } catch (error) {
        console.log(error)
    }

}

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, {
            email,
            password
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const verifyUser = async() => {
    try {
        const response = await axios.patch(`${BASE_URL}/auth/verify`, {
            email,
            code
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}