import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

const priceFormatter = new Intl.NumberFormat("ru-RU");

export default function ProductCard({
  product,
  priority = false,
}: ProductCardProps) {
  return (
    <article className="group flex h-full w-full flex-col rounded-[28px] bg-white p-3 shadow-[0_12px_36px_rgba(27,45,39,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_48px_rgba(27,45,39,0.09)] sm:p-4">
      <div className="relative aspect-square overflow-hidden rounded-[22px] bg-[#dce7ea]">
        <Image
          src={product.image}
          alt={product.title}
          width={800}
          height={800}
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:p-3"
        />
      </div>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-4 sm:px-2 sm:pt-5">
        <h2 className="text-[21px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#17251f] sm:text-[23px]">
          {product.title}
        </h2>
        <p className="mt-2 text-sm leading-5 text-[#748079]">
          {product.description}
        </p>

        <div className="mt-auto flex flex-col items-start pt-5">
          <p className="text-sm font-medium text-[#17251f]">
            {priceFormatter.format(product.price)} ₽
          </p>
          <button
            type="button"
            className="mt-4 rounded-full bg-[#142d44] px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-[#214763] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#142d44]"
          >
            в корзину
          </button>
        </div>
      </div>
    </article>
  );
}
