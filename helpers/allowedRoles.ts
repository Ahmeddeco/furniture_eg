import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import {redirect} from "next/navigation"

export const allowedRoles = async (allowedRoles: string[]) => {
  const session = await auth.api.getSession({ headers: await headers() })

  if (!session || !allowedRoles.includes(session.user.role!)) {
    redirect("/")
  }
  return session
}