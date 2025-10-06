import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
const CheckoutPage = () => {
  return (
    <main className="flex-1 grid md:grid-cols-[1fr_320px] gap-8 p-4 md:p-8">
        <div className="grid gap-6">
          <div className="grid gap-4">
            <h1 className="text-2xl font-bold">Checkout</h1>
            <div className="grid gap-2 text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>$99.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tax</span>
                <span>$9.90</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-medium">
                <span>Total</span>
                <span>$113.90</span>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-[80px_1fr] gap-4">
            <Image
                src="/assets/images/products/3.jpg"
                alt="Product Image"
                width={80}
                height={80}
                className="rounded-md object-cover"
                style={{ aspectRatio: "80/80", objectFit: "cover" }}
              />
              <div className="grid gap-1">
                <h3 className="font-medium">Acme Sofa</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Quantity: 2</span>
                  <span className="font-medium">$499.50</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[80px_1fr] gap-4">
              <Image
                src="/assets/images/products/4.jpg"
                alt="Product Image"
                width={80}
                height={80}
                className="rounded-md object-cover"
                style={{ aspectRatio: "80/80", objectFit: "cover" }}
              />
              <div className="grid gap-1">
                <h3 className="font-medium">Acme Dining Table</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Quantity: 1</span>
                  <span className="font-medium">$699.50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted/40 rounded-lg p-6 sticky top-4">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <div className="grid gap-4 mt-4">
            <div className="grid grid-cols-[80px_1fr] gap-4">
            <Image
                src="/assets/images/products/1.jpg"
                alt="Product Image"
                width={80}
                height={80}
                className="rounded-md object-cover"
                style={{ aspectRatio: "80/80", objectFit: "cover" }}
              />
              <div className="grid gap-1">
                <h3 className="font-medium">Acme Sofa</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Quantity: 2</span>
                  <span className="font-medium">$499.50</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[80px_1fr] gap-4">
            <Image
                src="/assets/images/products/5.jpg"
                alt="Product Image"
                width={80}
                height={80}
                className="rounded-md object-cover"
                style={{ aspectRatio: "80/80", objectFit: "cover" }}
              />
              <div className="grid gap-1">
                <h3 className="font-medium">Acme Dining Table</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Quantity: 1</span>
                  <span className="font-medium">$699.50</span>
                </div>
              </div>
            </div>
          </div>
        <Link href={'/checkout/paymentMethode'}> <Button className="w-full mt-6">Proceed to Payment</Button></Link>
        </div>
      </main>
  );
};
export default CheckoutPage;
