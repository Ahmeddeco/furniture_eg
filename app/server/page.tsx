import { Role } from "@/generated/prisma/enums"
import { allowedRoles } from "@/auth/allowedRoles"

export default async function ServerPage() {
	await allowedRoles([Role.admin, Role.owner])

	return <h1>Welcome to Server page!</h1>
}
