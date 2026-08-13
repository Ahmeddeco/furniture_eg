import prisma from "@/lib/prisma"
import { createTool } from "@mastra/core/tools"
import { z } from 'zod'

export const searchFurnitureTool = createTool({
  id: 'search-furniture',
  description: 'البحث عن قطع الأثاث والمنتجات بناءً على الـ Class ID والـ Style ID المختارين.',
  inputSchema: z.object({
    classId: z.string().optional(),
    styleId: z.string().optional(),
  }),
  execute: async (input) => {
    const { classId, styleId } = input

    const products = await prisma.product.findMany({
      where: {
        status: 'published',
        ...(classId && { classId }),
        ...(styleId && { styleId }),
      },
      select: {
        id: true,
        title: true,
        mainImage: true,
        price: true,
        discount: true,
        miniDescription: true,
        description: true,
      },
      take: 5, // جلب عدد قليل ليقوم الوكيل بفلترتها واختيار الأفضل منها
    })

    return { products }
  },
})