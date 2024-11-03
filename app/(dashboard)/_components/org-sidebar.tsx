"use client"

import Link from "next/link";
import Image from "next/image";
import {Poppins} from "next/font/google";
import {cn} from "@/lib/utils";
import {OrganizationSwitcher} from "@clerk/nextjs";
import {Button} from "@/components/ui/button"; 
import {LayoutDashboard} from "lucide-react";
import {useSearchParams} from "next/navigation";

const font =Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

export const OrgSidebar = () => {
    return (
        <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
           <Link href="/">
            <div className="flex items-center gap-x-2">
                <Image 
                src="/applogo.png"
                alt="Logo"
                width={40}
                height={40}
                />
                <span className={cn(
                    "font-semibold text-2xl",
                    font.className,
                )}>
                    CollabDesk
                </span>

            </div>
           </Link>
           <OrganizationSwitcher 
           hidePersonal
           appearance={{
            elements: {
                rootBox: {
                    display:"flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                },
                organizationSwitcherTrigger:{
                    padding: "6px",
                    width: "100%",
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                    justifyContent: "space-between",
                    backgroundColor: "white"

                }
            }
           }}
           />
           <div className="space-y-1 w-full">
            <Button
                variant="ghost"
                asChild
                size="lg"
                className="font-normal justify-start px-2 w-full"
            >
                <Link href="/">
                    <LayoutDashboard className="h-4 w-4 mr-2"/>
                    Team Desks
                </Link>
            </Button>
           </div>
        </div>
    );
};