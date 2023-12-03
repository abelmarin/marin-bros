import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const navLink =
    "text-brown text-xl px-5 hover:bg-brown hover:text-white uppercase h-full py-4 place-items-center grid font-serif"

  return (
    <header className="shadow-header">
      <div className="flex flex-col md:flex-row justify-center w-full max-w-screen-2xl mx-auto px-8">
        <Link href="/" title="Home" className="my-4 mx-auto md:ml-0 md:mr-auto">
          <Image
            src="/assets/logo.png"
            alt="Marin Bros Logo"
            className="max-h-40 md:max-h-20 w-min"
            width={180}
            height={80}
          />
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
  )
}
