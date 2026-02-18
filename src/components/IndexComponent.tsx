import { useEffect, useState } from "react";
import { DataRecord } from "../models/Interfaces";
import { mockData } from "../dummyData/DummyData";
import { useTable } from "../hooks/useTable";
import Pagination from "./pagination/Pagination";
import DataTable from "./dataTable/DataTable";
import SearchBar from "./searchBar/SearchBar";
import Filters from "./filter/Filter";
import Loader from "./loaders/Loader";

const IndexComponent = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataRecord[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  const {
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
    totalItems,
  } = useTable(data);

  const handleSort = (key: keyof DataRecord) => {
    let direction: "asc" | "desc" = "asc";

    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Data Table</h1>

      <SearchBar
        value={search}
        onSearchChange={(value) => {
          setCurrentPage(1);
          setSearch(value);
        }}
      />

      <Filters
        selectedCategories={categories}
        selectedStatuses={statuses}
        onCategoryChange={(cats) => {
          setCurrentPage(1);
          setCategories(cats);
        }}
        onStatusChange={(stats) => {
          setCurrentPage(1);
          setStatuses(stats);
        }}
      />

      {loading ? (
        <Loader />
      ) : paginatedData?.length > 0 ? (
        <DataTable data={paginatedData} onSort={handleSort} />
      ) : (
        <div className="no-data">
          <h4>No Data</h4>
        </div>
      )}

      {paginatedData?.length > 0 ? (
        <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          rowsPerPage={rowsPerPage}
          onPageChange={setCurrentPage}
        />
      ) : null}
    </div>
  );
};

export default IndexComponent;
