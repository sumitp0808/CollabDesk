"use client";

import {useOrganization} from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import {useSearchParams} from "next/navigation";
import { BoardList } from "./_components/board-list";

interface DashboardPageProps {};

const DashboardPage = () => {
    const {organization} =useOrganization();
    const searchParams = useSearchParams();
    const query = Object.fromEntries(searchParams.entries());

    return (
        <div className="flex-1 h-[calc(100%-80px)] p-6">
          {!organization? (
            <EmptyOrg />
          ): (
            <BoardList 
                orgId={organization.id}
                query={query}
            />
          )}  
        </div>
    );
};

export default DashboardPage;