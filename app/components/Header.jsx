import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
function Header() {
  return (
    <div className="p-3 border-b-2 border-[#F5F3FF]">
      <div className="max-w-7xl max-auto flex justify-between">
        <div className="flex  items-center">
          <Image src="/next.svg" width={50} height={50} alt="logo" />
          <h1 className="ml-2 text-2xl lg:text-3xl font-bold">
            Artistry MArket
          </h1>
        </div>

        <div className="flex items-center relative">
          <FaCartShopping className="text-3xl text-[#5b20b6] cursor-pointer" />
          <div className="ml-2 bg-blue-500 rounded-full w-7 h-7 flex items-center justify-center text-white text-sm font-bold">
            32
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
