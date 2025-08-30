"use client";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRightIcon } from "lucide-react";

interface BreadcrumbItemType {
  label: string;
  href?: string;
}

interface ReusableBreadcrumbProps {
  items: BreadcrumbItemType[];
}

export default function ReusableBreadcrumb({ items }: ReusableBreadcrumbProps) {
  return (
    <Breadcrumb className="w-full py-4">
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div key={index} className="flex items-center space-x-1">
              <BreadcrumbItem>
                {item.href && !isLast ? (
                  <BreadcrumbLink
                    href={item.href}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-medium"
                  >
                    {item.label}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="text-gray-600 text-sm font-normal">
                    {item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>

              {!isLast && (
                <BreadcrumbSeparator>
                  <ChevronRightIcon className="size-4 text-gray-400" />
                </BreadcrumbSeparator>
              )}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}