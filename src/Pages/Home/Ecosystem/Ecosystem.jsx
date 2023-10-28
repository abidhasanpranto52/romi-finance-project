/* eslint-disable react/no-unescaped-entities */
const Ecosystem = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-20 pb-20">
      <h1>
        Two tokens create <br /> our ecosystem
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-center">
        <div className="border rounded p-8">
          <div className="flex">
            <div>
              <img
                className="w-12"
                src="../../../../public/download.png"
                alt=""
              />
            </div>
            <div className="text-3xl mt-1 ml-2">$ZOMI</div>
          </div>
          <p className="text-lg font-semibold mt-4">
            $ZOMI is the utility and governance token. Accrues 30% of the
            platform's generated fees.
          </p>
          <p className="text-md mt-4">Ethereum APR: 0.00%</p>
          <div className="flex gap-4 mt-5">
            <button className="btn btn-sm btn-success text-white rounded ">
              Buy
            </button>
            <button className="btn btn-sm text-white btn-outline rounded">
              Read More
            </button>
          </div>
        </div>
        <div className="border rounded p-8">
          <div className="flex">
            <div>
              <img className="w-12" src="../../../../public/zlp.png" alt="" />
            </div>
            <div className="text-3xl mt-1 ml-2">$ZLP</div>
          </div>
          <p className="text-lg font-semibold mt-4">
            $ZLP is the liquidity provider token. Accrues 70% of the platform's
            generated fees.
          </p>
          <p className="text-md mt-4">Ethereum APR: 1,653,319,592.10%</p>
          <div className="flex gap-4 mt-5">
            <button className="btn btn-sm btn-success text-white rounded ">
              Buy
            </button>
            <button className="btn btn-sm text-white btn-outline rounded">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
