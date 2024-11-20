import graphicDesignMobile from "../assets/images/mobile/image-graphic-design.jpg";
import graphicDesignDesktop from "../assets/images/desktop/image-graphic-design.jpg";
import photographyMobile from "../assets/images/mobile/image-photography.jpg";
import photographyDesktop from "../assets/images/desktop/image-photography.jpg";

function Card({ mobileImage, desktopImage, altText, title, description }) {
  return (
    <div>
      <picture>
        <source srcSet={desktopImage} media="(min-width: 600px)" />
        <img src={mobileImage} alt={altText} />
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
        mobileImage={graphicDesignMobile}
        desktopImage={graphicDesignDesktop}
        altText="Graphic design image"
        title="Graphic design"
        description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
      />
      <Card
        mobileImage={photographyMobile}
        desktopImage={photographyDesktop}
        altText="Photography design image"
        title="Photography"
        description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
      />
    </section>
  );
}
