import {Role} from "@/generated/prisma/enums"
import {allowedRoles} from "@/helpers/allowedRoles"

export default async function ServerPage() {
	const session = await allowedRoles([Role.admin, Role.owner])
	return <h1>Welcome to Server page!</h1>
}
