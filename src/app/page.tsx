import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <>
      <main className="h-screen flex bg-background-primary">
        <div className="flex flex-1 gap-x-40">
          <div className="flex-1 items-center justify-end flex">
            <div className="flex-col gap-y-10 flex">
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
