import { allowedRoles } from "@/auth/allowedRoles"
import ServerPageCard from "@/components/shared/ServerPageCard"
import AddStyle from "@/forms/AddStyle"
import AddUser from "@/forms/AddUser"
import { Role } from "@/generated/prisma/enums"

export default async function AddColorPage() {
	await allowedRoles([Role.admin, Role.owner])

	return (
		<ServerPageCard title={"Add user"} description={"Add a user to the database."} href="/server/users">
			<AddUser />
		</ServerPageCard>
	)
}
