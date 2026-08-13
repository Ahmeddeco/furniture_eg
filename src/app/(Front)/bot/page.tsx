import BotChat from "@/components/shared/BotChat"

export default function BotPage() {
	return (
		<BotChat
			apiRoute={"/api/chat"}
			placeholder="أكتب ما تريده هنا"
			emptyTitle="مرحبا, أنا ديكو بوت"
			emptyDescription="مساعدك الذكي لاقدم لك حلولا في مساحتك الداخلية "
		/>
	)
}
