import { heroNavLinks } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="bg-bannerImg bg-repeat bg-cover bg-bottom text-white">
      <div className="flex items-end flex-col w-full h-screen py-20 px-12 md:px-18 ">
        <div className="flex flex-col items-end w-full justify-center">
          <p className="text-slate-300">
            پشتیبانی توسط
            <span className="pb-1 border-b text-white"> فراکوه</span>
          </p>
          <h1 className="pt-6 text-right font-extrabold w-full text-2xl md:text-4xl lg:text-6xl xl:text-7xl">
            سامانه جامع خدمات کوه نوردی و صعود های ورزشی
          </h1>
          <p className="pt-5 text-right">حامی کوه نوردان و باشگاه</p>
        </div>
        <div className="flex flex-col items-center justify-center text-right pt-10 w-full">
          <ul className="w-full md:flex ">
            {heroNavLinks.map((link) => (
              <li
                className="hover:bg-slate-100 hover:text-black rounded- cursor-pointer border py-1 px-4 border-white text-center w-full"
                key={link}
              >
                {link}
              </li>
            ))}
          </ul>
          <input
            className="w-full p-2 text-black"
            dir="rtl"
            type="text"
            placeholder="نام دوره استان باشگاه مدرس"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
