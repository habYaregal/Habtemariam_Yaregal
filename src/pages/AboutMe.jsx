import { FaCode, FaServer, FaDatabase, FaToolbox, FaAward, FaCamera, FaPlane, FaLaptopCode, FaBolt } from 'react-icons/fa';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div id="about-me" className="relative min-h-screen py-16 bg-gray-900 text-white">
            <section className="relative z-10 max-w-screen-xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
                    {/* About Me Content */}
                    <div className="text-center lg:text-left flex-1 mb-16">
                        <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-10 text-white">
                            About Me
                        </h1>
                        <p className="text-xl leading-relaxed text-gray-400 mb-8 animate-fadeInUp delay-200">
                            Hi, I'm <span className="text-indigo-400 font-semibold">Habtemariam Yaregal</span>, a Full-Stack Developer who brings ideas to life with code. I specialize in both frontend and backend development, with a passion for innovation and user-centric design.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-400 mb-12 animate-fadeInUp delay-400">
                            My stack includes React, Node.js, and Flutter, among other tools. My focus is on creating seamless, responsive web and mobile apps that solve real-world problems.
                        </p>

                        {/* Skills Section */}
                        <div className="mb-16 animate-fadeInUp delay-600">
                            <h2 className="text-4xl font-semibold mb-8 text-white">Skills & Expertise</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    { title: "Frontend", skills: "React, Vue, Flutter", icon: <FaCode className="text-indigo-400 text-3xl" /> },
                                    { title: "Backend", skills: "Node.js, Express, Django", icon: <FaServer className="text-indigo-400 text-3xl" /> },
                                    { title: "Database", skills: "MongoDB, SQL", icon: <FaDatabase className="text-indigo-400 text-3xl" /> },
                                    { title: "Tools", skills: "Git, GitHub, Figma, Adobe XD", icon: <FaToolbox className="text-indigo-400 text-3xl" /> }
                                ].map((item, index) => (
                                    <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition transform hover:-translate-y-1">
                                        <div className="mb-4">{item.icon}</div>
                                        <h3 className="text-indigo-400 text-2xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.skills}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Personal Values & Work Ethic */}
                        {/* <div className="mb-16 animate-fadeInUp delay-800">
                            <h2 className="text-4xl font-semibold mb-8 text-white">Personal Values & Work Ethic</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="p-8 rounded-xl bg-gray-800 shadow-lg border border-gray-700 transition hover:shadow-2xl transform hover:-translate-y-1">
                                    <p className="text-gray-400">
                                        I strive for excellence, collaboration, and continuous improvement in all aspects of my work.
                                    </p>
                                </div>
                                <div className="p-8 rounded-xl bg-gray-800 shadow-lg border border-gray-700 transition hover:shadow-2xl transform hover:-translate-y-1">
                                    <p className="text-gray-400">
                                        I am committed to delivering high-quality results while being a team player and problem-solver.
                                    </p>
                                </div>
                            </div>
                        </div> */}

                        {/* Achievements Section */}
                        <div className="mb-16 animate-fadeInUp delay-1000">
                            <h2 className="text-4xl font-semibold mb-8 text-white">Achievements</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { title: "Project Leadership", description: "Led the development of a high-traffic app that increased user engagement by 40%", icon: <FaAward className="text-indigo-400 text-3xl" /> },
                                    { title: "Innovation Award", description: "Developed an award-winning mobile app at a tech competition", icon: <FaAward className="text-indigo-400 text-3xl" /> },
                                    { title: "Open Source Contribution", description: "Contributed to a GitHub project with over 1,000 stars", icon: <FaAward className="text-indigo-400 text-3xl" /> }
                                ].map((achievement, index) => (
                                    <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition transform hover:-translate-y-1">
                                        <div className="mb-4">{achievement.icon}</div>
                                        <h3 className="text-indigo-400 text-2xl font-semibold mb-4">{achievement.title}</h3>
                                        <p className="text-gray-400">{achievement.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hobbies & Interests */}
                        <div className="mb-16 animate-fadeInUp delay-1200">
                            <h2 className="text-4xl font-semibold mb-8 text-white">Hobbies & Interests</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    { title: "Photography", description: "Capturing the world through visual storytelling", icon: <FaCamera className="text-indigo-400 text-3xl" /> },
                                    { title: "Travel", description: "Exploring new cultures and experiences", icon: <FaPlane className="text-indigo-400 text-3xl" /> },
                                    { title: "Tech Projects", description: "Experimenting with new technologies and ideas", icon: <FaLaptopCode className="text-indigo-400 text-3xl" /> }
                                ].map((hobby, index) => (
                                    <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition transform hover:-translate-y-1 text-center">
                                        <div className="mb-4">{hobby.icon}</div>
                                        <h3 className="text-indigo-400 text-2xl font-semibold mb-2">{hobby.title}</h3>
                                        <p className="text-gray-400">{hobby.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Fun Facts Section */}
                        {/* <div className="mb-16 animate-fadeInUp delay-1400">
                            <h2 className="text-4xl font-semibold mb-8 text-white">Fun Facts</h2>
                            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                                <ul className="space-y-4 text-lg">
                                    {[
                                        { fact: "I am fluent in Amharic, English, and French", icon: <FaBolt className="text-indigo-400 text-2xl" /> },
                                        { fact: "Had a memorable conversation with a tech CEO about future trends", icon: <FaBolt className="text-indigo-400 text-2xl" /> },
                                        { fact: "I collect vintage tech gadgets and love tinkering with them", icon: <FaBolt className="text-indigo-400 text-2xl" /> }
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center space-x-4">
                                            {item.icon}
                                            <span className="text-gray-400">{item.fact}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;
