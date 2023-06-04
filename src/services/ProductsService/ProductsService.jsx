import axios from "axios";

export const productService = async() => await axios.get("/api/products");