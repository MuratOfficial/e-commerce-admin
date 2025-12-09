

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex  min-h-screen w-full flex-row items-center justify-between py-12 px-16 bg-white dark:bg-black sm:items-start">
        <div className=" bg-contain bg-[url(/bg-admin.png)] bg-no-repeat w-1/2  min-h-screen"></div>
        <div className="pt-12 w-1/2 flex flex-row justify-center items-center min-h-screen">
          
          <h1 className="font-semibold text-7xl text-center text-slate-700">
             Welcome back, <br/>
          Admin

          </h1>
         

        </div>
      </main>
    </div>
  );
}
