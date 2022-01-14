import axios, { AxiosResponse } from "axios";
import CryptoJS from "crypto-js";
import { useCallback, useEffect, useState } from "react";
import { ItemProps } from "../modules/ComicsPage";

const PUBLIC_KEY = `${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`;
const PRIVATE_KEY = `${process.env.REACT_APP_MARVEL_PRIVATE_KEY}`;

const ts = new Date().getTime();
const hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

export default (
  url: string
): [
  { isLoading: boolean; response: ItemProps[]; error: any },
  (options?: {}) => void
] => {
  const baseURL = "https://gateway.marvel.com/v1/public/";
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<ItemProps[]>([]);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    let skipGetResponseAfterDestroy = false;

    const requestOptions = {
      ...options,
      ...{
        params: {
          apikey: `${PUBLIC_KEY}`,
          ts: ts,
          hash: hash,
        },
      },
    };

    if (!isLoading) return;
    axios(baseURL + url, requestOptions)
      .then(({ data }: AxiosResponse) => {
        if (!skipGetResponseAfterDestroy) {
          setResponse(data.data.results);
          // setResponse(data.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        if (!skipGetResponseAfterDestroy) {
          setError(error.response.data);
          setIsLoading(false);
        }
      });

    return () => {
      skipGetResponseAfterDestroy = true;
    };
  }, [isLoading, options, url]);

  return [{ isLoading, response, error }, doFetch];
};
