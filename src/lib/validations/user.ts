import z from "zod";

export const UserLoginValidation = z.object({
     email: z.string().email().min(7),
     password: z.string().min(4)
})

export const UserSignUpValidation = z.object({
     name: z.string().min(4),
     email: z.string().email().min(7),
     password: z.string().min(4)
})