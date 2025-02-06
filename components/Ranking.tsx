import { ranking } from "@/lib/utils";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

const Ranking = () => {
  return (
    <section className="w-full h-full pt-10 px-12 bg-gray-50 dark:bg-gray-900">
      <MotionDiv
        className=""
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="">
          <h2 className="border-b-4 text-blue-600 border-blue-600 font-extrabold text-xl pb-2 text-right w-full">
            رنکینگ سیمرغ قله های ایران
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 py-4 w-full h-full">
          {ranking.map((rank, i) => (
            <div
              className="flex justify-center items-end flex-col hover:scale-105 transition-transform duration-300"
              key={i}
            >
              <Image
                className="rounded-md shadow-lg"
                src={rank.img}
                alt={rank.name}
                width={120}
                height={120}
              />
              <p className="text-sm font-bold text-center py-2 md:text-base">
                {rank.name}
              </p>
            </div>
          ))}
        </div>
      </MotionDiv>
    </section>
  );
};

export default Ranking;
