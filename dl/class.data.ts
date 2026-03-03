import prisma from "@/lib/prisma"

/* ------------------------------ getAllFactory ----------------------------- */
export const getAllClasses = async (size: number, page: number) => {
  try {
    const totalColors = await prisma.class.count()
    const totalPages = Math.ceil(totalColors / size)
    const data = await prisma.class.findMany({
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

/* ------------------------------ getOneClass ------------------------------- */
export const getOneClass = async (slug: string) => {
  try {
    const data = await prisma.class.findUnique({
      where: {
        slug
      }
    })
    return { data }
  } catch (error) {
    console.error(error)
  }
}
