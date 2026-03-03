import Link from "next/link"
import { Armchair } from "lucide-react"

export default function Logo() {
	return (
		<Link href={"/"} className="flex items-center gap-1">
			<Armchair size={32} className="text-secondary dark:text-primary" />
			<h4>furniture</h4>
		</Link>
	)
}
