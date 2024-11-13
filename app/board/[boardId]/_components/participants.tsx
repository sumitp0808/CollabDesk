"use client";

import { useOthers, useSelf} from "@liveblocks/react/suspense";

import { UserAvatar } from "./user-avatar";


export const Participants = () => {
    const users= useOthers();
    const currentUser = useSelf();

    return (
        <div
        className="fixed top-0 right-0 w-30 h-full overflow-y-auto bg-gray-100 border-l border-gray-300 shadow-lg"
        >
            <h2 className="text-lg font-semibold mb-4 text-center p-0">Participants</h2>
            <ul className="space-y-2 p-0">
                    {users.slice(0, users.length)
                    .map(({connectionId, info})=>{
                        return (
                            <li className="p-2 border-b border-gray-200" key={connectionId}>
                            <UserAvatar 
                                key={connectionId}
                                src={info?.picture}
                                name={info?.name}
                                fallback={info?.name?.[0] || "Teammate"}
                            />
                            </li>
                        )
                    })}
                    {currentUser && (
                        <li className="p-2 border-b border-gray-200">
                        <UserAvatar 
                            src={currentUser.info?.picture}
                            name={currentUser.info?.name}
                            fallback={currentUser.info?.name?.[0] || "Teammate"}
                        />
                        </li>
                    )}
            </ul>
        </div>
    );
};

export const ParticipantsSkeleton = function ParticipantsSkeleton() {
    return (
        <div
        className="fixed top-0 right-0 w-30 h-full overflow-y-auto bg-gray-100 border-l border-gray-300 p-4 shadow-lg"
        />
    );
}