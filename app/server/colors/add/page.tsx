import ServerPageCard from "@/components/shared/ServerPageCard"
import AddColor from "@/forms/AddColor"

export default function AddColorPage() {
	return (
		<ServerPageCard title={"Add Color"} description={"Add a Color to the database."} href="/server/colors">
			<AddColor />
		</ServerPageCard>
	)
}
