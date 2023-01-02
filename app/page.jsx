export default function Home() {
  return (
    <div>
      <div className="homeHero bg-fixed w-full grid place-items-center h-[250px] sm:h-[450px]">
        <div className="text-5xl sm:text-8xl font-serif text-white text-center pb-4">Welcome!</div>
      </div>
      <h1>Marin Brothers Inc.</h1>
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
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="mx-auto w-full max-w-screen-lg px-4 h-auto aspect-video"
        ></iframe>
      </div>
    </div>
  )
}
