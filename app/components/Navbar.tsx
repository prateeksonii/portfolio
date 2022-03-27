const Navbar = () => {
  return (
    <nav className="h-16 flex items-center justify-between">
      <div className="text-xl font-bold">Prateek Soni</div>
      <ul className="list-none flex items-center gap-8 text-lg">
        <li>Blog</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
