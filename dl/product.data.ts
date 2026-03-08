import prisma from "@/lib/prisma"

/* ----------------------------- getAllProducts ---------------------------- */
export const getAllProducts = async (size: number, page: number) => {
  try {
    const totalProducts = await prisma.product.count()
    const totalPages = Math.ceil(totalProducts / size)
    const data = await prisma.product.findMany({
      skip: (page * size) - size,
      take: size,
      orderBy: { title: "asc" },
    })
    return { data, totalPages }
  } catch (error) {
    console.error(error)
  }
}

/* ---------------------------- getOneProduct ------------------------------ */
export const getOneProduct = async (id: string) => {
  try {
    const data = await prisma.product.findUnique({
      where: { id },
      include: {
        class: { select: { id: true, title: true } },
        color: { select: { id: true, title: true } },
        style: { select: { id: true, title: true } },
        factory: { select: { id: true, name: true } },
      }
    })
    return data
  } catch (error) {
    console.error(error)
  }
}
