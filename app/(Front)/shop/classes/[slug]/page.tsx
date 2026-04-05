import ProductCard from "@/components/shared/ProductCard"
import { getAllProductsWithSpecificClass } from "@/dl/product.data"
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination"

type Props = {
	searchParams: Promise<{ class: string; page: string; size: string }>
	params: Promise<{ slug: string }>
}

export default async function ClassesPage({ params, searchParams }: Props) {
	const { page, size } = await searchParams
	const pageNumber = +page > 1 ? +page : 1
	const pageSize = +size || 6
	const classSlug = (await params).slug
	const products = await getAllProductsWithSpecificClass(classSlug, pageSize, pageNumber)

	console.log("products from ClassesPage", products?.totalProducts)

	return (
		<div className="container mx-auto">
			<section className="mt-12 flex flex-col items-center justify-center gap-8">
				<h1> أثاث {products && products.data[0].class?.title}</h1>
			</section>

			{/* -------------------------------- Products -------------------------------- */}
			<section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-8 ">
				{products?.data?.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</section>

			{/* ---------------------------- Pagination ---------------------------- */}
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						{/* --------------------------- Previous --------------------------- */}
						{pageNumber > 1 && <PaginationPrevious href={`?size=${pageSize}&page=${pageNumber - 1}`} />}
					</PaginationItem>
					{/* ------------------------- PaginationLink ------------------------ */}
					{Array.from({ length: products?.totalPages ?? 1 }).map((_, index) => (
						<PaginationItem key={index}>
							<PaginationLink href={`?size=${pageSize}&page=${index + 1}`} isActive={pageNumber === index + 1}>
								{index + 1}
							</PaginationLink>
						</PaginationItem>
					))}
					<PaginationItem>
						{/* ----------------------------- Next ----------------------------- */}
						{pageNumber < (products?.totalPages ?? 1) && (
							<PaginationNext href={`?size=${pageSize}&page=${pageNumber + 1}`} />
						)}
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	)
}
