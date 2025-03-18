// [1] Imports
import SvgIcon from "@mui/material/SvgIcon";
import { lazy, Suspense } from "react";
import { AllowIconsType } from "../lib/utils";

// [2] JSX
export default function IconsMapping({
  iconName,
}: {
  iconName: AllowIconsType["icons"];
}) {
  const IconComponent = lazy(() => import(`./../icons/${iconName}.tsx`));

  // JSX
  return (
    <Suspense fallback={<></>}>
      <div>{IconComponent && <SvgIcon component={IconComponent} />}</div>
    </Suspense>
  );
}
