import axios from "axios";

async function GetAllCards() {

    const apiURL = import.meta.env.VITE_API_URL;
    const serverURL = `${apiURL}/allcards`;

    try {
        const response = await axios.get(serverURL);
        return (response.data)
    } catch (error) {
        console.error(error.message);
    }
}

export default GetAllCards;
