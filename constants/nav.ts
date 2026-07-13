import { Home, MapPin, Newspaper, Package2, Server, Smartphone, Users } from "lucide-react"
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"
import { RiRobot3Line } from "react-icons/ri"


export const frontNavLinks = [
  {
    title: "الرئيسية",
    href: "/",
    icon: Home
  },
  {
    title: "منتجاتنا",
    href: "/shop",
    icon: Package2
  },
  {
    title: "عملائنا",
    href: "/clients",
    icon: Users
  },
  {
    title: "مقالاتنا",
    href: "/articles",
    icon: Newspaper
  },
  {
    title: "bot",
    href: "/bot",
    icon: RiRobot3Line
  },
  {
    title: "server",
    href: "/server",
    icon: Server
  },
]

export const socials = [
  {
    href: "https://www.facebook.com/",
    icon: FaFacebookF
  },
  {
    href: "https://www.instagram.com/",
    icon: FaInstagram
  },
  {
    href: "https://x.com/",
    icon: FaXTwitter
  },
]

export const footerData = [
  {
    icon: MapPin,
    title: "شبين الكوم - المنوفية - مصر"
  },
  {
    icon: Smartphone,
    title: "01152640142"
  },
]