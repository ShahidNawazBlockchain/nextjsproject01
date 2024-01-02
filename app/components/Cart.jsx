import { FaTrashCan } from "react-icons/fa6";
import Image from "next/image";
export default function Cart() {
  //array of object
  const products = [
    { id: 1, name: "product 1", price: 100, qty: 2 },
    { id: 2, name: "product 2", price: 200, qty: 2 },
    { id: 3, name: "product 3", price: 300, qty: 3 },
  ];
  return (
    <div className="max-w-3xl mx-auto mt-20">
      <h1 className="text-3xl text-center font-semibold text-[#5B20B6]">
        Cart
      </h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b text-[#5B20B6] border-gray-200">
            <th className="px-4 py-3">Product</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Qty</th>
            <th className="px-4 py-3">Remove</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              className="hover:bg-gray-50 text-center border-b border-gary-300 text-[#5B20B6]"
              key={product.id}
            >
              <td className="py-4 px-4 flex ">
                <Image
                  src="/assets/download.jpeg"
                  className="mr-4"
                  width={30}
                  height={30}
                />
                {product.name}
              </td>
              <td className="py-4 px-4">${product.price}</td>
              <td className="py-4 px-4">{product.qty}</td>
              <td className="py-4 px-4">
                <FaTrashCan className="text-[#5B20B6] mx-auto cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
