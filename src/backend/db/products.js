import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Nike Blazer Low '77 Vintage",
    brand: "Nike",
    price: "7 495.00",
    categoryName: "Men's Shoes",
    images: [
      {
        id: 1,
        src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f031c6e2-5941-4bb7-a29d-31683f5d4da2/blazer-low-77-vintage-shoes-HmmkdX.png",
      },
      {
        id: 2,
        src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7d72aef6-1cf1-4a60-b9c5-c97138ab5b6a/blazer-low-77-vintage-shoes-HmmkdX.png",
      },
      {
        id: 3,
        src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2de986e4-74d4-4b3b-a478-2c62820fd388/blazer-low-77-vintage-shoes-HmmkdX.png",
      },
      {
        id: 4,
        src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/82649e36-5718-443b-a85d-d8e400f6e3d0/blazer-low-77-vintage-shoes-HmmkdX.png",
      },
    ],
  },
  {
    _id: uuid(),
    title: "Air Jordan 1 Mid SE",
    brand: "Nike",
    price: "11 895.00",
    categoryName: "Women's Shoes",
    images: [
      {
        id: 1,
        src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cb1030a9-2a47-437e-8970-e1530bccebfc/air-jordan-1-mid-se-shoes-lCj12k.png",
      },
      {
        id: 2,
        src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/39a93424-d940-4b24-b35f-189872f36c3e/air-jordan-1-mid-se-shoes-lCj12k.png",
      },
      {
        id: 3,
        src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/84d63481-ceb5-4c4e-a2dc-1f69a9d8fcc5/air-jordan-1-mid-se-shoes-lCj12k.png",
      },
      {
        id: 4,
        src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/03a3e725-dff5-4697-be78-7940d2d89bb8/air-jordan-1-mid-se-shoes-lCj12k.png",
      },
    ],
  },
  {
    _id: uuid(),
    title: "Zig Dynamica 4 Shoes",
    brand: "Reebok",
    price: "7 416.32",
    categoryName: "Men's Shoes",
    images: [
      {
        id: 1,
        src: "https://reebok.bynder.com/transform/b12f3fca-3447-4b5d-af91-7d2e09455f45/100069705_SLC_eCom-tif?io=transform:fit,width:1000&quality=100",
      },
      {
        id: 2,
        src: "https://reebok.bynder.com/transform/60e8c1d1-dff0-4494-ad78-3c1e1f78582c/100069705_FLT_eCom-tif?io=transform:fit,width:1000&quality=100",
      },
      {
        id: 3,
        src: "https://reebok.bynder.com/transform/40e1743c-4d6c-4db3-9d0f-fab72d108547/100069705_BLT_eCom-tif?io=transform:fit,width:1000&quality=100",
      },
      {
        id: 4,
        src: "https://reebok.bynder.com/transform/40e1743c-4d6c-4db3-9d0f-fab72d108547/100069705_BLT_eCom-tif?io=transform:fit,width:1000&quality=100",
      },
    ],
  },
  {
    _id: uuid(),
    title: "STREETBALL III SHOES",
    brand: "Adidas",
    price: "9 799.50",
    categoryName: "Men's Shoes",
    images: [
      {
        id: 1,
        src: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/87ee1358c1cc4532b5b5af29013af139_9366/Streetball_III_Shoes_Black_FZ5811_01_standard.jpg",
      },
      {
        id: 2,
        src: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ffb7a0f0a7b743dc954baf29013d4100_9366/Streetball_III_Shoes_Black_FZ5811_04_standard.jpg",
      },
      {
        id: 3,
        src: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/526dfe52063542d0bd3daf29013bed38_9366/Streetball_III_Shoes_Black_FZ5811_41_detail.jpg",
      },
      {
        id: 4,
        src: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fc9297bcb0d64b4d87efaf29013c4661_9366/Streetball_III_Shoes_Black_FZ5811_42_detail.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    title: "RS-X Efekt Turbo Unisex Sneakers",
    brand: "Puma",
    price: "7 199.20",
    categoryName: "Men's Shoes",
    images: [
      {
        id: 1,
        src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/390048/01/sv01/fnd/IND/fmt/png/RS-X-Efekt-Turbo-Unisex-Sneakers",
      },
      {
        id: 2,
        src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/390048/01/sv03/fnd/IND/fmt/png/RS-X-Efekt-Turbo-Unisex-Sneakers",
      },
      {
        id: 3,
        src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/390048/01/dt01/fnd/IND/fmt/png/RS-X-Efekt-Turbo-Unisex-Sneakers",
      },
      {
        id: 4,
        src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/390048/01/dt02/fnd/IND/fmt/png/RS-X-Efekt-Turbo-Unisex-Sneakers",
      },
    ],
  },
];
