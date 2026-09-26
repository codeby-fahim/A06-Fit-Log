import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-800 bg-[#121318]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 my-6 py-6 px-5 text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Footer logo"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
          <h3 className="font-bold text-white tracking-wider">FITLOG</h3>
        </div>

        <p className="text-center md:text-right text-xs md:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
