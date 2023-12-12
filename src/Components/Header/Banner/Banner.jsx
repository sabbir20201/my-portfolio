

const Banner = () => {
    return (
        <div>
            
            <div className="py-28 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
               <div className="grid justify-center items-center">
               <div className="pl-10">
                    <h4 className="font-bold text-lg">hello!</h4>
                    <h1 className="text-5xl font-bold">I am a <span className="text-sky-400">Sabbir Ahamad</span> <br />from Bangladesh</h1>
                    <p className="py-6">I am a passionate web designer based in Bangladesh, dedicated to crafting engaging and user-friendly interfaces. As a front-end developer, I bring creativity and functionality to every project I undertake.</p>
                    <button className="btn bg-sky-400">Hire Me</button>
                </div>
               </div>
                <div className="px-10">
                    <img src="https://i.ibb.co/0sjLfQ7/carlos-muza-hpj-Sk-U2-UYSU-unsplash.jpg" className="" alt="" />
                </div>
            </div>
        </div>

    );
};

export default Banner;