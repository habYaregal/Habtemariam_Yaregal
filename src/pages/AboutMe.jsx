import './AboutMe.css';

const AboutMe = () => {
    return (
        <div id="about-me" className="bg-gray-900 min-h-screen py-16">
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

                        {/* Personal Values & Work Ethic */}
                        <div className="mb-16 animate-fadeInUp delay-800">
                            <h2 className="text-white text-3xl font-semibold mb-8">Personal Values & Work Ethic</h2>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
                                <div className="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 2a6 6 0 00-6 6v1a6 6 0 006 6h1a6 6 0 006-6V8a6 6 0 00-6-6H10z" />
                                    </svg>
                                    <p className="text-gray-300">Integrity, dedication, and continuous improvement are at the core of my work ethic.</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 2a6 6 0 00-6 6v1a6 6 0 006 6h1a6 6 0 006-6V8a6 6 0 00-6-6H10z" />
                                    </svg>
                                    <p className="text-gray-300">I aim to deliver high-quality work while fostering a collaborative and respectful environment.</p>
                                </div>
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-16 animate-fadeInUp delay-1000">
                            <h2 className="text-white text-3xl font-semibold mb-8">Achievements</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                    <h3 className="text-indigo-400 text-xl font-semibold mb-4">Project Leadership</h3>
                                    <p className="text-gray-300">Led a team to develop a high-traffic application that increased user engagement by 40%.</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                    <h3 className="text-indigo-400 text-xl font-semibold mb-4">Innovation Award</h3>
                                    <p className="text-gray-300">Developed a mobile app that won the Best Innovation award at a tech competition.</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                    <h3 className="text-indigo-400 text-xl font-semibold mb-4">Open Source Contribution</h3>
                                    <p className="text-gray-300">Contributed to an open-source project that gained over 1,000 stars on GitHub.</p>
                                </div>
                            </div>
                        </div>

                        {/* Hobbies & Interests */}
                        <div className="mb-16 animate-fadeInUp delay-1200">
                            <h2 className="text-white text-3xl font-semibold mb-8">Hobbies & Interests</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400 mb-4 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M5 10a5 5 0 0110 0 5 5 0 01-10 0z" />
                                    </svg>
                                    <h3 className="text-white text-xl font-semibold mb-2">Photography</h3>
                                    <p className="text-gray-300">Capturing moments and exploring visual storytelling.</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400 mb-4 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M12 4V2H8v2H6V2a1 1 0 00-1 1v1h12V3a1 1 0 00-1-1v1h-2zm-2 6H6v5a1 1 0 001 1h8a1 1 0 001-1v-5h-4z" />
                                    </svg>
                                    <h3 className="text-white text-xl font-semibold mb-2">Travel</h3>
                                    <p className="text-gray-300">Exploring new cultures and experiencing diverse cuisines.</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400 mb-4 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M7 7a3 3 0 016 0v6a3 3 0 01-6 0V7zm4 0a1 1 0 00-2 0v6a1 1 0 002 0V7z" />
                                    </svg>
                                    <h3 className="text-white text-xl font-semibold mb-2">Tech Projects</h3>
                                    <p className="text-gray-300">Building and experimenting with new technologies and ideas.</p>
                                </div>
                            </div>
                        </div>

                        {/* Fun Facts */}
                        <div className="mb-16 animate-fadeInUp delay-1400">
                            <h2 className="text-white text-3xl font-semibold mb-8">Fun Facts</h2>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                <div className="flex items-center space-x-4 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 4a2 2 0 00-2 2v1H5v1h3v1a2 2 0 002 2h2a2 2 0 002-2V8h3V7h-3V6a2 2 0 00-2-2H10z" />
                                    </svg>
                                    <p className="text-gray-300">I can speak three languages fluently: Amharic, English, and French.</p>
                                </div>
                                <div className="flex items-center space-x-4 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M6 8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2H6zM7 9h6v8H7V9z" />
                                    </svg>
                                    <p className="text-gray-300">I once met a tech CEO during a conference and had a memorable conversation about future tech trends.</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M12 3a6 6 0 00-6 6v1a6 6 0 006 6h1a6 6 0 006-6V9a6 6 0 00-6-6H12z" />
                                    </svg>
                                    <p className="text-gray-300">I have a collection of vintage tech gadgets that I love to tinker with.</p>
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
