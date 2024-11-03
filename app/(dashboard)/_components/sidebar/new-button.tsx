"use client"

import {Plus} from "lucide-react";
import {CreateOrganization} from "@clerk/nextjs";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle
} from "@/components/ui/dialog";
import {Hint} from "@/components/hint";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";

export const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <Hint label="Create Desk"
                        side="right"
                        align="start"
                        sideOffset={18}>
                        <button className="bg-white/25 h-full w-full round-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
                            <Plus className="text-white" />
                        </button>
                    </Hint>
                </div>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                <VisuallyHidden>
                <DialogTitle>dialogtitle</DialogTitle>
                </VisuallyHidden>
                <CreateOrganization />
            </DialogContent>
        </Dialog>
    );
};