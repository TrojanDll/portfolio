export interface IStatsDTO {
  createdAt: string;
  level: string;
  coins: string;
  id: string;
}

export interface IStats {
  level: string | null;
  coins: string | null;
}

export type IEditStatsDTO = Partial<IStats>;
