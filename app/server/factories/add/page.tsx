import ServerPageCard from "@/components/shared/ServerPageCard"
import { getAllUsersForFactoriesPage } from "@/dl/users.data"
import AddFactory from "@/forms/AddFactory"

export default async function AddColorPage() {
	const users = await getAllUsersForFactoriesPage()

	return (
		<ServerPageCard title={"Add factory"} description={"Add a factory to the database."} href="/server/factories">
			<AddFactory users={users} />
		</ServerPageCard>
	)
}
