import axios from "axios"

export const getSum = async (numOne, numTwo) => {
    let result = await axios.get(`/api/calculations/${numOne}/${numTwo}`);
    if (result.status === 200)
    {
        return result.data;
    }
}