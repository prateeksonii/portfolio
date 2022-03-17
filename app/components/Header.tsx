import { FiDownloadCloud } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div className="left">
        <h1 className="heading">
          Hi, I'm Prateek Soni, I'm a<br />
          full stack developer
        </h1>
        <p className="lead">
          I make quality and responsive software with latest technologies.
        </p>
        <div className="btn-container">
          <button className="primary">View my latest work</button>
          <a
            href="https://drive.google.com/uc?export=download&id=1yWMb-hHl5rNoOT3zX2J5nXjUTcsFJzvD"
            download
            className="download"
          >
            <FiDownloadCloud /> Download CV
          </a>
        </div>
      </div>
      <img src="/assets/images/avatar.svg" alt="avatar" />
    </header>
  );
};

export default Header;
