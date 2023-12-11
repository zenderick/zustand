"use client"


import CountBears from "@/components/count.bears";
import IncreaseBear from "@/components/increase.bears";
import AddCart from "@/components/product/addCart";
import ListProduct from "@/components/product/list.product";
import TotalProduct from "@/components/product/total.products";
import { useBearStore } from "@/store/bear.strore"
import { useCartStore } from "@/store/cart.store";
import { useEffect } from "react";


const Home = () => {

  const bears = useBearStore((state) => state.bear);

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <p>Bears: {bears}</p>
      <CountBears/>
      <IncreaseBear/>
      <hr />
      <AddCart/>
      <TotalProduct/>
      <ListProduct/>
    </div>
  )
}

export default Home