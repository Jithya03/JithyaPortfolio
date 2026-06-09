import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-slate-950 text-white p-10">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Contact Me
            </h1>

            <p className="text-slate-400 mb-10">
                Feel free to connect with me for opportunities,
                collaborations, or professional networking.
            </p>

            <div className="grid md:grid-cols-2 gap-8">

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <Phone className="text-cyan-400" />
                        <h3 className="text-xl font-semibold">Phone</h3>
                    </div>
                    <p className="text-slate-300">
                        +91 99479 41987
                    </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <Mail className="text-cyan-400" />
                        <h3 className="text-xl font-semibold">Email</h3>
                    </div>
                    <p className="text-slate-300">
                        jithyajm2004@gmail.com
                    </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <MapPin className="text-cyan-400" />
                        <h3 className="text-xl font-semibold">Location</h3>
                    </div>
                    <p className="text-slate-300">
                        Trivandrum, Kerala, India
                    </p>
                </div>

            </div>


        </main >
    );
}

