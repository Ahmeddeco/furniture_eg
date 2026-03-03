import type { Metadata } from "next"
import "./globals.css"
import { TooltipProvider } from "@/components/ui/tooltip"
import localFont from "next/font/local"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { CircleAlert, CircleCheckBig, CircleX } from "lucide-react"
import Footer from "@/components/layout/Footer"

const Playpen = localFont({
	src: "../public/Playpen.ttf",
})

export const metadata: Metadata = {
	title: "Furniture",
	description: "The minimal stylish Furniture app in Egypt.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ar" suppressHydrationWarning dir="rtl">
			<body className={`${Playpen.className} antialiased scroll-smooth`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<TooltipProvider>
						{children}
						<Toaster
							theme="system"
							richColors
							duration={5000}
							icons={{
								success: <CircleCheckBig />,
								warning: <CircleAlert />,
								error: <CircleX />,
							}}
						/>
						<Footer />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
