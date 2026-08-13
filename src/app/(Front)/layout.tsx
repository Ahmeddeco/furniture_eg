import Header from "@/components/layout/Header"

export default function FrontEndLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main className="min-h-dvh px-4 ">{children}</main>
		</>
	)
}
