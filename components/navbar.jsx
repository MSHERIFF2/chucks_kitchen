import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-[#FFFFFF]">
      <nav className="max-w-[1440px] max-h-[5.63rem] border mx-auto px-[3rem] py-[1.125rem] md:px-12 flex flex-col md:flex-row justify-evenly items-center gap-x-[2.8125rem]">
        {/* Brand */}
        <Link href="/" className="w-1/5">
          <h1 className="text-[#FF7A18] font-island text-[2.55rem] leading-[2.25rem] cursor-pointer">
            Chuks Kitchen
          </h1>
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-evenly items-center  gap-x-8 mt-6 md:mt-0 font-inter text-[1rem]  text-[#1F2937] leading-[1.5rem] font-medium w-3/5">
          <li>
            <Link href="/" className="hover:text-[#FF7A18] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/explore"
              className="hover:text-[#FF7A18] transition-colors"
            >
              Explore
            </Link>
          </li>
          <li>
            <Link
              href="/orders"
              className="hover:text-[#FF7A18] transition-colors"
            >
              My orders
            </Link>
          </li>
          <li>
            <Link
              href="/account"
              className="hover:text-[#FF7A18] transition-colors"
            >
              Account
            </Link>
          </li>
          <li></li>
        </ul>
        <button className="bg-[#FF7A18] text-[#FFFFFF] px-1 py-1 rounded-[10px] font-bold hover:bg-[#e66a10] transition-all w-[130px] h-[3.38rem]">
          Login
        </button>
      </nav>
    </div>
  );
}
