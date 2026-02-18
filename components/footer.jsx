export default function Footer() {
  return (
    <div className="w-full">
      <footer className="bg-[#FF7A184D] flex-row w-full h-[28rem] pt-16 pb-16 gap-4">
        <div className="flex w-full gap-x-64  pl-24 pr-24">
          <div>
            <h1 className="text-[#FF7A18] font-island text-xl">Chuks Kitchen</h1>
            <p className="font-jost">Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
          </div>
          <div>
            <h1>Quick link</h1>
          </div>
          <div>Contact Us</div>
          <div>
            <li>facebook</li>
            <li>linkedin</li>
            <li>twitter</li>
            <li>Instagram</li>
          </div>
        </div>
        <div>
          <h1>copyright</h1>
        </div>
      </footer>
    </div>
  );
}
