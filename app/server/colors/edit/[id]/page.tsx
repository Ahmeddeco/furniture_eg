import { CircleChevronLeft, Palette } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import EmptyCard from "@/components/shared/EmptyCard"
import EditColor from "@/forms/EditColor"
import { getOneColor } from "@/dl/color.data"

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id
	const color = await getOneColor(id)

	return (
		<ServerPageCard
			icon={CircleChevronLeft}
			title={"edit color"}
			description={"edit a color to the database."}
			btnTitle={"back"}
			href="/server/colors"
		>
			{!color?.data ? (
				<EmptyCard href={"/server/colors"} linkTitle={"no color found"} linkIcon={Palette} />
			) : (
				<EditColor data={color.data} />
			)}
		</ServerPageCard>
	)
}
