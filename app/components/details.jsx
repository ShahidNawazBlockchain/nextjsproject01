import Image from "next/image";
function details() {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="shadow-md relative h-96 overflow-hidden aspect-auto">
          <Image
            src="/assets/download.jpeg"
            layout="fill"
            objectFit="cover"
            alt="product image"
          />
        </div>
        <div className="flex flex-col p-6 justify-between">
          <h1 className="text-3xl font-semibold text-[#5B20B6]">
            product name
          </h1>
          <p className="text-lg mt-4 text-gray-500">
            the description of product
          </p>
          <div className="mt-5">
            <span className="text-2xl font-semibold text-[#5B20b6]">$100</span>
          </div>
          <div className="mt-6 flex flex-col text-gray-500">
            <label htmlFor="">Qty</label>
            <input
              type="number"
              defaultValue={2}
              className="w-20 px-4 h=10 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-6">
            <button className="w-full py-4 rounded-md bg-[#5B20B6]">
              add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default details;
