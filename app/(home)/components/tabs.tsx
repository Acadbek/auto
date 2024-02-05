"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/index.ts"
import { CarTabsTypes } from "@/types/index";

export default function CarTabs({ defaultValue }: CarTabsTypes) {
  return (
    <Tabs defaultValue={defaultValue} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="all">Все</TabsTrigger>
        <TabsTrigger value="new">Новые</TabsTrigger>
        <TabsTrigger value="used">С пробегом</TabsTrigger>
      </TabsList>
      <TabsContent value="all">Make changes to your account here.</TabsContent>
      <TabsContent value="new">Change your password here.</TabsContent>
      <TabsContent value="used">Change your password here.</TabsContent>
    </Tabs>
  );
}
