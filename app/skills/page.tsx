export default function Skills() {
    return (
        <main className="min-h-screen bg-slate-950 text-white p-10">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Skills & Technologies
            </h1>

            <p className="text-slate-400 mb-10">
                Technologies, frameworks and tools I use to build modern web applications.
            </p>

            <div className="grid md:grid-cols-2 gap-8">

                <div className="bg-slate-900 p-6 rounded-2xl">
                    <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                        Programming Languages
                    </h3>
                    <p>Python • JavaScript • Java • PHP • C</p>
                </div>

                <div className="bg-slate-900 p-6 rounded-2xl">
                    <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                        Frontend
                    </h3>
                    <p>HTML • CSS • Bootstrap • AJAX • jQuery • Figma</p>
                </div>

                <div className="bg-slate-900 p-6 rounded-2xl">
                    <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                        Backend & Database
                    </h3>
                    <p>Django • Node.js • MySQL • JSON</p>
                </div>

                <div className="bg-slate-900 p-6 rounded-2xl">
                    <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                        Tools & Core Areas
                    </h3>
                    <p>
                        Git • VS Code • Linux Basics • Full Stack Development • MVC • MVT
                    </p>
                </div>

            </div>
        </main>
    );
}

