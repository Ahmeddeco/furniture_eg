import { getAllClassesForProductPage } from "@/dl/class.data"
import { ImageOff } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default async function FindWhatYouNeed() {
	const classes = await getAllClassesForProductPage()

	return (
		<section className="flex flex-col items-center justify-center gap-8">
			<div className="flex flex-col items-center justify-center gap-2">
				<h4>shop by category</h4>
				<h2>find what you need</h2>
			</div>
			<div className=" flex flex-wrap items-center lg:justify-between justify-center gap-6 lg:gap-12 lg:w-7xl w-full">
				{classes!.map(({ image, title, id, slug }) => (
					<Link
						className="w-fit flex flex-col items-center justify-center gap-2 hover:scale-95 duration-500 ease-in-out"
						href={`/shop/?class=${slug}`}
						key={id}
					>
						<div className="flex flex-col gap-4 items-center justify-center">
							<div className="relative rounded-full size-32">
								{image ? <Image src={image} alt={title} fill className="object-cover rounded-full" /> : <ImageOff />}
							</div>
							<div className="flex flex-col gap-1 items-center justify-center">
								<h4>{title}</h4>
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	)
}
