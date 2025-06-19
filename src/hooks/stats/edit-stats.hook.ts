import { statsService } from "@/services/stats.service";
import { IEditStatsDTO, IStats } from "@/types/stats.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

export function useEditStats() {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess, isError, data } = useMutation({
    mutationKey: ["stats-edit"],
    mutationFn: (data: IEditStatsDTO) => statsService.editStats(data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["stats-edit"],
      });
      queryClient.clear();
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        console.log(error.response);
      }
    },
  });

  return {
    mutate,
    data: data?.data[0],
    isPending,
    isSuccess,
    isError,
  };
}
