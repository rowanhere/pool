import { Button } from "@/components/ui/button";
import { Cairo,Foldit } from "next/font/google";
import ConnectWallet from "../walletConfig/connectWallet";
const cairo = Cairo({
    subsets: ['latin'],
    display: 'swap',
  })
  const foldit = Foldit({
    subsets: ['latin'],
    display: 'swap',
  })
const Nav = () => {
  return (
    <header className="pt-6 px-8 pb-4 border-b mb-10">
      <nav className="flex items-center justify-between">
        <div className={foldit.className}>
          <h1 className="text-[2.5rem] tracking-[0.25rem]">BeetCoin</h1>
        </div>
        <div className={`${cairo.className} flex items-center`}>
            <a href="https://magiceden.io/marketplace/beetminer" target="_blank" className="mr-10 text-md tracking-[0.1rem] border py-2 px-4 rounded-md transition-all duration-300 hover:border-gray-600  hidden sm:inline">MarketPlace</a>
          
          <Button variant="secondary">
            <ConnectWallet/>
          </Button>

        </div>
      </nav>
    </header>
  );
};

export default Nav;
