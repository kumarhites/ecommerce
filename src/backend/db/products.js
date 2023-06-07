// import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  // {
  //   _id: "62f89fcdd3f0aa3df7ca94e1",
  //   id: 1,
  //   title: "Nike Blazer Low '77 Vintage",
  //   brand: "Nike",
  //   price: "7,495.00",
  //   gender: "Men",
  //   rating: "4.0",
  //   images: [
  //     {
  //       id: 1,
  //       src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7d72aef6-1cf1-4a60-b9c5-c97138ab5b6a/blazer-low-77-vintage-shoes-HmmkdX.png",
  //     },
  //     {
  //       id: 2,
  //       src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7d72aef6-1cf1-4a60-b9c5-c97138ab5b6a/blazer-low-77-vintage-shoes-HmmkdX.png",
  //     },
  //     {
  //       id: 3,
  //       src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2de986e4-74d4-4b3b-a478-2c62820fd388/blazer-low-77-vintage-shoes-HmmkdX.png",
  //     },
  //     {
  //       id: 4,
  //       src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/82649e36-5718-443b-a85d-d8e400f6e3d0/blazer-low-77-vintage-shoes-HmmkdX.png",
  //     },
  //   ],
  // },
  // {
  //   _id: "62f89fcdd3f0aa3df7ca94e5",
  //   id: 2,
  //   title: "Air Jordan 1 Mid SE",
  //   brand: "Nike",
  //   price: "11,895.00",
  //   gender: "Women's Shoes",
  //   rating: "4.7",
  //   images: [
  //     {
  //       id: 1,
  //       src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/39a93424-d940-4b24-b35f-189872f36c3e/air-jordan-1-mid-se-shoes-lCj12k.png",
  //     },
  //     {
  //       id: 2,
  //       src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/39a93424-d940-4b24-b35f-189872f36c3e/air-jordan-1-mid-se-shoes-lCj12k.png",
  //     },
  //     {
  //       id: 3,
  //       src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/84d63481-ceb5-4c4e-a2dc-1f69a9d8fcc5/air-jordan-1-mid-se-shoes-lCj12k.png",
  //     },
  //     {
  //       id: 4,
  //       src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/03a3e725-dff5-4697-be78-7940d2d89bb8/air-jordan-1-mid-se-shoes-lCj12k.png",
  //     },
  //   ],
  // },
  {
    _id: "62f89fcdd3f0aa3df7ca94e9",
    id: 1,
    title: "Zig Dynamica 4 Shoes",
    brand: "Reebok",
    price: 7416.32,
    gender: "Men",
    category: ["Lifestyle", "Running"],
    trending: true,
    rating: 5.0,
    size: 8,
    images: [
      {
        id: 1,
        src: "https://reebok.bynder.com/transform/68b963c2-bea0-4b22-bf8e-3bb6d7db644d/100026023_SLC_eCom-tif?io=transform:fit,width:1000&quality=100",
      },
      {
        id: 2,
        src: "https://reebok.bynder.com/transform/6d0ed7b0-b5e1-40ed-acd5-2c8361ba023d/100026023_FLT_eCom-tif?io=transform:fit,width:1000&quality=100",
      },
      {
        id: 3,
        src: "https://reebok.bynder.com/transform/4fca59e9-dde4-48c1-82cb-1481cc9cf374/100026023_D1_eCom-tif?io=transform:fit,width:1000&quality=100",
      },
      {
        id: 4,
        src: "https://reebok.bynder.com/transform/2a033a79-03d8-43ca-87e5-f8681d952b45/100026023_BLT_eCom-tif?io=transform:fit,width:1000&quality=100",
      },
    ],
  },
  {
    _id: "62f89fcdd3f0aa3df7ca94ed",
    id: 2,
    title: "STREETBALL III SHOES",
    brand: "Adidas",
    price: 9799.5,
    gender: "Men",
    category: ["Gym and Training", "Running"],
    trending: true,
    rating: 4.8,
    size: 9,
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
    _id: "62f89fcdd3f0aa3df7ca94ec",
    id: 3,
    title: "RS-X Efekt Turbo",
    brand: "Puma",
    price: 7204.2,
    gender: "Women",
    category: ["Lifestyle", "Running"],
    trending: false,
    rating: 4.7,
    size: 10,
    images: [
      {
        id: 1,
        src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/390048/01/sv03/fnd/IND/fmt/png/RS-X-Efekt-Turbo-Unisex-Sneakers",
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
  {
    _id: "62f89fcdd3f0fg3df7ca94ec",
    id: 4,
    title: "RS-X Efekt Turbo",
    brand: "Puma",
    price: 5199.2,
    gender: "Women",
    category: ["Football", "Running"],
    trending: true,
    rating: 4.7,
    size: 6,
    images: [
      {
        id: 1,
        src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:f5f5f5,w_750,h_750/global/389389/02/sv03/fnd/IND/fmt/png/Carina-2.0-Laser-Cut-Women's-Sneakers",
      },
      {
        id: 2,
        src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:f5f5f5,w_750,h_750/global/389389/02/fnd/IND/fmt/png/Carina-2.0-Laser-Cut-Women's-Sneakers",
      },
      {
        id: 3,
        src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:f5f5f5,w_750,h_750/global/389389/02/sv04/fnd/IND/fmt/png/Carina-2.0-Laser-Cut-Women's-Sneakers",
      },
      {
        id: 4,
        src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:f5f5f5,w_750,h_750/global/389389/02/bv/fnd/IND/fmt/png/Carina-2.0-Laser-Cut-Women's-Sneakers",
      },
    ],
  },
];
