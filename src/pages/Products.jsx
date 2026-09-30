import { useState } from "react";

import {
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
} from "lucide-react";

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 120,
    stock: 35,
  },
  {
    id: 2,
    name: "Smart Backpack",
    category: "Accessories",
    price: 85,
    stock: 12,
  },
  {
    id: 3,
    name: "Coffee Maker",
    category: "Home",
    price: 150,
    stock: 6,
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "Fashion",
    price: 95,
    stock: 20,
  },
  {
    id: 5,
    name: "Desk Lamp",
    category: "Home",
    price: 45,
    stock: 0,
  },
];

function Products({ DarkMode }) {
  const [products, setProducts] =
    useState(initialProducts);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [showForm, setShowForm] =
    useState(false);

  const [editingId, setEditingId] =
    useState(null);

  const [formData, setFormData] =
    useState({
      name: "",
      category: "Electronics",
      price: "",
      stock: "",
    });

  // =============================
  // Search + Filter
  // =============================

  const filteredProducts =
    products.filter((product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  // =============================
  // Input Change
  // =============================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // =============================
  // Add Product Button
  // =============================

  const handleAddClick = () => {
    setEditingId(null);

    setFormData({
      name: "",
      category: "Electronics",
      price: "",
      stock: "",
    });

    setShowForm(true);
  };

  // =============================
  // Add / Edit Product
  // =============================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.price ||
      formData.stock === ""
    ) {
      return;
    }

    const productData = {
      id: editingId || Date.now(),
      name: formData.name,
      category: formData.category,
      price: Number(formData.price),
      stock: Number(formData.stock),
    };

    if (editingId) {
      setProducts(
        products.map((product) =>
          product.id === editingId
            ? productData
            : product
        )
      );
    } else {
      setProducts([
        ...products,
        productData,
      ]);
    }

    setFormData({
      name: "",
      category: "Electronics",
      price: "",
      stock: "",
    });

    setEditingId(null);

    setShowForm(false);
  };

  // =============================
  // Edit
  // =============================

  const handleEdit = (product) => {
    setEditingId(product.id);

    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
    });

    setShowForm(true);
  };

  // =============================
  // Delete
  // =============================

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) {
      return;
    }

    setProducts(
      products.filter(
        (product) =>
          product.id !== id
      )
    );
  };

  // =============================
  // Status
  // =============================

  const getStatus = (stock) => {
    if (stock === 0) {
      return {
        text: "Out of Stock",
        className: DarkMode
          ? "bg-red-900/40 text-red-400"
          : "bg-red-100 text-red-700",
      };
    }

    if (stock < 10) {
      return {
        text: "Low Stock",
        className: DarkMode
          ? "bg-yellow-900/40 text-yellow-400"
          : "bg-yellow-100 text-yellow-700",
      };
    }

    return {
      text: "In Stock",
      className: DarkMode
        ? "bg-green-900/40 text-green-400"
        : "bg-green-100 text-green-700",
    };
  };

  return (
    <div>

      {/* =============================
          Page Header
      ============================== */}

      <div className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        sm:justify-between
        gap-4
        mb-6
      ">

        <div>

          <h1
            className={`
              text-2xl
              font-bold
              ${
                DarkMode
                  ? "text-white"
                  : "text-gray-900"
              }
            `}
          >
            Products
          </h1>

          <p
            className={`
              text-sm
              mt-1
              ${
                DarkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              }
            `}
          >
            Manage your products
          </p>

        </div>

        <button
          onClick={handleAddClick}
          className="
            flex
            items-center
            justify-center
            gap-2
            bg-[#4EA674]
            text-white
            px-5
            py-3
            rounded-xl
            hover:opacity-90
            transition
          "
        >

          <Plus size={18} />

          Add Product

        </button>

      </div>

      {/* =============================
          Add / Edit Form
      ============================== */}

      {showForm && (

        <div
          className={`
            rounded-2xl
            p-6
            mb-6
            border
            shadow-sm
            ${
              DarkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }
          `}
        >

          <div className="
            flex
            items-center
            justify-between
            mb-5
          ">

            <h2
              className={`
                text-lg
                font-semibold
                ${
                  DarkMode
                    ? "text-white"
                    : "text-gray-900"
                }
              `}
            >
              {editingId
                ? "Edit Product"
                : "Add New Product"}
            </h2>

            <button
              onClick={() =>
                setShowForm(false)
              }
              className={`
                ${
                  DarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-800"
                }
              `}
            >
              <X size={20} />
            </button>

          </div>

          <form
            onSubmit={handleSubmit}
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-5
            "
          >

            {/* Name */}

            <div>

              <label
                className={`
                  block
                  text-sm
                  font-medium
                  mb-2
                  ${
                    DarkMode
                      ? "text-gray-200"
                      : "text-gray-700"
                  }
                `}
              >
                Product Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product name"
                className={`
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  border
                  outline-none
                  ${
                    DarkMode
                      ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500"
                      : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"
                  }
                  focus:ring-2
                  focus:ring-[#4EA674]
                `}
              />

            </div>

            {/* Category */}

            <div>

              <label
                className={`
                  block
                  text-sm
                  font-medium
                  mb-2
                  ${
                    DarkMode
                      ? "text-gray-200"
                      : "text-gray-700"
                  }
                `}
              >
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  border
                  outline-none
                  ${
                    DarkMode
                      ? "bg-gray-900 border-gray-700 text-white"
                      : "bg-white border-gray-200 text-gray-900"
                  }
                `}
              >

                <option value="Electronics">
                  Electronics
                </option>

                <option value="Accessories">
                  Accessories
                </option>

                <option value="Home">
                  Home
                </option>

                <option value="Fashion">
                  Fashion
                </option>

              </select>

            </div>

            {/* Price */}

            <div>

              <label
                className={`
                  block
                  text-sm
                  font-medium
                  mb-2
                  ${
                    DarkMode
                      ? "text-gray-200"
                      : "text-gray-700"
                  }
                `}
              >
                Price
              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                min="0"
                className={`
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  border
                  outline-none
                  ${
                    DarkMode
                      ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500"
                      : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"
                  }
                  focus:ring-2
                  focus:ring-[#4EA674]
                `}
              />

            </div>

            {/* Stock */}

            <div>

              <label
                className={`
                  block
                  text-sm
                  font-medium
                  mb-2
                  ${
                    DarkMode
                      ? "text-gray-200"
                      : "text-gray-700"
                  }
                `}
              >
                Stock
              </label>

              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="Enter stock"
                min="0"
                className={`
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  border
                  outline-none
                  ${
                    DarkMode
                      ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500"
                      : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"
                  }
                  focus:ring-2
                  focus:ring-[#4EA674]
                `}
              />

            </div>

            {/* Buttons */}

            <div className="
              md:col-span-2
              flex
              justify-end
              gap-3
            ">

              <button
                type="button"
                onClick={() =>
                  setShowForm(false)
                }
                className={`
                  px-5
                  py-3
                  rounded-xl
                  border
                  ${
                    DarkMode
                      ? "border-gray-700 text-gray-300 hover:bg-gray-700"
                      : "border-gray-200 text-gray-600 hover:bg-gray-50"
                  }
                `}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="
                  px-6
                  py-3
                  rounded-xl
                  bg-[#4EA674]
                  text-white
                  hover:opacity-90
                "
              >
                {editingId
                  ? "Update Product"
                  : "Add Product"}
              </button>

            </div>

          </form>

        </div>
      )}

      {/* =============================
          Search + Filter
      ============================== */}

      <div className="
        flex
        flex-col
        md:flex-row
        gap-4
        mb-5
      ">

        {/* Search */}

        <div className="
          relative
          w-full
          md:w-1/2
        ">

          <Search
            size={19}
            className={`
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              ${
                DarkMode
                  ? "text-gray-500"
                  : "text-gray-400"
              }
            `}
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className={`
              w-full
              pl-11
              pr-4
              py-3
              rounded-xl
              border
              outline-none
              ${
                DarkMode
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                  : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"
              }
              focus:ring-2
              focus:ring-[#4EA674]
            `}
          />

        </div>

        {/* Filter */}

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className={`
            w-full
            md:w-52
            px-4
            py-3
            rounded-xl
            border
            outline-none
            ${
              DarkMode
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-200 text-gray-900"
            }
          `}
        >

          <option value="All">
            All Categories
          </option>

          <option value="Electronics">
            Electronics
          </option>

          <option value="Accessories">
            Accessories
          </option>

          <option value="Home">
            Home
          </option>

          <option value="Fashion">
            Fashion
          </option>

        </select>

      </div>

      {/* =============================
          Products Table
      ============================== */}

      <div
        className={`
          overflow-x-auto
          rounded-2xl
          border
          shadow-sm
          ${
            DarkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }
        `}
      >

        <table className="w-full min-w-[850px]">

          {/* Header */}

          <thead
            className={
              DarkMode
                ? "bg-gray-700"
                : "bg-gray-50"
            }
          >

            <tr>

              {[
                "Product",
                "Category",
                "Price",
                "Stock",
                "Status",
                "Actions",
              ].map((title) => (

                <th
                  key={title}
                  className={`
                    text-left
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    ${
                      DarkMode
                        ? "text-gray-200"
                        : "text-gray-600"
                    }
                  `}
                >
                  {title}
                </th>

              ))}

            </tr>

          </thead>

          {/* Body */}

          <tbody>

            {filteredProducts.length > 0 ? (

              filteredProducts.map(
                (product) => {

                  const status =
                    getStatus(
                      product.stock
                    );

                  return (

                    <tr
                      key={product.id}
                      className={`
                        border-t
                        transition
                        ${
                          DarkMode
                            ? "border-gray-700 hover:bg-gray-700/50"
                            : "border-gray-100 hover:bg-gray-50"
                        }
                      `}
                    >

                      {/* Product */}

                      <td className="px-6 py-4">

                        <p
                          className={`
                            font-semibold
                            ${
                              DarkMode
                                ? "text-white"
                                : "text-gray-800"
                            }
                          `}
                        >
                          {product.name}
                        </p>

                        <p
                          className={`
                            text-xs
                            mt-1
                            ${
                              DarkMode
                                ? "text-gray-500"
                                : "text-gray-400"
                            }
                          `}
                        >
                          ID: #{product.id}
                        </p>

                      </td>

                      {/* Category */}

                      <td
                        className={`
                          px-6
                          py-4
                          text-sm
                          ${
                            DarkMode
                              ? "text-gray-300"
                              : "text-gray-600"
                          }
                        `}
                      >
                        {product.category}
                      </td>

                      {/* Price */}

                      <td
                        className={`
                          px-6
                          py-4
                          text-sm
                          font-semibold
                          ${
                            DarkMode
                              ? "text-white"
                              : "text-gray-800"
                          }
                        `}
                      >
                        ${product.price}
                      </td>

                      {/* Stock */}

                      <td
                        className={`
                          px-6
                          py-4
                          text-sm
                          ${
                            DarkMode
                              ? "text-gray-300"
                              : "text-gray-600"
                          }
                        `}
                      >
                        {product.stock}
                      </td>

                      {/* Status */}

                      <td className="px-6 py-4">

                        <span
                          className={`
                            inline-flex
                            px-3
                            py-1
                            rounded-full
                            text-xs
                            font-medium
                            ${status.className}
                          `}
                        >
                          {status.text}
                        </span>

                      </td>

                      {/* Actions */}

                      <td className="px-6 py-4">

                        <div className="
                          flex
                          items-center
                          gap-2
                        ">

                          {/* Edit */}

                          <button
                            onClick={() =>
                              handleEdit(
                                product
                              )
                            }
                            className={`
                              p-2
                              rounded-lg
                              transition
                              ${
                                DarkMode
                                  ? "text-blue-400 hover:bg-blue-900/30"
                                  : "text-blue-600 hover:bg-blue-50"
                              }
                            `}
                            title="Edit"
                          >
                            <Pencil
                              size={18}
                            />
                          </button>

                          {/* Delete */}

                          <button
                            onClick={() =>
                              handleDelete(
                                product.id
                              )
                            }
                            className={`
                              p-2
                              rounded-lg
                              transition
                              ${
                                DarkMode
                                  ? "text-red-400 hover:bg-red-900/30"
                                  : "text-red-600 hover:bg-red-50"
                              }
                            `}
                            title="Delete"
                          >
                            <Trash2
                              size={18}
                            />
                          </button>

                        </div>

                      </td>

                    </tr>

                  );
                }
              )

            ) : (

              <tr>

                <td
                  colSpan="6"
                  className={`
                    text-center
                    py-10
                    ${
                      DarkMode
                        ? "text-gray-400"
                        : "text-gray-500"
                    }
                  `}
                >
                  No products found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Products;