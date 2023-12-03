import Image from "next/image"
import cn from "classnames"

export default function ImageAndContent({ children, image, orientation }) {
  return (
    <section
      className={cn(
        "max-w-5xl flex flex-col gap-4 items-center p-6 mb-12 mx-auto bg-brown text-white text-lg place-items-center",
        {
          "md:flex-row": orientation === "content-first",
          "md:flex-row-reverse": orientation === "image-first",
        }
      )}
    >
      <div className="basis-1/2">{children}</div>
      <div className="basis-1/2">
        <Image src={image.filename} alt={image.alt} width={500} height={300} className="w-full" />
      </div>
    </section>
  )
}
