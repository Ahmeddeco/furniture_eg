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
			<div className=" flex flex-wrap items-center lg:justify-between justify-center gap-6 lg:gap-12 lg:w-7xl w-full">
				{categories.map(({ image, title, count }, index) => (
					<Link
						className="w-fit flex flex-col items-center justify-center gap-2 hover:scale-95 duration-500 ease-in-out"
						href={`/shop/?category=${title}`}
						key={index}
					>
						<div className="flex flex-col gap-4 items-center justify-center">
							<div className="relative rounded-full size-32">
								<Image src={image} alt={title} fill className="object-cover rounded-full" />
							</div>
							<div className="flex flex-col gap-1 items-center justify-center">
								<h4>{title}</h4>
								<p>{count} Products</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	)
}
