import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { useWallet } from "./useWallet";
import { CandyMachine } from "@metaplex-foundation/js";
import { getCandyMachine } from "../utils/candyMachine";

export const useCandyMachine = () => {
  const [cm, setCm] = useState<CandyMachine>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { publicKey } = useWallet();

  const connection = useConnection();

  useEffect(() => {
    const fetchNFTs = async () => {
      setLoading(true);
      setError(false);

      try {
        const cm = await getCandyMachine(
          "8Z1r48UAvmghrYP23hCr18tN7cRhcEEafSAWnnWpms7K"
        );
        setCm(cm);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };

    console.log("fetching nfts");
    fetchNFTs();
  }, [connection, publicKey]);

  return { cm, loading, error };
};