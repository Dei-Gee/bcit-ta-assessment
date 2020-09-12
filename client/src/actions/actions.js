import axios from "axios"

export const getSum = async (numOne, numTwo) => {
    let result = await axios.get(`/calculations/${numOne}/${numTwo}`);
    if (result.status === 200)
    {
        return result.data;
    }
}