import { useState } from "react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isOpen ? "Close" : "Open"}
      </button>

      <div
        className={`fixed top-0 right-0 w-4/5 h-full bg-gray-200 p-4 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="mt-16">
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
