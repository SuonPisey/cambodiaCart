"use client";
import CategoryComponent from "@/components/category/page";
import { useQuery } from "@tanstack/react-query";
import CATEGORY_API from "../api/category";

const CategoryPage = () => {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => CATEGORY_API.getAllCategory(),
    refetchOnWindowFocus: false,
  });
  console.log("Category Data:", data);
  return <CategoryComponent />;
};

export default CategoryPage;
