import type { Metadata } from "next"
import "./globals.css"
import { TooltipProvider } from "@/components/ui/tooltip"
import localFont from "next/font/local"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { CircleAlert, CircleCheckBig, CircleX } from "lucide-react"
import Footer from "@/components/layout/Footer"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin"
import { extractRouterConfig } from "uploadthing/server"
import { ourFileRouter } from "@/app/api/uploadthing/core"
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

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
		<html lang="ar" dir="rtl" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
			<body className={`${Playpen.className} antialiased scroll-smooth`}>
				<NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
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
					</TooltipProvider>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
