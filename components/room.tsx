"use client";

import {ReactNode} from "react";
import { LiveMap, LiveList, LiveObject } from "@liveblocks/client";

import { Layer } from "@/types/canvas";

import {
    RoomProvider,
    LiveblocksProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";

interface RoomProps {
    children: ReactNode
    roomId:string;
    fallback: NonNullable<ReactNode> | null;
};

export const Room = ({
    children,
    roomId,
    fallback,
}: RoomProps) => {
    return (
        <LiveblocksProvider publicApiKey="pk_dev_C_Q2-Mg54oEBRZMSFGV18gxOysP_gGzvNXZ6o6oER4ytnFOWqKQFFdLKRl_SjlcD"
            throttle={16}
        >
            <RoomProvider id={roomId} 
            initialPresence={{
                cursor:null,
                selection: [],
            }}
            initialStorage={{
                layers: new LiveMap<string, LiveObject<Layer>>(),
                layerIds: new LiveList<string>([]),
            }}

            >
            <ClientSideSuspense fallback={fallback}>
                  {() => children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
        
    );
};