import { allowedRoles } from "@/auth/allowedRoles"
import ServerPageCard from "@/components/shared/ServerPageCard"
import AddClass from "@/forms/AddClass"
import { Role } from "@/generated/prisma/enums"

export default async function AddColorPage() {
	await allowedRoles([Role.admin, Role.owner])

	return (
		<ServerPageCard title={"Add class"} description={"Add a class to the database."} href="/server/classes">
			<AddClass />
		</ServerPageCard>
	)
}
