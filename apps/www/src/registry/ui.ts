import type { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "alert",
    type: "components:ui",
    files: ["ui/alert.directive.ts"],
  },
  {
    name: "badge",
    type: "components:ui",
    files: ["ui/badge.directive.ts"],
  },
  {
    name: "breadcrumb",
    type: "components:ui",
    files: ["ui/breadcrumb.directive.ts"],
    dependencies: ["@ng-icons/core", "@ng-icons/radix-icons"],
  },
  {
    name: "button",
    type: "components:ui",
    files: ["ui/button.directive.ts"],
  },
  {
    name: "card",
    type: "components:ui",
    files: ["ui/card.directive.ts"],
  },
  {
    name: "input",
    type: "components:ui",
    files: ["ui/input.directive.ts"],
  },
  {
    name: "label",
    type: "components:ui",
    dependencies: ["@radix-ng/primitives"],
    files: ["ui/label.directive.ts"],
  },
  {
    name: "separator",
    type: "components:ui",
    files: ["ui/separator.directive.ts"],
  },
  {
    name: "skeleton",
    type: "components:ui",
    files: ["ui/skeleton.directive.ts"],
  },
  {
    name: "table",
    type: "components:ui",
    files: ["ui/table.directive.ts"],
  },
  {
    name: "tabs",
    type: "components:ui",
    dependencies: ["@angular/cdk", "@radix-ng/primitives"],
    files: ["ui/tabs.directive.ts"],
  },
];
