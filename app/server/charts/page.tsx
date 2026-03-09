import { allowedRoles } from "@/auth/allowedRoles"
import { Role } from "@/generated/prisma/enums"

export default async function ChartsPage() {
	await allowedRoles([Role.admin, Role.owner])

	return <h1>Welcome to Chartspage!</h1>
}
