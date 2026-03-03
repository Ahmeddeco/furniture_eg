import prisma from "@/lib/prisma"

/* ------------------------------ getAllFactory ----------------------------- */
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

/* ------------------------------ getOneFactory ----------------------------- */
export const getOneColor = async (id: string) => {
  try {
    const data = await prisma.color.findUnique({
      where: {
        id: id,
      }
    })
    return { data }
  } catch (error) {
    console.error(error)
  }
}

export const getAllFactoryForDropdown = async () => {
  try {
    const data = await prisma.factory.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true } })
    return data
  } catch (error) {
    console.error(error)
  }
}