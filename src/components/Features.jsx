import transformMobile from "../assets/images/mobile/image-transform.jpg";
import transformDesktop from "../assets/images/desktop/image-transform.jpg";
import standoutMobile from "../assets/images/mobile/image-stand-out.jpg";
import standoutDesktop from "../assets/images/desktop/image-stand-out.jpg";

function TextBox({ className, heading, paragraph, href, hrefClassName }) {
  return (
    <div
      className={`${className} grid justify-items-center px-6 py-16 text-center xl:content-center xl:justify-items-start xl:p-0 xl:text-left`}
    >
      <h2 className="max-w-[15ch] font-serif text-[2rem] font-black leading-[1.21875] text-very-dark-desaturated-blue xl:text-[2.5rem] xl:leading-[1.225] xl:tracking-[0.01em]">
        {heading}
      </h2>
      <p className="mb-9 mt-6 max-w-[44ch] text-xl font-semibold leading-normal -tracking-[0.05em] text-dark-grayish-blue xl:mb-11 xl:mt-8">
        {paragraph}
      </p>
      <a
        href={href}
        className={`${hrefClassName} relative font-serif text-base font-bold uppercase leading-tight tracking-[0.04em] after:absolute after:-inset-x-1 after:bottom-[1px] after:h-2 after:rounded-full after:content-['']`}
      >
        Learn more
      </a>
    </div>
  );
}

function ImageBox({ className, mobileImage, desktopImage, alt }) {
  return (
    <picture className={`${className}`}>
      <source srcSet={desktopImage} media="(min-width: 600px)" />
      <img src={mobileImage} alt={alt} />
    </picture>
  );
}

export default function Features() {
  return (
    <section className="grid xl:grid-cols-2">
      <TextBox
        className="order-2 xl:order-1 xl:ml-auto xl:mr-28"
        heading="Transform your brand"
        paragraph="We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you."
        href="/"
        hrefClassName="after:bg-yellow/30"
      />
      <ImageBox
        className="order-1 xl:order-2"
        mobileImage={transformMobile}
        desktopImage={transformDesktop}
        alt="Transform image"
      />
      <ImageBox
        className="order-3"
        mobileImage={standoutMobile}
        desktopImage={standoutDesktop}
        alt="Stand out image"
      />
      <TextBox
        className="order-4 xl:ml-28 xl:mr-auto"
        heading="Stand out to the right audience"
        paragraph=" Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places."
        href="/"
        hrefClassName="after:bg-soft-red/30"
      />
    </section>
  );
}
