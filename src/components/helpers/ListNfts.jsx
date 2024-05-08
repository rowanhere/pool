import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import NftListButton from "./NftListButton";
import { Skeleton } from "@/components/ui/skeleton";
const ListNfts = () => {
  const nfts = [
    {
      nftImg:
        "https://ylclzrcx5zgwchees2jnsx6gqw3wcbhmdhfv57p2dfq7owipuwkq.arweave.net/wsS8xFfuTWEchJaS2V_GhbdhBOwZy179-hlh91kPpZU",
      nftId: "Beetminer #8976",
      unlock: "45 minutes",
      hash: "63",
      ec: "0.387",
    },
    {
      nftImg:
        "https://zsczjatg3w5qbm2itw6rzmu5gzxbjf24a3dkipza3ngmztdh2ubq.arweave.net/zIWUgmbduwCzSJ29HLKdNm4Ul1wGxqQ_INtMzMxn1QM",
      nftId: "Beetminer #6969",
      unlock: "4 hours",
      hash: "77",
      ec: "0.258",
    },
    {
      nftImg:
        "https://o5fxx6zjoviztr2lcoad3ffmwzmpg5oew6ta4mt7m455jylhf4lq.arweave.net/d0t7-yl1UZnHSxOAPZSstljzdcS3pg4yf2c71OFnLxc",
      nftId: "Beetminer #1245",
      unlock: "2 days",
      hash: "85",
      ec: "0.127",
    },
    {
      nftImg:
        "https://ylclzrcx5zgwchees2jnsx6gqw3wcbhmdhfv57p2dfq7owipuwkq.arweave.net/wsS8xFfuTWEchJaS2V_GhbdhBOwZy179-hlh91kPpZU",
      nftId: "Beetminer #1122",
      unlock: "112 minutes",
      hash: "22",
      ec: "0.87",
    },
    {
      nftImg:
        "https://zsczjatg3w5qbm2itw6rzmu5gzxbjf24a3dkipza3ngmztdh2ubq.arweave.net/zIWUgmbduwCzSJ29HLKdNm4Ul1wGxqQ_INtMzMxn1QM",
      nftId: "Beetminer #6969",
      unlock: "7 hours",
      hash: "17",
      ec: "0.58",
    },
    {
      nftImg:
        "https://o5fxx6zjoviztr2lcoad3ffmwzmpg5oew6ta4mt7m455jylhf4lq.arweave.net/d0t7-yl1UZnHSxOAPZSstljzdcS3pg4yf2c71OFnLxc",
      nftId: "Beetminer #7856",
      unlock: "5 days",
      hash: "25",
      ec: "0.87",
    },
    {
      nftImg:
        "https://ylclzrcx5zgwchees2jnsx6gqw3wcbhmdhfv57p2dfq7owipuwkq.arweave.net/wsS8xFfuTWEchJaS2V_GhbdhBOwZy179-hlh91kPpZU",
      nftId: "Beetminer #1122",
      unlock: "2 minutes",
      hash: "448",
      ec: "0.1",
    },
    {
      nftImg:
        "https://o5fxx6zjoviztr2lcoad3ffmwzmpg5oew6ta4mt7m455jylhf4lq.arweave.net/d0t7-yl1UZnHSxOAPZSstljzdcS3pg4yf2c71OFnLxc",
      nftId: "Beetminer #7856",
      unlock: "5 days",
      hash: "25",
      ec: "0.87",
    },
    {
      nftImg:
        "https://ylclzrcx5zgwchees2jnsx6gqw3wcbhmdhfv57p2dfq7owipuwkq.arweave.net/wsS8xFfuTWEchJaS2V_GhbdhBOwZy179-hlh91kPpZU",
      nftId: "Beetminer #1122",
      unlock: "2 minutes",
      hash: "448",
      ec: "0.1",
    },
    {
      nftImg:
        "https://o5fxx6zjoviztr2lcoad3ffmwzmpg5oew6ta4mt7m455jylhf4lq.arweave.net/d0t7-yl1UZnHSxOAPZSstljzdcS3pg4yf2c71OFnLxc",
      nftId: "Beetminer #7856",
      unlock: "5 days",
      hash: "25",
      ec: "0.87",
    },
    {
      nftImg:
        "https://o5fxx6zjoviztr2lcoad3ffmwzmpg5oew6ta4mt7m455jylhf4lq.arweave.net/d0t7-yl1UZnHSxOAPZSstljzdcS3pg4yf2c71OFnLxc",
      nftId: "Beetminer #74",
      unlock: "1 days",
      hash: "257",
      ec: "0.87",
    },
  ];
  const [isSkeleton, setIsSkeleton] = useState(false);
  const [nftList, setNftList] = useState({
    startIndex: 0,
    endIndex: 3,
    nfts: nfts.slice(0, 3),
  });
  const changeNftListForward = () => {
    setIsSkeleton(true)
    setTimeout(() => {
      
    
    const prevEndIndex = nftList.endIndex;
    if (prevEndIndex === nfts.length) return;
    const endLength =
      prevEndIndex + 3 > nfts.length ? nfts.length - prevEndIndex : 3;
    const newEndInex = prevEndIndex + endLength;
    const newNftList = nfts.slice(prevEndIndex, newEndInex);
    setNftList({
      startIndex: prevEndIndex,
      endIndex: newEndInex,
      nfts: newNftList,
    });
    setIsSkeleton(false)

  }, 2000);
  };
  const changeNftListBackward = () => {
    const prevStartIndex = nftList.startIndex;
    if (prevStartIndex === 0) return;
    const endLength = 3;
    const newEndInex = prevStartIndex - endLength;
    const newNftList = nfts.slice(newEndInex, prevStartIndex);
    setNftList({
      startIndex: newEndInex,
      endIndex: prevStartIndex,
      nfts: newNftList,
    });
    console.log("working", newEndInex, prevStartIndex, newNftList);
  };
  return (
    <>
      <NftListButton
        changeNftListBackward={changeNftListBackward}
        changeNftListForward={changeNftListForward}
        nftList={nftList}
        nftslength={nfts.length}
      />
      <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4 gap-x-8 mt-5 ">
        {nftList.nfts.map((item, index) => {
          return (
            <div key={index} className="bg-lessdark  rounded-lg p-5 font-mono">
              <div className="w-full aspect-square overflow-hidden">
                {isSkeleton ? (
                  <Skeleton className="w-full h-full rounded-lg" />
                ) : (
                  <img
                    src={item.nftImg}
                    alt={index}
                    className="rounded-lg  cover min-w-full min-h-full transition-all duration-300 hover:scale-125 cursor-pointer"
                  />
                )}
              </div>
              <h2 className="ml-[5px] mt-2 text-xl h-4 w-[20ch]">
                {isSkeleton ? (
                  <Skeleton className="h-full w-full" />
                ) : (
                  item.nftId
                )}
              </h2>
              <div className="flex justify-between ml-[5px] mt-4">
                <span className="text-gray-400">Unlock in</span>
                {isSkeleton ? (
                  <Skeleton className="h-4 w-[15ch]" />
                ) : (
                  <span>{item.unlock}</span>
                )}
              </div>
              <div className="flex justify-between ml-[5px] mt-4">
                <span className="text-gray-400">Hash Power</span>
              
                {isSkeleton ? (
                  <Skeleton className="h-4 w-[15ch]" />
                ) : (
                  <span>{item.hash}</span>
                )}
              </div>
              <div className="flex justify-between ml-[5px] mt-4">
                <span className="text-gray-400">EC</span>
                {isSkeleton ? (
                  <Skeleton className="h-4 w-[15ch]" />
                ) : (
                  <span>{item.ec}</span>
                )}
              </div>
              {
                isSkeleton?(
                  <Skeleton className="mt-5 h-10 w-full" />
                ):(
                  <button className=" mt-5  inline-flex items-center w-full justify-center whitespace-nowrap rounded-md font-bold text-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
                  Unstake
                    {/* spinner
                    <CgSpinner size={20} className="animate-spin"/>
                    */}
                  </button>
                )
              }
            
            </div>
          );
        })}
      </div>
      <NftListButton
        changeNftListBackward={changeNftListBackward}
        changeNftListForward={changeNftListForward}
        nftList={nftList}
        nftslength={nfts.length}
       
      />
    </>
  );
};

export default ListNfts;
