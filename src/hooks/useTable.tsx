import { useMemo, useState } from "react";
import { DataRecord, SortConfig } from "../models/Interfaces";
import { filterData, sortData, paginateData } from "../utils/utilFunctions";

export const useTable = (data: DataRecord[]) => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [statuses, setStatuses] = useState<string[]>([]);
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const processedData = useMemo(() => {
    let filtered = filterData(data, { search, categories, statuses });
    let sorted = sortData(filtered, sortConfig);
    return sorted;
  }, [data, search, categories, statuses, sortConfig]);

  const paginatedData = useMemo(() => {
    return paginateData(processedData, currentPage, rowsPerPage);
  }, [processedData, currentPage]);

  return {
    search,
    setSearch,
    categories,
    setCategories,
    statuses,
    setStatuses,
    sortConfig,
    setSortConfig,
    currentPage,
    setCurrentPage,
    rowsPerPage,
    paginatedData,
    totalItems: processedData.length,
  };
};
