import './AboutMe.css';

const AboutMe = () => {
    return (
        <div id="about" className="bg-gray-900 min-h-screen py-16">
            <section className="max-w-screen-xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
                    {/* About Me Content */}
                    <div className="text-center lg:text-left flex-1">
                        <h1 className="text-white text-4xl lg:text-5xl font-bold mb-8 animate-fadeInUp">
                            About Me
                        </h1>
                        <p className="text-gray-300 leading-relaxed mb-8 animate-fadeInUp delay-200">
                            Hi, I'm Habtemariam Yaregal, a Full-Stack Developer with a passion for creating dynamic and interactive web applications. I specialize in both frontend and backend development, and I'm dedicated to building seamless and engaging user experiences.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-12 animate-fadeInUp delay-400">
                            With a strong foundation in modern web technologies such as React, Node.js, and Flutter, I enjoy tackling complex challenges and collaborating with teams to bring innovative projects to life. My goal is to leverage my skills to contribute to impactful projects and grow as a developer.
                        </p>

                        {/* Skills Section */}
                        <div className="mb-16 animate-fadeInUp delay-600">
                            <h2 className="text-white text-3xl font-semibold mb-8">Skills & Expertise</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                                    <h3 className="text-indigo-400 text-xl font-semibold mb-4">Frontend</h3>
                                    <p className="text-gray-300">React, Vue, Flutter</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                                    <h3 className="text-indigo-400 text-xl font-semibold mb-4">Backend</h3>
                                    <p className="text-gray-300">Node.js, Express, Django</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                                    <h3 className="text-indigo-400 text-xl font-semibold mb-4">Database</h3>
                                    <p className="text-gray-300">MongoDB, SQL</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                                    <h3 className="text-indigo-400 text-xl font-semibold mb-4">Tools</h3>
                                    <p className="text-gray-300">Git, GitHub, Figma, Adobe XD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;
