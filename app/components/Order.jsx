import Image from "next/image";
export default function Order() {
  //array of object
  const products = [
    { id: 1, name: "product 1", paid: "paid", qty: 1, status: "deliverd" },
    { id: 2, name: "product 2", paid: "paid", qty: 1, status: "deliverd" },
    { id: 3, name: "product 3", paid: "paid", qty: 1, status: "deliverd" },
  ];
  return (
    <div className="max-w-3xl mx-auto mt-20">
      <h1 className="text-3xl text-center font-semibold text-[#5B20B6]">
        Order Page
      </h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b text-[#5B20B6] border-gray-200">
            <th className="px-4 py-3">Product</th>
            <th className="px-4 py-3">Paid</th>
            <th className="px-4 py-3">Qty</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              className="hover:bg-gray-50 text-center border-b border-gary-300 text-[#5B20B6]"
              key={product.id}
            >
              <td className="py-4 px-4 flex ">{product.name}</td>
              <td className="py-4 px-4">{product.paid}</td>
              <td className="py-4 px-4">{product.qty}</td>
              <td className="py-4 px-4">{product.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
