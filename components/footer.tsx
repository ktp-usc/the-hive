import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-hive-blue pt-15">

            {/*  div containing the main sections of the footer */}
            <section className="flex flex-row flex-wrap justify-center gap-20">

                {/* Hive Image */}
                {/*<Image src={""} alt={"Hive Community Circle Logo"} width={100} height={100}/>*/}

                {/* Quick Links Section */}
                <div className="flex flex-col p-4 rounded-2xl mb-10">
                    <h1 className="font-bold text-lg text-gray-200">
                        Quick Links
                    </h1>
                    <br/>
                    <Link href="CHANGE" className="py-0.5 text-gray-200">
                        About Us
                    </Link>
                    <Link href="CHANGE" className="py-0.5 text-gray-200">
                        Awareness
                    </Link>
                    <Link href="CHANGE" className="py-0.5 text-gray-200">
                        Support
                    </Link>
                    <Link href="/contact" className="py-0.5 text-gray-200">
                        Contact
                    </Link>
                    <Link href="CHANGE" className="py-0.5 text-gray-200">
                        Keep Updated
                    </Link>
                </div>

                {/* Contact Us Section */}
                <div className="flex flex-col p-4 rounded-2xl mb-10">
                    <h1 className="font-bold text-lg text-gray-200">
                        Contact
                    </h1>
                    <br/>
                    <p className="py-0.5 text-gray-200">
                        <b>Email:</b> hello@thehivecc.org
                    </p>
                    <p className="py-0.5 text-gray-200">
                        <b>Phone:</b> (803) 888-7725
                    </p>
                    <p className="py-0.5 text-gray-200">
                        <b>Address:</b> 4704 Colonial Drive Columbia, SC
                    </p>
                </div>

                {/* Donation Section */}
                <div className="flex flex-col p-4 rounded-2xl mb-10">
                    <h1 className="font-bold text-gray-200">
                        Support Our Mission
                    </h1>
                    <br/>
                    <Link href="CHANGE" className="py-0.5 text-gray-200">
                        Donation Link
                    </Link>
                </div>
            </section>

            <div className="border-t border-gray-200 mx-20"/>
            {/* Copyright */}
            <div className="flex flex-col p-4 rounded-2xl pb-10 pt-5 text-center">
                <p className="text-gray-200">
                    &copy; 2026 The Hive
                </p>
            </div>
        </footer>
    )
}