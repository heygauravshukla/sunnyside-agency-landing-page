import arrowDownIcon from "../assets/images/icon-arrow-down.svg";

export default function Hero() {
  return (
    <section className="grid justify-items-center gap-10 py-11 lg:gap-[104px] lg:py-[84px]">
      <h1 className="text-center font-serif text-[32px] font-black uppercase leading-10 tracking-[0.3em] text-white lg:text-[54px] lg:tracking-[20px]">
        We are creatives
      </h1>
      <img src={arrowDownIcon} alt="Scroll below" className="h-20 lg:h-auto" />
    </section>
  );
}
