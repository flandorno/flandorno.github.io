import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  link: string;
};

function ProjectCard({ title, subtitle, link }: ProjectCardProps) {
  return (
    <div className="w-full flex flex-col gap-4 px-16">
      <Link to={link} className="w-full">
        <div className="w-full rounded-4xl shadow-2xl shadow-violet-400/10 transition-shadow p-2 outline outline-white/15 backdrop-blur-md bg-white/10">
          <div className="h-96 w-full bg-gray-950 rounded-3xl"></div>
        </div>
        <div className="px-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-400">{subtitle}</p>
        </div>
      </Link>
    </div>  
  );
}

export default ProjectCard;
