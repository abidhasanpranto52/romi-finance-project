import './Banner.css'
const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-20 pb-20">
      <h1>Decentralized <br /> Perpetual Exchange</h1>
      <h3>
        Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x
        leverage directly from your wallet
      </h3>
      <div className='baton'>
        <button className="btn btn-success btn-sm rounded text-white">Lunch Exchange</button>
      </div>

      <div className='grid grid-cols-1 mt-12 md:grid-cols-3 gap-28'>
        <div className='box rounded flex gap-8 justify-center align-middle'>
            <div>
                <img src="../../../../public/ic_trading.2c53815a.svg" alt="" />
            </div>
            <div>
                <p className='text-2xl'>Total Trading Volume</p>
                <p className='text-3xl'>$ 0</p>
            </div>
        </div>
        <div className='box rounded flex gap-8 justify-center align-middle'>
            <div>
                <img className='align-middle' src="../../../../public/ic_stats.f0a18011.svg" alt="" />
            </div>
            <div>
                <p className='text-2xl'>Open Interest</p>
                <p className='text-3xl'>$ 0</p>
            </div>
        </div>
        <div className='box rounded flex gap-8 justify-center align-middle'>
            <div>
                <img src="../../../../public/ic_totaluser.ae09b310.svg" alt="" />
            </div>
            <div>
                <p className='text-2xl'>Total Users</p>
                <p className='text-3xl'>0</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
