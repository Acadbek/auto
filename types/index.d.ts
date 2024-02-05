import { ReactNode } from "react";

export interface ChildProps {
  children: ReactNode
}

export type CarsType = {
  city_mpg: number,
  class: string,
  combination_mpg: number,
  cylinders: number,
  displacement: number,
  drive: string,
  fuel_type: string,
  highway_mpg: number,
  make: string,
  model: string,
  transmission: string,
  year: number
}

export interface IconType {
  children: ReactNode,
  label: string
}

export interface CarTabsTypes {
  data: (string | number)[],
  defaultValue: string
  className?: string
  children?: React.ReactNode
  value?: string
  onChange?: (value: string) => void
  [key: string]: any
}
