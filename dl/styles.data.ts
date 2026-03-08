import prisma from "@/lib/prisma"

/* ----------------------------- getAllStyles ---------------------------- */
export const getAllStyles = async (size: number, page: number) => {
  try {
    const totalColors = await prisma.style.count()
    const totalPages = Math.ceil(totalColors / size)
    const data = await prisma.style.findMany({
      skip: (page * size) - size,
      take: size,
      orderBy: {
        title: "asc",
      },
    })
    return { data, totalPages }
  } catch (error) {
    console.error(error)
  }
}

/* ---------------------------- getOneStyle ------------------------------ */
export const getOneStyle = async (slug: string) => {
  try {
    const data = await prisma.style.findUnique({
      where: {
        slug
      }
    })
    return { data }
  } catch (error) {
    console.error(error)
  }
}

export const getAllStylesForProductPage = async () => {
  try {
    const data = await prisma.style.findMany({
      select: { id: true, title: true },
      orderBy: { title: "asc" },
    })
    return data
  } catch (error) {
    console.error(error)
  }
}