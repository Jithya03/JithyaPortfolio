export default function Experience() {
    return (
        <main className="min-h-screen bg-slate-950 text-white p-10">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Professional Experience
            </h1>

            <p className="text-slate-400 mb-12">
                My professional journey in software development and full-stack technologies.
            </p>

            <div className="space-y-8">

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-cyan-400">
                        IPCS Global
                    </h2>

                    <p className="text-slate-400 mt-2">
                        Trivandrum, Kerala
                    </p>

                    <p className="mt-4 text-slate-300 leading-8">
                        Developed and maintained dynamic web applications using
                        Django framework following MVC/MVT architecture.
                        Improved application performance through debugging,
                        optimization, and code enhancement. Collaborated with
                        team members to design, develop, test, and deploy
                        full-stack web applications.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                        <span className="bg-slate-800 px-4 py-2 rounded-full">
                            Python
                        </span>
                        <span className="bg-slate-800 px-4 py-2 rounded-full">
                            Django
                        </span>
                        <span className="bg-slate-800 px-4 py-2 rounded-full">
                            MySQL
                        </span>
                        <span className="bg-slate-800 px-4 py-2 rounded-full">
                            Full Stack Development
                        </span>
                    </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-cyan-400">
                        M Squared Software & Services (P) Ltd.
                    </h2>

                    <p className="text-slate-400 mt-2">
                        Technopark, Thiruvananthapuram
                    </p>

                    <p className="mt-4 text-slate-300 leading-8">
                        Gained hands-on experience in Python programming,
                        debugging, optimization, and scripting tasks.
                        Worked on improving code quality, application
                        efficiency, and software development best practices.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                        <span className="bg-slate-800 px-4 py-2 rounded-full">
                            Python
                        </span>
                        <span className="bg-slate-800 px-4 py-2 rounded-full">
                            Debugging
                        </span>
                        <span className="bg-slate-800 px-4 py-2 rounded-full">
                            Optimization
                        </span>
                        <span className="bg-slate-800 px-4 py-2 rounded-full">
                            Scripting
                        </span>
                    </div>
                </div>

            </div>
        </main>
    );
}

