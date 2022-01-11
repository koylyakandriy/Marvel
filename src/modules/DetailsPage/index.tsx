import { useEffect, VFC } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Detail from "../../components/Detail";
import Loader from "../../components/Loader";

const DetailsPage: VFC = () => {
  const { id }: { id: string } = useParams();
  const apiUrl: string = `comics/${id}`;
  const [{ response, isLoading }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && response && <Detail item={response?.results[0]} />}
    </>
  );
};

export default DetailsPage;
