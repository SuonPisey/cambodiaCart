"use client";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import { useMemo, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const OrderComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const orders = useMemo(
    () => [
      { id: "ORD001", date: "2023-05-15", total: 249.99, status: "Delivered" },
      { id: "ORD002", date: "2023-04-20", total: 99.99, status: "Cancelled" },
      { id: "ORD003", date: "2023-03-10", total: 149.99, status: "Shipped" },
      { id: "ORD004", date: "2023-02-28", total: 199.99, status: "Delivered" },
      { id: "ORD005", date: "2023-01-05", total: 79.99, status: "Delivered" },
    ],
    []
  );

  const filteredOrders = useMemo(() => {
    return orders
      .filter((order) => {
        const searchRegex = new RegExp(searchTerm, "i");
        return (
          searchRegex.test(order.id) ||
          searchRegex.test(order.date) ||
          searchRegex.test(order.status)
        );
      })
      .sort((a, b) => {
        if (sortOrder === "asc") {
          return Number(new Date(a.date)) - Number(new Date(b.date));
        } else {
          return Number(new Date(b.date)) - Number(new Date(a.date));
        }
      });
  }, [orders, searchTerm, sortOrder]);
  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">Order History</h1>
        <div className="mb-6">
          <Input
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-auto"
          />
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  className="cursor-pointer"
                  onClick={() =>
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                  }
                >
                  Order
                  {sortOrder === "asc" ? " \u2191" : " \u2193"}
                </TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.status === "Delivered"
                          ? "outline"
                          : order.status === "Shipped"
                          ? "default"
                          : "outline"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Cancel Order</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Cancel Order</DialogTitle>
                          <DialogDescription>
                            Please provide a reason for cancelling your order.
                            This will help us improve our service.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <Textarea
                            placeholder="Enter your reason for cancellation..."
                            className="min-h-[100px]"
                          />
                        </div>
                        <DialogFooter>
                          <div>
                            <Button variant="destructive">Cancel</Button>
                          </div>
                          <Button type="submit">Submit</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default OrderComponent;
