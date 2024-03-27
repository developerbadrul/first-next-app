"use client"
import HeroSection from "@/components/HeroSection";
import NewsLetterSection from "@/components/NewsLetterSection";
import ProductCard from "@/components/ProductCard";
import products from "@/public/data/products";
import { useEffect, useState } from "react";


const CategoryPage = ({ params: { categoryName } }) => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        setLoading(true); 
        setError(null); 

        const filteredProducts = products.filter(product => product.category === categoryName);
        
        if (filteredProducts.length === 0) {
            setError(`No products found for category: ${categoryName}`);
        } else {
            setSelectedProducts(filteredProducts);
        }

        setLoading(false); 
    }, [categoryName]);

    const handleCategoryClick = (path) => {
        setSelectedProducts([]); 
        if (path) {
            const filteredProducts = products.filter(product => product.category === path);
            setSelectedProducts(filteredProducts);
        }else{
            setSelectedProducts(products)
        }
    };

    const menus = [
        { menu: 'All', path: '' },
        { menu: 'Smartphones', path: 'smartphones' },
        { menu: 'Laptops', path: 'laptops' },
        { menu: 'Fragrances', path: 'fragrances' },
        { menu: 'Skincare', path: 'skincare' },
        { menu: 'Groceries', path: 'groceries' }
    ];

    return (
        <div>
            <HeroSection />
            <main>
                <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
                    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
                        {menus.map((menu, index) => (
                            <button
                                key={index}
                                className={`hover:border-b border-black block h-6 box-border mt-4 ${categoryName === menu.path ? 'font-bold' : ''}`}
                                onClick={() => handleCategoryClick(menu.path)}
                            >
                                {menu.menu}
                            </button>
                        ))}
                    </div>
                    <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
                        {loading && <p>Loading...</p>}
                        {error && <p className="text-red-600">{error}</p>}
                        {!loading && !error && selectedProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
                <section className="bg-[#ced3ca] py-5 lg:py-16">
                    <NewsLetterSection />
                </section>
            </main>
        </div>
    );
};

export default CategoryPage;
