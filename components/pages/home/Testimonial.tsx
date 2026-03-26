import { ShopNowButton } from "@/components/shared/CustomButtons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"
import { testimonialData } from "@/constants/testimonial"
import { Quote } from "lucide-react"

export default function Testimonial() {
	return (
		<section className="container mx-auto flex flex-col items-center justify-center gap-8">
			{/* ------------------------------- Title ------------------------------ */}
			<div className="flex flex-col items-center justify-center gap-2">
				<h4 className="dark:text-secondary">آراء العملاء</h4>
				<h2>آراء عائلتنا من العملاء</h2>
			</div>

			{/* ------------------------------- Cards ------------------------------ */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center  gap-4  w-full">
				{testimonialData.map(({ avatar, job, name, sentence }, index) => (
					<Card
						key={index}
						className={`${index % 2 === 0 ? "bg-card text-card-foreground" : "bg-secondary text-secondary-foreground!"}  w-full `}
					>
						<CardHeader>
							<Quote fill={index % 2 === 0 ? "var(--card-foreground )" : "var(--secondary-foreground )"} size={40} />
						</CardHeader>
						<CardContent className="line-clamp-3">{sentence}</CardContent>
						<CardFooter>
							<Item variant="default" className="w-full p-0 ">
								<ItemMedia>
									<Avatar className="size-10">
										<AvatarImage src={avatar} />
										<AvatarFallback>{name[0]}</AvatarFallback>
									</Avatar>
								</ItemMedia>
								<ItemContent>
									<ItemTitle>{name}</ItemTitle>
									<ItemDescription>{job}</ItemDescription>
								</ItemContent>
								{/* <ItemActions>
									<ShopNowButton variant={index % 2 === 0 ? "secondary" : "default"} />
								</ItemActions> */}
							</Item>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	)
}
