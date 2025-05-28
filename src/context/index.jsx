import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [products, setProducts] = useState();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                const data = response.data;
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        getProducts();
    }, []);

    const data = {
        products,
    };

    return (
        <MyContext.Provider value={data}>
            {children}
        </MyContext.Provider>
    );
};

const useAppContext = () => useContext(MyContext);

export { MyProvider, useAppContext };
