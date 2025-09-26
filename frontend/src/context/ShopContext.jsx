import React, { createContext } from 'react'
import all_data from '../Components/assets/all_product'

// ✅ Create context
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const contextValue = { all_data };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
