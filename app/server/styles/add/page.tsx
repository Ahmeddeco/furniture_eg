import ServerPageCard from "@/components/shared/ServerPageCard"
import AddStyle from "@/forms/AddStyle"

export default function AddColorPage() {
	return (
		<ServerPageCard title={"Add style"} description={"Add a style to the database."} href="/server/styles">
			<AddStyle />
		</ServerPageCard>
	)
}
