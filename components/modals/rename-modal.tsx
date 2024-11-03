"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogClose,
    DialogFooter,
    DialogTitle,
} from "@/components/ui/dialog";
import {useRenameModal} from "@/store/use-rename-modal";
import {FormEventHandler, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export const RenameModal = () => {
    const {mutate,pending} = useApiMutation(api.board.update);
    
    const {
        isOpen,
        onClose,
        initialValues,
    } = useRenameModal();

    const [title, setTitle] = useState(initialValues.title);

    useEffect(() => {
        setTitle(initialValues.title);
    }, [initialValues.title]);

    const onSubmit: FormEventHandler<HTMLFormElement> = (
        e,
    ) => {
        e.preventDefault();

        mutate({
            id: initialValues.id,
            title,
        })
            .then(() => {
                toast.success("Desk renamed");
                onClose();
            })
            .catch(() => toast.error("Failed to rename"));
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Rename desk
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Enter a new title for this desk
                </DialogDescription>
                <form onSubmit={onSubmit} className="space-y-4">
                        <Input 
                            disabled={pending}
                            required
                            maxLength={60}
                            value={title}
                            onChange={(e)=> setTitle(e.target.value)}
                            placeholder="desk title"
                        />
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="outline">
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button disabled={pending} type="submit">
                                Done
                            </Button>
                        </DialogFooter>
                    </form>
            </DialogContent>
        </Dialog>
    );
};