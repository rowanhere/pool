const PooLinfo = () => {
  const poolInfos = [
    {
      title: "Pooled Miners",
      amt: 1000,
    },
    {
      title: "Effective Hashpower",
      amt: 12000,
    },
    {
      title: "Mined Blocks",
      amt: 426,
    },
    {
      title: "Mined Rewards",
      amt: 21000,
    },
  ];
  return (
    <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4 p-5">
      {poolInfos.map((item, index) => {
        return (
          <div
            key={index}
            className="flex w-full flex-col gap-3 rounded-xl border p-5 bgColor hover:border-blue-500 cursor-pointer transition-all duration-500"
          >
            <div className="flex justify-between gap-2">
              <h2 className="text-md font-mono">{item.title}</h2>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-semibold text-gray-200">{item.amt}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PooLinfo;
