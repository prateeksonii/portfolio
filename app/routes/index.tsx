import { LoaderFunction, useLoaderData } from "remix";
import Experience from "~/components/Experience";
import FreeLance from "~/components/Freelance";
import Header from "~/components/Header";
import Navbar from "~/components/Navbar";
import Projects from "~/components/Projects";

export const loader: LoaderFunction = () => {
  return {
    projects: [
      {
        id: 1,
        name: "Mirage",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quisquam! Nobis officiis labore beatae quibusdam corrupti tempora qui provident similique!",
        stack: [
          { id: 1, name: "Remix" },
          { id: 2, name: "PostgreSQL" },
        ],
      },
      {
        id: 2,
        name: "Wordle",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quisquam! Nobis officiis labore beatae quibusdam corrupti tempora qui provident similique!",
        stack: [{ id: 1, name: "NextJS" }],
      },
    ],
    freeLanceProjects: [
      {
        id: 1,
        name: "Linkdexing",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe minima cumque qui adipisci molestiae facere eveniet reiciendis dolorem eligendi suscipit!",
        stack: [
          { id: 1, name: "React" },
          { id: 2, name: "NodeJS" },
          { id: 3, name: "MongoDB" },
        ],
      },
      {
        id: 2,
        name: "Cardiovas",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe minima cumque qui adipisci molestiae facere eveniet reiciendis dolorem eligendi suscipit!",
        stack: [{ id: 1, name: "React" }],
      },
    ],
    jobs: [
      {
        companyName: "IBM",
        jobTitle: "Associate Developer",
      },
    ],
  };
};

export default function IndexPage() {
  const { projects, freeLanceProjects } = useLoaderData();

  return (
    <main className="py-8 w-[80%] mx-auto">
      <Navbar />
      <Header />
      <Projects projects={projects} />
      <FreeLance projects={freeLanceProjects} />
      <Experience jobs={jobs} />
    </main>
  );
}
