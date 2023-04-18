import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <>
      <main className="h-screen flex flex-1 bg-background-primary">
        <div className="xl:gap-x-40 gap-x-10 flex-col flex flex-1 lg:flex-row">
          <div className="lg:flex-1 mt-24 hidden sm:flex items-center justify-center xl:justify-end">
            <div className="flex-col flex">
              <span className="text-zinc-300 font-bold text-5xl items-center">
                Faça seu login <br />
                na plataforma
              </span>
            </div>
          </div>
          <LoginForm />
        </div>
      </main >
    </>
  )
}
