import { useCallback, useMemo, useState } from "react";
import { token as tokenList } from "../data/tokenlist.json";
import { Interface } from "ethers";

const mainnetTokens = tokenList.filter((t) => t.chainId === 1);
const useGetTokensAndBalances = () => {
  const [tokens, setTokens] = useState([]);

  const tokenAddresses = useMemo(() => mainnetTokens.map((t) => t.address), []);

  const intface = useMemo(() => new Interface());

  return useCallback(async (address) => {});
};

export default useGetTokensAndBalances;
