import Input from "../ui/Input";
import Textarea from "../ui/TextArea";

const Contact = () => {
    return (
    <section id="contact" className="min-h-screen flex justify-center items-center dark:bg-black bg-white dark:text-white font-poppins pb-20 transition-all duration-500">
    <div className="container max-w-lg mx-auto p-8 rounded-lg">
    <h2 className="text-4xl text-[#cf1b1b] font-extrabold mb-10 text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:h-[4px] after:-my-3 after:bg-[#cf1b1b] after:bottom-0 after:w-1/4">
        Contact
    </h2>
    <form className="flex flex-col justify-between space-y-12">
        <Input id="name" type="text" placeholder="Name" required />

        <Input id="email" type="email" placeholder="Email" required />

        <Textarea id="message" placeholder="Your message" required />

        <div className="text-right">
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