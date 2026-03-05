import prisma from "@/lib/prisma"

/* ------------------------------ getAllColors ----------------------------- */
export const getAllColors = async (size: number, page: number) => {
  try {
    const totalColors = await prisma.color.count()
    const totalPages = Math.ceil(totalColors / size)
    const data = await prisma.color.findMany({
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

/* ------------------------------ getOneColor ----------------------------- */
export const getOneColor = async (slug: string) => {
  try {
    const data = await prisma.color.findUnique({
      where: {
        slug
      }
    })
    return { data }
  } catch (error) {
    console.error(error)
  }
}

