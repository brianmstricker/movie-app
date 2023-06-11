import { options } from "@/util/options";
import Image from "next/image";

export default async function Home() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular",
    options
  );
  const data = await res.json();
  const movies = data.results;
  console.log(movies[0]);
  return (
    <main className="w-full min-h-screen p-4 md:p-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center mb-8 text-4xl">Popular Movies</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {movies.map((movie) => (
            <div key={movie.id}>
              <Image
                className="object-contain w-full h-80"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                height={1000}
                width={1000}
                alt={movie.overview}
              />
              <h2 className="text-center">{movie.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
