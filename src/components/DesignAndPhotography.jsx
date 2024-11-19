import graphic_design_mobile from "../assets/images/mobile/image-graphic-design.jpg";
import graphic_design_desktop from "../assets/images/desktop/image-graphic-design.jpg";
import photography_mobile from "../assets/images/mobile/image-photography.jpg";
import photography_desktop from "../assets/images/desktop/image-photography.jpg";

function Card({
  mobile_image,
  desktop_image,
  alternative_text,
  title,
  description,
}) {
  return (
    <div>
      <picture>
        <source srcSet={desktop_image} media="(min-width: 600px)" />
        <img src={mobile_image} alt={alternative_text} />
      </picture>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function DesignAndPhotography() {
  return (
    <section>
      <Card
        mobile_image={graphic_design_mobile}
        desktop_image={graphic_design_desktop}
        alternative_text="Graphic design image"
        title="Graphic design"
        description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
      />
      <Card
        mobile_image={photography_mobile}
        desktop_image={photography_desktop}
        alternative_text="Photography design image"
        title="Photography"
        description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
      />
    </section>
  );
}
