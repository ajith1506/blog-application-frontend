import { useQuery } from "@tanstack/react-query";

const useFetch = (url, queryKey) => {
  const token = localStorage.getItem("authToken");

  const { isPending, error, isError, data, refetch } = useQuery({
    queryKey: [queryKey],
    queryFn: async ({ signal }) => {
      try {
        const response = await fetch(
          `https://blog-application-backend-uqz2.onrender.com` + url,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
            signal,
          }
        );

        if (!response.ok) {
          const errorMessage = await response.json();
          throw new Error(errorMessage.message);
        }

        const responseData = await response.json();
        return responseData;
      } catch (error) {
        throw error;
      }
    },
  });

  return { data, isError, error, loading: isPending, refetch };
};

export default useFetch;
