"use client"
import { Google, User, Lock, Eye, EyeSlash } from 'iconsax-react'
import Link from 'next/link';
import { useState } from 'react'

const LoginForm = () => {
    const [typePassword, setTypePassword] = useState<string>("password")
    const changeTypePassword = () => {
        setTypePassword((prev) => {
            if (prev === 'password') {
                return 'text'
            }
            return 'password'
        })
    }
    return (
        <div className="lg:flex-1 mt-52 items-center lg:justify-start justify-center flex">
            <div className="bg-background-secondary rounded-lg overflow-hidden shadow-xl max-w-sm w-full p-10 sm:p-12 sm:max-w-md">
                <form className="flex flex-col gap-2 mt-1">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-1 flex items-center pl-2">
                            <User className="w-4 h-4 text-zinc-200" variant="Bulk" />
                        </span>
                        <input type="email" name="email" placeholder='E-mail' className="h-12 bg-background-primary text-white w-full pl-10 shadow-xl rounded-md text-sm font-medium focus:outline-itens-primary outline-none " />
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-1 flex items-center pl-2">
                            <Lock className="w-4 h-4 text-zinc-200" variant="Bulk" />
                        </span>
                        <input type={typePassword} name="password" placeholder='Senha' className="h-12 bg-background-primary w-full text-white pl-10 shadow-xl rounded-md text-sm font-medium p-1 focus:outline-itens-primary outline-none " />
                        <span onClick={changeTypePassword} className="absolute inset-y-0 right-3 flex items-center pl-2">
                            {typePassword == 'password' ? <Eye className="w-5 h-5 text-itens-primary cursor-pointer" variant="Bulk" /> : <EyeSlash className="w-5 h-5 text-itens-primary cursor-pointer" variant="Bulk" />}
                        </span>
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
    )
}

export default LoginForm