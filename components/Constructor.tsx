import Image from "next/image";

const Constructor = () => {
  return (
    <div className="flex flex-col items-center py-16 w-full h-full">
      <Image
        alt="constructorImg"
        src="/constructor-img.jpg"
        width={300}
        height={300}
      />
      <h1 className="font-bold text-2xl">در حال ساخت</h1>
      <p className="font-semibold">لطفا در آینده نزدیک مراجعه فرمایید</p>
    </div>
  );
};

export default Constructor;
