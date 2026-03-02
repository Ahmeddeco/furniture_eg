import Footer from "@/components/layout/Footer"
import NavBar from "@/components/layout/NavBar"

export default function FrontEndLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<NavBar />
			<main className="min-h-dvh px-4">{children}</main>
			<Footer />
		</>
	)
}
