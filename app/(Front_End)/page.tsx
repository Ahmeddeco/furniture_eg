import { session } from "@/auth/session"
import SignIn from "@/auth/SignIn"
import SignOut from "@/auth/signOut"

export default async function HomePage() {
	const Session = await session()
	console.log("Session from HomePage", Session)

	return (
		<div className="">
			<h1>Welcome to Homepage!</h1>
			<SignIn />
			<SignOut />
		</div>
	)
}
