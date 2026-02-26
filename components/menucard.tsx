import Image from "next/image";

interface CardProperties {
  title: string;
  desc: string;
  image: string;
  price: string;
}

export default function MenuCard({
  title,
  image,
  desc,
  price,
}: CardProperties) {
  return (
    /* lg:w-[calc(33.33%-2rem)] handles the 3-per-row logic for desktop */
    <div className="flex flex-col rounded-[14px] bg-white border border-gray-100 shadow-sm h-[480px] w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-[250px] shrink-0">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-4 justify-between">
        <div className="space-y-2">
          <h1 className="text-[#1F2937] font-inter font-semibold text-[20px] leading-tight">
            {title}
          </h1>
          <p className="text-[#4B5563] text-[0.875rem] leading-[20px] font-inter line-clamp-3">
            {desc}
          </p>
        </div>

        {/* Footer: Price and Button in a Row */}
        <div className="flex flex-row items-center justify-between gap-3 mt-4">
          <div className="flex flex-col">
            <span className="text-[#FF7A18] font-inter font-bold text-[1.1rem] whitespace-nowrap">
              ₦{price}
            </span>
          </div>

          <button className="w-12 h-12 flex items-center justify-center bg-[#FF7A18] hover:bg-[#e66d15] transition-colors rounded-full font-inter font-semibold text-white text-xl shadow-lg active:scale-95">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
