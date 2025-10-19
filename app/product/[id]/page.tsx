"use client";
import PRODUCT_API from "@/app/api/product";
import ProductDetailComponent from "@/components/productDetail";
import { useQuery } from "@tanstack/react-query";
const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["productDetail"],
    queryFn: () => PRODUCT_API.getProductById(params.id),
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <>Loading </>;
  }
  return <ProductDetailComponent data={data?.result} />;
};
export default ProductDetailPage;
