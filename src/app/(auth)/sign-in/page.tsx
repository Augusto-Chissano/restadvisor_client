import SignIn from "@/components/forms/SignIn";

const Page = () => {
     return (
          <main className="mx-auto flex max-w-xl flex-col justify-start px-10 py-20">
               <h1 className="head-text">Sign In</h1>

               <section className="mt-9 bg-dark-2 p-10">
                    <SignIn />
               </section>
          </main>
     )
}

export default Page;