import { Hint } from "@/components/hint";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

interface UserAvatarProps {
    src?: string;
    name?:string;
    fallback?: string;
};

export const UserAvatar = ({
    src,
    name,
    fallback,
}: UserAvatarProps) => {
    return (
    <Hint label={name || "Teammate"} side="left" sideOffset={18}>
        <Avatar className="h-10 w-10 border-3">
            <AvatarImage src={src} />
            <AvatarFallback className="text-xs font-semibold">
                {fallback}
            </AvatarFallback>
        </Avatar>
    </Hint>
    );
};