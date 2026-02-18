export default function Footer() {
  return (
    <div className="w-full">
      <footer className="bg-[#FF7A184B] flex-row w-full h-[28rem] pt-16 pb-16 gap-4">
        <div className="flex w-full gap-x-64  pl-24 pr-24">
          <div>
            <h1 className="text-[#FF7A18] font-island text-[2.3rem] leading-[2.3rem]">
              Chuks Kitchen
            </h1>
            <p className="font-jost text-[1.5rem] leading-[2.3rem] text-[#FFFFFF]">
              Bringing the authentic flavors of Nigerian home cooking to your
              table, with passion and care.
            </p>
          </div>
          <div>
            <h1 className="font-jost">Quick Links</h1>
            <ul className="font-poppins">
              <li>Home</li>
              <li>Explore</li>
              <li>My Order</li>
              <li>Account</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h1 className="font-jost">Contact Us</h1>
            <address className="font-poppins">
              +234 801 234 5678 hello@chukskitchen.com 123 Taste Blvd, Lagos,
              Nigeriat
            </address>
          </div>
          <div>
            <ul className="font-poppins">
              <li>facebook</li>
              <li>linkedin</li>
              <li>twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="flex w-full gap-x-64  pl-24 pr-24">
          <span className="font-poppins text-sm font-light">© 2020 Lift Media. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
