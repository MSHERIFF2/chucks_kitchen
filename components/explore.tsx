import Image from "next/image";
import MenuCard from "@/components/menucard";

export default function Explore() {
  return (
    <div className="overflow-x-hidden h-auto">
      {/* Hero section */}
      <div className="relative h-screen w-full">
        <Image
          src="/explorehero.png"
          alt="explorehero.png"
          fill
          className="object-cover -z-10 brightness-[0.63]"
          priority
        />

        <div className="relative z-10 flex flex-col items-center lg:items-start justify-center h-full px-6 lg:px-16 gap-6 lg:gap-10 text-center lg:text-left">
          <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-[48px] leading-tight lg:leading-[61px] font-inter w-full lg:w-3/5">
            Chuks Kitchen
          </h1>
          <h3 className="text-white font-inter font-medium text-xl md:text-[24px] lg:text-[24px] leading-snug lg:leading-[24px]">
            Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
          </h3>
        </div>
      </div>

      {/* menu and Popular  Categories */}
      <div className="bg-[#F3F4F6] w-full py-16 lg:py-24 px-6 lg:px-16 ">
        {/* menu categoies here */}
        <div className="my-[26px]  bg-[#FFFFFF] rounded-top-left-[14px] gap-[18px]flex flex-col md:flex-row md:flex-wrap  lg:gap-4 mx-4 ">
          <h3 className="font-inter mx-4 text-[24px] leading-[34px] font-semi-bold ">
            Menu Categories
          </h3>
          <div className=" flex items-center gap-2  py-1 bg-[#FFE1C4]  border-l-4 border-[#FF7A18] ">
            <span className="  font-medium tet-[24px] uppercase leading-[34px] font-inter">
              Popular
            </span>
          </div>

          <ul className="mx-4 text-[24px] font-medium font-inter leading-[34px">
            <li>Jollof Rice & Entrees</li>
            <li>Swallow & Soups</li>
            <li>Grills & sides Beverages</li>
            <li>Desserts</li>
          </ul>
        </div>
        {/* popular categories */}
        <h1 className="text-left mx-4 font-inter font-bold text-2xl lg:text-[32px] leading-tight text-[#1F2937] mb-12">
          Popular
        </h1>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-3 lg:gap-4 justify-center ">
          <MenuCard
            price="3500"
            desc="in details"
            title="Jollof Delights"
            image="/v1.png"
          />
          <MenuCard
            price="3500"
            desc="in details"
            title="Swallow & Soups"
            image="/v2.png"
          />
          <MenuCard
            price="3500"
            desc="in details"
            title="Grills & BBQ"
            image="/v3.png"
          />
          <MenuCard
            price="3500"
            desc="in details"
            title="Sweet Treats"
            image="/v4.png"
          />
          <MenuCard
            price="3500"
            desc="in details"
            title="Jollof Rice & Fried Chicken"
            image="/v5.png"
          />
          <MenuCard
            price="3500"
            desc="in details"
            title="Egusi Soup & Pounded Yam"
            image="/v6.png"
          />
        </div>
      </div>
      
    </div>
  );
}
