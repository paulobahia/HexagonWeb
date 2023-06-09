"use client"
import { Google, User, Lock, Eye, EyeSlash } from 'iconsax-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { authUserFormSchema } from '@/utils/zod/authUserFormSchema'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
const LoginForm = () => {
    type AuthUserFormData = z.infer<typeof authUserFormSchema>

    const router = useRouter()
    const [typePassword, setTypePassword] = useState<string>("password")

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AuthUserFormData>({
        resolver: zodResolver(authUserFormSchema)
    })

    const changeTypePassword = () => {
        setTypePassword((prev) => {
            if (prev === 'password') {
                return 'text'
            }
            return 'password'
        })
    }

    const authUser = (data: any) => {
        // router.push('/home')
    }

    return (
        <div className="lg:flex-1 lg:mt-0 mt-52 items-center lg:justify-start justify-center flex px-3">
            <div className="bg-background-secondary rounded-lg overflow-hidden shadow-xl max-w-sm w-full p-10 sm:p-12 sm:max-w-md">
                <form onSubmit={handleSubmit(authUser)} className="flex flex-col gap-1 mt-1">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-1 flex items-center pl-2">
                            <User className="w-4 h-4 text-zinc-200" variant="Bulk" />
                        </span>
                        <input {...register('email')} name='email' type="email" placeholder='E-mail' className="h-12 bg-background-primary text-white w-full pl-10 shadow-xl rounded-md text-sm font-medium focus:outline-itens-primary outline-none " />
                    </div>
                    {errors.email && <span className='text-danger-base text-xs font-semibold'>{errors.email.message}</span>}
                    <div className="relative">
                        <span className="absolute inset-y-0 left-1 flex items-center pl-2">
                            <Lock className="w-4 h-4 text-zinc-200" variant="Bulk" />
                        </span>
                        <input {...register('password')} name='password' type={typePassword} placeholder='Senha' className="h-12 bg-background-primary w-full text-white pl-10 shadow-xl rounded-md text-sm font-medium p-1 focus:outline-itens-primary outline-none " />
                        <span onClick={changeTypePassword} className="absolute inset-y-0 right-3 flex items-center pl-2">
                            {typePassword == 'password' ? <Eye className="w-5 h-5 text-itens-primary cursor-pointer" variant="Bulk" /> : <EyeSlash className="w-5 h-5 text-itens-primary cursor-pointer" variant="Bulk" />}
                        </span>
                    </div>
                    {errors.password && <span className='text-danger-base text-xs font-semibold'>{errors.password.message}</span>}
                    <div className="text-itens-primary font-semibold text-sm">
                        <a>
                            Esqueci minha senha
                        </a>
                    </div>
                    <div className="flex items-center justify-center mt-5">
                        <button type='submit' onClick={authUser} className={`bg-itens-primary p-3 rounded-md text-white text-center font-semibold w-full hover:bg-itens-light transition-colors ${errors.email || errors.password ? 'opacity-50 cursor-not-allowed' : null}`}>
                            ENTRAR
                        </button>
                    </div>
                </form>
                <hr className="my-8 h-0.5 border-t-0 bg-neutral-600 opacity-30" />
                <div>
                    <div className="flex items-center justify-end gap-x-5">
                        <p className="text-white font-medium text-xs md:text-sm">Ou entre com</p>
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