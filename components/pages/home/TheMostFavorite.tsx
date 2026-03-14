import { ShopNowButton } from "@/components/shared/CustomButton"
import { getTheMostFavoriteProduct } from "@/dl/product.data"
import { ImageOff } from "lucide-react"
import Image from "next/image"

export default async function TheMostFavorite() {
	const product = await getTheMostFavoriteProduct()

	// TODO Reset the database and add a real data with transparent bg for the mainImage

	return (
		<section className="container  mx-auto flex flex-col items-center justify-center gap-12">
			<div className="flex flex-col items-center justify-center gap-2">
				<h4 className="dark:text-secondary">الأكثر تفضيلاً</h4>
				<h2>المنتج الأكثر تفضيلاً لدينا</h2>
			</div>
			<div className=" flex flex-col lg:flex-row lg:gap-12 gap-2 items-center justify-center w-full">
				<div className="w-full lg:w-1/2 aspect-video relative rounded-2xl">
					{product?.mainImage ? (
						<Image
							src={product?.mainImage}
							alt={product?.title ?? "product"}
							fill
							className="object-cover rounded-2xl"
						/>
					) : (
						<ImageOff />
					)}
				</div>
				<div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4 ">
					<h6 className="dark:text-secondary">{product?.title}</h6>
					<h2 className="max-w-lg line-clamp-4">{product?.miniDescription}</h2>
					<h6 className="max-w-lg line-clamp-6">{product?.description}</h6>
					<ShopNowButton id={product?.id} />
				</div>
			</div>
		</section>
	)
}
