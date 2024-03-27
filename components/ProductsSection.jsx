import ProductCard from "./ProductCard";
import products from "@/public/data/products";

const ProductsSection = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsSection;