// import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "62f89fcdxdaad3fxz0aa3df7ca9dsc9",
    id: 1,
    title: "STAN SMITH SHOES",
    brand: "Adidas",
    price: 8999.0,
    gender: "Men",
    category: ["Lifestyle"],
    trending: false,
    rating: 4.7,
    size: 7,
    images: [
      {
        id: 1,
        src: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg",
      },
      {
        id: 2,
        src: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/4bc9628836bf42a181f1ac1e00f51b22_9366/Stan_Smith_Shoes_White_FX5502_06_standard.jpg",
      },
      {
        id: 3,
        src: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e53b9a57b0a745be924bac1e00f54427_9366/Stan_Smith_Shoes_White_FX5502_42_detail.jpg",
      },
      {
        id: 4,
        src: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d5afac8099674bfea559ac1e00f53d7c_9366/Stan_Smith_Shoes_White_FX5502_41_detail.jpg",
      },
    ],
  },
  {
    _id: "62f89fcdxdad3fxz0aa3df7ca9dsc9",
    id: 2,
    title: "Court Legacy Lift",
    brand: "Nike",
    price: 7495.0,
    gender: "Men",
    category: ["Lifestyle", "Running"],
    trending: false,
    rating: 5.0,
    size: 8,
    images: [
      {
        id: 1,
        src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b4b756b-d263-48f9-8e3d-be0505eb9410/court-legacy-lift-shoes-1zLxsK.png",
      },
      {
        id: 2,
        src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/83b3f3b8-216f-4cc2-b5b2-c3d3bb93432d/court-legacy-lift-shoes-1zLxsK.png",
      },
      {
        id: 3,
        src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b511f1ed-7143-4e88-aed9-fa71af496ad6/court-legacy-lift-shoes-1zLxsK.png",
      },
      {
        id: 4,
        src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/616ed90e-1039-404f-8006-4df5cfe7653c/court-legacy-lift-shoes-1zLxsK.png",
      },
    ],
  },
  {
    _id: "62f89fcdxxad3fxz0aa3df7ca9dsc9",
    id: 3,
    title: "OZELIA",
    brand: "Adidas",
    price: 7699.5,
    gender: "Men",
    category: ["Lifestyle", "Gym and Training"],
    trending: false,
    rating: 3.5,
    size: 6,
    images: [
      {
        id: 1,
        src: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/85aea8966e8c4fccb1c8af3b0084041a_9366/OZELIA_Shoes_Beige_HP6356_01_standard.jpg",
      },
      {
        id: 2,
        src: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8ad0ee26b304cc0adf4af3b00842064_9366/OZELIA_Shoes_Beige_HP6356_02_standard_hover.jpg",
      },
      {
        id: 3,
        src: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/354f6ae80b264205b9d5af3b00841299_9366/OZELIA_Shoes_Beige_HP6356_06_standard.jpg",
      },
      {
        id: 4,
        src: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/484f81a75f514befb642af3b00846373_9366/OZELIA_Shoes_Beige_HP6356_42_detail.jpg",
      },
    ],
  },
  {
    _id: "62f89fcdd3f0aa3df7ca94e9",
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    title: "RS-X Efekt Turbo",
    brand: "Puma",
    price: 5199.2,
    gender: "Women",
    category: ["Football", "Running"],
    trending: false,
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
  {
    _id: "62f897654dd3f0fg3df7ca94ec",
    id: 8,
    title: "Air Jordan 1",
    brand: "Nike",
    price: 14195.0,
    gender: "Women",
    category: ["Lifestyle"],
    trending: true,
    rating: 3.7,
    size: 6,
    images: [
      {
        id: 1,
        src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c414b0a7-baa7-4f94-b206-62f3ba37df00/air-jordan-1-elevate-high-shoes-rKPNHR.png",
      },
      {
        id: 2,
        src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d888993b-4c73-4037-9ed1-ea01988ea4fa/air-jordan-1-elevate-high-shoes-rKPNHR.png",
      },
      {
        id: 3,
        src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/67a2ab0c-0f02-4b62-8d41-073b83424831/air-jordan-1-elevate-high-shoes-rKPNHR.png",
      },
      {
        id: 4,
        src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/42267da3-9c9d-4fe8-b498-2f821f4adeef/air-jordan-1-elevate-high-shoes-rKPNHR.png",
      },
    ],
  },
  {
    _id: "62f897654dduygff0fg3df7ca94ec",
    id: 9,
    title: "SuperRep Go 3",
    brand: "Nike",
    price: 14195.0,
    gender: "Women",
    category: ["Lifestyle"],
    trending: false,
    rating: 4.7,
    size: 6,
    images: [
      {
        id: 1,
        src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00cd41dc-cff3-4cf5-a47c-37fb3ae02698/superrep-go-3-flyknit-next-nature-training-shoes-zKqgRc.png",
      },
      {
        id: 2,
        src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cba4153d-f758-47a5-810f-4bd1269121fa/superrep-go-3-flyknit-next-nature-training-shoes-zKqgRc.png",
      },
      {
        id: 3,
        src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1347b8c1-e5a5-4792-89cc-59dce3a48b9c/superrep-go-3-flyknit-next-nature-training-shoes-zKqgRc.pngg",
      },
      {
        id: 4,
        src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/07f5ab57-2829-423c-a501-ccee1e7665fe/superrep-go-3-flyknit-next-nature-training-shoes-zKqgRc.png",
      },
    ],
  },
  {
    _id: "62897654dduygff0fg3df7ca94ec",
    id: 10,
    title: "Thunder",
    brand: "Jordan",
    price: 18695.0,
    gender: "Men",
    category: ["Lifestyle", "Gym and Training"],
    trending: false,
    rating: 4.8,
    size: 10,
    images: [
      {
        id: 1,
        src: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/a509008c-27b3-4eab-aa0a-a5f6398bf448/air-jordan-4-thunder-dh6927-017-release-date.jpg",
      },
      {
        id: 2,
        src: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/99209b21-d6a8-4df7-acda-2d6b46bc2e63/air-jordan-4-thunder-dh6927-017-release-date.jpg",
      },
      {
        id: 3,
        src: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/00978af3-01f7-440e-86b7-1839db6e0e9c/air-jordan-4-thunder-dh6927-017-release-date.jpg",
      },
      {
        id: 4,
        src: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/f5b7748f-9684-4d0a-8072-dc4d4f884894/air-jordan-4-thunder-dh6927-017-release-date.jpg",
      },
    ],
  },
];
