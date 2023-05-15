import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/post">Post</Link>
    </div>
  );
};

export default Home;
