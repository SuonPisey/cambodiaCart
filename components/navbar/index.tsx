"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Logo } from "@/config/image";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";

const menu: any[] = [
  {
    name: "Home",
    link: "/",
  },

  {
    name: "Product",
    link: "/product",
  },
  {
    name: "Brand",
    link: "/brand",
  },
  {
    name: "Category",
    link: "/category",
  },
  {
    name: "Contact us",
    link: "/contact",
  },
  {
    name: "About us",
    link: "/about",
  },
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          {/* <MountainIcon className="w-6 h-6" /> */}
          <img src={Logo} alt="Acme Store" className="w-16 h-16" />
          <span className="text-lg font-bold">Cambodia Cart</span>
        </Link>
        <div className="relative flex-1 max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-10 w-full rounded-md bg-muted focus:ring-primary focus:border-primary"
          />
        </div>
        <nav className="hidden md:flex items-center gap-4">
          {menu.map((item, index) => (
            <div key={index}>
              <Link
                href={item?.link}
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                {item?.name}
              </Link>
            </div>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    className="rounded-full"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/profile">
                <DropdownMenuItem> Profile</DropdownMenuItem>
              </Link>
              <Link href={"/order"}>
                <DropdownMenuItem>Orders</DropdownMenuItem>
              </Link>
              <DropdownMenuItem>Wishlist</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/checkout" className="relative" prefetch={false}>
            <ShoppingCartIcon className="w-6 h-6" />
            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs font-medium">
              3
            </div>
          </Link>
        </nav>

        {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <MenuIcon className="w-6 h-6" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem >
                            <Link href="/" className="text-sm font-medium hover:underline" prefetch={false}>
                                Home
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem >
                            <Link href="/product" className="text-sm font-medium hover:underline" prefetch={false}>
                                Product
                            </Link>
                        </DropdownMenuItem >
                        <DropdownMenuItem >
                            <Link href="brand" className="text-sm font-medium hover:underline" prefetch={false}>
                                Brand
                            </Link>
                        </DropdownMenuItem >
                        <DropdownMenuItem >
                            <Link href="/category" className="text-sm font-medium hover:underline" prefetch={false}>
                                Category
                            </Link>
                        </DropdownMenuItem >
                        <DropdownMenuItem >
                            <Link href="/contact" className="text-sm font-medium hover:underline" prefetch={false}>
                                Contact us
                            </Link>
                        </DropdownMenuItem >

                    </DropdownMenuContent>

                </DropdownMenu> */}
      </div>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
