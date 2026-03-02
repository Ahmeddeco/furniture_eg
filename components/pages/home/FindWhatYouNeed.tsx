import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { categories } from "@/constants/categories"
import Image from "next/image"
import Link from "next/link"

export default function FindWhatYouNeed() {
	// TODO Delete categories and link the categories with category table in the database.
	return (
		<section className="flex flex-col items-center justify-center gap-8">
			<div className="flex flex-col items-center justify-center gap-2">
				<h4>shop by category</h4>
				<h2>find what you need</h2>
			</div>
			<div className=" flex flex-wrap items-center justify-center gap-6 lg:gap-12">
				{categories.map(({ image, title, count }, index) => (
					<Link
						className="w-fit flex flex-col items-center justify-center gap-2 hover:scale-95 duration-500 ease-in-out"
						href={`/shop/?category=${title}`}
						key={index}
					>
						<Card className="pt-0">
							<CardHeader className="lg:w-3xs w-44 relative aspect-square ">
								<Image src={image} alt={title} fill className="object-cover rounded-t-xl  " />
							</CardHeader>
							<CardFooter className="flex flex-col items-center justify-center gap-1">
								<h4>{title}</h4>
								<p>{`${count} products`}</p>
							</CardFooter>
						</Card>
					</Link>
				))}
			</div>
		</section>
	)
}
