

import React from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

const AboutusComponent = () => {
    return (
        <div>
            <div className="w-full">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Exommerze</h2>
                                <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Exommerze is a leading e-commerce platform that empowers businesses of all sizes to thrive in the
                                    digital landscape. Our mission is to revolutionize the way people shop and sell online, by providing a
                                    seamless, secure, and innovative experience.
                                </p>
                                <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    At the heart of Exommerze lies a deep commitment to our core values: innovation, integrity, and
                                    sustainability. We strive to continuously push the boundaries of what s possible in the world of
                                    e-commerce, while always maintaining the highest standards of ethics and environmental responsibility.
                                </p>
                            </div>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <h3 className="text-2xl font-bold">Key Achievements</h3>
                                    <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                                        <li>Processed over $1 billion in sales for our merchants</li>
                                        <li>Helped thousands of businesses expand their online presence</li>
                                        <li>Recognized as one of the fastest-growing e-commerce platforms</li>
                                    </ul>
                                </div>
                                <div className="grid gap-2">
                                    <h3 className="text-2xl font-bold">Our Values</h3>
                                    <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                                        <li>Innovation: Constantly seeking new ways to improve the e-commerce experience</li>
                                        <li>Integrity: Upholding the highest standards of ethics and transparency</li>
                                        <li>Sustainability: Minimizing our environmental impact and promoting sustainable practices</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Leadership Team</h2>
                        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center gap-4">
                                <div className="rounded-full bg-primary p-1">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-lg font-bold">John Doe</h3>
                                    <p className="text-muted-foreground">CEO</p>
                                    <p className="mt-2 text-muted-foreground">
                                        John is the visionary behind Exommerze, with over 15 years of experience in the e-commerce industry.
                                        He is passionate about empowering businesses to thrive online.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="rounded-full bg-primary p-1">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-lg font-bold">Jane Smith</h3>
                                    <p className="text-muted-foreground">CTO</p>
                                    <p className="mt-2 text-muted-foreground">
                                        Jane is the technical mastermind behind Exommerze, with a deep understanding of e-commerce
                                        technologies and a passion for innovation.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="rounded-full bg-primary p-1">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-lg font-bold">Michael Johnson</h3>
                                    <p className="text-muted-foreground">COO</p>
                                    <p className="mt-2 text-muted-foreground">
                                        Michael is the operational backbone of Exommerze, with a proven track record of scaling businesses and
                                        driving operational excellence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Sustainability and Social Responsibility
                        </h2>
                        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:gap-12">
                            <div>
                                <h3 className="text-2xl font-bold">Sustainability</h3>
                                <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    At Exommerze, we are committed to minimizing our environmental impact and promoting sustainable
                                    practices throughout our operations. We have implemented a range of initiatives, including:
                                </p>
                                <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    <li>Offsetting our carbon footprint through renewable energy investments</li>
                                    <li>Implementing eco-friendly packaging and shipping solutions</li>
                                    <li>Encouraging our merchants to adopt sustainable business practices</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Social Responsibility</h3>
                                <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Exommerze is dedicated to making a positive impact on the communities we serve. We believe in using our
                                    platform to support important causes and empower underrepresented groups. Some of our initiatives
                                    include:
                                </p>
                                <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    <li>Partnering with local charities and non-profit organizations</li>
                                    <li>Offering educational resources and mentorship programs for aspiring entrepreneurs</li>
                                    <li>Promoting diversity and inclusion within our own team and across our merchant network</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default AboutusComponent;