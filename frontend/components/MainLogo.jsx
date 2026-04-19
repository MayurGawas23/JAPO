import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/')}
      className="cursor-pointer flex items-center justify-center gap-2 px-5 hover:opacity-90"
      aria-label="Navigate to home"
    >
      {/* Logo Image */}
      <div>
        <img
          src="/logo.png"
          alt="Japo Publishers Logo"
          className="w-20 sm:w-24 md:w-20 h-auto" // Adjust image size responsively
        />
      </div>

      {/* Logo Text */}
      <div>
        <h1 className="font-[condensed-medium] tracking-wider text-sm sm:text-base md:text-2xl font-semibold text-[#145E63]">
          <span className="font-[oswal-semibold] text-[#C7740E] lg:text-[42px] sm:text-3xl md:text-5xl font-extrabold">
            JAPO
          </span>
          {/* MAIN */}
        </h1>

        {/* Tagline with Decorative Line */}
        <div className="flex items-center justify-center ">
          <div className="border-t-2 border-[#C7740E] flex-grow"></div>
          <span className="relative bottom-2 text-[#145E63] lg:text-[20px] text-[9px] sm:text-[10px] font-semibold font-[condensed-medium]">
          JOURNAL & ARTICLE PUBLISING ORGANIZATION
            {/* A better space for quality research */}
          </span>
          <div className="border-t-2 border-[#C7740E] flex-grow"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
