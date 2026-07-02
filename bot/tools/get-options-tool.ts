import prisma from "@/lib/prisma"
import { createTool } from "@mastra/core/tools"
import { z } from 'zod'

export const getOptionsTool = createTool({
  id: 'get-interior-options',
  description: 'جلب جميع الـ Styles والـ Classes المتاحة في قاعدة البيانات لمساعدة العميل في الاختيار.',
  inputSchema: z.object({}), // لا تحتاج لمدخلات
  execute: async () => {
    const [classes, styles] = await Promise.all([
      prisma.class.findMany({ select: { id: true, title: true } }),
      prisma.style.findMany({ select: { id: true, title: true } }),
    ])

    return { classes, styles }
  },
})