import axios from "axios";

// Export an object with a "search" method that searches the Giphy API for
// the passed query

export const shopAPI = async () => {
    console.log("Get All Shops Request Sent")
    const res = await axios.get("/api/tacoShops")
    return res.data
};

export const singleShopAPI = async (shopID) => {
    console.log("Get Single Shop Request Sent")
    const res = await axios.get(`/api/tacoShops/${shopID}`)
    return (res.data)

    // return res.data.map(() => {
    //     return {
    //         shopName: res.data.shopName,
    //         authors: volumeInfo.authors,
    //         description: volumeInfo.description,
    //         image: volumeInfo.imageLinks?.thumbnail,
    //         link: volumeInfo.infoLink
    //     };
    // });
};

export const postShopAPI = async () => {
    console.log("Post Single Shop Request Sent")
    await axios.post("/api/tacoShops", {
        shopName: "Hello Steve"
    })

};

