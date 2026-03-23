"use client"

import { useCartStore } from "@/store/cartStore"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet"
import { Minus, Plus, ShoppingCart, X } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Currency, formatCurrency } from "@/helpers/currency"
import { CheckOutButton } from "@/components/shared/CustomButtons"
import { priceInfo, totalPrice } from "@/helpers/price.logic"

type Props = {
	tax?: number
}

export default function Cart({ tax = 10 }: Props) {
	const { items, removeFromCart, updateQuantity } = useCartStore((state) => state)

	// const subTotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
	// const taxValue = subTotal * tax
	// const total = subTotal + taxValue
	const { subTotal, taxValue, total } = priceInfo(items, tax)
	return (
		<Sheet>
			<SheetTrigger>
				<div className="relative">
					<ShoppingCart />
					<div className="rounded-full bg-primary size-5 absolute -bottom-2 -right-2 flex items-center justify-center">
						<span className="text-xs font-medium flex items-center justify-center text-foreground">{items.length}</span>
					</div>
				</div>
			</SheetTrigger>
			<SheetContent className="max-w-lg w-[90vw]">
				<SheetHeader className="h-[8vh]">
					<SheetTitle className="flex items-center justify-center gap-2 ">
						<ShoppingCart className="text-primary dark:text-secondary" /> سلة المشتريات
					</SheetTitle>
				</SheetHeader>
				<Separator />
				<ScrollArea dir="rtl" className="flex flex-col gap-4 p-4 w-full h-full max-h-[55vh] ">
					{items.map(({ id, image, price, quantity, title }) => (
						<div key={id} className="h-full mb-4 border rounded-xl">
							<div className="flex items-start p-2 gap-4  justify-between h-full">
								<div className="w-1/4 relative aspect-square">
									<Image src={image} alt={title} fill className="rounded-md object-cover" />
								</div>
								<div className="w-3/4 flex items-start justify-between h-full ">
									{/* ---------------------------------- Text ---------------------------------- */}
									<div className="flex flex-col items-center justify-center gap-1 h-full w-full ">
										<h6>{title}</h6>
										<p className="text-xs">السعر : {formatCurrency(price)}</p>

										{/* -------------------------------- quantity -------------------------------- */}
										<div className=" flex items-center justify-center gap-2 ">
											<Button
												variant={"outline"}
												size={"icon-sm"}
												type="button"
												onClick={() => {
													updateQuantity("decrement", id)
												}}
											>
												<Minus />
											</Button>
											<Button size={"default"} type="button" className="cursor-not-allowed">
												{quantity}
											</Button>
											<Button
												variant={"outline"}
												size={"icon-sm"}
												type="button"
												onClick={() => {
													updateQuantity("increment", id)
												}}
											>
												<Plus />
											</Button>
										</div>
									</div>

									{/* ---------------------------------- Total --------------------------------- */}
									<div className="flex flex-col items-end gap-8">
										<Button size={"icon-sm"} type="button" className="rounded-full" onClick={() => removeFromCart(id)}>
											<X />
										</Button>
										<p className="text-primary dark:text-secondary font-semibold">{totalPrice(price, quantity)}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</ScrollArea>
				<SheetFooter className="h-[30vh] ">
					<Card className="h-full">
						<CardContent className="flex flex-col gap-4 h-full">
							<div className="flex items-center justify-between">
								<h6>المجموع</h6>
								<p>{Currency(subTotal)}</p>
							</div>
							<Separator />
							<div className="flex items-center justify-between">
								<h6>الضريبة</h6>
								<p>{Currency(taxValue)}</p>
							</div>
							<Separator />
							<div className="flex items-center justify-between">
								<h6>الإجمالي</h6>
								<p>{Currency(total)}</p>
							</div>

							{/*  Add a checkout method with payment service like paymob or kashir*/}
							<CheckOutButton />
						</CardContent>
					</Card>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
