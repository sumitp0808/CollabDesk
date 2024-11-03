import Image from "next/image";
import {CreateOrganization} from "@clerk/nextjs";

import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle
} from "@/components/ui/dialog";

export const EmptyOrg= () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
                src="/elements.png"
                alt="Empty"
                height={300}
                width={300}
            />
            <h2 className="text-2xl font-semibold mt-6">
                Welcome to CollabDesk
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Create a Organization to get started
            </p>
            <div className="mt-6">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="lg">
                            Create Organization
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="p-0 bg-transparent border-none max-w-[500px]">
                        <DialogTitle>Create Desk</DialogTitle>
                        <CreateOrganization />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};