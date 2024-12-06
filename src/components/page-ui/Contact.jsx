import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Input from "../ui/Input";
import Textarea from "../ui/TextArea";

const Contact = () => {
    const form = useRef();
    const contactRefs = useRef([]);
    const [inView, setInView] = useState([false, false, false, false]);
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });
    const [statusMessage, setStatusMessage] = useState({ message: "", type: "" });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = contactRefs.current.indexOf(entry.target);
                    if (entry.isIntersecting && index !== -1) {
                        setInView((prev) => {
                            const updated = [...prev];
                            updated[index] = true;
                            return updated;
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        contactRefs.current.forEach((ref) => ref && observer.observe(ref));

        return () => {
            contactRefs.current.forEach((ref) => ref && observer.unobserve(ref));
        };
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_qwnw9t8", "template_sc3x563", form.current, {
                publicKey: "-aWhcaMq-mGWXSXn6",
            })
            .then(() => {
                setStatusMessage({ message: "Your message has been sent!", type: "success" });
                setFormData({ user_name: "", user_email: "", message: "" });
            })
            .catch(() => {
                setStatusMessage({ message: "Failed to send message. Please try again later.", type: "error" });
            });
    };

    return (
        <section
            id="contact"
            className="flex justify-center items-center dark:bg-black bg-white dark:text-white font-poppins pb-20 transition-all duration-500"
        >
            <div className="container max-w-md mx-auto p-8 rounded-lg">
                <h2 className="text-3xl text-[#cf1b1b] font-extrabold mb-10 text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:-my-3 after:bg-[#cf1b1b] after:bottom-0 after:w-1/4">
                    Contact
                </h2>
                {statusMessage.message && (
                    <div
                        className={`text-center mb-4 ${
                            statusMessage.type === "success" ? "text-green-500" : "text-red-500"
                        }`}
                    >
                        {statusMessage.message}
                    </div>
                )}
                <form ref={form} onSubmit={handleSubmit} className="flex flex-col justify-center space-y-9">
                    {[["Name", "user_name", "text"], ["Email", "user_email", "email"], ["Message", "message", "textarea"]].map(
                        ([placeholder, name, type], index) => (
                            <div
                                key={index}
                                ref={(el) => (contactRefs.current[index] = el)}
                                className={`${
                                    inView[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                                } transition-all duration-500`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                {type === "textarea" ? (
                                    <Textarea
                                        id={name}
                                        name={name}
                                        placeholder={placeholder}
                                        value={formData[name]}
                                        onChange={handleChange}
                                        required
                                    />
                                ) : (
                                    <Input
                                        id={name}
                                        type={type}
                                        name={name}
                                        placeholder={placeholder}
                                        value={formData[name]}
                                        onChange={handleChange}
                                        required
                                    />
                                )}
                            </div>
                        )
                    )}
                    <div
                        ref={(el) => (contactRefs.current[3] = el)}
                        className={`${
                            inView[3] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                        } transition-all duration-500 text-right`}
                        style={{ transitionDelay: "450ms" }}
                    >
                        <button
                            type="submit"
                            className="px-9 py-2 bg-[#cf1b1b] text-white text-md font-bold rounded-xl"
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
