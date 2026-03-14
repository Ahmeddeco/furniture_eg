/* */
import Link from "next/link"
import { Button, buttonVariants } from "../ui/button"
import { ShoppingBag } from "lucide-react"
import { VariantProps } from "class-variance-authority"

/* ------------------------------ ShopNowButton ----------------------------- */
export function ShopNowButton({
	id,
	variant,
}: {
	id?: string
	variant?: VariantProps<typeof buttonVariants>["variant"]
}) {
	return (
		<Button asChild variant={variant || "secondary"} size="lg">
			<Link href={id ? `/shop/${id}` : `/shop`}>
				<ShoppingBag />
				إشتري الآن
			</Link>
		</Button>
	)
}

/* --------------------------- ShopByQueryButton ---------------------------- */
export function ShopByQueryButton({
	query,
	variant,
}: {
	query: string
	variant?: VariantProps<typeof buttonVariants>["variant"]
}) {
	return (
		<Button asChild variant={variant || "secondary"} size="sm">
			<Link href={`/shop?${query}`}>
				<ShoppingBag />
				إشتري الآن
			</Link>
		</Button>
	)
}
