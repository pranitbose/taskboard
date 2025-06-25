import {
  Ban,
  FileWarning,
  ServerCrash,
  ShieldAlert,
  TriangleAlert
} from "lucide-react";
import type { ErrorState } from "../types";
import { AppErrorStatus } from "./constants";

const getErrorState = (errorStatus: number | null): ErrorState => {
  switch (errorStatus) {
    case AppErrorStatus.NotFound:
      return {
        title: "Page Not Found",
        description:
          "Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.",
        showBackToHomeBtn: true,
        Icon: FileWarning
      };
    case AppErrorStatus.Unauthorized:
      return {
        title: "Unauthorized Access",
        description:
          "You're not logged in or your session has expired. Please log in to continue.",
        showBackToHomeBtn: false,
        Icon: ShieldAlert
      };
    case AppErrorStatus.Forbidden:
      return {
        title: "Access Denied",
        description:
          "You don’t have the necessary permissions to view this content.",
        showBackToHomeBtn: true,
        Icon: Ban
      };
    case AppErrorStatus.ServiceUnavailable:
      return {
        title: "Service Unavailable",
        description:
          "We're currently experiencing issues. Please try again in a few minutes.",
        showBackToHomeBtn: true,
        Icon: ServerCrash
      };
    default:
      return {
        title: "Something Went Wrong",
        description:
          "An unexpected error occurred. Please refresh the page or try again later.",
        showBackToHomeBtn: true,
        Icon: TriangleAlert
      };
  }
};

export { getErrorState };
