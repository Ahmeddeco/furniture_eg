import { ShopByQueryButton } from "@/components/shared/CustomButton"

export default function OffersBanner() {
	return (
		<section className="container mx-auto flex flex-col gap-4">
			{/* -------------------------------- Top ------------------------------- */}
			<div className="w-full grid items-center justify-center gap-4 grid-cols-1 lg:grid-cols-2">
				{/* ------------------------------ Right ----------------------------- */}
				<div className="relative  col-span-1 w-full h-full aspect-square bg-[url('/images/orangeLoungeChair.webp')] bg-cover bg-bottom rounded-2xl">
					<div className="absolute top-6 inset-x-0 flex flex-col items-center justify-center gap-2">
						<h5 className=" text-center text-neutral-900">
							خصم يصل الى 60% <br />
							للأثاث والإكسسوارات
						</h5>
						<ShopByQueryButton query="discount=60" />
					</div>
				</div>

				{/* ------------------------------ Left ------------------------------ */}
				<div className="relative  flex flex-col gap-4 col-span-1">
					{/* ------------------------------ LeftTop ------------------------------ */}
					<div className="relative lg:h-1/2 bg-[url('/images/whiteSofa.webp')] bg-cover bg-bottom rounded-2xl aspect-2/1">
						<div className="absolute top-6 inset-x-0 flex flex-col items-center justify-center gap-2">
							<h5 className=" text-center text-neutral-900">
								خصم يصل الى 60% <br />
								للأثاث والإكسسوارات
							</h5>
							<ShopByQueryButton query="discount=30" />
						</div>
					</div>
					{/* ----------------------------- LeftBottom ---------------------------- */}
					<div className="relative lg:h-1/2 bg-[url('/images/blueSofa.webp')] bg-cover bg-bottom rounded-2xl aspect-2/1">
						<div className="absolute top-6 inset-x-0 flex flex-col items-center justify-center gap-2">
							<h5 className=" text-center text-neutral-900">
								خصم يصل الى 60% <br />
								للأثاث والإكسسوارات
							</h5>
							<ShopByQueryButton query="discount=10" />
						</div>
					</div>
				</div>
			</div>

			{/* ------------------------------ Bottom ------------------------------ */}
			<div className="relative w-full h-auto min-h-40 bg-[url('/images/lamp.webp')]  bg-cover bg-center rounded-2xl lg:aspect-12/2 aspect-12/3  ">
				<div className="absolute right-12  inset-y-1/2 flex flex-col items-center justify-center gap-2">
					<h5 className=" text-center text-neutral-100">
						خصم يصل الى 10% <br />
						للنجف ووحدات الاضائة
					</h5>
					<ShopByQueryButton query="class=modern&discount=10" />
				</div>
			</div>
		</section>
	)
}
