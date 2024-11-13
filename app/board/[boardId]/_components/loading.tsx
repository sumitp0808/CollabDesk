
import {Loader} from "lucide-react";

import {Skeleton} from "@/components/ui/skeleton";
import {Info, InfoSkeleton} from "./info";
import { Participants, ParticipantsSkeleton } from "./participants";
import { ToolBar, ToolBarSkeleton } from "./toolbar";

export const Loading = () => {
    return (
        <main
            className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center"
        >
            <Loader className="h-6 w-6 text-muted-foreground animate-spin"/>
            <InfoSkeleton />
            <ParticipantsSkeleton />
            <ToolBarSkeleton />
        </main>
    );
}