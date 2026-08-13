import type { Metadata, Viewport } from "next"
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
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const Playpen = localFont({
	src: "../../public/fonts/Playpen.ttf",
})

/* -------------------------------- APP_INFO -------------------------------- */
const APP_NAME = "FURNITURE"
const APP_DEFAULT_TITLE = "FURNITURE"
const APP_TITLE_TEMPLATE = "%s - FURNITURE"
const APP_DESCRIPTION = "Furniture Store | Online Furniture Store in Egypt."
const baseUrl = process.env.NEXT_PUBLIC_APP_URL
	? process.env.NEXT_PUBLIC_APP_URL
	: process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: "https://furniture-egy.vercel.app/"

/* -------------------------------- Metadata -------------------------------- */
export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),

	applicationName: APP_NAME,
	title: {
		default: APP_DEFAULT_TITLE,
		template: APP_TITLE_TEMPLATE,
	},
	description: APP_DESCRIPTION,
	manifest: "/manifest.json",
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: APP_NAME,
	},
	formatDetection: {
		telephone: false,
	},
	icons: {
		icon: [
			{ url: "/icons/manifest-icon-192.maskable.png", sizes: "192x192", type: "image/png" },
			{ url: "/icons/manifest-icon-512.maskable.png", sizes: "512x512", type: "image/png" },
		],
		apple: [{ url: "/icons/apple-icon-180.png", sizes: "180x180", type: "image/png" }],
	},
}

/* -------------------------------- Viewport -------------------------------- */
export const viewport: Viewport = {
	themeColor: "#ffe066",
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
