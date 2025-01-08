import Link from "next/link";
import RecentPosts from "./components/RecentPosts";

export default async function Home() {
  let posts = null;
  try {
    const result = await fetch(process.env.URL + "/api/post/get", {
      method: "POST",
      body: JSON.stringify({ limit: 9, order: "desc" }),
      cache: "no-store",
    });
    const data = await result.json();
    posts = data.posts;
  } catch (error) {
    console.log("Error getting post:", error);
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-6 pt-6 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome to my Blog</h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Explore a wealth of resources tailored to spark your curiosity and
          deepen your expertise in web development and technology. Unleash the
          potential of Next.js to master cutting-edge techniques like
          Server-Side Rendering (SSR), Static Site Generation (SSG), and dynamic
          routing, while uncovering best practices for building scalable,
          high-performance applications. Whether you're new to coding or a
          seasoned developer, our step-by-step guides and tutorials provide
          practical insights into modern development with React.js, Next.js, and
          essential tools like Clerk, Firebase, and MongoDB. 
          <p className="py-2"> 
            Dive into actionable tips, real-world examples, and advanced
            concepts to refine your craft and deliver dynamic, user-centric
            applications. Learn how to integrate Next-themes, implement secure
            authentication with Clerk, optimize API interactions using
            React-query, and design visually appealing interfaces with libraries
            like Flowbite and React-icons.
          </p>
          Stay ahead of the curve with in-depth articles that cover the latest
          trends, tools, and practices shaping the fast-evolving tech landscape,
          and take your web development skills to the next level with Next.js.
          <a
            href="https://go.clerk.com/fgJHKlt"
            className="text-teal-500 ml-1 hover:underline"
            target="_blank"
          >
            Clerk
          </a>
          .
        </p>
        <Link
          href="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 flex flex-col gap-8 py-2">
        <RecentPosts limit={9} />
        <Link
          href={"/search?category=null"}
          className="text-lg text-teal-500 hover:underline text-center"
        >
          View all posts
        </Link>
      </div>
    </div>
  );
}
