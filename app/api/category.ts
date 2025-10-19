import { PaginationResponse } from "@/@types/baseRespone";
import baseAxios from "@/lib/axios";
import RouteServer from "@/lib/route";

/**
 * Product API methods
 */
const CATEGORY_API = {
  /**
   * Fetch all products with pagination.
   * @param limit Number of products per page (default: 1000)
   * @param page Page number (default: 1)
   * @returns Paginated response of products
   */
  async getAllCategory(
    limit: number = 1000,
    page: number = 1
  ): Promise<PaginationResponse<ProductType.ProductAll>> {
    try {
      const res = await baseAxios.get<
        PaginationResponse<ProductType.ProductAll>
      >(RouteServer.category.root, {
        params: { limit, page },
      });
      return res.data;
    } catch (error: any) {
      console.error("Failed to fetch products:", {
        message: error.message,
        response: error.response?.data,
      });
      throw new Error(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch products"
      );
    }
  },
};
export default CATEGORY_API;
