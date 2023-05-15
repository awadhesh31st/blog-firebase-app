import { MainNav } from "@/components/main-nav";
import { buttonVariants } from "@/components/ui/button";
import { cm } from "@/lib/utils";
import { publicViewConfig } from "@/mock/public-view";
import Link from "next/link";
import React from "react";

export interface PublicViewLayoutProps {
  children: React.ReactNode;
}

const PublicViewLayout: React.FC<PublicViewLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container z-40 w-full ml-auto mr-auto bg-coal">
        <div className="flex items-center justify-between h-20 py-6">
          <MainNav items={publicViewConfig.mainNav} />
          <nav>
            <Link
              href="/login"
              className={cm(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default PublicViewLayout;
