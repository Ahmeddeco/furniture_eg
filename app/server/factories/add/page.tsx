import ServerPageCard from "@/components/shared/ServerPageCard"
import AddClass from "@/forms/AddClass"
import AddFactory from "@/forms/AddFactory"

export default function AddColorPage() {
	return (
		<ServerPageCard title={"Add factory"} description={"Add a factory to the database."} href="/server/factories">
			<AddFactory />
		</ServerPageCard>
	)
}
