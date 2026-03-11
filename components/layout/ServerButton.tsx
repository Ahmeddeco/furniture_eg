import Link from "next/link"
import { Button } from "../ui/button"
export default function ServerButton() {
	return (
		<Button asChild size={"sm"} variant={"outline"}>
			<Link href={"/server"}>server</Link>
		</Button>
	)
}
