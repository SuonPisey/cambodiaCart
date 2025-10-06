"use client"
import { useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const ProductDetailComponent = () => {
    const [selectedColor, setSelectedColor] = useState("black")
    const [selectedSize, setSelectedSize] = useState("m")
    const [quantity, setQuantity] = useState(1)


    return (
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-6">
            <div>
                <Carousel className="rounded-lg overflow-hidden">
                    <CarouselContent>
                        <CarouselItem>
                            <img
                                src="assets/images/products/1.jpg"
                                alt="Product Image"
                                width={600}
                                height={600}
                                className="aspect-square object-cover"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                src="assets/images/products/2.jpg"
                                alt="Product Image"
                                width={600}
                                height={600}
                                className="aspect-square object-cover"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                src="assets/images/products/3.jpg"
                                alt="Product Image"
                                width={600}
                                height={600}
                                className="aspect-square object-cover"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="grid gap-6">
                <div>
                    <h1 className="text-3xl font-bold">Acme Prism T-Shirt</h1>
                    <p className="text-muted-foreground">A stylish and comfortable t-shirt with a unique prism design.</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold">$49.99</span>
                    <Button size="lg">Add to Cart</Button>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Product Details</h2>
                    <div className="grid gap-4">
                        <div>
                            <Label htmlFor="color" className="text-base">
                                Color
                            </Label>
                            <RadioGroup
                                id="color"
                                value={selectedColor}
                                onValueChange={setSelectedColor}
                                className="flex items-center gap-2"
                            >
                                <Label
                                    htmlFor="color-black"
                                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                                >
                                    <RadioGroupItem id="color-black" value="black" />
                                    Black
                                </Label>
                                <Label
                                    htmlFor="color-white"
                                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                                >
                                    <RadioGroupItem id="color-white" value="white" />
                                    White
                                </Label>
                                <Label
                                    htmlFor="color-blue"
                                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                                >
                                    <RadioGroupItem id="color-blue" value="blue" />
                                    Blue
                                </Label>
                            </RadioGroup>
                        </div>
                        <div>
                            <Label htmlFor="size" className="text-base">
                                Size
                            </Label>
                            <RadioGroup
                                id="size"
                                value={selectedSize}
                                onValueChange={setSelectedSize}
                                className="flex items-center gap-2"
                            >
                                <Label
                                    htmlFor="size-xs"
                                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                                >
                                    <RadioGroupItem id="size-xs" value="xs" />
                                    XS
                                </Label>
                                <Label
                                    htmlFor="size-s"
                                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                                >
                                    <RadioGroupItem id="size-s" value="s" />
                                    S
                                </Label>
                                <Label
                                    htmlFor="size-m"
                                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                                >
                                    <RadioGroupItem id="size-m" value="m" />
                                    M
                                </Label>
                                <Label
                                    htmlFor="size-l"
                                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                                >
                                    <RadioGroupItem id="size-l" value="l" />
                                    L
                                </Label>
                                <Label
                                    htmlFor="size-xl"
                                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                                >
                                    <RadioGroupItem id="size-xl" value="xl" />
                                    XL
                                </Label>
                            </RadioGroup>
                        </div>
                        <div>
                            <Label htmlFor="quantity" className="text-base">
                                Quantity
                            </Label>
                            <Select >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">1</SelectItem>
                                    <SelectItem value="2">2</SelectItem>
                                    <SelectItem value="3">3</SelectItem>
                                    <SelectItem value="4">4</SelectItem>
                                    <SelectItem value="5">5</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <Separator />
                <div className="grid gap-8 py-8">
                    <div>
                        <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
                        <div className="grid gap-6">
                            <div className="flex gap-4">
                                <Avatar className="w-10 h-10 border">
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold">Sarah Johnson</h3>
                                        <div className="flex items-center gap-0.5">
                                            <StarIcon className="w-5 h-5 fill-primary" />
                                            <StarIcon className="w-5 h-5 fill-primary" />
                                            <StarIcon className="w-5 h-5 fill-primary" />
                                            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                        </div>
                                    </div>
                                    <p className="text-sm leading-loose text-muted-foreground">
                                        I ve been wearing this t-shirt for a few weeks now and it s quickly become one of my favorites. The
                                        fabric is soft and breathable, and the prism design is really eye-catching. Highly recommend!
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Avatar className="w-10 h-10 border">
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold">Alex Smith</h3>
                                        <div className="flex items-center gap-0.5">
                                            <StarIcon className="w-5 h-5 fill-primary" />
                                            <StarIcon className="w-5 h-5 fill-primary" />
                                            <StarIcon className="w-5 h-5 fill-primary" />
                                            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                        </div>
                                    </div>
                                    <p className="text-sm leading-loose text-muted-foreground">

                                        I was a bit hesitant about the prism design at first, but it s grown on me. The t-shirt is super
                                        comfortable and the quality is great. I d definitely buy another one.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetailComponent;

function StarIcon(props: any) {
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
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}


function XIcon(props: any) {
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}   