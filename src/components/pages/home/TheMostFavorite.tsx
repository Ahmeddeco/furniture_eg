import { SeeProductButton } from "@/components/shared/CustomButtons"
import { getTheMostFavoriteProduct } from "@/dl/product.data"
import AddToCart from "@/store/AddToCart"
import { productCart } from "@/store/cartStore"
import { ImageOff } from "lucide-react"
import Image from "next/image"

export default async function TheMostFavorite() {
	const product = await getTheMostFavoriteProduct()
	const formattedProduct: productCart = {
		id: product?.id ?? "",
		mainImage: product?.mainImage ?? "",
		price: product?.price ?? 0,
		title: product?.title ?? "",
		discount: product?.discount ?? 0,
	}

	return (
		<section className="container  mx-auto ">
			{product && (
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
						<h4 className="text-secondary">{product?.title}</h4>
						<h2 className="max-w-lg line-clamp-4">{product?.miniDescription}</h2>
						<h6 className="max-w-lg line-clamp-6">{product?.description}</h6>
						<AddToCart product={formattedProduct} />
						<SeeProductButton id={product.id} />
					</div>
				</div>
			)}
		</section>
	)
}
