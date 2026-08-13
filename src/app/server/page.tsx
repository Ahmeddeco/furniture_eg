import { Role } from "@/generated/prisma/enums"
import { isAllowedRoles } from "@/auth/isAllowedRoles"

export default async function ServerPage() {
	await isAllowedRoles([Role.admin, Role.owner])

	return <h1>Welcome to Server page!</h1>
}
