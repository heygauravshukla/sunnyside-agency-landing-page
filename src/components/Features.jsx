import transform_mobile from "../assets/images/mobile/image-transform.jpg";
import transform_desktop from "../assets/images/desktop/image-transform.jpg";
import standout_mobile from "../assets/images/mobile/image-stand-out.jpg";
import standout_desktop from "../assets/images/desktop/image-stand-out.jpg";

function TextBox({ title, description, url }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url}>Learn more</a>
    </div>
  );
}

function ImageBox({ mobile_image, desktop_image, alternative_text }) {
  return (
    <picture>
      <source srcSet={desktop_image} media="(min-width: 600px)" />
      <img src={mobile_image} alt={alternative_text} />
    </picture>
  );
}

export default function Features() {
  return (
    <section>
      <TextBox
        title="Transform your brand"
        description="We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you."
        url="/"
      />
      <ImageBox
        mobile_image={transform_mobile}
        desktop_image={transform_desktop}
        alternative_text="Transform image"
      />
      <ImageBox
        mobile_image={standout_mobile}
        desktop_image={standout_desktop}
        alternative_text="Stand out image"
      />
      <TextBox
        title="Stand out to the right audience"
        description=" Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places."
        url="/"
      />
    </section>
  );
}
