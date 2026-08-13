import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Badge } from "../ui/badge"
import Image from "next/image"
import { priceAfterDiscount } from "@/helpers/currency"
import { SeeProductButton } from "./CustomButtons"
import { ProductCartType } from "@/types/product.type"
import { getSession } from "@/auth/getSession"
import { isFavorite } from "../favorite/isFavorite"
import FavoriteButton from "../favorite/FavoriteButton"
import AddToCart from "@/store/AddToCart"
import { productCart } from "@/store/cartStore"

type Props = {
	product: ProductCartType
}

export default async function ProductCard({ product }: Props) {
	const session = await getSession()
	const isFavorited = await isFavorite(product.id)
	const formattedProduct: productCart = {
		id: product?.id ?? "",
		mainImage: product?.mainImage ?? "",
		price: product?.price ?? 0,
		title: product?.title ?? "",
		discount: product?.discount ?? 0,
	}

	return (
		<Card className="w-full">
			<CardHeader className="flex items-center justify-between w-full">
				<Badge>{product.discount} %</Badge>

				{/* ---------------------------- Favorite Button ---------------------------- */}
				{session && <FavoriteButton productId={product.id} isFavoritedInitial={isFavorited!} />}
			</CardHeader>
			<CardContent>
				<div className="aspect-video relative rounded-lg">
					<Image src={product.mainImage} alt={product.title} fill className="object-cover rounded-lg" />
				</div>
			</CardContent>
			<CardFooter className="flex flex-col gap-1 items-start ">
				<h5 className="line-clamp-1">{product.title}</h5>
				<h6>{priceAfterDiscount(product.price, product.discount!)}</h6>

				{/* ------------------------------ AddToCart ----------------------------- */}
				<div className="flex flex-col mt-4 items-center justify-center gap-4  w-full">
					<AddToCart product={formattedProduct} />
					<SeeProductButton id={product.id} />
				</div>
			</CardFooter>
		</Card>
	)
}
