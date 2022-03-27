import { Children, FC } from "react";

interface ExperienceProps {
  jobs: {
    id: number;
    companyName: string;
    jobTitle: string;
    from: string;
    to: string;
  }[];
}

const Experience: FC<ExperienceProps> = ({ jobs }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="font-bold text-4xl mb-24">Work Experience</h1>

      <section className="md:grid md:grid-cols-2 gap-4">
        {Children.toArray(
          jobs?.map((job) => (
            <div key={job.id} className="relative">
              <div className="p-8 bg-primary-dark rounded">
                <h2 className="text-4xl font-bold">{job.companyName}</h2>
                <p className="mt-2 text-lg">{job.jobTitle}</p>
                <p className="mt-2 text-lg">{job.from}</p>
                <p className="mt-2 text-lg">{job.to}</p>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Experience;
