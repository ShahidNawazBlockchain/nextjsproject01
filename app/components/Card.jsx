import Image from "next/image";
function Card() {
  return (
    <div className="relative shadow-md max-w-sm cursor-pointer">
      <div className="relative h-96 overflow-hidden aspect-ratio-1 hover:scale-105 transition-transform duration-300">
        <Image
          src="/assets/download.jpeg"
          objectFit="cover"
          alt="product"
          layout="fill"
        />
      </div>
      <div className="p-4 space-y-2">
        <h1 className="text-[#5F20B6] text-3xl font-semibold">Product 1</h1>
        <p className="text-xl text-gray-500 truncate">
          Description of the product you are saling
        </p>
        <br />
        <br />
      </div>
      <div className="absolute bottom-1 right-1 text-3xl font-semibold">
        <span className=" text-[#5F20B6]">$400</span>
      </div>
    </div>
  );
}

export default Card;
