import { EmailIcon, GitHubLogo, LinkedinLogo } from './Icons'

export function Header () {
  return (
    <header className='flex justify-between mx-20 m-[1vh] h-[4vh]'>
      <section className='flex gap-4 items-center text-sm'>
        <EmailIcon className='w-6 h-6' /> moleradani@gmail.com
      </section>
      <section className='flex gap-3'>
        <LinkedinLogo className='w-5 h-5 hover:bg-blue-700' />
        <GitHubLogo className='w-5 h-5 hover:bg-blue-700 hover:rounded-full' />
      </section>
    </header>
  )
}
