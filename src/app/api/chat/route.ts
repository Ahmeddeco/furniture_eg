/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUIMessageStream, createUIMessageStreamResponse } from "ai"
// import { toAISdkStream } from "@mastra/ai-sdk"
import { mastra } from "@/bot"

export const maxDuration = 300

export async function POST(req: Request) {
  const { messages } = await req.json()

  const agent = mastra.getAgent("interiorDesignerAgent")
  const stream = await agent.stream(messages)

  const uiMessageStream = createUIMessageStream({
    originalMessages: messages,
    execute: async ({ writer }) => {
      const streamIterable = stream as unknown as AsyncIterable<any>

      for await (const chunk of streamIterable) {
        // for await (const part of toAISdkStream(stream, { from: "agent" })) {
        if (chunk.type !== "finish") {
          writer.write(chunk)
        }
      }
    },
  })

  return createUIMessageStreamResponse({ stream: uiMessageStream })
}