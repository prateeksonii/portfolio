import { FiDownloadCloud } from "react-icons/fi";

const Header = () => {
  return (
    <header className="min-h-[80vh] flex flex-col items-center justify-center md:grid md:grid-cols-[3fr_2fr]">
      <div>
        <h1 className="text-6xl font-bold leading-relaxed">
          Hi, I'm Prateek Soni, I'm a<br />
          full stack developer
        </h1>
        <p className="mt-4 text-3xl">
          I make quality and responsive software with latest technologies.
        </p>
        <div className="flex items-center gap-4 mt-12">
          <button className="px-6 py-3 bg-white text-black font-bold text-xl rounded">
            View my latest work
          </button>
          <a
            href="https://drive.google.com/uc?export=download&id=1yWMb-hHl5rNoOT3zX2J5nXjUTcsFJzvD"
            download
            className="flex items-center gap-2 text-xl px-6 py-3 border border-white rounded"
          >
            <FiDownloadCloud /> Download CV
          </a>
        </div>
      </div>
      <img
        className="ml-auto w-3/5"
        src="/assets/images/avatar.svg"
        alt="avatar"
      />
    </header>
  );
};

export default Header;
