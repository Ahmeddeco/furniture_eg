import { Button } from "../ui/button"
import { Heart } from "lucide-react"

type Props = {}
// TODO Add logic to FavoriteButton

export default function FavoriteButton({}: Props) {
	return (
		<Button variant={"ghost"} size={"icon-lg"}>
			<Heart />
		</Button>
	)
}
