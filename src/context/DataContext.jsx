import {createContext, useContext, useEffect, useState} from "react";
import products_data from '../components/Product/data.json';
import country_data from '../components/Form/Select/data.json';


const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [country, setCountry] = useState([]);


    useEffect(() => {
      setProducts(products_data);
        setCountry(country_data);
    }, [])

    return (
        <DataContext.Provider value={{
            products,
            country
        }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => {
    return useContext(DataContext)
}