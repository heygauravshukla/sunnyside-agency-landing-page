import transformMobile from "../assets/images/mobile/image-transform.jpg";
import transformDesktop from "../assets/images/desktop/image-transform.jpg";
import standoutMobile from "../assets/images/mobile/image-stand-out.jpg";
import standoutDesktop from "../assets/images/desktop/image-stand-out.jpg";

function TextBox({ title, description, url }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url}>Learn more</a>
    </div>
  );
}

function ImageBox({ mobileImage, desktopImage, altText }) {
  return (
    <picture>
      <source srcSet={desktopImage} media="(min-width: 600px)" />
      <img src={mobileImage} alt={altText} />
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
        mobileImage={transformMobile}
        desktopImage={transformDesktop}
        altText="Transform image"
      />
      <ImageBox
        mobileImage={standoutMobile}
        desktopImage={standoutDesktop}
        altText="Stand out image"
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
