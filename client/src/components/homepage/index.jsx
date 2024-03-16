function Homepage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col gap-3 mt-[100px] mx-10 items-start">
        <h1 className="text-3xl">Looking for medical advice?</h1>
        <h2 className="text-xl">PocketDoc is here to help.</h2>
        <a
          href="tel:4375240311"
          className="bg-[#6359BC] rounded-xl px-3 py-1 text-lg mt-4"
        >
          Call us now
        </a>
      </div>
    </div>
  );
}

export default Homepage;
