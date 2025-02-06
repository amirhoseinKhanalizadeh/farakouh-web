import { accordions } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Committees = () => {
  return (
    <main className="flex flex-col justify-center items-end px-12 py-10">
      <div className="mt-4 px-2 py-4 border-b-2 w-full">
        <h1 className="text-2xl font-bold text-right text-gray-600">
          لیست هئیت های استانی فدراسیون کوهنوردی و صعود های ورزشی
        </h1>
      </div>
      <div className="flex flex-col w-full h-full mt-4 space-y-4">
        {accordions.map(
          (
            {
              title,
              boss,
              viceP,
              secretary,
              educationOfficer,
              address,
              phones,
            },
            index
          ) => (
            <Accordion
              className="w-full h-full "
              type="single"
              collapsible
              key={index}
            >
              <AccordionItem
                className="text-sm border-2 text-green-600 font-medium w-full h-full flex flex-col items-end"
                value="item-1"
              >
                <AccordionTrigger className="text-xs">{title}</AccordionTrigger>
                <AccordionContent className="py-2 px-2 flex flex-col items-end justify-center text-black border-2 w-full h-full">
                  <div>
                    <span className="font-bold">رئیس :</span>
                    <span className="font-normal text-sm"> {boss} </span>
                  </div>
                  <div>
                    <span className="font-bold">دبیر :</span>
                    <span className="font-normal"> {secretary} </span>
                  </div>
                  <div>
                    <span className="font-bold">نایب رئیس :</span>
                    <span className="font-normal"> {viceP} </span>
                  </div>
                  <div>
                    <span className="font-bold">مسئول آموزش :</span>
                    <span className="font-normal"> {educationOfficer} </span>
                  </div>
                  <div>
                    <span className="font-bold">تلفن های تماس :</span>
                    <span className="font-normal"> {phones} </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold">:آدرس</span>
                    <span className="font-normal"> {address} </span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )
        )}
      </div>
    </main>
  );
};

export default Committees;
