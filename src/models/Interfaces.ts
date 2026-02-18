export interface DataRecord {
  id: number;
  name: string;
  category: string;
  status: "Active" | "Inactive" | "Pending";
  createdAt: string;
}

export type SortDirection = "asc" | "desc";

export interface SortConfig {
  key: keyof DataRecord;
  direction: SortDirection;
}

export interface FilterOptions {
  search: string;
  categories: string[];
  statuses: string[];
}

export interface DataTablePropsType {
  data: DataRecord[];
  onSort: (key: keyof DataRecord) => void;
}

export interface PaginationPropsType {
  currentPage: number;
  totalItems: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
}

export interface SearchbarPropType {
  value: string;
  onSearchChange: (value: string) => void;
}

export interface FilterPropType {
  selectedCategories: string[];
  selectedStatuses: string[];
  onCategoryChange: (categories: string[]) => void;
  onStatusChange: (statuses: string[]) => void;
}
