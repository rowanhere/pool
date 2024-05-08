import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const NftListButton = ({
  changeNftListBackward,
  changeNftListForward,
  nftList,
  nftslength
}) => {
  return (
    <div className="font-mono text-lg mt-5 p-2 text-gray-500 flex justify-between items-center">
      <span>
        Showing {`${nftList.startIndex + 1}-${nftList.endIndex}`} from{" "}
        {nftslength}
      </span>
      <div className="text-white">

        <button
        disabled={nftList.startIndex === 0}

          className="p-3 border border-gray-500 rounded-lg disabled:text-gray-500 hover:border-white disabled:hover:border-[initial]"
          onClick={() => changeNftListBackward()}
        >
          <FaChevronLeft size={15} />
        </button>
        <button
        disabled={nftList.endIndex === nftslength}
          className="p-3 border border-gray-500 rounded-lg ml-2  disabled:text-gray-500 hover:border-white disabled:hover:border-[initial]"
          onClick={() => changeNftListForward()}
        >
          <FaChevronRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default NftListButton;
