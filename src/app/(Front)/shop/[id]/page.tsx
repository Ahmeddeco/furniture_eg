/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import ProductImagesCarousel from "@/components/shared/ProductImagesCarousel"
import RelatedProducts from "@/components/shared/RelatedProducts"
import { Badge } from "@/components/ui/badge"
import { getOneProduct } from "@/dl/product.data"
import { Currency, priceAfterDiscount } from "@/helpers/currency"
import AddToCart from "@/store/AddToCart"
import { getOneProductType } from "@/types/product.type"
import { Factory, Palette, Shapes } from "lucide-react"

type Props = {
	params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: Props) {
	const id = (await params).id
	const product: getOneProductType = await getOneProduct(id)

	return (
		<div className="container mx-auto">
			{/* ---------------------- Product Details Section --------------------- */}
			<section className=" mt-12 flex flex-col lg:flex-row  justify-center gap-8">
				{/* ------------------------------ Image ----------------------------- */}
				<div className="flex-1 lg:flex-2 w-full  ">
					<ProductImagesCarousel mainImage={product?.mainImage ?? ""} images={product?.images ?? []} />
				</div>

				{/* --------------------------------- Details -------------------------------- */}
				<div className="flex-1 w-full flex flex-col gap-4">
					{/* ----------------------------- title ---------------------------- */}
					<h2 className=" text-primary dark:text-secondary text-start">{product?.title}</h2>
					{/* --------------------------- quantity --------------------------- */}
					<h4 className="text-start">
						متاح منه لدينا : <Badge variant={"secondary"}>{product?.quantity}</Badge> قطعة
					</h4>
					<div className="flex flex-wrap gap-4">
						{/* --------------------------- Factory -------------------------- */}
						<Badge variant={"outline"}>
							<Factory />
							{product?.factory.name}
						</Badge>
						{/* ---------------------------- style --------------------------- */}
						<Badge variant={"outline"}>
							<Palette />
							{product?.style?.title}
						</Badge>
						{/* ---------------------------- class --------------------------- */}
						<Badge variant={"outline"}>
							<Shapes />
							{product?.class?.title}
						</Badge>
					</div>
					{/* -------------------------- description ------------------------- */}
					<h6 className="text-start">{product?.miniDescription}</h6>
					<p>{product?.description}</p>
					{/* ------------------------------ discount ----------------------------- */}
					{product?.discount && product.discount > 0 ? <Badge variant={"default"}>خصم {product.discount}</Badge> : null}
					{/* ----------------------------- price ---------------------------- */}
					{product?.discount && product.discount > 0 ? (
						<h2 className="text-start">
							السعر النهائي بعد الخصم
							<br />
							<Badge className="ml-4" variant={"secondary"}>
								{priceAfterDiscount(product.price, product.discount)}
							</Badge>
							<Badge variant={"outline"} className="line-through text-muted-foreground">
								{Currency(product?.price)}
							</Badge>
						</h2>
					) : (
						<h2 className="text-start">
							السعر النهائي
							<br />
							<Badge variant={"secondary"}> {priceAfterDiscount(product?.price ?? 0, product?.discount ?? 0)}</Badge>
						</h2>
					)}
					{/* -------------------------- AddToCart ------------------------- */}
					<AddToCart
						product={{
							id: product?.id!,
							title: product?.title!,
							price: product?.price!,
							discount: product?.discount!,
							mainImage: product?.mainImage!,
						}}
					/>
				</div>
			</section>

			{/* -------------------------- RelatedProducts ------------------------- */}
			<section className="flex flex-col items-center justify-center gap-8 ">
				<h2 className="text-primary dark:text-secondary ">منتجات ذات صلة</h2>
				<RelatedProducts classSlug={product?.class?.slug!} />
			</section>
		</div>
	)
}
