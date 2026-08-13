import { getAllClassesForProductPage } from "@/dl/class.data"
import { ImageOff } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default async function FindWhatYouNeed() {
	const classes = await getAllClassesForProductPage()

	return (
		<section className="container mx-auto flex flex-col items-center justify-center gap-8 mb-8">
			<div className="flex flex-col items-center justify-center gap-2">
				<h4 className="text-secondary">تسوق بنوع المنتج</h4>
				<h2>ستجد لدينا كل ما تحتاجه</h2>
			</div>
			<div className="w-full ">
				<Carousel className="w-full  " opts={{ direction: "rtl", align: "center" }}>
					<CarouselContent className="lg:flex lg:justify-center ">
						{classes?.map(
							({ image, title, id, slug }: { image: string | null; title: string; id: string; slug: string }) => (
								<CarouselItem key={id} className="basis-1/2 md:basis-1/4 lg:basis-1/6 flex justify-center">
									<Link
										className="w-fit flex flex-col items-center justify-center gap-2 hover:scale-95 duration-500 ease-in-out "
										href={`/shop/classes/${slug}`}
										key={id}
									>
										<div className="flex flex-col gap-4 items-center justify-center">
											<div className="relative rounded-full  shadow-lg lg:size-44  size-32 ">
												{image ? (
													<Image src={image} alt={title} fill className="object-cover rounded-full" />
												) : (
													<ImageOff />
												)}
											</div>
											<h4>{title}</h4>
										</div>
									</Link>
								</CarouselItem>
							),
						)}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	)
}
