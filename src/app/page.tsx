import Image from "next/image";
import Counter from "@/components/Counter";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="mx-auto px-8 py-9">
        <h2 className="py-6 text-2xl font-semibold text-center">Simple Counter Application Using ReduxToolkit</h2>
        <Counter/>
        <Counter/>

        <Stats TotalCount={10} />
    </div>
  );
}
