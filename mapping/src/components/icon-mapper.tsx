// [1] Imports
import SvgIcon from "@mui/material/SvgIcon";
import { icons, IconsType } from "../lib/icon-helpers";

// [2] JSX
export default function IconMapper({
  iconName,
}: {
  iconName: IconsType["icons"];
}) {
  const IconComponent = (icons[iconName] || null) as typeof SvgIcon | null;

  // JSX
  return <div>{IconComponent && <SvgIcon component={IconComponent} />}</div>;
}
