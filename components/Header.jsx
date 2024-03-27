import Image from 'next/image'
import Link from 'next/link'
import networking from '@/assets/networking.webp'
import { useSelector } from 'react-redux'
import { connectWallet, truncate } from '@/services/blockchain'

const background =
  'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const Header = () => {
  const { wallet } = useSelector((states) => states.globalStates)

  return (
    <div
      className="px-5 md:px-40"
      style={{ background: `url(${background}) fixed no-repeat top/cover` }}
    >
      <div className="flex items-center justify-between text-white py-5">
        <h1 className="text-xl font-bold">Dapp Lottery</h1>

        <div className="hidden lg:flex items-center space-x-3 font-semibold">
          <p>Home</p>
          <p>How To Play</p>
          <p>All Lottery</p>
          <p>Contact</p>
        </div>

        {wallet ? (
          <button className="flex flex-nowrap border py-2 px-4 rounded-full bg-amber-500 hover:bg-rose-600 cursor-pointer font-semibold text-sm">
            {truncate(wallet, 4, 4, 11)}
          </button>
        ) : (
          <button
            className="flex flex-nowrap border py-2 px-4 rounded-full bg-amber-500 hover:bg-rose-600 cursor-pointer font-semibold text-sm"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>

      <div className="flex items-center justify-between pb-5">
        <div>
          <div className="text-white py-5">
            <h2 className="text-4xl font-bold py-4">
              Take the chance to <br /> change your life
            </h2>

            <p className="text-xl">
              We host daily, weekly and monthly lotteries. <br /> All winnings are random and
              transparent.
            </p>
          </div>
        </div>

        <div className="py-5 hidden sm:block">
          <Image
            src={networking}
            width={100}
            height={100}
            alt="network"
            className="rounded-lg w-80"
          />
        </div>
      </div>
      <div className="pb-10">
        <Link
          href={'/create'}
          className="bg-amber-500 hover:bg-rose-600 text-white rounded-md cursor-pointer sont-semibold py-3 px-5"
        >
          Create Jackpot
        </Link>
      </div>
    </div>
  )
}

export default Header
