export function WithoutResults() {
  return (
    <article className="flex flex-col items-center justify-center gap-6 mt-20">
      <h1 className="text-2xl">We don't have the product yet</h1>
      <img
        className=" mx-auto bg-sky-100 p-2 rounded-lg shadow-xl"
        width={180}
        height={180}
        src="src\assets\OptShop.svg"
        alt="Without items icon"
      />
    </article>
  );
}
