import { useQuery } from "react-query";
import axios from "axios";

export const useFetchTodo = (id, token) => {
  const { data, isError, error, isLoading } = useQuery("todo", () => {
    return axios.get(`http://localhost:8080/api/todo/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  });
  return { data, isError, error, isLoading };
};
