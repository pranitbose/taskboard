import homeImg from "@assets/images/home.jpg";
import {
  BrandLogo,
  BrandLogoIcon,
  BrandLogoText
} from "@components/brand-logo";
import { Footer } from "@components/footer";
import type { ReactElement } from "react";
import { Outlet } from "react-router";

const HomeLayout = (): ReactElement => {
  return (
    <div className="bg-background text-foreground flex flex-col items-center justify-items-center min-h-dvh">
      <main className="flex-1 w-full grid lg:min-h-svh lg:grid-cols-2">
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start">
            <BrandLogo>
              <BrandLogoIcon />
              <BrandLogoText />
            </BrandLogo>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-sm">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="bg-muted relative hidden lg:block">
          <img
            src={homeImg}
            alt="home"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
export { HomeLayout };
