const Earn = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-10 mb-10 earn">
      <div>
        <h2 className="text-4xl font-bold">Earn</h2>
        <p className="text-lg">Stake $Romi and RLP to earn rewards.</p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* 1st box */}
          <div className="border rounded p-1 bg-black">
            <h4 className="text-2xl p-2">$Romi</h4>
            <hr className="mb-2" />
            <div className="mt-3 mb-3">
              <div className="flex justify-between">
                <p className="text-lg ml-1">Price</p>
                <h5>$0.00</h5>
              </div>
              <div className="flex justify-between">
                <p className="text-lg ml-1">Wallet</p>
                <h5>...$ROMI ($...)</h5>
              </div>
              <div className="flex justify-between">
                <p className="text-lg ml-1">Staked</p>
                <h5>...$ROMI ($...)</h5>
              </div>
            </div>
            <hr />
            <div className="mt-3 mb-3">
              <div className="flex justify-between">
                <p className="text-lg ml-1">APR</p>
                <h5>...%</h5>
              </div>
              <div className="flex justify-between">
                <p className="text-lg ml-1">Rewards</p>
                <h5>$...</h5>
              </div>
              <div className="flex justify-between">
                <p className="text-lg ml-1">Multiplier Points APR</p>
                <h5>100.00%</h5>
              </div>
              <div className="flex justify-between">
                <p className="text-lg ml-1">Boost Percentage</p>
                <h5>...%</h5>
              </div>
            </div>
            <hr />
            <div className="mt-3 mb-3">
              <div className="flex justify-between">
                <p className="text-lg ml-1">Total Staked</p>
                <h5>0 $ZOMI ($...)</h5>
              </div>
              <div className="flex justify-between">
                <p className="text-lg ml-1">Total Supply</p>
                <h5>10,000 $ZOMI ($10)</h5>
              </div>
            </div>
            <hr />
            <div className="mt-3 mb-3 ml-4">
              <button className="btn btn-sm rounded  btn-success">
                Buy $ROMI
              </button>
            </div>
          </div>

          {/* 2nd Box */}
          <div className="border rounded p-1 bg-black">
            <h4 className="text-2xl p-2">Total Rewards</h4>
            <hr className="mb-2" />
            <div className="flex justify-between">
              <p className="text-lg ml-1">Price</p>
              <h5>$0.00</h5>
            </div>
            <div className="flex justify-between">
              <p className="text-lg ml-1">Wallet</p>
              <h5>...$ROMI ($...)</h5>
            </div>
            <div className="flex justify-between">
              <p className="text-lg ml-1">Staked</p>
              <h5>...$ROMI ($...)</h5>
            </div>
            <div className="flex justify-between">
              <p className="text-lg ml-1">APR</p>
              <h5>...%</h5>
            </div>
            <div className="flex justify-between">
              <p className="text-lg ml-1">Rewards</p>
              <h5>$...</h5>
            </div>
            <div className="flex justify-between">
              <p className="text-lg ml-1">Multiplier Points APR</p>
              <h5>100.00%</h5>
            </div>
            <hr className="lg:mt-36"/>
            <div className="mt-3 mb-3 ml-4">
              <button className="btn btn-sm bottom-0 rounded  btn-success">
                Connect Wallet
              </button>
            </div>
          </div>

          {/* 3rd Box */}
          <div className="border rounded p-1 bg-black">
            <h4 className="text-2xl p-2">$ZLP (Ethereum)</h4>
            <hr className="mb-2" />
            <div className="mt-3 mb-3">
              <div className="flex justify-between">
                <p className="text-lg ml-1">Price</p>
                <h5>$...</h5>
              </div>
              <div className="flex justify-between">
                <p className="text-lg ml-1">Wallet</p>
                <h5>...$RLP ($...)</h5>
              </div>
              <div className="flex justify-between">
                <p className="text-lg ml-1">Staked</p>
                <h5>...$RLP ($...)</h5>
              </div>
            </div>
            <hr />
            <div className="mt-3 mb-3">
              <div className="flex justify-between">
                <p className="text-lg ml-1">APR</p>
                <h5>...%</h5>
              </div>
              <div className="flex justify-between">
                <p className="text-lg ml-1">Rewards</p>
                <h5>$...</h5>
              </div>
            </div>
            <hr />
            <div className="mt-3 mb-3">
              <div className="flex justify-between">
                <p className="text-lg ml-1">Total Staked</p>
                <h5>...$RLP ($...)</h5>
              </div>
              <div className="flex justify-between">
                <p className="text-lg ml-1">Total Supply</p>
                <h5>...$RLP ($10)</h5>
              </div>
            </div>
            <hr />
            <div className="mt-3 mb-3 ml-4 flex gap-3">
              <button className="btn btn-sm rounded  btn-success">
                Buy $RLP
              </button>
              <button className="btn btn-sm rounded  btn-success">
                Sell $RLp
              </button>
            </div>
          </div>

          {/* 4th Box */}
          <div className="border rounded p-1 bg-black">
            <h4 className="text-2xl p-2">Escrowed $Romi</h4>
            <hr className="mb-2" />
            <div className="mt-3 mb-3">
              <div className="flex justify-between">
                <p className="text-lg ml-1">Price</p>
                <h5>$0.00</h5>
              </div>
              <div className="flex justify-between">
                <p className="text-lg ml-1">Wallet</p>
                <h5>...esROMI ($...)</h5>
              </div>
              <div className="flex justify-between">
                <p className="text-lg ml-1">Staked</p>
                <h5>...esROMI ($...)</h5>
              </div>
            </div>
            <hr />
            <div className="mt-3 mb-3">
              <div className="flex justify-between">
                <p className="text-lg ml-1">APR</p>
                <h5>...%</h5>
              </div>
              <div className="flex justify-between">
                <p className="text-lg ml-1">Multiplier Points APR</p>
                <h5>100.00%</h5>
              </div>
            </div>
            <hr />
            <div className="mt-3 mb-3">
              <div className="flex justify-between">
                <p className="text-lg ml-1">Total Staked</p>
                <h5>0 $ZOMI ($...)</h5>
              </div>
              <div className="flex justify-between">
                <p className="text-lg ml-1">Total Supply</p>
                <h5>10,000 $ZOMI ($10)</h5>
              </div>
            </div>
            <hr />
            <div className="mt-3 mb-3 ml-4">
              <button className="btn btn-sm rounded  btn-success">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earn;
