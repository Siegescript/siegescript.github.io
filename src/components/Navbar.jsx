function Navbar() {
  const links = ['home', 'background', 'projects', 'skills', 'contact'];
  
  return (
    <nav className="fixed top-0 right-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-900/50">
      <div className="flex justify-end p-6 max-w-5xl mx-auto space-x-6 text-sm text-white-400">
        {links.map((link) => (
          <a 
            key={link} 
            href={`#${link}`} 
            className="hover:text-white transition-colors"
          >
            &gt;{link}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;