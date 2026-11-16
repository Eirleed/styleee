import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <header className="mb-9 flex flex-col gap-6 border-b border-[#d8d1c4] pb-8 sm:mb-11 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#7c8a80]">
            керамика ручной работы
          </p>
          <h1 className="mt-4 text-[2.7rem] font-semibold leading-[0.94] tracking-[-0.06em] text-[#17251f] sm:text-6xl">
            посуда для дома
          </h1>
        </div>
        <p className="max-w-[19rem] text-sm leading-6 text-[#748079] sm:text-right">
          четыре предмета, с которых начинается уютный стол. спокойные формы
          и тёплая керамика на каждый день.
        </p>
      </header>

      <section aria-labelledby="products-title">
        <h2 id="products-title" className="sr-only">
          товары
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index === 0}
            />
          ))}
        </div>
      </section>

      <div className="mt-10 flex justify-center sm:mt-12">
        <button
          type="button"
          className="w-full rounded-full bg-[#142d44] px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-[#214763] sm:w-auto"
        >
          смотреть всю коллекцию
        </button>
      </div>
    </main>
  );
}
