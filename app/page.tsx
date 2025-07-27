import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>hola mundo</h1>
      <p className=" text-5xl font-bold">Wilmer</p>
      <Link className=" text-blue-500 text-2xl" href={"/inicio"}>
        Ir a...
      </Link>
    </div>
  );
}
