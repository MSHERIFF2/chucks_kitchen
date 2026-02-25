export default function Footer() {
  return (
    <div className="w-full">
      <footer className="bg-[#58341D] w-full pt-10 pb-10 md:pt-16 md:pb-16 flex flex-col text-[#FFFFFF]">
        <div className="flex flex-col md:flex-row w-full gap-y-12 md:gap-x-12 lg:gap-x-28 px-6 md:px-24">
          
          {/* Brand Section */}
          <div className="w-full">
            <h1 className="text-[#FF7A18] font-island text-[2.3rem] leading-[2.25rem] mb-4">
              Chuks Kitchen
            </h1>
            <p className="font-jost font-bold text-[1.2rem] md:text-[1.5rem] leading-tight">
              Bringing the authentic flavors of Nigerian home cooking to your
              table, with passion and care.
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full">
            <h4 className="font-jost font-extrabold text-[1.5rem] mb-4">
              Quick Links
            </h4>
            <ul className="font-poppins text-[0.875rem] space-y-2">
              <li className="hover:text-[#FF7A18] cursor-pointer">Home</li>
              <li className="hover:text-[#FF7A18] cursor-pointer">Explore</li>
              <li className="hover:text-[#FF7A18] cursor-pointer">My Order</li>
              <li className="hover:text-[#FF7A18] cursor-pointer">Account</li>
              <li className="hover:text-[#FF7A18] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full">
            <h4 className="font-jost font-extrabold text-[1.5rem] mb-4">
              Contact Us
            </h4>
            <address className="font-poppins text-[0.875rem] leading-relaxed not-italic">
              +234 801 234 5678 <br />
              hello@chukskitchen.com <br />
              123 Taste Blvd, Lagos, Nigeria
            </address>
          </div>

          {/* Socials Section */}
          <div className="w-full">
            <h4 className="font-jost font-extrabold text-[1.5rem] mb-4">Follow Us</h4>
            <ul className="font-poppins text-[0.875rem] space-y-2">
              <li className="hover:text-[#FF7A18] cursor-pointer">Facebook</li>
              <li className="hover:text-[#FF7A18] cursor-pointer">LinkedIn</li>
              <li className="hover:text-[#FF7A18] cursor-pointer">Twitter</li>
              <li className="hover:text-[#FF7A18] cursor-pointer">Instagram</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-8  flex flex-col md:flex-row justify-between items-center px-6 md:px-24 gap-y-4">
          <span className="font-poppins text-[0.75rem] font-normal opacity-80">
            © 2026 Chuks Kitchen. All rights reserved.
          </span>
          
        
      
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" fill="#0081FE" />
              <path
                d="M12 15V9M12 9L9 12M12 9L15 12"
                stroke="white"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
         
        </div>
      </footer>
    </div>
  );
}