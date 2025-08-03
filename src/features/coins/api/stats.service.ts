import { axiosClassic } from "@/shared/api/interceptors";
import { IEditStatsDTO, IStatsDTO } from "@/shared/types/stats.types";

class StatsService {
  async getStats() {
    const response = await axiosClassic.get<IStatsDTO[]>("/stats");
    console.log(response);
    return response;
  }

  async editStats(data: IEditStatsDTO) {
    const response = await axiosClassic.put<IStatsDTO[]>("/stats/1", data);
    return response;
  }
}

export const statsService = new StatsService();
