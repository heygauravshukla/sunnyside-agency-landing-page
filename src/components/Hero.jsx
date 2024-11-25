import arrowDownIcon from "../assets/images/icon-arrow-down.svg";

export default function Hero() {
  return (
    <section className="grid justify-items-center gap-12 px-6 py-14 text-center xl:gap-[5.875rem] xl:px-0 xl:py-[4.5625rem]">
      <h1 className="font-serif text-[2.5rem] font-black uppercase leading-[1.225] tracking-[0.18em] text-white xl:text-[3.5rem] xl:tracking-[0.19em]">
        We are creatives
      </h1>
      <img src={arrowDownIcon} alt="Scroll below" />
    </section>
  );
}
