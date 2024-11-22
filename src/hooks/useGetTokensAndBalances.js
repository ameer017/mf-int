import { useEffect, useMemo, useState } from "react";
import tokenList from "../data/tokenlist.json";
import { Contract, Interface, isAddress, ZeroAddress } from "ethers";
import erc20ABI from "../ABI/erc20.json";
import multiCall2ABI from "../ABI/multicall2.json";
import { JsonRpcProvider } from "ethers";

const mainnetTokens = tokenList.filter((t) => t.chainId === 1);
const useGetTokensAndBalances = (address) => {
  const [tokens, setTokens] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const tokenAddresses = useMemo(() => mainnetTokens.map((t) => t.address), []);

  const intface = useMemo(() => new Interface(erc20ABI), []);

  const userAddress = useMemo(
    () => (isAddress(address) ? address : ZeroAddress),
    [address]
  );

  const calls = useMemo(
    () =>
      tokenAddresses.map((address) => ({
        target: address,
        callData: intface.encodeFunctionData("balanceOf", [userAddress]),
      })),
    [intface, tokenAddresses, userAddress]
  );

  useEffect(() => {
    (async () => {
      const provider = new JsonRpcProvider(
        import.meta.env.VITE_MAINNET_RPC_URL
      );

      const multiCallContract = new Contract(
        import.meta.env.VITE_MULTICALL2_ADDRESS,
        multiCall2ABI,
        provider
      );

      setIsFetching(true);

      // eslint-disable-next-line no-unused-vars
      const [_, balancesResult] = await multiCallContract.aggregate.staticCall(
        calls
      );

      const decodedBalances = balancesResult.map((result) =>
        intface.decodeFunctionResult("balanceOf", result).toString()
      );

      const newTokensObj = mainnetTokens.map((token, index) => ({
        ...token,
        balance: decodedBalances[index],
      }));

      setTokens(newTokensObj);
      setIsFetching(false);
    })();
  }, [calls, intface]);

  return { tokens, userAddress, isFetching };
};

export default useGetTokensAndBalances;
