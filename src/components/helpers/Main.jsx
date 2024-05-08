import { Cairo } from 'next/font/google';
import MyNfts from './MyNfts'
import PooLinfo from './PooLinfo'
import { useWallet } from "@solana/wallet-adapter-react";
const cairo = Cairo({
  subsets: ['latin'],
  display: 'swap',
})
const Main = () => {
  const {  publicKey} = useWallet();
  return (
    <main>
     <PooLinfo/>
     {
      publicKey?<MyNfts/>:(
        <div className={`${cairo.className}`}>
        <h1 className="text-[1.6rem] tracking-[0.25rem] text-center my-10 underline  underline-offset-[8px]">Please connect your wallet!</h1>
      </div>
      )
     }
     
    </main>
  )
}

export default Main
