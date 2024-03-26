import Link from 'next/link'
const background =
  'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const SubHeader = () => {
  return (
    <div
      style={{ background: `url('${background}') fixed no-repeat top/cover` }}
      className="flex items-center justify-between text-white px-10 py-5"
    >
      <div>
        <Link href="/" className="text-xl font-bold">
          DappLottery
        </Link>
      </div>

      <div className="hidden lg:flex items-center space-x-6 font-semibold">
        <p>Home</p>
        <p>How To Play</p>
        <p>All Lottery</p>
        <p>Contact</p>
      </div>

      <button
        className="flex flex-nowrap border py-2 px-4 rounded-full bg-amber-500
          hover:bg-rose-600 cursor-pointer font-semibold text-sm"
      >
        Connect Wallet
      </button>
    </div>
  )
}

export default SubHeader
