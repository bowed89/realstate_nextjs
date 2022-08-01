import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'ea4787d93cmsh16c60527417f43bp1a1b8djsne1fff93e8c3a',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data
}