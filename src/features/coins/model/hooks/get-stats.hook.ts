import { statsService } from "@/features/coins/api/stats.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { convertStatsDtoToStats } from "../convert-statsdto-to-stats.util";

export function useGetStats() {
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

  return {
    mutate,
    data: convertStatsDtoToStats(data?.data[0]),
    isPending,
    isSuccess,
    isError,
  };
}
