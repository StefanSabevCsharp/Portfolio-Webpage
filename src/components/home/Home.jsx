export default function Home() {
    return (
        <div
            className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center aos-init aos-animate"
            data-aos="fade"
        >
            {/* personal image */}
            <img
                className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
                src="images/mypic.jpg"
                alt="about avatar"
            />
            <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
                {" "}
                Stefan Sabev{" "}
            </h3>
            <p className="mb-4 text-[#7B7B7B]">FrondEnd Developer</p>
            {/* social link and social  buttons */}
            <div className="flex space-x-3">
                
                <a
                    href="https://www.facebook.com/stefan.sabev.94"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="socialbtn text-[#1773EA]">
                        <i className="fa-brands fa-facebook-f" />
                    </span>
                </a>
                <a href="https://github.com/StefanSabevCsharp" target="_blank" rel="noopener noreferrer">
                    <span className="socialbtn text-[#1C9CEA]">
                        <i className="fa-brands fa-github" />
                    </span>
                </a>
               
                <a
                    href="https://www.linkedin.com/in/stefan-sabev-952a5620a/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="socialbtn text-[#0072b1]">
                        <i className="fa-brands fa-linkedin-in" />
                    </span>
                </a>
            </div>
            {/* dowanload button */}
            <a href="/public/CV.txt" download>
                <button className="dowanload-btn">
                    <img src="images/icons/dowanload.png" alt="icon" className="mr-2" />
                    Download CV
                </button>
            </a>
        </div>

    );
}