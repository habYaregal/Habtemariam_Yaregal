//import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-8">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    {/* Footer Links */}
                    <div className="text-center lg:text-left mb-6 lg:mb-0">
                        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-gray-300">
                            <li>
                                <a href="#about" className="hover:text-indigo-400 transition">
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-indigo-400 transition">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-indigo-400 transition">
                                    Contact Me
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-6">
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm12.5 11.25h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-3v-10h3v1.58c.88-1.06 2.18-1.58 3.5-1.58 2.48 0 4.5 2.02 4.5 4.5v5.5z" />
                            </svg>
                        </a>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577v-2.165c-3.338.724-4.033-1.416-4.033-1.416-.546-1.386-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.24 1.838 1.24 1.07 1.834 2.809 1.304 3.494.997.108-.774.418-1.305.761-1.605-2.665-.306-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.235-3.221-.124-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.982-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.649.243 2.872.119 3.176.769.84 1.234 1.911 1.234 3.221 0 4.609-2.806 5.621-5.478 5.921.43.371.812 1.102.812 2.222v3.293c0 .32.219.694.826.575 4.765-1.589 8.199-6.084 8.199-11.385 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-indigo-400 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12.713l-11.451-7.713h22.902l-11.451 7.713zm11.451-9.713h-22.902c-.599 0-1.111.354-1.387.87l12.838 8.647 12.838-8.647c-.276-.516-.788-.87-1.387-.87zm-11.451 11.287l-11.497-7.759v10.472c0 .825.671 1.5 1.5 1.5h20.994c.829 0 1.503-.675 1.503-1.5v-10.472l-11.5 7.759z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-500">
                    &copy; {new Date().getFullYear()} Habtemariam Yaregal. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
