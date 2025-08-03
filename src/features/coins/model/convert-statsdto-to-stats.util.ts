import { IStats, IStatsDTO } from "@/shared/types/stats.types";

export function convertStatsDtoToStats(
  statsDTO: IStatsDTO | undefined
): IStats | undefined {
  let stats: IStats;

  if (statsDTO) {
    stats = {
      coins: statsDTO.coins ? statsDTO.coins : null,
      level: statsDTO.level ? statsDTO.level : null,
    };
  } else {
    return undefined;
  }

  return stats;
}
