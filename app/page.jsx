import Movies from "../components/Movies";

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
      <main className="mt-[4rem]">
        <h2 className="text-xl font-semibold py-2">Trending movies (latest)</h2>
        <div className="grid gap-16 grid-cols-fluid">
          <Movies film={films} />
        </div>
      </main>
    </>
  );
}
