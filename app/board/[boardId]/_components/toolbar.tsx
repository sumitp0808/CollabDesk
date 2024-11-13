import { Skeleton } from "@/components/ui/skeleton";
import { ToolButton } from "./tool-button";
import { Brush, Circle, Ellipsis, Eraser, MousePointer, MousePointer2, Pencil, Redo2, Shapes, Square, Type, Undo2 } from "lucide-react";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";



interface ToolBarProps {
    canvasState: CanvasState;
    setCanvasState: (newState: CanvasState) => void;
    undo: () => void;
    redo: () => void;
    canUndo: boolean;
    canRedo: boolean;
};

export const ToolBar =({
    canvasState,
    setCanvasState,
    undo,
    redo,
    canUndo,
    canRedo,
}: ToolBarProps) => {
    return (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 p-4 rounded-lg flex flex-row gap-x-4 z-50">
            <div className="bg-white rounded-md p-1.5 flex gap-x-1 flex-row items-center shadow-md">
                <ToolButton 
                    label="Select"
                    icon={MousePointer}
                    onClick={()=>setCanvasState({mode: CanvasMode.None})}
                    isActive={
                        canvasState.mode === CanvasMode.None ||
                        canvasState.mode === CanvasMode.Translating ||
                        canvasState.mode === CanvasMode.SelectionNet ||
                        canvasState.mode === CanvasMode.Pressing ||
                        canvasState.mode === CanvasMode.Resizing
                    }
                />
                <ToolButton 
                    label="Text"
                    icon={Type}
                    onClick={()=> setCanvasState({
                        mode: CanvasMode.Inserting,
                        layerType: LayerType.Text,
                    })}
                    isActive={
                        canvasState.mode===CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Text
                    }
                />
                <ToolButton 
                    label="Rectangle"
                    icon={Square}
                    onClick={()=>setCanvasState({
                        mode:CanvasMode.Inserting,
                        layerType: LayerType.Rectangle,
                    })}
                    isActive={
                        canvasState.mode===CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Rectangle
                    }
                />
                <ToolButton 
                    label="Ellipse"
                    icon={Circle}
                    onClick={()=>setCanvasState({
                        mode:CanvasMode.Inserting,
                        layerType: LayerType.Ellipse,
                    })}
                    isActive={
                        canvasState.mode===CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Ellipse
                    }
                />
                <ToolButton 
                    label="Pencil"
                    icon={Pencil}
                    onClick={()=>setCanvasState({
                        mode: CanvasMode.Pencil,
                    })}
                    isActive={
                        canvasState.mode === CanvasMode.Pencil
                    }
                />
                 <ToolButton 
                    label="Brush"
                    icon={Brush}
                    onClick={()=>setCanvasState({
                        mode: CanvasMode.Brush,
                    })}
                    isActive={
                        canvasState.mode===CanvasMode.Brush
                    }
                />
                <ToolButton 
                    label="Eraser"
                    icon={Eraser}
                    onClick={()=>{}}
                    isActive={false}
                />
            </div>
            <div className="bg-white rounded-md p-1.5 flex flex-row items-center shadow-md">
            <ToolButton 
                    label="Undo"
                    icon={Undo2}
                    onClick={()=>{}}
                    isDisabled={true}
                />
             <ToolButton 
                    label="Redo"
                    icon={Redo2}
                    onClick={()=>{}}
                    isDisabled={true}
                />
            </div>
        </div>
    );
};

export const ToolBarSkeleton = function ToolBarSkeleton(){
    return (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 p-4 rounded-lg flex flex-row gap-x-4 z-50 bg-white w-[360px] h-[52px] shadow-md rounded-md" />
    );
};