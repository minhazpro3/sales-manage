import Image from "next/image";
import React from "react";
import SearchAddProduct from "./SearchAddproduct";

const AdminProducts = () => {
  return (
    <div>
      {/* search bar dashboard */}
      <div className="flex items-center gap-4">
        <div className=" min-w-96  bg-purple-500 rounded-xl my-4 inline-block py-2 px-2">
          <input
            className=" min-w-96  rounded-lg border-2 border-indigo-200 py-2 px-3"
            type="text"
            placeholder="search by name"
          />
        </div>
        <div>
          <input
            className=" min-w-full hover:cursor-pointer  rounded-lg border-2 border-indigo-200 py-2 px-3"
            type="button"
            value="+ Add Product"
          />
        </div>
      </div>
      <div className=" overflow-x-scroll">
        <table className="min-w-full border border-gray-300 rounded-lg bg-gray-50 text-gray-800">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-300 rounded-tl-lg">
                ID
              </th>
              <th className="px-4 py-2 border border-gray-300  ">Product</th>
              <th className="px-4 py-2 border border-gray-300">Title</th>
              <th className="px-4 py-2 border border-gray-300">Price</th>
              <th className="px-4 py-2 border border-gray-300 ">Stock</th>
              <th className="px-4 py-2 border border-gray-300  ">Edit</th>
              <th className="px-4 py-2 border border-gray-300  ">Edit</th>
              <th className="px-4 py-2 border border-gray-300  ">Edit 2</th>
              <th className="px-4 py-2 border border-gray-300  ">Edit 3</th>
              <th className="px-4 py-2 border border-gray-300  ">Edit 4</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white hover:bg-gray-200">
              <td className="px-4 py-2 border border-gray-300">1</td>
              <td className="px-4 py-2 border border-gray-300 flex justify-center">
                <Image
                  width={50}
                  height={50}
                  src={"https://i.ibb.co/k6x48m6/1679248787-Nagad-Logo.png"}
                  alt=""
                />
              </td>
              <td className="px-4 py-2 border border-gray-300">Product A</td>
              <td className="px-4 py-2 border border-gray-300">$20.00</td>
              <td className="px-4 py-2 border border-gray-300">In Stock</td>
              <td className="px-4 py-2 border border-gray-300">Edit</td>
              <td className="px-4 py-2 border border-gray-300">Edit</td>
              <td className="px-4 py-2 border border-gray-300">
                Edi sdfsdfsdfsdft 2
              </td>
              <td className="px-4 py-2 border border-gray-300">Edit 3</td>
              <td className="px-4 py-2 border border-gray-300">Edit 4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
