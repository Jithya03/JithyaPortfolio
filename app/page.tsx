import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-950 text-white">

            <nav className="flex justify-between items-center px-10 py-6 border-b border-slate-800">
                <h1 className="text-2xl font-bold text-cyan-400">
                    PORTFOLIO
                </h1>

                <div className="flex gap-6">
                    <Link href="/">Home</Link>
                    <Link href="/skills">Skills</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/experience">Experience</Link>
                    <Link href="/contact">Contact</Link>
                </div>


            </nav>

            <section className="container mx-auto px-10 py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <p className="text-cyan-400">
                            Python Full Stack Developer
                        </p>

                        <h1 className="text-6xl font-bold mt-4">
                            Jithya J M
                        </h1>

                        <p className="mt-6 text-slate-300 text-lg">
                            Aspiring Software Engineer with comprehensive experience in the full software development lifecycle.
                            Skilled in developing responsive web applications using the Django stack (Python, HTML/CSS/JS, MySQL)
                            and foundational cybersecurity practices.
                            Committed to writing maintainable code and delivering high-quality, user-centric experiences
                        </p>

                        <div className="flex gap-4 mt-8">
                            <a
                                href="https://github.com/Jithya03"
                                target="_blank"
                                className="px-6 py-3 bg-cyan-500 rounded-xl text-black font-semibold"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://www.linkedin.com/in/jithya-j-m-3ba566372"
                                target="_blank"
                                className="px-6 py-3 border border-slate-700 rounded-xl"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="/Jithyajm.pdf"
                                className="px-6 py-3 border border-cyan-500 rounded-xl"
                            >
                                Resume
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="/profile.jpeg"
                            alt="Jithya J M"
                            className="w-[450px] h-[450px] object-cover rounded-3xl shadow-2xl"
                        />
                    </div>

                </div>
            </section>

        </main>
    );
}

