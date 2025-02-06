import Image from "next/image";
import Link from "next/link";

const popularNavLinks = [
  {
    label: "دوره های آموزشی ",
    link: "/",
  },
  {
    label: "مربیان ",
    link: "/",
  },
  {
    label: "باشگاه ها ",
    link: "/",
  },
  {
    label: "رزومه ",
    link: "/",
  },
];

const relatedWebsites = [
  {
    label: "فدراسیون کوهنوردی وصعود های ورزشی ",
    link: "/",
  },
  {
    label: "پرتال فدراسیون",
    link: "/",
  },
];

const Footer = () => {
  return (
    <footer className="flex justify-center text-white items-center md:justify-start text-right w-full h-full bg-gray-700 px-12 py-20">
      <div className="flex flex-col md:flex-row-reverse w-full h-full justify-center items-center md:items-start md:gap-x-2">
        <div className="flex flex-col pb-2 w-full h-full">
          <Image
            className="w-full h-auto"
            src="/next.svg"
            alt="logo"
            width={300}
            height={300}
          />
          <h3 className="mt-6 font-bold text-base">
            سامانه جامع خدمات کوه نوردی
          </h3>
          <p className="text-xs font-semibold pt-2 ">
            تحت نظارت فدراسیون کوه نوردی و صعود های ورزشی جمهوری اسلامی ایران
          </p>
        </div>
        <div className="flex flex-col w-full h-full pt-4 px-2 ">
          <p className="border-b border-white pb-4 text-sm font-semibold">
            لینک های پرکاربرد
          </p>
          <ul className="flex flex-col pt-6 text-blue-500 text-sm space-y-1">
            {popularNavLinks.map(({ link, label }) => (
              <li key={label}>
                <Link
                  className="hover:border-b hover:text-blue-700 border-blue-700"
                  href={link}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col w-full h-full pt-4 px-2 ">
          <p className="border-b border-white pb-4 text-sm font-semibold">
            سایت های مرتبط
          </p>
          <ul className="flex flex-col pt-6 text-blue-500 text-sm space-y-1">
            {relatedWebsites.map(({ link, label }) => (
              <li key={label}>
                <Link
                  className="hover:border-b hover:text-blue-700 border-blue-700"
                  href={link}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
