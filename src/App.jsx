import { useState } from "react";


function App() {
  const [userAddress, setUserAdress] = useState("");

  return (
    <div className="w-full min-h-screen bg-white flex flex-col p-4">
      <div className="p-6 sticky top-0 z-10 flex flex-col justify-center items-center bg-white w-full">
        <h1 className="text-indigo-600 text-4xl font-semibold">Token Balances</h1>
        <p className="text-gray-800">Enter your wallet address to get your token balances on Ethereum Mainnet</p>
      </div>

      {/* input */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md space-y-6">
        <div>
          <label htmlFor="walletAdress" className="block text-sm/6 font-medium text-gray-900">
            Wallet address
          </label>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Enter your wallet address"
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm/6"
              value={userAddress}
              onChange={(e) => setUserAdress(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            type="button"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get Balance
          </button>
        </div>
      </div>

      {/* cards of balances */}
      <h1 className="text-indigo-600 mt-14 mb-3 text-xl font-medium text-center">List of Tokens</h1>
      <main className=" sm:mx-auto sm:w-full sm:max-w-xl space-y-6">
        <div className="rounded-md shadow-md border bg-white p-6 flex flex-col">
          <div className="relative flex items-center gap-x-4">
            <img alt="" src={``} className="size-10 rounded-full bg-gray-50" />
            <div className="text-sm/6">
              <p className="font-semibold flex text-gray-900">
                Address: <span className="text-gray-600">{"0x0000000000000000000000000000000000000000"}</span>
              </p>
              <div className="flex gap-4">
                <p className="font-semibold text-gray-900">
                  Name: <span className="text-gray-600">{"Lisk"}</span>
                </p>
                <p className="font-semibold text-gray-900">
                  Symbol: <span className="text-gray-600">{"LSK"}</span>
                </p>
                <p className="font-semibold text-gray-900">
                  Your balance: <span className="text-gray-600">{"5"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
