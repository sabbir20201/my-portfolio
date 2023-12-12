import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j7aan8b', 'template_84i43jh', form.current, 'Kn-R4XkweGYzkLhY8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="my-12">
            <h1 className="text-center font-bold text-4xl my-3">Contact<span className="text-sky-400">Me </span> </h1>
            <p className="text-center font-semibold text-xl">If you have any question, feel free to contact me</p>

            {/* <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" className='btn' value="Send" />
        </form> */}

            <div className="hero h-auto mt-3">

                <div className="hero-content flex flex-col lg:flex-row">
                    <div className="flex-1">
                        <div className="text-center lg:text-left ">
                            <img src="https://i.ibb.co/PmybsM3/photo-1587560699334-bea93391dcef.jpg" className="h-full" alt="" />
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="card w-full sm:w-full lg:max-w-full">
                            <form ref={form} onSubmit={sendEmail} className=" ">
                                <div className="form-control sm:max-w-full lg:max-w-full">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="user_name" placeholder="email" className="input input-bordered sm:w-96" required />
                                </div>
                                <div className="form-control sm:max-w-full lg:max-w-full  ">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="user_email" placeholder="email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea placeholder="type here" name="message" role="4" className="resize-y rounded-md py-6"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" value="send" className="btn bg-sky-500">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;