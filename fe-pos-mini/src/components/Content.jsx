import { ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Cà phê sữa",
    price: 25000,
    image: "https://via.placeholder.com/300",
    description: "Cà phê sữa đá truyền thống"
  },
  {
    id: 2,
    name: "Trà đào",
    price: 30000,
    image: "https://via.placeholder.com/300",
    description: "Trà đào mát lạnh"
  },
  {
    id: 3,
    name: "Bánh ngọt",
    price: 20000,
    image: "https://via.placeholder.com/300",
    description: "Bánh ngọt mềm thơm"
  },
  {
    id: 4,
    name: "Bánh ngọt mới",
    price: 21000,
    image: "https://via.placeholder.com/300",
    description: "Bánh ngọt mềm thơm"
  }
]

function Content() {
  const addToCart = (product) => {
    console.log("Add to cart:", product)
  }

  return (
    <div className="h-[calc(100vh-4rem)] overflow-y-auto p-4">
      <div
        className="
          mx-auto
          grid
          grid-cols-[repeat(auto-fit,minmax(220px,1fr))]
          gap-5
        "
      >
        {products.map((item) => (
          <div
            key={item.id}
            className="
              bg-white
              rounded-2xl
              shadow-md
              hover:shadow-xl
              transition
              flex
              flex-col
            "
          >
            {/* IMAGE */}
            <div className="aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-1">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500 mb-3">
                {item.description}
              </p>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-red-500 font-bold text-lg">
                  {item.price.toLocaleString()} ₫
                </span>

                <button
                  onClick={() => addToCart(item)}
                  className="
                    bg-blue-600
                    text-white
                    p-2.5
                    rounded-full
                    hover:bg-blue-700
                    active:scale-95
                    transition
                  "
                >
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Content
