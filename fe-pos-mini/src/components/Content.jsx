import { useEffect, useState } from "react";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { getProducts } from "../services/ProductService";
import { toast } from "react-toastify";

// const products = [
//   { id: 1, name: "Cà phê sữa", price: 25000, image: "" },
//   { id: 2, name: "Trà đào", price: 30000, image: "" },
//   { id: 3, name: "Bánh ngọt", price: 20000, image: "" },
//   { id: 4, name: "Bánh ngọt mới", price: 21000, image: "" },
//   { id: 5, name: "Trà sữa", price: 28000, image: "" }
// ]

export default function Content() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === product.id);
      if (exist) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const generateOrderId = () => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const MM = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const HH = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");

    return `DH${yyyy}${MM}${dd}${HH}${mm}${ss}`;
  };

  const handleCheckout = async () => {
    if (cart.length === 0) return toast.error("Giỏ hàng trống");

    const order = {
      orderId: generateOrderId(),
      totalPrice: total,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("https://localhost:7019/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (!res.ok) throw new Error("Checkout failed");

      setCart([]);
      toast.success("Thanh toán thành công");
    } catch (err) {
      console.error(err);
      toast.error("Lỗi thanh toán");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)] bg-slate-100">
      <div className="order-1 md:order-2 w-full md:w-[360px] bg-white border-b md:border-b-0 md:border-l flex flex-col">
        <div className="p-4 border-b">
          <h2 className="text-lg font-bold flex">
            <span>
              <ShoppingCart />
            </span>
            <span className="pl-2">Giỏ hàng</span>
          </h2>
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
            <span className="text-red-500">{total.toLocaleString()} ₫</span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 text-base"
          >
            Thanh toán
          </button>
        </div>
      </div>

      <div className="order-2 md:order-1 flex-1 p-4 overflow-y-auto">
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] justify-items-center">
          {products.map((item) => (
            <div
              key={item.id}
              className="
          bg-white rounded-xl shadow hover:shadow-lg transition
          flex flex-col w-full max-w-[220px] h-full
        "
            >
              <div className="aspect-[4/3] w-full">
                <img
                  src={"./src/assets" + item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>
              <div className="p-3 flex flex-col flex-1">
                <div className="mt-auto">
                  <h3
                    className="
            font-semibold text-sm text-center
            line-clamp-2
          "
                  >
                    {item.name}
                  </h3>
                  <p className="text-red-500 font-bold text-center mt-2">
                    {item.price.toLocaleString()} ₫
                  </p>

                  <button
                    onClick={() => addToCart(item)}
                    className="
                mt-2 w-full
                flex items-center justify-center gap-2
                bg-blue-600 text-white py-2 rounded-lg
                hover:bg-blue-700 text-sm
              "
                  >
                    <ShoppingCart size={16} />
                    Thêm
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
