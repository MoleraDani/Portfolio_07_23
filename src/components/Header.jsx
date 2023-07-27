import { EmailIcon, GitHubLogo, LinkedinLogo } from './Icons'

export function Header () {
  return (
    <header className='flex justify-between mx-20 m-[1vh] h-[4vh]'>
      <section className='flex gap-4 items-center text-m'>
        <EmailIcon className='w-10 h-10' /> moleradani@gmail.com
      </section>
      <section className='flex gap-3'>
        <LinkedinLogo className='w-8 h-8 hover:bg-blue-700' />
        <GitHubLogo className='w-8 h-8 hover:bg-blue-700 hover:rounded-full' />
      </section>
    </header>
  )
}
