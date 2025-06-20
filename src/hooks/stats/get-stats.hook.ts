import { statsService } from "@/services/stats.service";
import { IStats } from "@/types/stats.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

export function useGetStats() {
  // const [formatedData, setFormatedData] = useState<IStats>();
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess, isError, data } = useMutation({
    mutationKey: ["stats-info"],
    mutationFn: () => statsService.getStats(),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["stats-info"],
      });
      queryClient.clear();
      console.log(data);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        console.log(error.response);
      }
    },
  });

  // useEffect(() => {
  //   console.log("data?.data[0].coins");
  //   console.log(data?.data[0].coins);

  //   if (data) {
  //     setFormatedData({
  //       coins: data?.data[0].coins,
  //       level: data?.data[0].level,
  //     });
  //   }
  // }, [isPending, data]);

  return {
    mutate,
    data: data?.data[0],
    isPending,
    isSuccess,
    isError,
  };
}
