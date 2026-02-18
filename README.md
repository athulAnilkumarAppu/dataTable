# Searchable + Paginated Data Table

A high-performance React + TypeScript data table with search, sorting, pagination, and multi-field filtering.

---

## 🚀 Tech Stack

- React
- TypeScript
- SCSS
- Custom Hooks
- Core JavaScript Array Methods (filter, sort, slice, map)
- Manual Debounce Implementation (No external libraries)

---

## 📌 Features

### ✅ Data Handling

- 500+ mock JSON records
- Strong TypeScript interfaces
- Client-side data processing

### ✅ Table Features

- Client-side pagination
- Windowed pagination with navigation arrows
- Multi-column sorting (Ascending / Descending)
- Real-time search across:
  - Name
  - Category
  - Status
- Multi-select filters:
  - Category filter
  - Status filter
- Manual debounce implementation (400ms delay)

### ✅ UI/UX

- Sticky table header
- Scrollable table body
- Skeleton loading state
- Empty state handling
- Responsive layout
- Professional pagination design

---

---

## 🧠 Architecture Approach

### 🔹 Separation of Concerns

- **UI Components** → Rendering only
- **Custom Hook (`useTable`)** → State management & data processing
- **Utility Functions** → Filtering, sorting, pagination logic
- **Types Folder** → Strong typing across application

---

### 🔹 Performance Optimizations

- `useMemo` used for:
  - Filtering
  - Sorting
  - Pagination
- Debounced search to reduce unnecessary re-renders
- `table-layout: fixed` to prevent layout shifts
- Scrollable table wrapper instead of full page scroll

---

## 📊 Data Structure

Each record includes:

```ts
interface DataRecord {
  id: number;
  name: string;
  category: string;
  status: "Active" | "Inactive" | "Pending";
  createdAt: string;
}
```
