import { GitHubIcon } from "@/components/icons";

export const ProjectCards = ({ projects }) => {
  const bgColor = {
    default: "bg-black",
    Estrutural: "bg-green-500",
    Investimento: "bg-blue-500",
    Viagens: "bg-yellow-500",
    // ...
  };
  return (
    <div className="flex justify-center items-center py-8 border-0 border-transparent">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 h-full lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project) => {
          return (
            <div className="rounded" key={project.id}>
              <div className="flex flex-col relative max-w-xs h-72 max-h-72 rounded overflow-hidden shadow-lg my-2 mx-3 bg-dawn-components dark:bg-blue-gum dark:text-white">
                <div className={"h-8 " + bgColor[project.color]}></div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{project.title}</div>
                  <p className="text-grey-darker text-base">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-row w-full justify-end px-2 absolute bottom-0">
                  <a
                    target="_blank"
                    href={project.demo}
                    rel="noopener noreferrer"
                  >
                    <button className="my-4 mx-1 h-10 w-24 focus:ring-2 focus:ring-offset-2 rounded-md focus:ring-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none bg-maximum-red rounded-r text-white px-5 text-md">
                      Demo
                    </button>
                  </a>
                  <a
                    target="_blank"
                    href={project.git_repo}
                    rel="noopener noreferrer"
                  >
                    <button className="my-4 mx-1 h-10 w-24 px-3 focus:ring-2 focus:ring-offset-2 rounded-md focus:ring-gray-600 transition duration-150 ease-in-out hover:bg-gray-600 focus:outline-none bg-dark-oak rounded-r text-white text-md inline-flex items-center">
                      <span className="mx-auto">Code</span>
                      <GitHubIcon />{" "}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
