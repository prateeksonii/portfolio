import { Children, FC } from "react";

interface ProjectsProps {
  projects: {
    id: number;
    name: string;
    description: string;
    stack: { id: number; name: string }[];
  }[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="font-bold text-4xl mb-24">My personal projects</h1>

      <section className="space-y-24">
        {Children.toArray(
          projects?.map((project) => (
            <div key={project.id} className="relative">
              <div className="p-8 bg-primary-dark rounded absolute top-10 left-0 w-3/5">
                <h2 className="text-4xl font-bold">{project.name}</h2>
                <p className="mt-2 text-lg">{project.description}</p>
                <div className="mt-8 flex gap-2">
                  {Children.toArray(
                    project.stack.map((stackItem) => (
                      <div
                        key={stackItem.id}
                        className="p-2 rounded bg-primary"
                      >
                        {stackItem.name}
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className="ml-auto h-[400px] w-1/2 -z-10 rounded">
                <img
                  src="/assets/images/mirage.png"
                  alt="Mirage"
                  className="h-full w-full"
                />
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Projects;
