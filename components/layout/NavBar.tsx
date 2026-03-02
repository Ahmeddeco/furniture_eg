import UserButton from "@/auth/UserButton"
import Logo from "./Logo"
import MobileMenu from "./MobileMenu"
import { ThemeButton } from "../theme/ThemeButton"
import FrontNavigation from "./FrontNavigation"

export default function NavBar() {
	return (
		<header className="fixed inset-0 mx-auto bg-card/30 border drop-shadow-xl text-foreground backdrop-blur-2xl lg:rounded-full rounded-none px-4 h-14 z-50 container lg:mt-4 mt-0 flex items-center justify-between ">
			{/* --------------------------------- Logo -------------------------------- */}
			<Logo />

			{/* ---------------------------- DesktopNav ---------------------------- */}
			<nav className="hidden lg:flex items-center gap-2">
				<FrontNavigation />
			</nav>
			<nav className="lg:hidden block">
				<MobileMenu />
			</nav>
			{/* ------------------------------ Socials ----------------------------- */}
			<div className="lg:flex hidden items-center gap-2">
				<ThemeButton />
				<UserButton />
			</div>
		</header>
	)
}
