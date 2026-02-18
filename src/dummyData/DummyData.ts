import { DataRecord } from "../models/Interfaces";

const categories = ["Electronics", "Clothing", "Books", "Furniture"];
const statuses = ["Active", "Inactive", "Pending"] as const;

export const generateMockData = (count: number): DataRecord[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
    category: categories[index % categories.length],
    status: statuses[index % statuses.length],
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
  }));
};

export const mockData = generateMockData(500);
