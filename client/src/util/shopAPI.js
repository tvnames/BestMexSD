import axios from "axios";

// Export an object with a "search" method that searches the Giphy API for
// the passed query

export const shopAPI = async () => {
    // const BASEURL = "https://www.google.com";
    console.log("Get All Shops Request Sent")
    const res = await axios.get("/api/tacoShops")

    return res.data.items.map(({ volumeInfo }) => {
        return {
            title: volumeInfo.title,
            authors: volumeInfo.authors,
            description: volumeInfo.description,
            image: volumeInfo.imageLinks?.thumbnail,
            link: volumeInfo.infoLink
        };
    });
};