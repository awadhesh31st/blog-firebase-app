import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/post">Post</Link>
      <Link href="/login">Login</Link>
    </div>
  );
};

export default Home;
