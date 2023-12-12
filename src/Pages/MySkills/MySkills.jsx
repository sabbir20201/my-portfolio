
const MySkills = () => {
    return (
        <div className="my-48 md:my-72 lg:my-12">

            <h1 className="text-center font-bold text-4xl my-7">My<span className="text-sky-400"> Skills </span> </h1>
            <div className="grid grid-flow-row gap-4 justify-center">
                <div>
                    <div className="flex justify-between">
                        <h1>React</h1>
                        <p>80%</p>
                    </div>
                    <progress className="progress progress-success w-96" value="80" max="100"></progress>
                </div>
                <div>
                    <div className="flex justify-between">
                        <h1>Javascript</h1>
                        <p>80%</p>
                    </div>
                    <progress className="progress progress-success w-96" value="50" max="100"></progress>
                </div>
                <div>
                    <div className="flex justify-between">
                        <h1>Express</h1>
                        <p>80%</p>
                    </div>
                    <progress className="progress progress-success w-96" value="60" max="100"></progress>
                </div>
                <div>
                    <div className="flex justify-between">
                        <h1>Tailwind Css</h1>
                        <p>80%</p>
                    </div>
                    <progress className="progress progress-success w-96" value="95" max="100"></progress>
                </div>
                <div>
                    <div className="flex justify-between">
                        <h1>Mongodb</h1>
                        <p>80%</p>
                    </div>
                    <progress className="progress progress-success w-96" value="30" max="100"></progress>
                </div>
                
            </div>


        </div>
    );
};

export default MySkills;