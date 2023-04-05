import { ReactNode } from "react";

export interface ILayout {
  title: string;
  children: ReactNode;
  keywords?: string;
  description?: string;
}