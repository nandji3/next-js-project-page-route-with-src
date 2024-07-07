import { useRouter } from "next/router";
import React from "react";

const ProductById = () => {
    const router = useRouter();
    const { id } = router.query;
    return <div>Product By Id :{id}</div>;
};

export default ProductById;
