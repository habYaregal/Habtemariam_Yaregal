// import './ContactMe.css';

const ContactMe = () => {
    return (
        <div id="contact" className="bg-gray-900 min-h-screen py-16">
            <section className="max-w-screen-xl mx-auto px-6">
                <h2 className="text-white text-4xl lg:text-5xl font-bold mb-16 text-center animate-fadeInUp">
                    Contact Me
                </h2>

                <div className="flex flex-col lg:flex-row items-start lg:space-x-16 animate-fadeInUp delay-200">
                    {/* Contact Form */}
                    <div className="flex-1">
                        <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full h-32 px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-indigo-500 text-white text-center rounded-md shadow-md transition hover:bg-indigo-600"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="flex-1 mt-12 lg:mt-0">
                        <h3 className="text-indigo-400 text-3xl font-semibold mb-6">Get In Touch</h3>
                        <p className="text-gray-300 mb-8">
                            Feel free to reach out for collaborations, project inquiries, or just to connect!
                        </p>
                        <ul className="text-gray-300 space-y-4">
                            <li>
                                <span className="font-semibold">Email:</span> <a href="mailto:your.email@example.com" className="text-indigo-400 hover:text-indigo-300 transition">your.email@example.com</a>
                            </li>
                            <li>
                                <span className="font-semibold">Phone:</span> <a href="tel:+1234567890" className="text-indigo-400 hover:text-indigo-300 transition">+123 456 7890</a>
                            </li>
                            <li>
                                <span className="font-semibold">LinkedIn:</span> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition">linkedin.com/in/yourprofile</a>
                            </li>
                            <li>
                                <span className="font-semibold">GitHub:</span> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition">github.com/yourusername</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactMe;
