import { useEffect, VFC } from "react";
import Loader from "../../components/Loader";
import CardItem from "../../components/Card";
import useFetch from "../../hooks/useFetch";

type ImageType = {
  path: string;
  extension: string;
};

export type ItemProps = {
  id: string;
  title: string;
  prices: [{ price: string }];
  description: string;
  images: [ImageType];
  thumbnail: ImageType;
};

export interface IComics {
  item: ItemProps;
}

const ComicsPage: VFC = () => {
  const apiUrl = "comics";
  const [{ response, isLoading }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading &&
        response.results.map((item) => <CardItem key={item.id} item={item} />)}
    </>
  );
};
export default ComicsPage;
