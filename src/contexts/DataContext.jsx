import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { productService } from "../services/ProductsService/ProductsService";


export const DataContext = createContext();

const reducerFunction = (state, action) => {
    switch(action.type){
        case "SET_PRODUCTS": {
            return {...state, products: action.payload}
        }
        case "SET_CATEGORIES": {
            return {...state, categories: action.payload}
        }
    }
}

export const DataProvider = ({children}) => {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducerFunction, {
        products: [],
        categories: [],
        search: "",
        categoryFilter: [],
        priceFilter: "",
        ratingFilter: "",
        sortPriceFilter: "",
        productsLoading: true,
        categoriesLoading: true,
    });

    const getProducts = async() => {
        try{
            const response = await productService();
            if(response.status === 200){
                dispatch({type: "SET_PRODUCTS", payload: products})
            }
        }catch(error){
            console.log(error);
        }
    }

    const getCategories = async() => {
        try{
            const response = await axios.get("/api/categories");
            if(response.status === 200){
                dispatch({type:"SET_CATEGORIES", payload: categories})
            }

        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
        getCategories();
    }, [])
    
    return(
        <DataContext.Provider value={{
            
        }}>
            {children}
        </DataContext.Provider>
    )
}