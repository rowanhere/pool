import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cairo } from "next/font/google";
const cairo = Cairo({
  subsets: ["latin"],
  display: "swap",
});
const AccordinInfo = () => {
  const accordins = [
    {
        question:"How Can I Start Mining ?",
        answer:"By simply holding at least one BeetMiner NFT in your wallet you will be participating in the mining process. The more BeetMiner NFTs you hold, the more chances you have to mine a block."
    },
    {
      question: "What's The Max Supply Of Beetcoin ?",
      answer:
        "The max supply of Beetcoins are 21,000,000. The same as Bitcoin. 5% was used for the initial LP, 1% is reserved for BeetDAO NFT holders and 1% allocated for Marketing. 93% of Beetcoins will be distributed via Mining.",
    },
    {
      question: "Where Can I Get Miners ?",
      answer:
        "The BeetMiners NFT supply is limited to 10,000 units, each sold at 0.12 SOL + 75 Beetcoins. You can mint miners at mint.beetcoin.cash or buy them from the secondary market on Tensor.",
    },
    {
      question: "Beetcoin Contract Address ?",
      answer:
        "The Beetcoin token contract address is 4v5nbBSUyLQdHV3yFg4W1fMGPbbsbZDG54urSyCsbEtY",
    },
  ];
  return (
    <section className="p-5">
      <h3 className={`${cairo.className} text-2xl mb-5`}>FAQ&apos;S</h3>
      <div className="grid md:grid-cols-2 gap-2 gap-x-4">
        {accordins.map((e, index) => {
          return (
            <Accordion
              type="single"
              collapsible
              className={cairo.className}
              key={index}
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">{e.question}</AccordionTrigger>
                <AccordionContent className="text-lg text-gray-400">{e.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};

export default AccordinInfo;
