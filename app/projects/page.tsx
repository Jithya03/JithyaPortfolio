export default function Projects() {
    const projects = [
        {
            title: "CharitySphere",
            description:
                "Donation management platform with secure user authentication and charity verification.",
            tech: "HTML • CSS • Bootstrap • Python • Django • SQLite • Gemini API • Razorpay",
        },
        {
            title: "Spam Shield",
            description:
                "Application for detecting and filtering spam messages and phone numbers.",
            tech: "php • css • html • mysql",
        },
        {
            title: "Skill Swap",
            description:
                "Platform where users can exchange skills and learn from each other using a credit system.",
            tech: "html • css • python • django • javascript • sqlite,"
        },
        {
            title: "EnviroSense",
            description:
                "Environmental monitoring system with temperature, humidity, and distance sensors.",
            tech: "IoT • Arduino • Sensors",
        },
        {
            title: "Ayurveda Ai",
            description:
                "An AI-powered assistant that provides answers to Ayurvedic questions through both text and voice interactions.",
            tech: "HTML • CSS • Javascript • Ollama",
        },

    ];

    return (
        <main className="min-h-screen bg-slate-950 text-white p-10">
            <h1 className="text-5xl font-bold mb-10">Projects</h1>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition duration-300"
                    >
                        <h2 className="text-2xl font-bold text-cyan-400">
                            {project.title}
                        </h2>

                        <p className="mt-4 text-slate-300">
                            {project.description}
                        </p>

                        <p className="mt-4 text-sm text-slate-400">
                            {project.tech}
                        </p>

                        <button className="mt-6 px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold">
                            View Project
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}