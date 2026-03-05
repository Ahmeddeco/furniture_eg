import { CircleChevronLeft } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import EmptyCard from "@/components/shared/EmptyCard"
import { getOneFactory } from "@/dl/factory.data"
import EditFactory from "@/forms/EditFactory"

export default async function EditClassPage({ params }: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug
	const oneFactory = await getOneFactory(slug)

	return (
		<ServerPageCard
			icon={CircleChevronLeft}
			title={"edit factory"}
			description={"edit a factory to the database."}
			btnTitle={"back"}
			href="/server/factories"
		>
			{!oneFactory?.data ? (
				<EmptyCard href={"/server/factories"} linkTitle={"no factory found"} />
			) : (
				<EditFactory factory={oneFactory.data} />
			)}
		</ServerPageCard>
	)
}
