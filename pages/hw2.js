import Image from "next/image";

export default function Hw2() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="min-h-screen flex">
        <div className="bg-gray-800 bg-slate-900 w-20 p-4 flex flex-col rounded-3xl items-center space-y-8 mt-4 mb-4 ml-4">
          <div className="text-slate-400 text-2xl">
            <Image 
              src="https://cdn-icons-png.flaticon.com/128/2676/2676047.png" 
              alt="Icon" 
              width={32} 
              height={32} 
            />
          </div>
          <nav className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center text-center">
              <Image 
                src="https://cdn-icons-png.flaticon.com/128/2930/2930014.png" 
                alt="Weather Icon" 
                className="mt-2 w-1/3" 
                width={32} 
                height={32} 
              />
              <span className="text-gray-400 text-sm">Weather</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image 
                src="https://cdn-icons-png.flaticon.com/128/54/54878.png" 
                alt="Cities Icon" 
                className="mt-2 w-1/3" 
                width={32} 
                height={32} 
              />
              <span className="text-gray-400 text-sm">Cities</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image 
                src="https://cdn-icons-png.flaticon.com/128/2319/2319179.png" 
                alt="Air Icon" 
                className="mt-4 w-1/3" 
                width={32} 
                height={32} 
              />
              <span className="text-gray-400 text-sm">Air</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image 
                src="https://static.thenounproject.com/png/7383436-200.png" 
                alt="Settings Icon" 
                className="mt-4 w-1/3" 
                width={32} 
                height={32} 
              />
              <span className="text-gray-400 text-sm">Settings</span>
            </div>
          </nav>
        </div>

        <div className="w-full h-screen flex flex-col items-center justify-start p-4 space-y-4">
          <div className="w-[98%] h-[96%] flex justify-between items-end">
            <div className="w-2/3 h-full rounded-3xl">
              <div className="w-full h-16 bg-slate-900 rounded-3xl flex items-center">
                <h1 className="text-white text-md ml-6">Search for cities</h1>
              </div>

              <div className="w-full h-80 flex items-center justify-end relative">
                <h1 className="absolute top-16 left-16 text-center">
                  <span className="text-4xl text-white font-semibold">Ulaanbaatar</span><br />
                </h1>
                <Image 
                  src="https://png.pngtree.com/png-vector/20230414/ourmid/pngtree-sun-orange-three-dimensional-illustration-png-image_6694186.png" 
                  alt="Sun Icon" 
                  className="h-2/3 mr-16" 
                  width={64} 
                  height={64} 
                />
                <h1 className="text-6xl absolute left-16 bottom-16 font-bold text-white">16°</h1>
              </div>

              <div className="w-full h-64 bg-slate-900 rounded-3xl flex items-end justify-center relative">
                <h1 className="text-slate-400 absolute left-8 font-semibold top-4">TODAY'S FORECAST</h1>
                <div className="w-11/12 h-2/3 mb-8 grid grid-cols-6">
                  <div className="flex flex-col items-center">
                    <h1 className="text-slate-400 font-semibold">6:00 AM</h1>
                    <Image 
                      src="https://cdn-icons-png.flaticon.com/128/1163/1163624.png" 
                      alt="Weather Icon" 
                      className="mt-4 w-2/3" 
                      width={32} 
                      height={32} 
                    />
                    <h1 className="text-white font-bold text-3xl">2°</h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-slate-400 font-semibold">9:00 AM</h1>
                    <Image 
                      src="https://cdn-icons-png.flaticon.com/128/1163/1163624.png" 
                      alt="Weather Icon" 
                      className="mt-4 w-2/3" 
                      width={32} 
                      height={32} 
                    />
                    <h1 className="text-white font-bold text-3xl">10°</h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-slate-400 font-semibold">12:00 PM</h1>
                    <Image 
                      src="https://png.pngtree.com/png-vector/20230414/ourmid/pngtree-sun-orange-three-dimensional-illustration-png-image_6694186.png" 
                      alt="Sun Icon" 
                      className="mb-2 mt-2 w-2/3" 
                      width={64} 
                      height={64} 
                    />
                    <h1 className="text-white font-bold text-3xl">14°</h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-slate-400 font-semibold">3:00 PM</h1>
                    <Image 
                      src="https://png.pngtree.com/png-vector/20230414/ourmid/pngtree-sun-orange-three-dimensional-illustration-png-image_6694186.png" 
                      alt="Sun Icon" 
                      className="mt-2 mb-2 w-2/3" 
                      width={64} 
                      height={64} 
                    />
                    <h1 className="text-white font-bold text-3xl">16°</h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-slate-400 font-semibold">6:00 PM</h1>
                    <Image 
                      src="https://png.pngtree.com/png-vector/20230414/ourmid/pngtree-sun-orange-three-dimensional-illustration-png-image_6694186.png" 
                      alt="Sun Icon" 
                      className="mt-2 mb-2 w-2/3" 
                      width={64} 
                      height={64} 
                    />
                    <h1 className="text-white font-bold text-3xl">12°</h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-slate-400 font-semibold">9:00 PM</h1>
                    <Image 
                      src="https://cdn-icons-png.flaticon.com/128/1163/1163624.png" 
                      alt="Weather Icon" 
                      className="mt-4 w-2/3" 
                      width={32} 
                      height={32} 
                    />
                    <h1 className="text-white font-bold text-3xl">6°</h1>
                  </div>
                </div>
              </div>

              <div className="w-full h-60 bg-slate-900 rounded-3xl mt-4 relative flex flex-col justify-end">
                <h1 className="text-slate-400 absolute left-8 font-semibold top-4">AIR CONDITIONS</h1>
                <div className="bg-blue-500 text-white rounded-full h-8 w-24 items-center flex justify-center absolute top-4 right-8">See More</div>
                <div className="w-full h-2/3 grid grid-cols-4">
                  <div className="relative flex flex-col items-center justify-center">
                    <h1 className="text-slate-400 left-8 font-semibold top-4 text-md">Real Feel</h1>
                    <h1 className="text-white font-bold text-3xl mb-8">6°</h1>
                  </div>
                  <div className="relative flex flex-col items-center justify-center">
                    <h1 className="text-slate-400 left-8 font-semibold top-4 text-md">Wind</h1>
                    <h1 className="text-white font-bold text-3xl mb-8">5.4 km/h</h1>
                  </div>
                  <div className="relative flex flex-col items-center justify-center">
                    <h1 className="text-slate-400 left-8 font-semibold top-4 text-md">Chance of Rain</h1>
                    <h1 className="text-white font-bold text-3xl mb-8">0%</h1>
                  </div>
                  <div className="relative flex flex-col items-center justify-center">
                    <h1 className="text-slate-400 left-8 font-semibold top-4 text-md">UV Index</h1>
                    <h1 className="text-white font-bold text-3xl mb-8">3</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/4 h-[93%] bg-slate-900 rounded-3xl relative flex items-end">
              <h1 className="absolute left-8 top-4 text-slate-400 font-semibold">7-DAY FORECAST</h1>
              <div className="w-full h-[90%]">
                <div className="w-full h-[12.8%] flex items-center justify-evenly">
                  <h1 className="text-slate-400 font-semibold">Today</h1>
                  <div className="w-1/3 h-full flex items-center justify-evenly">
                    <Image 
                      src="https://png.pngtree.com/png-vector/20230414/ourmid/pngtree-sun-orange-three-dimensional-illustration-png-image_6694186.png" 
                      alt="Sun Icon" 
                      className="w-12" 
                      width={48} 
                      height={48} 
                    />
                    <h1 className="font-bold text-white">Sunny</h1>
                  </div>
                  <h1 className="font-bold text-slate-400"><span className="text-white">16</span>/2</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}