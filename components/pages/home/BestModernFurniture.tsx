import FilterTabs from "@/components/shared/FilterTabs"
import ProductCard from "@/components/shared/ProductCard"
import { getFilteredProducts } from "@/dl/product.data"
import { ProductFilterType } from "@/types/product.type"

export default async function BestModernFurniture({
	searchParams,
}: {
	searchParams: Promise<{ filter: ProductFilterType }>
}) {
	const filter = (await searchParams).filter
	const products = await getFilteredProducts(filter)

	return (
		<section className="container mx-auto hidden lg:flex flex-col items-center justify-center gap-4 lg:gap-12 ">
			<div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center gap-4 w-full">
				<h2>أفضل الأثاث المودرن</h2>
				<FilterTabs searchParams={searchParams} />
			</div>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-6 w-full">
				{products.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</section>
	)
}
