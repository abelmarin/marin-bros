"use client"

import "app/globals.css"
import Link from "next/link"
import Image from "next/image"
import logo from "public/assets/logo.png"
import { usePathname } from "next/navigation"

export default function Layout({ children }) {
  const pathname = usePathname().replace("/", "")

  const navLink =
    "text-brown text-xl px-4 hover:bg-brown hover:text-white uppercase h-full py-4 place-items-center grid"

  return (
    <html lang="en">
      <head>
        <title>{`${
          pathname === "" ? "Home" : `${pathname.charAt(0).toUpperCase()}${pathname.slice(1)}`
        } | Marin Bros Inc.`}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <header className="shadow-header">
          <div className="flex flex-col md:flex-row justify-center w-full max-w-screen-2xl mx-auto px-8">
            <Link href="/" title="Home" className="my-4 mx-auto md:ml-0 md:mr-auto">
              <Image src={logo} alt="Marin Bros Logo" className="max-h-40 md:max-h-20 w-min" />
            </Link>
            <nav className="flex justify-center items-center">
              <Link href="/" title="Home" className={navLink}>
                Home
              </Link>
              <Link href="/about" title="About Us" className={navLink}>
                About
              </Link>
              <Link href="/contact" title="Contact" className={navLink}>
                Contact
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="flex flex-wrap">
          <div className="md:basis-1/3 inline-grid justify-center items-center bg-brown-dark text-brown-light text-2xl lg:text-3xl w-full py-12 font-serif">
            Marin Brothers Inc.
          </div>
          <div className="md:basis-2/3 bg-brown text-white text-lg w-full text-center md:text-left py-10 md:pl-8">
            <p className="pb-2">
              Phone:{" "}
              <Link href="tel:6302732012" className="hover:underline">
                (630) 273-2012
              </Link>
            </p>
            <p>
              Email:{" "}
              <Link href="mailto:marinbrothersinc@gmail.com" className="hover:underline">
                marinbrothersinc@gmail.com
              </Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
