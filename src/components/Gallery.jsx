import milkbottles_mobile from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import milkbottles_desktop from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import orange_mobile from "../assets/images/mobile/image-gallery-orange.jpg";
import orange_desktop from "../assets/images/desktop/image-gallery-orange.jpg";
import cone_mobile from "../assets/images/mobile/image-gallery-cone.jpg";
import cone_desktop from "../assets/images/desktop/image-gallery-cone.jpg";
import sugarcubes_mobile from "../assets/images/mobile/image-gallery-sugarcubes.jpg";
import sugarcubes_desktop from "../assets/images/desktop/image-gallery-sugarcubes.jpg";

const images = [
  {
    id: 1,
    mobile_src: milkbottles_mobile,
    desktop_src: milkbottles_desktop,
    alternative_text: "Milkbottles image",
  },
  {
    id: 2,
    mobile_src: orange_mobile,
    desktop_src: orange_desktop,
    alternative_text: "Orange image",
  },
  {
    id: 3,
    mobile_src: cone_mobile,
    desktop_src: cone_desktop,
    alternative_text: "Cone image",
  },
  {
    id: 4,
    mobile_src: sugarcubes_mobile,
    desktop_src: sugarcubes_desktop,
    alternative_text: "Sugarcubes image",
  },
];

export default function Gallery() {
  return (
    <section>
      {images.map((image) => (
        <picture key={image.id}>
          <source srcSet={image.desktop_src} media="(min-width: 600px)" />
          <img src={image.mobile_src} alt={image.alternative_text} />
        </picture>
      ))}
    </section>
  );
}
