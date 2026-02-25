import Image from  "next/image"
interface CardProperties{
    title: string;
    image: string;
};

export default function CardPopular({title, image}:CardProperties) {
    return (
        <div className="flex flex-col rounded-[14px] gap-y-[50px] bg-[#ffffff] pt-[2px] pb-[85px] px-[2px] h-[393px] ">
            <Image src={image} width={386} height={222} alt={title} className="rounded-top-[10px]"/>
            <p className="text-[#1F2937] font-inter font-semi-bold leading[34px] text-[24px] text-center ">{title}</p>
        </div>
    )
}