import { Paths } from "@routes/constants";
import { KanbanSquare } from "lucide-react";
import type { ReactElement, ReactNode } from "react";
import { Link } from "react-router";

const BrandLogo = ({ children }: { children: ReactNode }): ReactElement => (
  <Link to={Paths.HOME} className="flex items-center gap-2 font-medium">
    {children}
  </Link>
);

const BrandLogoIcon = (): ReactElement => (
  <div className="bg-primary text-background flex size-6 items-center justify-center rounded-md">
    <KanbanSquare className="size-4" />
  </div>
);

const BrandLogoText = (): ReactElement => <span>Kanban</span>;

export { BrandLogo, BrandLogoIcon, BrandLogoText };
