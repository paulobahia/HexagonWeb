import Link from "next/link";
import { Google } from 'iconsax-react'

export default function Home() {
  return (
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
        <div className="flex-1 items-center justify-start flex">
          <div className="bg-background-secondary rounded-lg overflow-hidden shadow-xl max-w-md w-full p-12">
            <form className="flex flex-col gap-2 mt-1">
              <div className="">
                <input type="email" name="email" placeholder='E-mail' className="h-12 bg-background-primary text-white w-full pl-10 shadow-xl rounded-md text-sm font-medium focus:outline-itens-primary outline-none " />
              </div>
              <div>
                <input type="password" name="password" placeholder='Senha' className="h-12 bg-background-primary w-full text-white pl-10 shadow-xl rounded-md text-sm font-medium p-1 focus:outline-itens-primary outline-none " />
              </div>
            </form>
            <div className="text-itens-primary font-semibold text-sm mt-2">
              <a>
                Esqueci minha senha
              </a>
            </div>
            <div className="flex items-center justify-center mt-5">
              <Link href="/app" className="bg-itens-primary p-3 rounded-md text-white text-center font-semibold w-full hover:bg-itens-light transition-colors">
                ENTRAR
              </Link>
            </div>
            <hr className="my-8 h-0.5 border-t-0 bg-neutral-600 opacity-30" />
            <div>
              <div className="flex items-center justify-end gap-x-5">
                <p className="text-white font-medium text-sm">Ou entre com</p>
                <button className="bg-background-primary/40 shadow-sm p-3 rounded-md text-white font-semibold flex-1 hover:bg-itens-primary transition-colors">
                  <div className="flex items-center justify-center gap-3">
                    <Google className="w-5 h-5 text-zinc-200 cursor-pointer" variant="Bulk" />
                    GOOGLE
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}