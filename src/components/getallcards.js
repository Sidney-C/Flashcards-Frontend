import axios from "axios";

async function GetAllCards() {

    const apiURL = process.env.REACT_APP_API_URL;
    const serverURL = `${apiURL}/allcards`;

    try {
        const response = await axios.get(serverURL);
        return (response.data)
    } catch (error) {
        console.error(error.message);
    }
}

export default GetAllCards;