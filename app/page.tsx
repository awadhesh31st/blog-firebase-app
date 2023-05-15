import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/post">Post</Link>
      <span className="cursor-pointer">Login</span>
    </div>
  );
};

export default Home;
