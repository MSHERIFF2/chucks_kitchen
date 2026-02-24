import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between">
      <div>
        <Image src="/onboardingImage.png" width={720} height={720} alt="Hero picture" />
      </div>
      <div className=" w-3/5 ">
        <div className="flex justify-between items-center bg-[#ffffff] my-[1.75rem] mx-[6rem]">
          <Link href="/" className="w-3/5">
            <h1 className="text-[#FF7A18] font-island text-[2.55rem] leading-[2.25rem] cursor-pointer">
              Chuks Kitchen
            </h1>
          </Link>
          <button className="bg-[#ffffff] border-[2px] border-[#1E88E5] text-[#1E88E5] text-center text-[1rem] p-x-[1rem] p-y-[1rem] rounded-[10px] font-semi-bold  w-[33%] ">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
