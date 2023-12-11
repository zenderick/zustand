import { Item, useCartStore } from "@/store/cart.store"


const AddCart = () => {

    const addCart = useCartStore((state) => state.addCart)

    const Handle = () => {
        const newItem: Item ={
            id: Date.now(),
            name: "Product" + Date.now(),
            price: Math.random() * 100
        }

        addCart(newItem)
    }

  return (
    <button className="bg-rose-500 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded" onClick={Handle}>
        AddProduct
    </button>
  )
}

export default AddCart