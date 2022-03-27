import { Children, FC } from "react";

interface ProjectsProps {
  projects: {
    id: number;
    name: string;
    description: string;
    stack: { id: number; name: string }[];
  }[];
}

const FreeLance: FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="font-bold text-4xl mb-24">Freelance work</h1>

      <section className="md:grid md:grid-cols-2 gap-4">
        {Children.toArray(
          projects?.map((project) => (
            <div key={project.id} className="relative">
              <div className="p-8 bg-primary-dark rounded">
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
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default FreeLance;
