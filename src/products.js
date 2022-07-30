import cam_01 from "./images/cam_01.jpg"
import cam_02 from "./images/cam_02.jpg"
import cam_03 from "./images/cam_03.jpg"
import cam_04 from "./images/cam_04.jpg"

const products = [
    {
        id: "1",
        name: "Camiseta San Lorenzo titular",
        price: "12000",
        category: "San Lorenzo",
        img: cam_01,
        stock: "15",
        description: "Camiseta titular del club San Lorenzo temporada 2020/21",
    },
    {
        id: "2",
        name: "Camiseta San Lorenzo suplente",
        price: "12000",
        category: "San Lorenzo",
        img: cam_02,
        stock: "20",
        description: "Camiseta suplente del club San Lorenzo temporada 2020/21",
    },
    {
        id: "3",
        name: "Camiseta Selección Argentina titular",
        price: "15000",
        category: "Argentina",
        img: cam_03,
        stock: "30",
        description: "Camiseta titular de la selección Argentina",
    },
    {
        id: "4",
        name: "Camiseta Selección Argentina suplente",
        price: "15000",
        category: "Argentina",
        img: cam_04,
        stock: "50",
        description: "",
    },
    // {
    //     id: "5",
    //     name: "",
    //     price: "",
    //     category: "",
    //     img: "",
    //     stock: "",
    //     description: "",
    // },
    // {
    //     id: "6",
    //     name: "",
    //     price: "",
    //     category: "",
    //     img: "",
    //     stock: "",
    //     description: "",
    // },
    // {
    //     id: "7",
    //     name: "",
    //     price: "",
    //     category: "",
    //     img: "",
    //     stock: "",
    //     description: "",
    // },
    // {
    //     id: "8",
    //     name: "",
    //     price: "",
    //     category: "",
    //     img: "",
    //     stock: "",
    //     description: "",
    // },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}