import Movies from "../components/Movies";
import Hero from "../components/Hero";

async function getData() {
  // const res = await fetch('https://api.example.com/...');
  const res = await fetch(
    `https://tfvids-node.onrender.com/getData/?page=1&engine=nkiri,fzmovies`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  // const film = await films.json();
  return res.json();
}
export default async function Home() {
  const films = await getData();
  return (
    <>
      {/* <Header/> */}
      <main className="">
        <Hero />
        <h2 className="text-3xl md:text-[3rem] text-gray-100 py-[2rem] md:py-[4rem] text-center font-bold">
          Trending movies (latest)
        </h2>
        <div className="grid px-8 gap-16 grid-cols-fluid">
          <Movies film={films} />
        </div>
      </main>
    </>
  );
}
