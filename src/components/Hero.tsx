import Chip from "./Chip";

export default function Hero() {
  return (
    <section className="h-[60vh] justify-center content-center text-center p-6 sm:p-8 lg:p-16">
      <h1 className="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
        Hi, I'm Federico Landorno
        <br />A UX Desinger with experience in
      </h1>
      
      <div className="flex w-full justify-center text-xl font-semibold pt-4 gap-4">
        <Chip text={"Insurtech"} />
        <Chip text={"E-procurement"} />
        <Chip text={"Smart Appliances"} />
      </div>
    </section>
  );
}
