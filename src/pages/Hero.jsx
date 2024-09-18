import './Hero.css';
import profile from '../assets/profile.png';

const Hero = () => {
    const navigation = [
        { title: "About Me", path: "#about" },
        { title: "Projects", path: "#projects" },
        { title: "Contact", path: "#contact" },
    ];

    return (
        <div className="bg-gray-900">
            <header className="bg-transparent py-4">
                <nav className="flex items-center justify-between px-6 max-w-screen-xl mx-auto">
                    <ul className="flex items-center space-x-6">
                        {navigation.map((item, idx) => (
                            <li className="text-gray-200 hover:text-indigo-400 transition-colors" key={idx}>
                                <a href={item.path}>{item.title}</a>
                            </li>
                        ))}
                        <li>
                            <a href="/resume.pdf" className="text-gray-200 hover:text-indigo-400 transition-colors flex items-center">
                                Download Resume
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 ml-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 flex flex-col-reverse lg:flex-row items-center">
                <div className="space-y-4 lg:text-left text-center flex-1 animate-fadeInUp">
                    <h1 className="text-white font-bold text-5xl xl:text-6xl leading-tight">
                        Hi, I'm <span className="text-indigo-400">Habtemariam Yaregal</span>
                    </h1>
                    <p className="text-gray-300 max-w-xl leading-relaxed animate-fadeInUp delay-200">
                        I'm a Full-Stack Developer passionate about building interactive web experiences. Let's create something amazing together.
                    </p>
                    <div className="pt-10 space-y-3 sm:flex sm:space-y-0 sm:space-x-6 lg:justify-start justify-center">
                        <a href="#projects" className="px-8 py-3 w-full bg-indigo-500 text-white text-center rounded-md shadow-md transition hover:bg-indigo-600 sm:w-auto">
                            View My Work
                        </a>
                        <a href="#contact" className="px-8 py-3 w-full bg-gray-700 text-white text-center rounded-md shadow-md transition hover:bg-gray-800 sm:w-auto">
                            Get in Touch
                        </a>
                    </div>
                </div>
                <div className="flex-1 relative mb-8 lg:mb-0">
                    <div className="relative w-[600px] h-[600px] lg:w-[750px] lg:h-[750px] mx-auto">
                        <div className="absolute w-full h-full bg-gradient-to-t from-indigo-500 to-transparent rounded-full shadow-lg animate-scaleIn"></div>
                        <img
                            src={profile}
                            className="w-full h-full object-cover rounded-full transform -translate-y-32 lg:-translate-y-48 animate-fadeInUp delay-400"
                            alt="Your Name"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
