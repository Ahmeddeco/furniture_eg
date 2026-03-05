import { CircleChevronLeft } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import EmptyCard from "@/components/shared/EmptyCard"
import EditColor from "@/forms/EditColor"
import { getOneColor } from "@/dl/color.data"

export default async function EditUserPage({ params }: { params: Promise<{ title: string }> }) {
	const title = (await params).title
	const color = await getOneColor(title)

	return (
		<ServerPageCard
			icon={CircleChevronLeft}
			title={"edit color"}
			description={"edit a color to the database."}
			btnTitle={"back"}
			href="/server/colors"
		>
			{!color?.data ? (
				<EmptyCard href={"/server/colors"} linkTitle={"no color found"} />
			) : (
				<EditColor data={color.data} />
			)}
		</ServerPageCard>
	)
}
