export default function Home() {
    return (
        <div
            className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center aos-init aos-animate"
            data-aos="fade"
        >
            {/* personal image */}
            <img
                className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
                src="images/about/avatar.jpg"
                alt="about avatar"
            />
            <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
                {" "}
                Monalisa Ashley{" "}
            </h3>
            <p className="mb-4 text-[#7B7B7B]">Ui/Ux Designer</p>
            {/* social link and social  buttons */}
            <div className="flex space-x-3">
                {/* facebook link */}
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="socialbtn text-[#1773EA]">
                        <i className="fa-brands fa-facebook-f" />
                    </span>
                </a>
                {/* twitter link */}
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <span className="socialbtn text-[#1C9CEA]">
                        <i className="fa-brands fa-twitter" />
                    </span>
                </a>
                {/* dribbble icon and link */}
                <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                    <span className="socialbtn text-[#e14a84]">
                        <i className="fa-brands fa-dribbble" />
                    </span>
                </a>
                {/* linkedin icon and link */}
                <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="socialbtn text-[#0072b1]">
                        <i className="fa-brands fa-linkedin-in" />
                    </span>
                </a>
            </div>
            {/* dowanload button */}
            <button className="dowanload-btn">
                <img src="images/icons/dowanload.png" alt="icon" className="mr-2" />
                Download CV{" "}
            </button>
        </div>

    );
}