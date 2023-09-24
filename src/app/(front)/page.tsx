import ThemeToggle from '@/components/common/ThemeToggle'
import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
   <div className='container'>
    <h1>hello nextjs</h1>
    <Button>test</Button>
    <ThemeToggle/>
   </div>
  )
}
