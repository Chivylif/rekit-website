import React from "react";
import { svgIconPack, SvgIconPackType } from "./svgIconPack";

// type SvgIconProps = {
//   name: SvgIconPackType;
//   className?: string;
//   onClick?: () => void;   // ← ADD THIS
// };


const SvgIcon = React.memo(({ name, className, onClick }) => {
  const icon = svgIconPack[name];

  if (!icon) {
    console.warn(`Icon "${name}" not found in svgIconPack.`);
    return null;
  }

  // If the icon is a React component (function)
  if (typeof icon === 'function') {
    const IconComponent = icon;
    return <IconComponent className={className} onClick={onClick} />;
  }

  // If the icon is a string or an object (Next.js static asset)
  const src = typeof icon === 'object' ? (icon.src || icon.default || icon) : icon;

  return (
    <img
      src={src}
      className={className}
      onClick={onClick}
      alt={name}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    />
  );
});

SvgIcon.displayName = 'SvgIcon';

export { SvgIcon };
