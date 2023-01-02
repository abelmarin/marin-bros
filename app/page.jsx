import BG from "public/assets/overhead-costco-2.jpg"

export default function Home() {
  return (
    <div>
      {/* Hero Image */}
      <div
        style={{
          backgroundImage: "url('../public/assets/overhead-costco-2.jpg')",
        }}
        className="bg-homeHero bg-fixed w-full h-[450px]"
      >
        <h1 className="text-5xl sm:text-8xl font-serif text-brown text-center items-center justify-center mx-auto">
          Welcome!
        </h1>
      </div>

      {/* Body */}
      <h1 className="px-4 text-center font-semibold text-brown text-4xl py-8 lg:py-12 font-sans">
        Marin Brothers Inc.
      </h1>
      <p className="font-sans text-brown text-xl max-w-screen-lg mx-auto pb-8 lg:pb-12 px-4">
        Our mission is to provide our commercial clients with top quality carpentry services. Our team of experienced,
        professional carpenters deliver the best craftsmanship in a timely, cost-effective manner. Our dedication to
        quality construction, together with honest, reliable and dependable labor, sets Marin Brothers above the
        competition. Call us today to arrange an appointment and we will be happy to submit an estimate for your
        upcoming commercial enterprises.
      </p>
      <div className="pb-8 lg:pb-12">
        <iframe
          src="https://www.youtube.com/embed/VVt-5krsvhs"
          frameborder="0"
          title="Overhead of Costco"
          allowFullScreen
          className="mx-auto w-full max-w-screen-lg px-4 h-auto aspect-video"
        />
      </div>
    </div>
  )
}
