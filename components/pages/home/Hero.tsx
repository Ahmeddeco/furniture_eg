import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ceilingLamp from "@/public/images/ceilingLamp.webp"

export default function Hero() {
	return (
		<section className="h-[80vh] lg:mx-6 mx-0 rounded-b-4xl flex relative  ">
			{/* ------------------------------ background ----------------------------- */}
			<div className="bg-foreground h-full  rounded-br-4xl absolute w-1/2 lg:w-1/3 top-0 right-0 z-10" />
			<div className="bg-card h-full  rounded-bl-4xl  absolute w-1/2 lg:w-2/3 top-0 left-0 z-10" />

			{/* ----------------------------- ceilingLamp ----------------------------- */}
			<div className="absolute z-20 lg:-top-28 top-12 lg:right-96 left-2 ">
				<Image src={ceilingLamp} alt={"ceiling Lamp"} className="object-contain  " />
			</div>

			{/* ----------------------------- leftLamp ----------------------------- */}
			<div className="absolute lg:block hidden z-20  top-12 left-60 ">
				<Image src={ceilingLamp} alt={"ceiling Lamp"} className="object-contain  " />
			</div>

			{/* --------------------------------- Vase -------------------------------- */}
			<div className="absolute lg:h-[60vh] h-[40vh] z-20 lg:bottom-32 bottom-12 right-0 lg:-right-10">
				<div className="relative aspect-9/16 h-full">
					<Image src={"/images/vase2.webp"} alt={"vase2"} fill className="object-contain " />
				</div>
			</div>

			{/* --------------------------------- sofa -------------------------------- */}
			<div className="absolute lg:bottom-12 bottom-0 lg:right-24 left-4 h-[22vh] lg:h-[40vh] z-20">
				<div className=" relative aspect-video h-full ">
					<Image src={"/images/sofa1.webp"} alt={"hero sofa"} fill className="object-contain object-bottom" />
				</div>
			</div>

			{/* -------------------------------- Text -------------------------------- */}
			<div className="h-full w-full z-20 flex items-start lg:items-center justify-center">
				<Card className=" w-fit! m-8 flex flex-col gap-4 justify-center  bg-card/50 shadow-none backdrop-blur-md ">
					<CardHeader>
						<CardTitle>
							<h5>discover timeless comfort and style</h5>
							<h1>furniture</h1>
						</CardTitle>
					</CardHeader>
					<CardContent>
						<h6 className="max-w-md">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores ad doloribus ducimus beatae provident
							corrupti ullam nulla vel illo iste porro architecto, perspiciatis dignissimos voluptas exercitationem
							tempore voluptates et?
						</h6>
					</CardContent>
					<CardFooter className="gap-4">
						<Button asChild>
							<Link href={"/shop"}>
								shop now <ShoppingBag />
							</Link>
						</Button>
						<Button asChild variant={"outline"}>
							<Link href={"/contact"}>
								contact us <Phone />
							</Link>
						</Button>
					</CardFooter>
				</Card>
			</div>
		</section>
	)
}
