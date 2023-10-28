const Service = () => {
  return (
    <div>
    <hr />
      <div className="max-w-screen-xl mx-auto pt-20 pb-20 grid grid-cols-1 md:grid-cols-3 justify-center align-middle">
        <div className="grid grid-rows-1 justify-center align-middle md:max-w-sm">
          <div className="flex align-middle mb-5 gap-4 text-xl">
            <div>
              <img src="../../../../public/ic_liquidity.505b3f30.svg" alt="" />
            </div>
            <div className="mt-1">
              <h2>Reduce Liquidation Risks</h2>
            </div>
          </div>
          <div className="text-lg">
            <p>
              An aggregate of high-quality price feeds determine when
              liquidations occur. This keeps positions safe from temporary
              wicks.
            </p>
          </div>
        </div>
        <div className="grid grid-rows-1 justify-center align-middle md:max-w-sm">
          <div className="flex align-middle mb-5 gap-4 text-xl">
            <div>
              <img src="../../../../public/ic_cost.b4a729d3.svg" alt="" />
            </div>
            <div className="mt-1">
              <h2>Save on Costs</h2>
            </div>
          </div>
          <div className="text-lg">
            <p>
              {" "}
              Enter and exit positions with minimal spread and zero price
              impact. Get the optimal price without incurring additional costs.
            </p>
          </div>
        </div>
        <div className="grid grid-rows-1 justify-center align-middle md:max-w-sm">
          <div className="flex align-middle mb-5 gap-4 text-xl">
            <div>
              <img
                src="../../../../public/ic_simpleswaps.2005009f.svg"
                alt=""
              />
            </div>
            <div className="mt-1">
              <h2>Simple Swaps</h2>
            </div>
          </div>
          <div className="text-lg">
            <p>
              Open positions through a simple swap interface. Conveniently swap
              from any supported asset into the position of your choice.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
