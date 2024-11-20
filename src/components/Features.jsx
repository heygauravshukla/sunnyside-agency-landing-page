import transformMobile from "../assets/images/mobile/image-transform.jpg";
import transformDesktop from "../assets/images/desktop/image-transform.jpg";
import standoutMobile from "../assets/images/mobile/image-stand-out.jpg";
import standoutDesktop from "../assets/images/desktop/image-stand-out.jpg";

function TextBox({ heading, paragraph, href }) {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
      <a href={href}>Learn more</a>
    </div>
  );
}

function ImageBox({ mobileImage, desktopImage, alt }) {
  return (
    <picture>
      <source srcSet={desktopImage} media="(min-width: 600px)" />
      <img src={mobileImage} alt={alt} />
    </picture>
  );
}

export default function Features() {
  return (
    <section>
      <TextBox
        heading="Transform your brand"
        paragraph="We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you."
        href="/"
      />
      <ImageBox
        mobileImage={transformMobile}
        desktopImage={transformDesktop}
        alt="Transform image"
      />
      <ImageBox
        mobileImage={standoutMobile}
        desktopImage={standoutDesktop}
        alt="Stand out image"
      />
      <TextBox
        heading="Stand out to the right audience"
        paragraph=" Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places."
        href="/"
      />
    </section>
  );
}
