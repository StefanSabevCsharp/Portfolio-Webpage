export default function Header() {
  return (
    <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]">
    <div className="flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent dark:bg-black">
      <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5">
        {/* website logo */}
        <a className="text-5xl font-semibold" href="index.html">
          <img
            className="h-[26px] lg:h-[32px]"
            src="images/logo/logo.png"
            alt="logo"
          />
        </a>
        <div className="flex items-center">
          {/* light and dark mode button */}
          <button
            id="theme-toggle-mobile"
            type="button"
            className="dark-light-btn lg:hidden w-[44px] h-[44px] ml-2"
          >
            <i
              id="theme-toggle-dark-icon-mobile"
              className="fa-solid text-xl fa-moon hidden"
            />
            <i
              id="theme-toggle-light-icon-mobile"
              className="fa-solid fa-sun text-xl hidden"
            />
          </button>
          {/* mobile toggle button */}
          <button id="menu-toggle" type="button" className="menu-toggle-btn">
            <i id="menu-toggle-open-icon" className="fa-solid fa-bars text-xl " />
            <i
              id="menu-toggle-close-icon"
              className="fa-solid fa-xmark text-xl hidden  "
            />
          </button>
        </div>
      </div>
    </div>
    {/* header items two for large screens */}
    <nav className="hidden lg:block">
      <ul className="flex my-12">
        <li>
          <a className="menu-item-two-active" href="homePage.html">
            <span className="mr-2 text-base">
              <i className="fa-solid fa-house" />
            </span>{" "}
            Home{" "}
          </a>
        </li>
        <li>
          <a className="menu-item-two" href="aboutTwo.html">
            <span className="mr-2 text-base">
              <i className="fa-regular fa-user" />
            </span>{" "}
            About{" "}
          </a>
        </li>
        <li>
          <a className="menu-item-two" href="resumeTwo.html">
            <span className="mr-2 text-base">
              <i className="fa-regular fa-file-lines" />
            </span>{" "}
            Resume{" "}
          </a>
        </li>
        <li>
          <a className="menu-item-two" href="portfiloTwo.html">
            <span className="mr-2 text-base">
              <i className="fas fa-briefcase" />
            </span>{" "}
            Works{" "}
          </a>
        </li>
        <li>
          <a className="menu-item-two" href="blogTwo.html">
            <span className="mr-2 text-base">
              <i className="fa-brands fa-blogger" />
            </span>{" "}
            Blogs{" "}
          </a>
        </li>
        <li>
          <a className="menu-item-two" href="contactTwo.html">
            <span className="mr-2 text-base">
              <i className="fa-solid fa-address-book" />
            </span>{" "}
            Contact{" "}
          </a>
        </li>
        <li>
          {/* light and dark mode button */}
          <button
            id="theme-toggle"
            type="button"
            className="dark-light-btn w-[44px] h-[44px] ml-2"
          >
            <i
              id="theme-toggle-dark-icon"
              className="fa-solid text-xl fa-moon hidden"
            />
            <i
              id="theme-toggle-light-icon"
              className="fa-solid fa-sun text-xl hidden"
            />
          </button>
        </li>
      </ul>
    </nav>
    {/* mobile menu start */}
    <nav id="navbar" className="hidden lg:hidden">
      <ul className="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
        <li>
          <a className="mobile-menu-items-active" href="homePage.html">
            <span className="mr-2 text-xl">
              <i className="fa-solid fa-house" />
            </span>{" "}
            Home{" "}
          </a>
        </li>
        <li>
          <a className="mobile-menu-items" href="aboutTwo.html">
            <span className="mr-2 text-xl">
              <i className="fa-regular fa-user" />
            </span>{" "}
            About{" "}
          </a>
        </li>
        <li>
          <a className="mobile-menu-items" href="resumeTwo.html">
            <span className="mr-2 text-xl">
              <i className="fa-regular fa-file-lines" />
            </span>{" "}
            Resume{" "}
          </a>
        </li>
        <li>
          <a className="mobile-menu-items" href="portfiloTwo.html">
            <span className="mr-2 text-xl">
              <i className="fas fa-briefcase" />
            </span>{" "}
            Works{" "}
          </a>
        </li>
        <li>
          <a className="mobile-menu-items" href="blogTwo.html">
            <span className="mr-2 text-xl">
              <i className="fa-brands fa-blogger" />
            </span>{" "}
            Blogs{" "}
          </a>
        </li>
        <li>
          <a className="mobile-menu-items" href="contactTwo.html">
            <span className="mr-2 text-xl">
              <i className="fa-solid fa-address-book" />
            </span>{" "}
            Contact{" "}
          </a>
        </li>
      </ul>
    </nav>
    {/* mobile menu end */}
  </header>
  );
}