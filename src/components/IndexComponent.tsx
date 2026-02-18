import { useEffect, useState } from "react";
import { DataRecord } from "../models/Interfaces";
import { mockData } from "../dummyData/DummyData";
import { useTable } from "../hooks/useTable";
import Pagination from "./pagination/Pagination";
import DataTable from "./dataTable/DataTable";
import SearchBar from "./searchBar/SearchBar";
import Filters from "./filter/Filter";


const IndexComponent = ()=> {
 const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataRecord[]>([]);

  // simulate API delay
  useEffect(() => {
    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 800);
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
    let direction: 'asc' | 'desc' = 'asc';

    if (sortConfig?.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    setSortConfig({ key, direction });
  };

  if (loading) return <Loader />;

  return (
    <div >
      <h1>Searchable Paginated Data Table</h1>

    
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

     
      <DataTable data={paginatedData} onSort={handleSort} />

      
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        rowsPerPage={rowsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );

   
}

export default IndexComponent