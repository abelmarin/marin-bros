export default function VideoSection({ filename, posterFilename }) {
  return (
    <section className="px-4 pb-8 lg:pb-12">
      <video
        poster={posterFilename}
        src={filename}
        className="video-embed w-full aspect-video max-w-screen-lg mx-auto"
        controls
      />
    </section>
  )
}
