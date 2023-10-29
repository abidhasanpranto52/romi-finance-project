import { FaEthereum } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-10">
      <div>
        <h2 className="flex align-middle text-3xl font-bold gap-1">
          Stats{" "}
          <span className="mt-2">
            <FaEthereum className="bg-[#4d5ea0] text-2xl rounded-full" />
          </span>
        </h2>
        <p className="text-lg">
          Ethereum Total Stats start from 06 Jan 2022. <br />
          For detailed stats:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded p-1 bg-black">
            <h4 className="text-2xl p-2">Overview</h4>
            <hr className="mb-2" />
            <div className="flex justify-between">
              <p>Aum</p>
              <h5>$34</h5>
            </div>
            <div className="flex justify-between">
              <p>$RLP Pool</p>
              <h5>$34</h5>
            </div>
            <div className="flex justify-between">
              <p>24th Volume</p>
              <h5>$0</h5>
            </div>
            <div className="flex justify-between">
              <p>Long Positions</p>
              <h5>$0</h5>
            </div>
            <div className="flex justify-between">
              <p>Short Positions</p>
              <h5>$0</h5>
            </div>
          </div>
          <div className="border rounded p-1 bg-black">
            <h4 className="text-2xl p-2">Total stats</h4>
            <hr className="mb-2" />
            <div className="flex justify-between">
              <p>Total Fees</p>
              <h5>$0</h5>
            </div>
            <div className="flex justify-between">
              <p>Total Volume</p>
              <h5>$0</h5>
            </div>
            <div className="flex justify-between">
              <p>Floor Price Fund</p>
              <h5>$626,326</h5>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="flex align-middle text-3xl font-bold mt-8 gap-1">
          Tokens{" "}
          <span className="mt-2">
            <FaEthereum className="bg-[#4d5ea0] text-2xl rounded-full" />
          </span>
        </h2>
        <p className="text-lg">Platform and $RLP index tokens.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="border rounded p-1 bg-black">
            <div className="flex gap-3 m-2">
              <div className="w-[65%]">
                <div className="flex">
                  <img
                    className="w-10"
                    src="../../../public/download.png"
                    alt=""
                  />
                  <h4 className="text-2xl p-2">$Romi</h4>
                </div>
                <hr className="mb-2" />
                <div className="flex justify-between">
                  <p>Price</p>
                  <h5>$0.00</h5>
                </div>
                <div className="flex justify-between">
                  <p>Supply</p>
                  <h5>10,000 $Romi</h5>
                </div>
                <div className="flex justify-between">
                  <p>Total Staked</p>
                  <h5>$0</h5>
                </div>
                <div className="flex justify-between">
                  <p>Market Cap</p>
                  <h5>$10</h5>
                </div>
              </div>
              <div className="w-[35%] flex justify-center">
                <div className="border-8 h-[200px] w-[200px] border-t-violet-700 border-b-sky-400 border-r-sky-400 border-l-sky-400 circle rounded-[50%]">
                  <h2 className="flex font-bold justify-center align-middle">
                    Distribution
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded p-1 bg-black">
            <div className="flex gap-3 m-2">
              <div className="w-[65%]">
                <div className="flex">
                  <img className="w-10" src="../../../public/ZLP.png" alt="" />
                  <h4 className="text-2xl p-2">$ RLP</h4>
                </div>
                <hr className="mb-2" />
                <div className="flex justify-between">
                  <p>Price</p>
                  <h5>$1.137</h5>
                </div>
                <div className="flex justify-between">
                  <p>Supply</p>
                  <h5>29 $RLP</h5>
                </div>
                <div className="flex justify-between">
                  <p>Total Staked</p>
                  <h5>$34</h5>
                </div>
                <div className="flex justify-between">
                  <p>Market Cap</p>
                  <h5>$34</h5>
                </div>
                <div className="flex justify-between">
                  <p>Stablecoin Percentage</p>
                  <h5>49.50%</h5>
                </div>
              </div>
              <div className="w-[35%] flex justify-center">
                <div className="border-8 h-[200px] w-[200px] border-violet-700  circle  rounded-[50%]">
                  <h2 className="flex font-bold justify-center align-middle">
                    $RLP Pool
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded p-1 mt-8 bg-black">
        <h4 className="text-base p-2">$RLP Index CompositionAvalanche </h4>
        <hr className="mb-2" />
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th className="text-white font-thin text-base text-left">
                  Token
                </th>
                <th className="text-white font-thin text-base">Price</th>
                <th className="text-white font-thin text-base">Pool</th>
                <th className="text-white font-thin text-base">WEIGHT</th>
                <th className="text-white font-thin text-base">UTILIZATION</th>
              </tr>
            </thead>
            <tbody className="border-none">
              <tr className="text-center">
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="../../../public/ic_eth_40.5e255508.svg"
                          alt="Ethereum"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex align-middle content-center TName" style={{"verticalAlign": "baseline"}}>
                        <div className="text-lg mt-1">Ethereum</div>{" "}
                        <details className="dropdown">
                          <summary className="m-1 btn btn-xs buton"><MdKeyboardArrowDown className="text-white text-2xl"/></summary>
                          <ul className="p-2 shadow menu dropdown-content z-[1] bg-slate-900 rounded w-52">
                            <li className="hover:bg-gray-800">
                              <a className="text-gray-500 font-semibold hover:text-white">Open in Coingecko</a>
                            </li>
                            <li className="hover:bg-gray-800">
                              <a className="text-gray-500 font-semibold hover:text-white">Open In Explorer</a>
                            </li>
                          </ul>
                        </details>
                      </div>
                      <div className="text-left text-sm opacity-50">ETH</div>
                    </div>
                  </div>
                </td>
                <td>$1,773.14</td>
                <td>$19</td>
                <td>50.49% / 25.00%</td>
                <td>0.00%</td>
              </tr>
              <tr className="text-center">
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="../../../public/ic_wbtc_40.8330ef8d.svg"
                          alt="WBTC"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex align-middle content-center TName" style={{"verticalAlign": "baseline"}}>
                        <div className="text-lg mt-1">Wrapped Bitcoin</div>{" "}
                        <details className="dropdown">
                          <summary className="m-1 btn btn-xs buton"><MdKeyboardArrowDown className="text-white text-2xl"/></summary>
                          <ul className="p-2 shadow menu dropdown-content z-[1] bg-slate-900 rounded w-52">
                            <li className="hover:bg-gray-800">
                              <a className="text-gray-500 font-semibold hover:text-white">Open in Coingecko</a>
                            </li>
                            <li className="hover:bg-gray-800">
                              <a className="text-gray-500 font-semibold hover:text-white">Open In Explorer</a>
                            </li>
                          </ul>
                        </details>
                      </div>
                      <div className="text-left text-sm opacity-50">WBTC</div>
                    </div>
                  </div>
                </td>
                <td>$34,036.35</td>
                <td>$0</td>
                <td>0.00% / 25.00%</td>
                <td>0.00%</td>
              </tr>
              <tr className="text-center">
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="../../../public/ic_ape_40.53ac41f3.svg"
                          alt="APE"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex align-middle content-center TName" style={{"verticalAlign": "baseline"}}>
                        <div className="text-lg mt-1">ApeCoin</div>{" "}
                        <details className="dropdown">
                          <summary className="m-1 btn btn-xs buton"><MdKeyboardArrowDown className="text-white text-2xl"/></summary>
                          <ul className="p-2 shadow menu dropdown-content z-[1] bg-slate-900 rounded w-52">
                            <li className="hover:bg-gray-800">
                              <a className="text-gray-500 font-semibold hover:text-white">Open in Coingecko</a>
                            </li>
                            <li className="hover:bg-gray-800">
                              <a className="text-gray-500 font-semibold hover:text-white">Open In Explorer</a>
                            </li>
                          </ul>
                        </details>
                      </div>
                      <div className="text-left text-sm opacity-50">APE</div>
                    </div>
                  </div>
                </td>
                <td>$1,.34</td>
                <td>$0</td>
                <td>0.00% / 25.00%</td>
                <td>0.00%</td>
              </tr>
              <tr className="text-center">
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="../../../public/ic_usdc_40.27f415ba.svg"
                          alt="USDC"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex align-middle content-center TName" style={{"verticalAlign": "baseline"}}>
                        <div className="text-lg mt-1">USD Coin</div>{" "}
                        <details className="dropdown">
                          <summary className="m-1 btn btn-xs buton"><MdKeyboardArrowDown className="text-white text-2xl"/></summary>
                          <ul className="p-2 shadow menu dropdown-content z-[1] bg-slate-900 rounded w-52">
                            <li className="hover:bg-gray-800">
                              <a className="text-gray-500 font-semibold hover:text-white">Open in Coingecko</a>
                            </li>
                            <li className="hover:bg-gray-800">
                              <a className="text-gray-500 font-semibold hover:text-white">Open In Explorer</a>
                            </li>
                          </ul>
                        </details>
                      </div>
                      <div className="text-left text-sm opacity-50">USDC</div>
                    </div>
                  </div>
                </td>
                <td>$1</td>
                <td>$14</td>
                <td>49.50% / 25.00%</td>
                <td>0.00%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
