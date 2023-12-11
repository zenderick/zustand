import { useCartStore } from "@/store/cart.store"


const TotalProduct = () => {

    const getTotalItem = useCartStore((state) => state.getTotalItems())
    const getTotalPrice = useCartStore((state) => state.getTotalPrices())

  return (
    <div>
      <p>Total items: {getTotalItem}</p>
      <p>Total price: {getTotalPrice}</p>
    </div>
  )
}

export default TotalProduct