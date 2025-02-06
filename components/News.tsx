import { news } from "@/lib/utils";
import Image from "next/image";

const News = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse md:items-start md:justify-center md:gap-x-8 h-full w-full pt-10 px-12">
      <div className="md:w-1/2 pt-6">
        <h2 className="border-b-4 text-blue-600 border-blue-600 font-extrabold text-xl pb-2 text-right w-full">
          آخرین اخبار کوه نوردی و صعود های ورزشی
        </h2>

        <div className="pt-6 flex flex-col items-center justify-center">
          {news.map((item, index) => (
            <div
              className="flex flex-col w-full h-full md:flex-row-reverse items-center md:items-start md:justify-center gap-y-2 space-x-0 md:space-x-reverse md:space-x-4 my-2"
              key={index}
            >
              <div className="relative w-full h-[250px] md:w-[400px] md:h-[100px]">
                <Image
                  src={item.img}
                  alt="news"
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                />
              </div>

              <p className="text-right text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 pt-6">
        <div className="">
          <h2 className="border-b-4 text-blue-600 border-blue-600 font-extrabold text-xl pb-2 text-right w-full">
            پیام ها
          </h2>
          <span className="text-right flex justify-end items-center pt-6 text-blue-400 font-bold">
            1401/08/17 - توجه توجه توجه:تذکر مهم
          </span>
          <p
            dir="rtl"
            className="text-right text-red-700 text-2xl font-bold pt-2"
          >
            مسئولیت انتخاب صحیح دوره‌ها، ثبت‌ نام و پرداخت وجه در رویدادهای
            ورزشی بر عهده شخص متقاضی می‌باشد.
          </p>
        </div>
        <div className="pt-6">
          <h2 className="border-b-4 text-blue-600 border-blue-600 font-extrabold text-xl pb-2 text-right w-full">
            تبلیغات
          </h2>
          <div className="relative overflow-hidden w-full h-full">
            <Image
              src="/akhbar.jpg"
              alt=""
              width={50}
              height={50}
              className="w-full h-full pt-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
