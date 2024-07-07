import apiClient from "@/utils/apiClient";
// import axios from "axios";

const baseURL = "https://api.example.com";

// const apiClient = axios.create({
//     baseURL,
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

export const productsAPI = {
    fetchProducts: async () => {
        try {
            const response = await apiClient.get("/products");
            return response.data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },

    fetchProductById: async (productId: number) => {
        try {
            const response = await apiClient.get(`/products/${productId}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching product ${productId}:`, error);
            throw error;
        }
    },

    addProduct: async (productData: any) => {
        try {
            const response = await apiClient.post("/products", productData);
            return response.data;
        } catch (error) {
            console.error("Error adding product:", error);
            throw error;
        }
    },

    updateProduct: async (productId: number, updatedData: any) => {
        try {
            const response = await apiClient.put(
                `/products/${productId}`,
                updatedData
            );
            return response.data;
        } catch (error) {
            console.error(`Error updating product ${productId}:`, error);
            throw error;
        }
    },

    deleteProduct: async (productId: number) => {
        try {
            const response = await apiClient.delete(`/products/${productId}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting product ${productId}:`, error);
            throw error;
        }
    },
};
