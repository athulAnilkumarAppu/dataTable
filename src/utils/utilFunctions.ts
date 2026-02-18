import { DataRecord, FilterOptions, SortConfig } from "../models/Interfaces";

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
) {
  let timer: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

export const filterData = (
  data: DataRecord[],
  { search, categories, statuses }: FilterOptions,
) => {
  return data.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.status.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      categories.length === 0 || categories.includes(item.category);

    const matchesStatus =
      statuses.length === 0 || statuses.includes(item.status);

    return matchesSearch && matchesCategory && matchesStatus;
  });
};

export const sortData = (data: DataRecord[], sortConfig: SortConfig | null) => {
  if (!sortConfig) return data;

  const { key, direction } = sortConfig;

  return [...data].sort((a, b) => {
    if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
    if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
    return 0;
  });
};

export const paginateData = <T>(
  data: T[],
  currentPage: number,
  rowsPerPage: number,
) => {
  const start = (currentPage - 1) * rowsPerPage;
  return data.slice(start, start + rowsPerPage);
};
