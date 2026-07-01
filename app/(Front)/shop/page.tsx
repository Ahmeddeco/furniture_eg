import { getAllClassesForProductPage } from "@/dl/class.data"
import { ImageOff } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default async function ShopPage() {
	const classes = await getAllClassesForProductPage()
	return (
		<div className="container mx-auto">
			{/* -------------------------------- Title ------------------------------- */}
			<section className=" mt-12 flex flex-col items-center justify-center gap-8">
				<div className="flex flex-col items-center justify-center gap-4">
					<h1 className="dark:text-primary text-primary">أقسام منتجاتنا</h1>
					<h6 className="max-w-lg text-center text-pretty">
						أكثر من مئات المنتجات بتشكيلة واسعة بانتظارك. غرف نوم رئيسية، غرف معيشة، مطابخ، مراتب، رفوف أحذية. جميع حلول
						أثاث منزلك من مكان واحد.
					</h6>
				</div>
			</section>

			{/* ---------------------------- Categories ---------------------------- */}
			<section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-8 ">
				{classes?.map(({ id, image, slug, title }) => (
					<Link
						href={`/shop/classes/${slug}`}
						className=" aspect-video relative rounded-2xl hover:scale-95 duration-700 ease-in-out"
						key={id}
					>
						{image ? (
							<Image src={image} alt={title ?? "class"} fill className="object-cover rounded-2xl " />
						) : (
							<ImageOff />
						)}

						{/* ---------------------------- Title --------------------------- */}
						<div className="absolute inset-0 w-full h-full aspect-video rounded-2xl z-20 bg-linear-to-l from-primary/90 to-primary/10 flex flex-col justify-center items-start px-8  ">
							<h2 className="text-neutral-100">{title}</h2>
						</div>
					</Link>
				))}
			</section>
		</div>
	)
}
