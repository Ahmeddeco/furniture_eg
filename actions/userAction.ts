'use server'

import prisma from "@/lib/prisma"
import UserSchema from "@/schemas/UserSchema"
import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation"
/* ------------------------------ addUserAction ----------------------------- */
export const addUserAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: UserSchema,
  })
  if (submission.status !== 'success') {
    return submission.reply()
  }
  try {
    await prisma.user.upsert({
      where: {
        email: submission.value.email!,
      },
      update: {
        name: submission.value.name,
        mobile: submission.value.mobile,
        country: submission.value.country,
        state: submission.value.state,
        city: submission.value.city,
        image: submission.value.image,
        role: submission.value.role,
      },
      create: {
        name: submission.value.name,
        email: submission.value.email,
        mobile: submission.value.mobile,
        country: submission.value.country,
        state: submission.value.state,
        city: submission.value.city,
        image: submission.value.image,
        role: submission.value.role,
      },
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/users")
}


/* ----------------------------- editUserAction ----------------------------- */
export const editUserAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: UserSchema,
  })
  if (submission.status !== 'success') {
    return submission.reply()
  }
  try {
    await prisma.user.update({
      where: {
        id: submission.value.id!
      },
      data: {
        name: submission.value.name,
        email: submission.value.email,
        mobile: submission.value.mobile,
        country: submission.value.country,
        state: submission.value.state,
        city: submission.value.city,
        image: submission.value.image,
        role: submission.value.role,
      }
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/users")
}

/* ------------------------------- deleteUser ------------------------------- */
export const deleteUser = async (formData: FormData) => {
  const id = formData.get("id")
  try {
    await prisma.user.delete({
      where: {
        id: id as string
      }
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/users")
}