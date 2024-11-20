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
    altText: "Milkbottles image",
  },
  {
    id: 2,
    mobileSrc: orangeMobile,
    desktopSrc: orangeDesktop,
    altText: "Orange image",
  },
  {
    id: 3,
    mobileSrc: coneMobile,
    desktopSrc: coneDesktop,
    altText: "Cone image",
  },
  {
    id: 4,
    mobileSrc: sugarcubesMobile,
    desktopSrc: sugarcubesDesktop,
    altText: "Sugarcubes image",
  },
];

export default function Gallery() {
  return (
    <section>
      {images.map(({ id, mobileSrc, desktopSrc, altText }) => (
        <picture key={id}>
          <source srcSet={desktopSrc} media="(min-width: 600px)" />
          <img src={mobileSrc} alt={altText} />
        </picture>
      ))}
    </section>
  );
}
