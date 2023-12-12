import FileSaver from "file-saver";

const AboutMe = () => {
    const handleDownloadResume = ()=>{
        const resumePath = '../../../public/resume (1).pdf'
        FileSaver.saveAs(resumePath, 'sabbir_ahmad_resume.pdf')
    }
    return (
        <div className="lg:mb-10">

            <div className="hero h-[600px] ">
                <div>
                    <div className="hero-content flex flex-col lg:flex-row items-center">
                        <div className="flex-1 flex items-center justify-center">
                            <div className="">
                                <img src="https://i.ibb.co/mbfZPKy/1000-F-383918518-XWHxca-FVhzg37t1k-N3-Ro11f6-ME5-XC5-DZ.jpg" className="h-full w-full object-cover" />

                            </div>
                        </div>
                        <div className="flex-1">
                            <h1 className=" font-bold text-4xl mb-5">About<span className="text-sky-400"> Me </span> </h1>
                            <p className="py-6">
                                Hello! I am Sabbir Ahmad, a web developer specializing in React. I craft seamless, visually appealing websites by combining innovative ideas with clean, efficient code. Passionate about user experiences and always staying updated on the latest trends.
                                <br />
                                <br />
                               </p>
                              
                               <div className="flex gap-2 items-center">
                               <div className="badge bg-sky-500 badge-sm"></div>
                               <h2 className="font-semibold text-xl">Education :</h2>
                               
                               </div>
                               <h1>BA Hons in Islamic Studies</h1>
                               <p>Govt. Titumir College, Dhaka</p>
                            <button onClick={handleDownloadResume} className="btn bg-sky-400 mt-4"> Download Resume</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;