import Image from 'next/image';
import products from '@/public/data/products';

const ProductPage = ({ params: { id } }) => {
    const product = products.find(product => product.id === parseInt(id));
    if (!product) {
        return <div>Loading...</div>; 
    }

    return (
        <main className="h-screen">
            <section className="bg-[#fafaf2] h-full py-20">
                <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
                        <div className="w-[400px] h-[500px] mx-auto">
                            <Image src={product.thumbnail} layout="responsive" width={400} height={500} alt={product.title} />
                        </div>

                        <div className="flex gap-4 mt-4">
                            {product.images.map((image, index) => (
                                <div key={index} className="w-[100px] h-[100px] mx-auto border">
                                    <Image src={image} layout="responsive" width={100} height={100} alt={`Product Image ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12">
                        <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">{product.title}</h1>
                        <span className="text-[#919090] my-3">{product.category}</span>
                        <div className="mt-3 flex items-center justify-start gap-1">
                            {/* Render stars based on product rating */}
                            {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
                                <Image key={index} src="/assets/svg/star.svg" width={20} height={20} alt="Star" />
                            ))}
                        </div>
                        <hr className="my-5 bg-black" />

                        <div>
                            <p className="my-3">
                                {/* Display original and discounted price */}
                                <span className="text-rose-600 opacity-60 line-through">${product.price.toFixed(2)}</span>
                                <span className="font-bold text-2xl">${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</span>
                            </p>
                        </div>
                        <div>
                            <p className="leading-7">{product.description}</p>
                            <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                                Add To Cart - ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductPage;
