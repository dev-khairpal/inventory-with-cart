import { createContext, useState } from "react"

const ProductContext = createContext();

function ProductContextProvider({children}){
    const [product,setProduct] = useState([]);
    const valueToShare = {
        product,
        setProduct
    }

    return <ProductContext.Provider value={valueToShare}>
        {children}
    </ProductContext.Provider>
}

export {ProductContextProvider}
export default ProductContext