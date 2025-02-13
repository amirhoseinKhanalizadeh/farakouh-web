"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "نام کاربری باید حداقل 2 کاراکتر باشد",
  }),
  password: z.string().min(8, {
    message: "رمز عبور حداقل باید 8 کاراکتر باشد",
  }),
});

const UserInfo = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form Data:", data);
  };

  return (
    <main className="flex flex-col justify-center md:flex-row-reverse md:gap-x-4 px-12 py-20 w-full h-screen items-center space-y-6 bg-enterImg bg-repeat bg-cover bg-bottom">
      <div className="bg-white w-full h-full max-w-[420px] max-h-[300px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 p-4 text-right"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام کاربری</FormLabel>
                  <FormControl>
                    <Input
                      className="placeholder:text-gray-500"
                      dir="rtl"
                      placeholder="نام کاربری"
                      {...field} // Ensure field is bound only to this input
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>کلمه عبور</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="placeholder:text-gray-500"
                      dir="rtl"
                      placeholder="کلمه عبور"
                      {...field} // Ensure field is bound only to this input
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />

            <Button
              className="text-xl p-4 bg-blue-700 text-white w-full h-full cursor-pointer"
              type="submit"
            >
              ورود
            </Button>
          </form>
        </Form>
      </div>
      <div className="flex flex-col items-end justify-center text-right text-white/90 space-y-2">
        <h1 className="font-bold text-2xl">ورود به سامانه جامع فراکوه</h1>
        <p className="font-semibold">
          باشگاه ها و اعضای پرتال فدراسیون کوهنوردی میتوانند به این سامانه وارد
          شوند
        </p>
        <p className="font-semibold">
          شما برای ورود به همان نام کاربری و کلمه عبور پرتال خود احتیاج دارید
        </p>
      </div>
    </main>
  );
};

export default UserInfo;
