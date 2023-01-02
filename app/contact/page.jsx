import Link from "next/link"

export default function Contact() {
  const infoStyles = "text-center flex flex-col pb-6 font-lg"

  return (
    <div className="px-4">
      <h1>Contact Us!</h1>
      <div className="font-sans max-w-2xl text-xl text-white bg-brown mx-auto py-8 px-5 mb-12">
        <h2 className="text-center pb-2 text-4xl">Abel Marin</h2>
        <p className="text-center pb-6 text-2xl">Owner, President</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <p className={infoStyles}>
            Phone:{" "}
            <Link href="tel:6302732012" className="hover:underline">
              (630) 273-2012
            </Link>
          </p>
          <p className={infoStyles}>
            Fax:{" "}
            <Link href="tel:6302732146" className="hover:underline">
              (630) 273-2146
            </Link>
          </p>
          <p className={infoStyles}>
            Email:{" "}
            <Link href="mailto:marinbrothersinc@gmail.com" className="hover:underline">
              marinbrothersinc@gmail.com
            </Link>
          </p>
          <p className={infoStyles}>
            Address:{" "}
            <Link
              href="https://www.google.com/maps/place/1951+Rena+Ln,+Yorkville,+IL+60560/@41.6588315,-88.4875337,17z/data=!3m1!4b1!4m5!3m4!1s0x880ec1e50b18242d:0x4fbd16359e6a90e3!8m2!3d41.6588315!4d-88.4875337"
              className="hover:underline"
              target="_blank"
            >
              1951 Rena Ln, Yorkville, IL 60560
            </Link>
          </p>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.85700339359!2d-88.4875337!3d41.658831500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880ec1e50b18242d%3A0x4fbd16359e6a90e3!2s1951%20Rena%20Ln%2C%20Yorkville%2C%20IL%2060560!5e0!3m2!1sen!2sus!4v1672636678703!5m2!1sen!2sus"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full max-w-2xl h-[400px] sm:h-[500px] mx-auto mb-12 border-none border-r"
        />
      </div>
    </div>
  )
}
