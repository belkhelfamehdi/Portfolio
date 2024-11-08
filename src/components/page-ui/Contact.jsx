import { useState, useEffect } from "react";
import Input from "../ui/Input";
import Textarea from "../ui/TextArea";

const Contact = () => {
    const [inView, setInView] = useState([false, false, false, false]); // State to track visibility of each form element

    useEffect(() => {
        const handleScroll = () => {
            const newInView = inView.map((item, index) => {
                const element = document.getElementById(`contact-element-${index}`);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= window.innerHeight && rect.bottom >= 0;
                }
                return item;
            });
            setInView(newInView);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="contact" className="min-h-screen flex justify-center items-center dark:bg-black bg-white dark:text-white font-poppins pb-20 transition-all duration-500">
            <div className="container max-w-lg mx-auto p-8 rounded-lg">
                <h2 className="text-4xl text-[#cf1b1b] font-extrabold mb-10 text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:h-[4px] after:-my-3 after:bg-[#cf1b1b] after:bottom-0 after:w-1/4">
                    Contact
                </h2>
                <form className="flex flex-col justify-between space-y-12">
                    <div
                        id="contact-element-0"
                        className={`${inView[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} transition-opacity transition-transform duration-500`}
                        style={{ transitionDelay: '100ms' }}
                    >
                        <Input id="name" type="text" placeholder="Name" required />
                    </div>
                    <div
                        id="contact-element-1"
                        className={`${inView[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} transition-opacity transition-transform duration-500`}
                        style={{ transitionDelay: '100ms' }}
                    >
                        <Input id="email" type="email" placeholder="Email" required />
                    </div>
                    <div
                        id="contact-element-2"
                        className={`${inView[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} transition-opacity transition-transform duration-500`}
                        style={{ transitionDelay: '100ms' }}
                    >
                        <Textarea id="message" placeholder="Your message" required />
                    </div>
                    <div
                        id="contact-element-3"
                        className={`${inView[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} transition-opacity transition-transform duration-500 text-right`}
                        style={{ transitionDelay: '100ms' }}
                    >
                        <button
                            type="submit"
                            className="px-12 py-3 bg-[#cf1b1b] text-white text-xl font-bold rounded-xl"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
