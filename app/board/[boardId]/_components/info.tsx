"use client";

import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import { Hint } from "@/components/hint";
import { useRenameModal } from "@/store/use-rename-modal";

interface InfoProps {
    boardId: string;
};

const font= Poppins({
    subsets:["latin"],
    weight: ["600"],
});

export const Info = ({
    boardId,
}:InfoProps) => {
    
    /*    if(!boardId) console.error("no boardID EXIST");


    const data=useQuery(api.board.get,{
        id: boardId as Id<"boards">,
    });


    if(!data) return <InfoSkeleton />;
*/ 
    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
            <Hint label="Go to desks" side="bottom" sideOffset={10}>
            <Button asChild variant="board" className="px-2">
                <Link href="/">
                <Image 
                    src="/applogo.png"
                    alt="Logo"
                    height={40}
                    width={40}
                />
                <span className={cn("font-semibold text-xl ml-2 text-black",
                    font.className,
                )}>
                    Desk
                </span>
                </Link>
            </Button>
            </Hint>
        </div>
    );
};

export const InfoSkeleton = function InfoSkeleton(){
    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
    );
};
