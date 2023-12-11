import { useBearStore } from "@/store/bear.strore"


const IncreaseBear = () => {

    const increase = useBearStore((state)=> state.increasePopulation)

  return (
    <button className="bg-black text-white px-4 py-2 rounded" onClick={increase}>
        IncreaseBear
    </button>
  )
}

export default IncreaseBear