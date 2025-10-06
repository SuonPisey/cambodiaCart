import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "../ui/table";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Label } from "../ui/label";

const ProfileComponent = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
        <div className="bg-background rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                    <h2 className="text-xl font-semibold">John Doe</h2>
                    <p className="text-muted-foreground">johndoe@example.com</p>
                </div>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-2">
                <div>
                    <span className="text-muted-foreground">Account Created:</span> <span>June 1, 2023</span>
                </div>
                <div>
                    <span className="text-muted-foreground">Last Login:</span> <span>July 15, 2023</span>
                </div>
            </div>
        </div>
        <div className="bg-background rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Order History</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Order #</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Total</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Link href="#" className="text-primary"  >
                                #12345
                            </Link>
                        </TableCell>
                        <TableCell>July 20, 2023</TableCell>
                        <TableCell>$99.99</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Link href="#" className="text-primary"  >
                                #12344
                            </Link>
                        </TableCell>
                        <TableCell>July 15, 2023</TableCell>
                        <TableCell>$49.99</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Link href="#" className="text-primary" >
                                #12343
                            </Link>
                        </TableCell>
                        <TableCell>July 10, 2023</TableCell>
                        <TableCell>$79.99</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
        <div className="bg-background rounded-lg shadow-md p-6 col-span-1 md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
            <form className="grid gap-4">
                <div className="grid gap-2">
                    <Label  >Name</Label>
                    <Input id="name" type="text" defaultValue="John Doe" />
                </div>
                <div className="grid gap-2">
                    <Label >Email</Label>
                    <Input id="email" type="email" defaultValue="johndoe@example.com" />
                </div>
                <div className="grid gap-2">
                    <Label  >Password</Label>
                    <Input id="password" type="password" />
                </div>
                <Button className="ml-auto">Update Profile</Button>
            </form>
        </div>
    </div>
</div>
  );
}
export default ProfileComponent;