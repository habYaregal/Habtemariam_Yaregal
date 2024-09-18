// import './Projects.css';

const Projects = () => {
    return (
        <div id="projects" className="bg-gray-900 min-h-screen py-16">
            <section className="max-w-screen-xl mx-auto px-6">
                <h2 className="text-white text-4xl lg:text-5xl font-bold mb-16 text-center animate-fadeInUp">
                    Projects
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 animate-fadeInUp delay-200">
                    {/* Project Card */}
                    <div className="bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 group">
                        <div className="relative">
                            <img src="project1.png" alt="Project 1" className="w-full h-56 object-cover rounded-t-lg group-hover:opacity-80 transition-opacity duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-t-lg"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-indigo-400 text-xl font-semibold mb-4">Project 1: E-Commerce Platform</h3>
                            <p className="text-gray-300 mb-4">A fully functional e-commerce platform built with React and Node.js, featuring a product catalog, shopping cart, and payment gateway integration.</p>
                            <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">View on GitHub</a>
                        </div>
                    </div>

                    {/* Project Card */}
                    <div className="bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 group">
                        <div className="relative">
                            <img src="project2.png" alt="Project 2" className="w-full h-56 object-cover rounded-t-lg group-hover:opacity-80 transition-opacity duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-t-lg"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-indigo-400 text-xl font-semibold mb-4">Project 2: Task Manager App</h3>
                            <p className="text-gray-300 mb-4">A Flutter-based task management app that helps users organize tasks with due dates, categories, and priorities. The app uses Provider for state management.</p>
                            <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">View on GitHub</a>
                        </div>
                    </div>

                    {/* Project Card */}
                    <div className="bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 group">
                        <div className="relative">
                            <img src="project3.png" alt="Project 3" className="w-full h-56 object-cover rounded-t-lg group-hover:opacity-80 transition-opacity duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-t-lg"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-indigo-400 text-xl font-semibold mb-4">Project 3: Social Media Dashboard</h3>
                            <p className="text-gray-300 mb-4">A responsive social media dashboard built with Vue.js and Firebase, featuring user authentication, real-time data updates, and social feed analytics.</p>
                            <a href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">View on GitHub</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;
