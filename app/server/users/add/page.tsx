import ServerPageCard from "@/components/shared/ServerPageCard"
import AddStyle from "@/forms/AddStyle"
import AddUser from "@/forms/AddUser"

export default function AddColorPage() {
	return (
		<ServerPageCard title={"Add user"} description={"Add a user to the database."} href="/server/users">
			<AddUser />
		</ServerPageCard>
	)
}
