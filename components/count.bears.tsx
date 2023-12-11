import { useBearStore } from "@/store/bear.strore"


const CountBears = () => {

    const bear = useBearStore((state) => state.bear)

  return (
    <div>CountBear: {bear}</div>
  )
}

export default CountBears