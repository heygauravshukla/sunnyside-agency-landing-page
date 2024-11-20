import graphicDesignMobile from "../assets/images/mobile/image-graphic-design.jpg";
import graphicDesignDesktop from "../assets/images/desktop/image-graphic-design.jpg";
import photographyMobile from "../assets/images/mobile/image-photography.jpg";
import photographyDesktop from "../assets/images/desktop/image-photography.jpg";

function Card({ mobileImage, desktopImage, alt, heading, paragraph }) {
  return (
    <div>
      <picture>
        <source srcSet={desktopImage} media="(min-width: 600px)" />
        <img src={mobileImage} alt={alt} />
      </picture>
      <div>
        <h3>{heading}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default function DesignAndPhotography() {
  return (
    <section>
      <Card
        mobileImage={graphicDesignMobile}
        desktopImage={graphicDesignDesktop}
        alt="Graphic design image"
        heading="Graphic design"
        paragraph="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
      />
      <Card
        mobileImage={photographyMobile}
        desktopImage={photographyDesktop}
        alt="Photography design image"
        heading="Photography"
        paragraph="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
      />
    </section>
  );
}
