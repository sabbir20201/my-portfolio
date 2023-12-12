

const Contact = () => {
    return (
        <div className="my-12">
           <h1 className="text-center font-bold text-4xl my-3">Contact<span className="text-sky-400">Me </span> </h1>
           <p className="text-center font-semibold text-xl">If you have any question, feel free to contact me</p>
            <div className="hero h-auto mt-3">
      
                <div className="hero-content flex flex-col lg:flex-row">
                    <div className="flex-1">
                    <div className="text-center lg:text-left ">
                        <img src="https://i.ibb.co/PmybsM3/photo-1587560699334-bea93391dcef.jpg" className="h-full" alt="" />
                    </div>
                    </div>
                 
                   <div className="flex-1">
                   <div className="card w-full max-w-full">
                        <form className=" ">
                            <div className="form-control max-w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea placeholder="type here" role="4" className="resize-y rounded-md py-6"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
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