"use client"

import Image from "next/image"
import { Heart, Search, CarFront, MessageCircleMore, BadgeDollarSign } from "lucide-react"
import { Button, Input, ModeToggle } from "@/components/index.ts"
import { Icon } from "./icon"

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-3">
        <Image width={104} height={20} src="/logo.svg" title="AVTO.RU" alt="AVTO.RU LOGO" />
        <Input className="max-w-[333px] bg-[#eff1f4] hover:bg-white" placeholder="Поиск по объявлениям" />
        <div className="icons gap-[20px] flex items-center">
          <Icon label="Избранное">
            <Heart />
          </Icon>
          <Icon label="Поиски">
            <Search />
          </Icon>
          <Icon label="Сравнения">
            <CarFront />
          </Icon>
          <Icon label="Сообщения">
            <MessageCircleMore />
          </Icon>
          <Icon label="Я продаю">
            <BadgeDollarSign />
          </Icon>
          <ModeToggle />
        </div>
        <Image className="rounded-full cursor-pointer" src="/avatar.webp" width={44} height={44} alt="Avatar" />
        <Button variant="default" className="bg-green-700 hover:bg-green-600">Разместить бесплатно</Button>
      </nav>
    </>
  )
}
