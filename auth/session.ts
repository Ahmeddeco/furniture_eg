'use server'

import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export const isSession = async () => {
  const session = await auth.api.getSession({ headers: await headers() })
  return session
}