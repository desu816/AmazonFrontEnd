import React, { useEffect, useState } from 'react'; 
import Layout from '../../Components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/Product/ProductCard';

function ProductDetail() {
    const { productId } = useParams();

    const [product, setProduct] = useState({});
    
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Fetching product details for ID:", productId);
        axios.get(`${productUrl}/products/${productId}`)
            .then((res) => {
                console.log("API Response:", res.data);
                setProduct(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("API Error:", err.response?.data || err.message);
                setError('Failed to load product details.');
                setIsLoading(false);
            });
    }, [productId]);

    if (isLoading) {
        return (
            <Layout>
                <p>Loading product details...</p>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <p>Error: {error}</p>
            </Layout>
        );
    }

    return (
        <Layout>
            <ProductCard product={product} />
        </Layout>
    );
}

export default ProductDetail;
