import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <div className=" mx-auto flex justify-start items-start flex-col p-3">
        <h1 className="text-3xl font-semibold mb-3">Pojects</h1>
        <p className="text-md text-gray-400 w-full sm:w-[70%]">
          Build innovative and engaging projects while continuously improving my
          skills in HTML, CSS, and JavaScript! By leveraging the power of
          Next.js, I craft modern, scalable, and performant web applications
          that prioritize user experience and efficiency. My hands-on journey
          involves creating dynamic projects that enhance my expertise in
          React.js, Next.js, and advanced concepts like Server-Side Rendering
          (SSR), Static Site Generation (SSG), and API integration.{" "}
          <p className="my-2"> 
            I integrate a variety of cutting-edge tools and libraries into my
            development process to elevate functionality and design. These
            include Clerk for seamless authentication, Firebase for real-time
            database management, MongoDB with Mongoose for robust data modeling,
            and Svix for webhook management. For styling, I utilize Flowbite,
            Clerk-theme, and Next-themes, ensuring visually appealing and
            responsive designs. To enhance interactivity and performance, I
            incorporate React-icons for intuitive UI elements, React-query for
            efficient data fetching, and React-circular-progressbar for creative
            visualizations. 
          </p> 
          Each project represents an opportunity to explore new tools, refine my
          skills, and deliver dynamic, user-friendly applications that stay
          ahead of industry trends. By combining hands-on experience with
          continuous learning, I aim to build feature-rich applications that
          push boundaries and provide meaningful solutions.
        </p>
      </div>
      <div className="flex w-full gap-4 flex-wrap p-6">
        <ProjectCard />
      </div>
    </>
  );
}
