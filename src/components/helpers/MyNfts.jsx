import { Cairo } from "next/font/google";
import { LuLayers, LuAlarmClock, LuScreenShare } from "react-icons/lu";
import ListNfts from "./ListNfts";
const cairo = Cairo({
  subsets: ["latin"],
  display: "swap",
});
const MyNfts = () => {
  const stakingInfo = [
    {
      title: "Total staked",
      info: "30 Miners",
      icon: LuLayers,
    },
    {
      title: "Last claimed",
      info: "Never",
      icon: LuAlarmClock,
    },
  ];
  return (
    <section className="p-6 flex w-full lg:flex-row flex-col gap-5 mt-5">
      <div className="w-full">
        <div className="flex justify-between grow">
          <h3 className={`${cairo.className} text-2xl`}>My NFT'S</h3>
          <div
            className={`bg-lesserdark ${cairo.className}text-lg  rounded-md h-[40px] w-[200px] grid grid-cols-2 gap-2 items-center`}
          >
            <button className="ml-[5px] active">Staked</button>
            <button className={`mr-[5px]`}>Unstaked</button>
          </div>
        </div>
        <ListNfts />
        
      </div>
      <section className="lg:block flex sm:flex-row flex-col justify-stretch gap-1">
        <div className="bg-lesserdark md:w-[300px] rounded-lg p-4 lg:grow-0 grow" >
          <h2 className={`${cairo.className} text-xl`}>Your staking info</h2>
          {stakingInfo.map((e, index) => {
            return (
              <div className="mt-5 flex gap-2 items-center" key={index}>
                <e.icon size={30} />
                <div className="flex flex-col font-mono ">
                  <span className="text-[0.9rem]">{e.info}</span>
                  <span className="mt-[-5px] text-[0.75rem] text-gray-400">
                    {e.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {/* Withdraw section */}

        <div className="bg-lesserdark md:w-[300px] rounded-lg p-4 lg:mt-3 lg:grow-0 grow">
          <h2 className={`${cairo.className} text-xl`}>
            Available for withdraw
          </h2>

          <div className="mt-5 flex gap-2 items-center">
            <LuScreenShare size={30} />
            <div className="flex flex-col font-mono ">
              <span className="text-[0.9rem]">25 beetcoin</span>
              <span className="mt-[-5px] text-[0.75rem] text-gray-400">
                Available
              </span>
            </div>
          </div>
          {/* Withdraw button */}
          <button className="font-mono mt-5 text-center w-full border-2 rounded-lg p-2 transition-all duration-300  hover:border-green-400">
            Withdraw Now
          </button>
        </div>
      </section>
    </section>
  );
};

export default MyNfts;
