import { useRouter } from "next/router";
import React from "react";

const CategoryBySlug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return <div>Category by slug :{slug}</div>;
};

export default CategoryBySlug;
