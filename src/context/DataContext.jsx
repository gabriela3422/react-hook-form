import {createContext, useContext, useEffect, useState} from "react";
import products_data from '../components/Product/data.json';


const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      setProducts(products_data)
    }, [])

    return (
        <DataContext.Provider value={{
            products
        }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => {
    return useContext(DataContext)
}