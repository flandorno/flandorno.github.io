import Header from "../components/NavBar";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="flex flex-col gap-16 justify-center mx-auto mt-8 max-w-7xl">
        <ProjectCard
          title="From 45 to 3 minutes to issue a policy"
          subtitle="Yoga - B2B2C SaaS Insurance Platform"
          link="/D4Next"
        />
        <ProjectCard
          title='When surveys said "yes" but behavior said "no"'
          subtitle="Electrolux Smart Home Widgets"
          link="/Electrolux"
        />
      </div>
    </>
  );
};

export default Home;
