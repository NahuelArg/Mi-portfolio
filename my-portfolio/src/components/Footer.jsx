import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/NahuelArg" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/nahuel-arga%C3%B1araz/" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaLinkedin size={24} />
        </a>
        {/* Añadir más enlaces aquí */}
      </div>
      <p>&copy; {new Date().getFullYear()} Nahuel Argañaraz. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
