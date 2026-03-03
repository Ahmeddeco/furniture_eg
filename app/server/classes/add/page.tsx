import ServerPageCard from "@/components/shared/ServerPageCard"
import AddClass from "@/forms/AddClass"

export default function AddColorPage() {
	return (
		<ServerPageCard title={"Add class"} description={"Add a class to the database."} href="/server/classes">
			<AddClass />
		</ServerPageCard>
	)
}
