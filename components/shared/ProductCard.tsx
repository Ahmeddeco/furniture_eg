import { ProductDiscoverType } from "@/types/product.type"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Badge } from "../ui/badge"
import FavoriteButton from "./FavoriteButton"
import Image from "next/image"
import { priceAfterDiscount } from "@/logic/currency"

type Props = {
	product: ProductDiscoverType
}

export default function ProductCard({ product }: Props) {
	return (
		<Link href={`/shop/${product.id}`} className="w-full  max-w-md min-w-sm">
			<Card className="w-full">
				<CardHeader className="flex items-center justify-between w-full">
					<Badge>{product.discount} %</Badge>
					<FavoriteButton />
				</CardHeader>
				<CardContent>
					<div className="aspect-video relative rounded-lg">
						<Image src={product.mainImage} alt={product.title} fill className="object-cover rounded-lg" />
					</div>
				</CardContent>
				<CardFooter className="flex flex-col gap-1 items-start ">
					<h5 className="line-clamp-1">{product.title}</h5>
					<h6>{priceAfterDiscount(product.price, product.discount!)}</h6>
				</CardFooter>
			</Card>
		</Link>
	)
}
