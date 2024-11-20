import milkbottlesMobile from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import milkbottlesDesktop from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import orangeMobile from "../assets/images/mobile/image-gallery-orange.jpg";
import orangeDesktop from "../assets/images/desktop/image-gallery-orange.jpg";
import coneMobile from "../assets/images/mobile/image-gallery-cone.jpg";
import coneDesktop from "../assets/images/desktop/image-gallery-cone.jpg";
import sugarcubesMobile from "../assets/images/mobile/image-gallery-sugarcubes.jpg";
import sugarcubesDesktop from "../assets/images/desktop/image-gallery-sugarcubes.jpg";

const images = [
  {
    id: 1,
    mobileSrc: milkbottlesMobile,
    desktopSrc: milkbottlesDesktop,
    alt: "Milkbottles image",
  },
  {
    id: 2,
    mobileSrc: orangeMobile,
    desktopSrc: orangeDesktop,
    alt: "Orange image",
  },
  {
    id: 3,
    mobileSrc: coneMobile,
    desktopSrc: coneDesktop,
    alt: "Cone image",
  },
  {
    id: 4,
    mobileSrc: sugarcubesMobile,
    desktopSrc: sugarcubesDesktop,
    alt: "Sugarcubes image",
  },
];

export default function Gallery() {
  return (
    <section>
      {images.map(({ id, mobileSrc, desktopSrc, alt }) => (
        <picture key={id}>
          <source srcSet={desktopSrc} media="(min-width: 600px)" />
          <img src={mobileSrc} alt={alt} />
        </picture>
      ))}
    </section>
  );
}
