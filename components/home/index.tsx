"use client";
import { Input } from "../ui/input";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useQuery } from "@tanstack/react-query";
import PRODUCT_API from "@/app/api/product";
import Image from "next/image";
import { HeroSlideshow } from "../slide";

const HomeComponents: React.FC = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => PRODUCT_API.getAllProducts(),
  });

  return (
    <main className="w-full">
      {" "}
      <HeroSlideshow />
      <section className="container grid gap-6 md:gap-8 px-4 md:px-6 py-12 md:grid-cols-[240px_1fr] items-start">
        <div className="flex flex-col gap-4 items-start py-2">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="home-decor">Home Decor</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="kitchen">Kitchen</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full bg-background shadow-none appearance-none pl-4"
          />
        </div>
        <div className="grid gap-6 md:gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">
                Cambodia Products
              </h1>
              <p className="text-muted-foreground">
                Check out our latest and greatest products.
              </p>
            </div>
          </div>{" "}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {data?.result?.data.map((item) => (
              <div
                key={item.id}
                className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg"
              >
                <Image
                  src={`/assets/images/products/1.jpg`}
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="[grid-area:stack] object-cover w-full aspect-square"
                />
                <div className="flex-1 [grid-area:stack] bg-black/20 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
                  <Link href="/productDetail">
                    <h3 className="font-semibold tracking-tight">
                      {item.name}
                    </h3>
                    <small className="text-sm leading-none">
                      {item.description}
                    </small>
                    <h4 className="font-semibold">${item.how_to_use}</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
export default HomeComponents;
