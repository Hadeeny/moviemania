import SingleMovie from "../../components/SingleMovie";

// async function getData(title) {
//   const res = await fetch(
//     `https://tfvids-node.onrender.com/getData/?page=1&engine=nkiri,fzmovies`
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

export default async function MovieDetail({ params }) {
  const { movie } = params;

  const movieTitle = movie.split("%20").join(" ");
  return (
    <div className="mt-[10rem]">
      <SingleMovie title={movieTitle} />
    </div>
  );
}
