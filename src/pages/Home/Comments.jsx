import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Comments = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const comments = [
        {
            content: "I purchased their latest tech gadget, and it has exceeded my expectations. An incredible piece of technology!",
            author: "John Smith",
            twitterHandle: "@TechGeekJohn",
        },
        {
            content: "The customer support for this tech gadget is top-notch. They answered all my questions promptly.",
            author: "Emily Techlover",
            twitterHandle: "@EmilyTechie",
        },
        {
            content: "This tech gadget has completely changed the way I work and play. Highly recommended!",
            author: "David Gadgeteer",
            twitterHandle: "@DaveGadget",
        },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-5">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">User Reviews of Our Latest Tech Gadgets</span>
            </h1>
            <h3 className="text-lg text-slate-400 mb-8 text-center font-semibold">Discover what our customers have to say about their experiences with our cutting-edge tech gadgets.</h3>

            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {comments.map((comment, index) => (
                    <div
                        key={index}
                        data-aos="flip-left"
                        style={{
                            backgroundColor: 'lightblue',
                            border: '1px solid #ddd',
                            borderRadius: '10px',
                            padding: '20px',
                        }}
                        className="flex flex-col max-w-md align-center justify-between"
                    >
                        <div className="flex flex-col space-y-5">
                            <p className="body-medium m-0 dark:text-dark-contrastText" style={{ hyphens: 'auto' }}>
                                {comment.content}
                            </p>
                        </div>
                        <div className="flex space-x-2 bg-gray-50 dark:bg-dark-70 dark:text-dark-contrastText px-6 pt-6 pb-5 rounded-b-xl">
                            <div className="flex flex-col justify-center">
                                <p className="heading-six m-0">{comment.author}</p>
                                <p className="body-small m-0 mt-1">{comment.twitterHandle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;
