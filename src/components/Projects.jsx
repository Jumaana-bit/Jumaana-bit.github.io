import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="p-4 border border-neutral-800 rounded-lg">
                        <div className="relative w-full h-48 mb-4 overflow-hidden rounded aspect-[4/3]">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        <div>
                            {project.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="mr-2 rounded bg-neutral-900 px-2 py-1"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Projects;
