import { useCartStore } from "@/store/cart.store"


const ListProduct = () => {

    const item = useCartStore((state) => state.items)

  return (
    <div>
        <pre>
            {JSON.stringify(item, null, 2)}
        </pre>
    </div>
  )
}

export default ListProduct