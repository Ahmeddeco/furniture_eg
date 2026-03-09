import { allowedRoles } from "@/auth/allowedRoles"
import ServerPageCard from "@/components/shared/ServerPageCard"
import AddColor from "@/forms/AddColor"
import { Role } from "@/generated/prisma/enums"

export default async function AddColorPage() {
	await allowedRoles([Role.admin, Role.owner])

	return (
		<ServerPageCard title={"Add Color"} description={"Add a Color to the database."} href="/server/colors">
			<AddColor />
		</ServerPageCard>
	)
}
