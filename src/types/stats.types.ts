export interface IStatsDTO {
  createdAt: string;
  level: string;
  coins: string;
  id: string;
}

export interface IStats {
  level: string | undefined;
  coins: string | undefined;
}

export type IEditStatsDTO = Partial<IStats>;
