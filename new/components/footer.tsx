import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 py-8 bg-black">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600"
            >
              Sathvik Vadavatha
            </Link>
            <p className="text-gray-400 mt-2 text-sm"></p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://github.com/SathvikKV"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-gray-400 hover:text-orange-500 transition-colors" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sathvik-vadavatha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-orange-500 transition-colors" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-500 transition-colors" />
              </Link>
              <Link
                href="mailto:vadavatha.s@northeastern.edu"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-gray-400 hover:text-orange-500 transition-colors" />
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              © {currentYear} Sathvik Vadavatha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
