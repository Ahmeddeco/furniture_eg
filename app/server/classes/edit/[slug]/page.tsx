import { CircleChevronLeft } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import EmptyCard from "@/components/shared/EmptyCard"
import { getOneClass } from "@/dl/class.data"
import EditClass from "@/forms/EditClass"

export default async function EditClassPage({ params }: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug
	const oneClass = await getOneClass(slug)

	return (
		<ServerPageCard
			icon={CircleChevronLeft}
			title={"edit color"}
			description={"edit a color to the database."}
			btnTitle={"back"}
			href="/server/classes"
		>
			{!oneClass?.data ? (
				<EmptyCard href={"/server/classes"} linkTitle={"no class found"} />
			) : (
				<EditClass data={oneClass.data} />
			)}
		</ServerPageCard>
	)
}
