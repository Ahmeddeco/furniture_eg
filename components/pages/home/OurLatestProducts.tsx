import ProductCard from "@/components/shared/ProductCard"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { getOurLatestProducts } from "@/dl/product.data"
import { getOurLatestProductsType } from "@/types/product.type"

export default async function OurLatestProducts() {
	const products: getOurLatestProductsType = await getOurLatestProducts()

	return (
		<section className=" container mx-auto flex lg:flex-row flex-col items-center  justify-center lg:justify-start gap-8">
			{/* ------------------------------- Title ------------------------------ */}
			<div className="flex flex-col lg:items-start items-center justify-center lg:justify-start gap-4 w-full lg:w-1/3  ">
				<h6 className="text-secondary">الأحدث وصولا</h6>
				<h2>شوف أحدث منتجاتنا</h2>
				<h6 className="max-w-md">
					شوف أحدث منتجاتنا في متجرنا الخاص, ماتفوتش الفرصة في انك تشوف وتتابع احدث واخر صيحة في الديكور والاثاث.
				</h6>
				<Button asChild>
					<Link href={"/shop"}>
						<Eye />
						شاهد كل منتجاتنا
					</Link>
				</Button>
			</div>
			{/* ---------------------------- ProductCarousel --------------------------- */}
			<div className="w-full lg:w-2/3 ">
				<Carousel className="w-full " opts={{ direction: "rtl" }}>
					<CarouselContent>
						{products?.map((product) => (
							<CarouselItem className="basis-[90%] md:basis-[40%] lg:basis-[30%] px-2" key={product.id}>
								<ProductCard product={product} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	)
}
