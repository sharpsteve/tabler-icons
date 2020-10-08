import * as React from "react";

function IconSuperscript({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-superscript" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 7l8 10m-8 0l8 -10" /><path d="M21 11h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2" /></svg>;
}

export default IconSuperscript;