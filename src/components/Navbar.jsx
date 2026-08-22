function Navbar() {
  const links = ['home', 'background', 'projects', 'skills', 'contact'];
  
  return (
    <nav className="fixed top-0 right-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-900/50">
      <div className="flex justify-end p-6 max-w-7xl 2xl:max-w-screen-2xl mx-auto space-x-8 text-sm md:text-base text-gray-400">
        {links.map((link) => (
          <a 
            key={link} 
            href={`#${link}`} 
            className="hover:text-[#cb6ce6] transition-colors"
          >
            &gt; {link}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;