import NewsLetterSection from "@/components/NewsLetterSection";
import ProductsSection from "@/components/ProductsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <!-- Product section start --> */}
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <ProductsSection />
      </section>
      {/* <!-- Product section start --> */}
      <section className="bg-[#ced3ca] py-5 lg:py-16">
        <NewsLetterSection />
      </section>
    </main>
  );
}
