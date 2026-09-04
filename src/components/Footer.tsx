import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-navy text-white pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 mb-8 sm:mb-10 md:mb-12 border-b border-white/10 pb-8 sm:pb-10 md:pb-12">

          {/* Column 1: Brand + Tagline */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 text-center lg:text-left">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center justify-center lg:justify-start space-x-2 mb-3 sm:mb-4"
            >
              <span className="flex items-center justify-center text-coral font-extrabold text-2xl sm:text-3xl">
                QI
              </span>

              <span className="text-2xl sm:text-3xl font-bold">
                QuadInfy
              </span>
            </button>

            <p className="text-white/70 text-sm sm:text-base max-w-md mx-auto lg:mx-0 leading-relaxed mb-4 sm:mb-6 px-4 sm:px-0">
              <span className="text-coral font-semibold">
                More than just code:
              </span>{" "}
              We partner with you to engineer{" "}
              <span className="text-coral font-semibold">
                future-proof digital foundations.
              </span>{" "}
              We build fast, robust experiences designed for performance,
              scale, and long-term success.{" "}
              <span className="text-coral font-semibold">
                Reliable technology to turn your vision into profitable
                reality.
              </span>
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-coral">
              Explore
            </h4>

            <nav className="space-y-2 sm:space-y-3">

              <button
                type="button"
                onClick={scrollToTop}
                className="block text-sm sm:text-base text-white/70 hover:text-coral transition-colors"
              >
                Home
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="block text-sm sm:text-base text-white/70 hover:text-coral transition-colors"
              >
                About Us
              </button>

              {/* FIXED CAREERS LINK */}
              <button
                type="button"
                onClick={() => scrollToSection("careers")}
                className="block text-sm sm:text-base text-white/70 hover:text-coral transition-colors"
              >
                Careers
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("portfolio")}
                className="block text-sm sm:text-base text-white/70 hover:text-coral transition-colors"
              >
                Portfolio
              </button>

            </nav>
          </div>

          {/* Column 3: Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-coral">
              Services
            </h4>

            <nav className="space-y-2 sm:space-y-3">

              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="block text-sm sm:text-base text-white/70 hover:text-coral transition-colors"
              >
                Web Development
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="block text-sm sm:text-base text-white/70 hover:text-coral transition-colors"
              >
                Support & Maintenance
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="block text-sm sm:text-base text-white/70 hover:text-coral transition-colors font-medium"
              >
                View All Services
              </button>

            </nav>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-coral">
              Connect
            </h4>

            <address className="space-y-2 sm:space-y-3 not-italic">

              <p className="text-sm sm:text-base text-white/70">
                Email:{" "}
                <a
                  href="mailto:quadinfy@gmail.com"
                  className="hover:text-coral transition-colors break-all"
                >
                  quadinfy@gmail.com
                </a>
              </p>

              <p className="text-sm sm:text-base text-white/70">
                Phone:{" "}
                <a
                  href="tel:+917974567291"
                  className="hover:text-coral transition-colors"
                >
                  +91 7974567291
                </a>
              </p>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="bg-coral text-white mt-3 sm:mt-4 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:scale-[1.02] transition-all inline-block shadow-lg shadow-coral/30"
              >
                Get in Touch
              </button>

            </address>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-3 sm:pt-4 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">

          <p className="text-white/60 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} QuadInfy. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">

            <a
              href="/privacy-policy"
              className="text-white/60 hover:text-coral transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-white/60 hover:text-coral transition-colors"
            >
              Terms of Service
            </a>

          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {/*
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-coral text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 transition-all btn-glow z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      */}
    </footer>
  );
}
