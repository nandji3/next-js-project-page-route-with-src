// components/ProductList.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { RootState, AppDispatch } from "../app/store";
// import { fetchProductsAsync } from "../features/products/productsSlice";
// import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector((state: RootState) => state.products.products);
    const status = useSelector((state: RootState) => state.products.status);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProductsAsync());
        }
    }, [status, dispatch]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
