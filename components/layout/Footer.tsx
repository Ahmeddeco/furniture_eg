import Link from "next/link"
import Logo from "./Logo"
import { Separator } from "../ui/separator"
import { Copyright, ExternalLink } from "lucide-react"
import Socials from "./Socials"
import { Button } from "../ui/button"
import { ourProducts, speedLinks } from "@/constants/footer"
import { Badge } from "../ui/badge"

export default function Footer() {
	return (
		<footer className="bg-foreground text-background py-16 px-6">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-right" dir="rtl">
					{/* 1. قسم من نحن */}
					<div className="flex flex-col gap-6 items-start">
						<Logo />
						<h6 className="text-sm leading-relaxed opacity-80 max-w-xs">
							نحن في فرنش اسم موثوق في عالم الأثاث عالي الجودة منذ عام 1994، نقدم قطعاً مصنوعة بعناية لتضفي الراحة
							والأناقة على منزلك.
						</h6>
						<Socials />
					</div>

					{/* 2. قسم منتجاتنا */}
					<div className="flex flex-col items-center gap-4">
						<h4>منتجاتنا</h4>
						<nav className="flex flex-col gap-2 ">
							{ourProducts.map(({ href, title }) => (
								<Button asChild variant={"ghost"} className="justify-start  " key={href} size={"sm"}>
									<Link href={href}>أثاث {title}</Link>
								</Button>
							))}
						</nav>
					</div>

					{/* 3. روابط سريعة */}
					<div className="flex flex-col gap-4">
						<h4 className="font-bold text-lg">روابط سريعة</h4>
						<nav className="flex flex-col gap-2 ">
							{speedLinks.map(({ href, title }, index) => (
								<Button asChild variant={"ghost"} className="justify-start  " key={index} size={"sm"}>
									<Link href={href}> {title}</Link>
								</Button>
							))}
						</nav>
					</div>

					{/* 4. انضم لعائلتنا مع Button asChild */}
					<div className="flex flex-col gap-6">
						<h4 className="font-bold text-lg">انضم لعائلتنا</h4>
						<h6 className="text-sm opacity-80 leading-relaxed">
							تابعنا للحصول على إلهام يومي لتصميم منزلك وأحدث العروض الحصرية.
						</h6>

						{/* استخدام Button بداخله Link عبر خاصية asChild */}
						<Button asChild variant="secondary">
							<Link href="/information">
								تعرف علينا أكثر
								<ExternalLink />
							</Link>
						</Button>
					</div>
				</div>

				<Separator className="bg-background/20 mb-8" />

				{/* حقوق النشر */}
				<div className="flex flex-col md:flex-row justify-between items-center gap-4 opacity-75">
					<Badge dir="ltr">
						<Copyright />
						<h6>2026 Ahmed Elgazzar. All rights reserved.</h6>
					</Badge>
					<div className="flex items-center justify-center gap-8">
						<Button asChild variant={"outline"}>
							<Link href="#">سياسة الخصوصية</Link>
						</Button>
						<Button asChild variant={"outline"}>
							<Link href="#">شروط الخدمة</Link>
						</Button>
					</div>
				</div>
			</div>
		</footer>
	)
}
