"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLoginValidation } from "@/lib/validations/user";
import { Button } from "../ui/button"
import {
     Form,
     FormControl,
     FormField,
     FormItem,
     FormLabel,
     FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import Link from "next/link";

const SignIn = () => {
     const form = useForm({
          resolver: zodResolver(UserLoginValidation),
          defaultValues: {
               email: "",
               password: ""
          }
     })

     const onSubmit = (values: z.infer<typeof UserLoginValidation>) => {
          console.log(values)
     }

     return (
          <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                         control={form.control}
                         name="email"
                         render={({ field }) => (
                              <FormItem>
                                   <FormLabel>Email</FormLabel>
                                   <FormControl>
                                        <Input type="email" {...field} />
                                   </FormControl>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />

                    <FormField
                         control={form.control}
                         name="password"
                         render={({ field }) => (
                              <FormItem>
                                   <FormLabel>Password</FormLabel>
                                   <FormControl>
                                        <Input type="password" {...field} />
                                   </FormControl>
                                   <FormMessage />
                              </FormItem>
                         )}
                    />
                    <div className="flex justify-between">
                         <Button type="submit">Submit</Button>
                         <Link href="/sign-up">Create an account</Link>
                    </div>

               </form>
          </Form>
     )
}

export default SignIn;