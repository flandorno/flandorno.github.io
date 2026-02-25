import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="flex flex-col gap-16 justify-center mx-auto mt-8 max-w-7xl">
        <ProjectCard
          title="Project 1"
          subtitle="A sample project description."
          link="/D4Next"
        />
        <ProjectCard
          title="Project 1"
          subtitle="A sample project description."
          link="/Electrolux"
        />
      </div>
    </>
  );
};

export default Home;
