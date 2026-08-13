
import { Mastra } from '@mastra/core/mastra'
import { storage } from "@/bot/storage"
import { chatRoute } from "@mastra/ai-sdk"
import { MastraEditor } from '@mastra/editor'
import { interiorDesignerAgent } from "@/bot/agents/interior-designer-agent"



export const mastra = new Mastra({
  agents: { interiorDesignerAgent },
  storage,
  server: {
    apiRoutes: [
      chatRoute({
        path: '/chat',
        agent: 'interiorDesignerAgent',
      }),
    ],
  },
  editor: new MastraEditor(),
})
