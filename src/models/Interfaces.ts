export interface DataRecord {
  id: number;
  name: string;
  category: string;
  status: 'Active' | 'Inactive' | 'Pending';
  createdAt: string;
}

export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  key: keyof DataRecord;
  direction: SortDirection;
}

export interface FilterOptions {
  search: string;
  categories: string[];
  statuses: string[];
}