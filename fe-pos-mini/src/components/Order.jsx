import { useEffect, useState } from "react"
import * as signalR from "@microsoft/signalr"

function Order() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    // Lấy data ban đầu
    fetch("https://localhost:7019/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data))

    // SignalR
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7019/orderHub")
      .withAutomaticReconnect()
      .build()

    connection.start()

    connection.on("ReceiveNewOrder", (order) => {
      setOrders(prev => [order, ...prev])
    })

    return () => connection.stop()
  }, [])

  return (
    <div className="h-screen bg-slate-100 p-6">
      <h1 className="text-2xl font-bold mb-4">
        📺 Đơn hàng realtime
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {orders.map((o, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-4 border-l-4 border-green-500"
          >
            <p className="font-bold text-lg">
              Mã đơn: {o.orderId}
            </p>

            <p className="text-red-500 font-semibold mt-1">
              Tổng tiền: {o.totalPrice.toLocaleString()} ₫
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Thanh toán lúc: {new Date(o.createdAt).toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order
