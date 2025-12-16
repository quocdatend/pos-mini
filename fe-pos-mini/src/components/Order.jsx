import { useEffect, useState } from "react"
import * as signalR from "@microsoft/signalr"

function Order() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5000/orderHub")
      .withAutomaticReconnect()
      .build()

    connection.start()
      .then(() => console.log("SignalR connected"))
      .catch(err => console.error(err))

    connection.on("NewOrder", (order) => {
      setOrders(prev => [order, ...prev])
    })

    return () => {
      connection.stop()
    }
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
              Mã đơn: {o.orderCode}
            </p>

            <p className="text-red-500 font-semibold mt-1">
              Tổng tiền: {o.total.toLocaleString()} ₫
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Thanh toán lúc: {new Date(o.paidAt).toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order
