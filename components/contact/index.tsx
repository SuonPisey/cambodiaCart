import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const ContactComponent = () => {
    return (

        <section className="w-full py-12 bg-muted">
            <div className="container max-w-2xl mx-auto px-4 md:px-6">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold">Get in Touch</h1>
                        <p className="text-muted-foreground text-lg">
                            We re here to help. Fill out the form below and our team will get back to you as soon as possible.
                        </p>
                    </div>
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name" className="text-base font-medium">
                                Name
                            </Label>
                            <Input
                                id="name"
                                placeholder="Enter your name"
                                className="bg-background border-border focus:border-primary focus:ring-primary"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-base font-medium">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="bg-background border-border focus:border-primary focus:ring-primary"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message" className="text-base font-medium">
                                Message
                            </Label>
                            <Textarea
                                id="message"
                                placeholder="Enter your message"
                                className="bg-background border-border focus:border-primary focus:ring-primary min-h-[120px]"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary"
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default ContactComponent;