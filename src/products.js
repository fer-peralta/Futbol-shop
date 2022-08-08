import cam_01 from "./images/cam_01.jpg"
import cam_02 from "./images/cam_02.jpg"
import cam_03 from "./images/cam_03.jpg"
import cam_04 from "./images/cam_04.jpg"
import cam_05 from "./images/cam_05.jpg"
import cam_06 from "./images/cam_06.jpg"
import cam_07 from "./images/cam_07.jpg"
import cam_08 from "./images/cam_08.jpg"

const products = [
    {
        id: "1",
        name: "Camiseta San Lorenzo titular",
        price: "12000",
        category: "nacionales",
        img: cam_01,
        stock: "15",
        description: " Ideal para todos los hinchas del club, para que alienten a su equipo del alma, en la cancha o por televisión, con la Camiseta titular del club San Lorenzo temporada 2020/21. Su diseño los mantiene siempre frescos y secos gracias a su tela de microfibra suave al tacto y libre de sudor durante los momentos de mayor tensión del partido.",
    },
    {
        id: "2",
        name: "Camiseta San Lorenzo suplente",
        price: "12000",
        category: "nacionales",
        img: cam_02,
        stock: "20",
        description: " Ideal para todos los hinchas del club, para que alienten a su equipo del alma, en la cancha o por televisión, con la Camiseta suplente del club San Lorenzo temporada 2020/21. Su diseño los mantiene siempre frescos y secos gracias a su tela de microfibra suave al tacto y libre de sudor durante los momentos de mayor tensión del partido.",
    },
    {
        id: "3",
        name: "Camiseta Selección Argentina titular",
        price: "15000",
        category: "paises",
        img: cam_03,
        stock: "30",
        description: "La camiseta perfecta para alentar los colores de tu selección. Está diseñada para que portar toda la comodidad que esperan ya que su corte relajado les permite moverse libremente. Además cuenta con tecnología AEROREADY para absorber la transpiración y así mantenerte secos y fresco en todo momento. Sumate a la hinchada con esta increible prenda.",
    },
    {
        id: "4",
        name: "Camiseta Selección Argentina suplente",
        price: "15000",
        category: "paises",
        img: cam_04,
        stock: "50",
        description: "La camiseta perfecta para alentar los colores de tu selección. Está diseñada para que portar toda la comodidad que esperan ya que su corte relajado les permite moverse libremente. Además cuenta con tecnología AEROREADY para absorber la transpiración y así mantenerte secos y fresco en todo momento. Sumate a la hinchada con esta increible prenda.",
    },
    {
        id: "5",
        name: "Camiseta Nike PSG 2022/23 Stadium Fourth",
        price: "15000",
        category: "internacionales",
        img: cam_05,
        stock: "15",
        description: "No puede faltar la camiseta del gran club francés. Para que alientes desde tu casa con los colores de uno de los grandes del fútbol europeo.",
    },
    {
        id: "6",
        name: "Camiseta Nike Fc Barcelona 2021/22 Stadium Home",
        price: "12000",
        category: "internacionales",
        img: cam_06,
        stock: "45",
        description: "Uno de los clubes que más capturó miradas las últimas décadas, conseguí la camiseta para alentar por la TV a este grande del fútbol español. Hecha con la más alta calidad internacional te permitirá correr más tiempo sin transpirar.",
    },
    {
        id: "7",
        name: "Camiseta Selección Argentina 1986",
        price: "19500",
        category: "retro",
        img: cam_07,
        stock: "10",
        description: "La más linda de todas, la camiseta con la que la selección Argentina se coronó como campeona en el mundial México 1986. No puede faltar en tu colección.",
    },
    {
        id: "8",
        name: "Camiseta Selección Argentina 1994",
        price: "17800",
        category: "retro",
        img: cam_08,
        stock: "15",
        description: "La camiseta de la última actuación con la selección de Diego Armando Maradona",
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 300)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 300)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 300)
    })
}