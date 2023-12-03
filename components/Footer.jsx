import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex flex-wrap">
      <div className="md:basis-1/3 inline-grid justify-center items-center bg-brown-dark text-brown-light text-2xl lg:text-3xl w-full py-12 font-serif">
        <Link href="/">Marin Brothers Inc.</Link>
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
  )
}
