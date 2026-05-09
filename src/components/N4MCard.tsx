export default function N4MCard() {
  return (
    <section className="h-screen w-full flex p-6 md:p-12 lg:p-16">
      <div
        className="relative flex-1 flex flex-col justify-end p-16 overflow-hidden rounded-4xl"
        style={{ backgroundColor: "#004449" }}
      >
        <div className="relative z-10">
          <p className="text-teal-300 font-semibold text-lg mb-2">03</p>
          <h2 className="text-7xl font-semibold tracking-tight">
            Work in progress
          </h2>
          <p className="text-2xl text-gray-400 mt-3">Something is cooking</p>
        </div>
      </div>
    </section>
  );
}
