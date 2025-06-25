import type { ReactElement } from "react";

const Footer = (): ReactElement => {
  return (
    <footer className="bg-background/95 w-full">
      <div className="container mx-auto p-4 text-center border-t border-border/60">
        <p className="text-muted-foreground text-xs">
          &copy; {new Date().getFullYear()} Kanvas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export { Footer };
