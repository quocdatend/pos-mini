import { useState } from "react"
import { ShoppingCart, Plus, Minus } from "lucide-react"

const products = [
  { id: 1, name: "Cà phê sữa", price: 25000, image: "https://via.placeholder.com/400x300" },
  { id: 2, name: "Trà đào", price: 30000, image: "https://via.placeholder.com/400x300" },
  { id: 3, name: "Bánh ngọt", price: 20000, image: "https://via.placeholder.com/400x300" },
  { id: 4, name: "Bánh ngọt mới", price: 21000, image: "https://via.placeholder.com/400x300" },
  { id: 5, name: "Trà sữa", price: 28000, image: "https://via.placeholder.com/400x300" }
]

export default function Content() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === product.id)
      if (exist) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
    )
  }

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, qty: p.qty - 1 } : p
        )
        .filter((p) => p.qty > 0)
    )
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)] bg-slate-100">

      {/* ===== GIỎ HÀNG (MOBILE: TRÊN | DESKTOP: PHẢI) ===== */}
      <div className="order-1 md:order-2 w-full md:w-[360px] bg-white border-b md:border-b-0 md:border-l flex flex-col">

        <div className="p-4 border-b">
          <h2 className="text-lg font-bold">🛒 Giỏ hàng</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 && (
            <p className="text-gray-500 text-sm text-center">
              Chưa có sản phẩm
            </p>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border rounded-lg p-2"
            >
              <div>
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">
                  {item.price.toLocaleString()} ₫
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="p-1 border rounded hover:bg-gray-100"
                >
                  <Minus size={14} />
                </button>

                <span className="w-6 text-center text-sm">{item.qty}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="p-1 border rounded hover:bg-gray-100"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t p-4">
          <div className="flex justify-between font-bold text-base mb-3">
            <span>Tổng tiền</span>
            <span className="text-red-500">
              {total.toLocaleString()} ₫
            </span>
          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 text-base">
            Thanh toán
          </button>
        </div>
      </div>

      {/* ===== DANH SÁCH SẢN PHẨM ===== */}
      <div className="order-2 md:order-1 flex-1 p-4 overflow-y-auto">
        <div
          className="
            grid
            gap-4
            grid-cols-[repeat(auto-fit,minmax(180px,1fr))]
            justify-items-center
          "
        >
          {products.map((item) => (
            <div
              key={item.id}
              className="
                bg-white
                rounded-xl
                shadow
                hover:shadow-lg
                transition
                flex
                flex-col
                w-full
                max-w-[220px]
              "
            >
              <div className="aspect-[4/3] w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>

              <div className="p-3 flex flex-col flex-1">
                <h3 className="font-semibold text-sm text-center">
                  {item.name}
                </h3>

                <p className="text-red-500 font-bold text-center mt-1">
                  {item.price.toLocaleString()} ₫
                </p>

                <button
                  onClick={() => addToCart(item)}
                  className="mt-auto flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-sm"
                >
                  <ShoppingCart size={16} />
                  Thêm
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
