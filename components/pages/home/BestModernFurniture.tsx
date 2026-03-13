import FilterTabs from "@/components/shared/FilterTabs"
import ProductCard from "@/components/shared/ProductCard"
import { getFilteredProducts } from "@/dl/product.data"
import { ProductFilterType } from "@/types/product.type"

export default async function BestModernFurniture({
	searchParams,
}: {
	searchParams: Promise<{ filter: ProductFilterType }>
}) {
	const products = await getFilteredProducts("best")

	console.log("products from BestModernFurniture", products)

	return (
		<section className="container mx-auto flex flex-col items-center justify-center gap-4 lg:gap-12 ">
			<div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center gap-4 w-full">
				<h2>أفضل الأثاث المودرن</h2>
				<FilterTabs searchParams={searchParams} />
			</div>
			<div className="flex flex-wrap items-center justify-center gap-6">
				{products.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</section>
	)
}
