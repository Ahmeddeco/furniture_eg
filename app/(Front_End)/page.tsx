import BestModernFurniture from "@/components/pages/home/BestModernFurniture"
import FindWhatYouNeed from "@/components/pages/home/FindWhatYouNeed"
import Hero from "@/components/pages/home/Hero"
import OffersBanner from "@/components/pages/home/OffersBanner"
import OurLatestProducts from "@/components/pages/home/OurLatestProducts"
import Testimonial from "@/components/pages/home/Testimonial"
import TheMostFavorite from "@/components/pages/home/TheMostFavorite"
import { ProductFilterType } from "@/types/product.type"

export default async function HomePage({ searchParams }: { searchParams: Promise<{ filter: ProductFilterType }> }) {
	return (
		<>
			<Hero />
			<FindWhatYouNeed />
			<OurLatestProducts />
			<TheMostFavorite />
			<OffersBanner />
			<BestModernFurniture searchParams={searchParams} />
			<Testimonial />
		</>
	)
}
