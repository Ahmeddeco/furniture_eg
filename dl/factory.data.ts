import prisma from "@/lib/prisma"

/* ----------------------------- getAllFactories ---------------------------- */
export const getAllFactories = async (size: number, page: number) => {
  try {
    const totalColors = await prisma.factory.count()
    const totalPages = Math.ceil(totalColors / size)
    const data = await prisma.factory.findMany({
      skip: (page * size) - size,
      take: size,
      orderBy: {
        name: "asc",
      },
    })
    return { data, totalPages }
  } catch (error) {
    console.error(error)
  }
}

/* ---------------------------- getOneFactory ------------------------------ */
export const getOneFactory = async (slug: string) => {
  try {
    const data = await prisma.factory.findUnique({
      where: {
        slug
      }
    })
    return { data }
  } catch (error) {
    console.error(error)
  }
}
