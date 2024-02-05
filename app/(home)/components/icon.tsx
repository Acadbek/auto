"use client"

import { IconType } from "@/types/index"

export const Icon = ({ children, label }: IconType) => {
  return (
    <div className="flex flex-col cursor-pointer justify-center items-center hover:!text-red-700">
      {children}
      <p className="text-[11px] text-[#7e7e80] mt-[2px] leading-[12px]">{label}</p>
    </div>
  )
}
