import Image from "next/image";
import CardPopular from "@/components/cardpopular";
import CardChef from "@/components/cardchef";

export default function Homepage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero section */}
      <div className="relative h-screen w-full">
        <Image
          src="/Welcome.png"
          alt="Welcome Background"
          fill
          className="object-cover -z-10 brightness-[0.63]"
          priority
        />

        <div className="relative z-10 flex flex-col items-center lg:items-start justify-center h-full px-6 lg:px-16 gap-6 lg:gap-10 text-center lg:text-left">
          <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-[48px] leading-tight lg:leading-[61px] font-inter w-full lg:w-3/5">
            The Heart of Nigerian Home Cooking
          </h1>
          <h3 className="text-white font-inter font-bold text-xl md:text-2xl lg:text-[32px] leading-snug lg:leading-[42px]">
            Handcrafted with passion, delivered with care.
          </h3>
          <button className="bg-[#FF7A18] w-full max-w-[215px] h-[54px] rounded-[10px] py-[15px] text-white font-inter font-semibold text-[1rem] leading-[24px] hover:bg-[#e66d15] transition-all">
            Discover what’s new
          </button>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="bg-[#F3F4F6] w-full py-16 lg:py-24 px-6 lg:px-16 ">
        <h1 className="text-center font-inter font-bold text-2xl lg:text-[32px] leading-tight text-[#1F2937] mb-12">
          Popular Categories
        </h1>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-3 lg:gap-4 justify-center ">
          <CardPopular title="Jollof Delights" image="/v1.png" />
          <CardPopular title="Swallow & Soups" image="/v2.png" />
          <CardPopular title="Grills & BBQ" image="/v3.png" />
          <CardPopular title="Sweet Treats" image="/v4.png" />
          <CardPopular title="Jollof Rice & Fried Chicken" image="/v5.png" />
          <CardPopular title="Egusi Soup & Pounded Yam" image="/v6.png" />
        </div>
      </div>

      {/* Chef's Specials */}
      <div className="bg-[#F3F4F6] w-full py-16 lg:py-24 px-6 lg:px-16">
        <h1 className="text-center font-inter font-bold text-2xl lg:text-[32px] leading-tight text-[#1F2937] mb-12">
          Chef&apos;s Specials
        </h1>
        <div className="flex gap-6 lg:gap-8 flex-wrap justify-center lg:justify-start">
          <CardChef
            price="3,500"
            desc="A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy."
            title="Spicy Tilapia Pepper Soup"
            image="/v8.png"
          />
          <CardChef
            price="3,500"
            desc="Our signature Jollof rice, cooked to perfection, served with succulent fried chicken."
            title="Jollof Rice & Fried Chicken"
            image="/v1.png"
          />
          <CardChef
            price="3,500"
            desc="Our signature Jollof rice, cooked to perfection, served with succulent fried chicken."
            title="Jollof Rice & Fried Chicken"
            image="/v1.png"
          />
          <CardChef
            price="3,500"
            desc="Our signature Jollof rice, cooked to perfection, served with succulent Smoked chicken."
            title="Jollof Rice & Smoked Chicken"
            image="/v1.png"
          />
          <CardChef
            price="3,500"
            desc="Our signature Jollof rice, cooked to perfection, served with succulent fried chicken."
            title="Jollof Rice & Fried Chicken"
            image="/v5.png"
          />
          <CardChef
            price="3,500"
            desc="Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam."
            title="Egusi Soup & Pounded Yam"
            image="/v6.png"
          />
        </div>
      </div>

      {/* New Menu Section */}
      <div className="relative h-screen w-full">
        <Image
          src="/Desk.png"
          alt="Desktop Background"
          fill
          className="object-cover -z-10 brightness-[0.63]"
          priority
        />

        <div className="relative z-10 flex flex-col items-center lg:items-start justify-center h-full px-6 lg:px-16 gap-6 lg:gap-10 text-center lg:text-left">
          <h1 className="text-white font-extrabold text-3xl md:text-5xl lg:text-[48px] leading-tight lg:leading-[140%] font-inter w-full lg:w-4/5">
            Introducing Our New Menu Additions!
          </h1>
          <h3 className="text-white font-inter font-semibold text-lg lg:text-[24px] leading-relaxed lg:leading-[34px] w-full lg:w-3/6">
            Explore exciting new dishes, crafted with the freshest ingredients
            and authentic Nigerian flavors. Limited time offer!
          </h3>
          <button className="bg-[#FF7A18] w-full max-w-[215px] h-[54px] rounded-[10px] py-[15px] text-white font-inter font-semibold text-[1rem] leading-[24px] hover:bg-[#e66d15] transition-all">
            Discover what’s new
          </button>
        </div>
      </div>
    </div>
  );
}
