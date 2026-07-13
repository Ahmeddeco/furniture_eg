import BotChat from "@/components/shared/BotChat"

export default function BotPage() {
	return (
		<BotChat
			apiRoute={"/api/chat"}
			placeholder={"Write what you need?"}
			emptyTitle="Hello, I'm Deco Bot"
			emptyDescription="Your smart assistant to provide you with solutions in your interior space"
		/>
	)
}
