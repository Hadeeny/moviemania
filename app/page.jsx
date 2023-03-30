import Movies from "../components/Movies";
export default async function Home() {
  const films = await fetch(
    `https://tfvids-node.onrender.com/getData/?page=1&engine=nkiri,fzmovies`,
    { next: { revalidate: 60 } }
  );
  const film = await films.json();
  return (
    <>
      {/* <Header/> */}
      <main className="mt-[4rem]">
        <h2 className="text-xl font-semibold py-2">Trending movies (latest)</h2>
        <div className="grid gap-16 grid-cols-fluid">
          <Movies film={film} />
        </div>
      </main>
    </>
  );
}
