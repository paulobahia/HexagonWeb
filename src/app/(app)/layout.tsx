import { LayoutUI } from "./components"
export const metadata = {
  title: 'Home | Hexagon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className='bg-background-primary'>
        <section className="flex">
          <LayoutUI />
          {children}
        </section>
      </body>
    </html >
  )
}
