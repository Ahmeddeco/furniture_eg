import { CircleChevronLeft } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import EmptyCard from "@/components/shared/EmptyCard"
import { getOneFactory } from "@/dl/factory.data"
import EditFactory from "@/forms/EditFactory"
import { getOneStyle } from "@/dl/styles.data"
import EditStyle from "@/forms/EditStyle"

export default async function EditClassPage({ params }: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug
	const oneStyle = await getOneStyle(slug)

	return (
		<ServerPageCard
			icon={CircleChevronLeft}
			title={"edit style"}
			description={"edit a style to the database."}
			btnTitle={"back"}
			href="/server/styles"
		>
			{!oneStyle?.data ? (
				<EmptyCard href={"/server/styles"} linkTitle={"no style found"} />
			) : (
				<EditStyle style={oneStyle.data} />
			)}
		</ServerPageCard>
	)
}
