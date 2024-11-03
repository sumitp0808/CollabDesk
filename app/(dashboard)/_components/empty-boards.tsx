import Image from "next/image";
import {useMutation} from "convex/react";
import {useOrganization} from "@clerk/nextjs";

import {api} from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import {toast} from "sonner";

export const EmptyBoards = () => {
    const {organization} =useOrganization();
    const {mutate, pending} = useApiMutation(api.board.create);

    const onClick = () => {
        if(!organization) return;
        mutate({
            orgId: organization.id,
            title: "Untitled"
        })
            .then((id) => {
                toast.success("Desk created")
            })
            .catch(() => toast.error("Failed to create Desk"));
    };

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src="/note.png"
                height={190}
                width={190}
                alt="Empty"
            />
            <h2 className="text-2xl font-semibold mt-6">
                Create your first Desk
            </h2>
            <p className="text-muted-foreground textg-sm mt-2">
                Start by creating a Desk for your team
            </p>
            <div className="mt-6">
                <Button disabled={pending} onClick={onClick} size="lg">
                    Create Desk
                </Button>
            </div>
        </div>
    );
};