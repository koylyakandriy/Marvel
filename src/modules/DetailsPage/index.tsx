import { useEffect, VFC } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Detail from "../../components/Detail";
import Loader from "../../components/Loader";

const DetailsPage: VFC = () => {
  const { id }: { id: string } = useParams();
  const apiUrl = `comics/${id}`;
  const [{ response, isLoading }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && response.length > 0 && <Detail item={response[0]} />}
    </>
  );
};

export default DetailsPage;
