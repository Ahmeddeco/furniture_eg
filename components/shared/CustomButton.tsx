import Link from "next/link"
import { Button } from "../ui/button"
import { ShoppingBag } from "lucide-react"

/* ------------------------------ ShopNowButton ----------------------------- */
export function ShopNowButton({ id }: { id?: string }) {
	return (
		<Button asChild>
			<Link href={id ? `/shop/${id}` : `/shop`}>
				<ShoppingBag />
				إشتري الآن
			</Link>
		</Button>
	)
}
