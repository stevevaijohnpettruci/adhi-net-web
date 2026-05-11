export const NavItem = ({ label, href }) => {
  return (
    <a href={href} className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-200 relative group">
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200" />
    </a>
  );
};
