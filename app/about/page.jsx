import Image from "next/image"
import cn from "classnames"
import OverheadCostco from "public/assets/overhead-costco-1.jpg"
import SideCostco from "public/assets/sideview-costco.jpg"
import Target from "public/assets/target.jpg"

export default function About() {
  const cardStyles =
    "max-w-5xl grid lg:grid-cols-2 gap-4 items-center p-6 mb-12 mx-auto bg-brown text-white lg:rounded-xl text-lg place-items-center"

  const imageStyles = "w-full"

  return (
    <div>
      <h1 className="text-center text-brown font-serif py-10 text-4xl">About Us</h1>
      <div className={cardStyles}>
        <p>
          <span className="font-extrabold">Marin Brothers, Inc. </span>
          is a family run company founded by Abel Marin in 2006. Abel is a professional carpenter with over twenty years
          experience. At the beginning of his career, he worked mostly in the residential construction industry. Soon,
          the quality and timeliness of his work, along with his down-to-earth nature and honesty, became well-known in
          the construction community. This gained him respect and recognition from top general contractors, inspiring
          him to move 100% into commercial construction with his own professional carpentry company, Marin Brothers,
          Inc.
        </p>
        <Image
          src={OverheadCostco}
          alt="Overhead of costco under construction"
          width={500}
          height={300}
          className={imageStyles}
        />
      </div>
      <div className={cardStyles}>
        <Image src={SideCostco} alt="Side view of costco" width={500} height={300} className={imageStyles} />
        <p>
          <span className="font-extrabold">Abel</span> now owns and runs a highly successful subcontracting business,
          working under the top general contractors in the construction industry such as{" "}
          <span className="font-extrabold">
            Jackson Dean Construction, Moss Construction, Whiting-Turner Construction, Ledcor Construction, and Grahm
            Construction.
          </span>{" "}
          Their projects include many of leading retail and commercials companies such as{" "}
          <span className="font-extrabold">Costco, Target, Simon Malls, DHL, and Pfizer.</span>
        </p>
      </div>
      <div className={cardStyles}>
        <div>
          <p className="pb-2">
            Since the beginning, Marin Brothers, Inc. has stood for not only skilled craftsmanship and high quality
            labor, but also for honesty, integrity, reliability, dependability, and dedication. GCs who have experienced
            not only the quality of their services, but the ease of working with Abel and his crew, always return to
            Marin Bros for future projects.
          </p>
          <p>
            Today, Marin Bros. plays a leading role in the industry by providing exceptional on-time workmanship,
            employing a highly skilled labor force, all while maintaining the highest standards of quality.
          </p>
        </div>
        <Image
          src={Target}
          alt="Front face of a target under construction"
          width={500}
          height={300}
          className={imageStyles}
        />
      </div>
    </div>
  )
}
