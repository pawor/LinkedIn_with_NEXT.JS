import Image from 'next/image'
import HeaderLink from '../components/HeaderLink'

function Home() {

    return (
        <div>
            <header className='flex items-center justify-around py-4'>
                <div className='relative h-10 w-36'>
                    <Image src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" layout="fill" objectFit="contain" />
                </div>
                <div className='flex items-center divide-gray-300 sm:divide-x'>
                    <div className='hidden pr-4 space-x-8 sm:flex'>
                        <HeaderLink />
                    </div>
                    <div>hello</div>
                </div>
            </header>
        </div>
  )
}

export default Home