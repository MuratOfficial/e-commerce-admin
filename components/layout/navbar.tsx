"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

interface PageProps {
    title: string;
    href: string;
    description?: string;
}

const pages:PageProps[] = [
  {
    title: "Главная",
    href: "/",

  },
  {
    title: "Продукты",
    href: "/products",
  },
  {
    title: "Категории",
    href: "/categories",
    },
  {
    title: "Биллборды",
    href: "/billboards",
   },
   {
    title: "Пользователи",
    href: "/users",
   },
  {
    title: "Настройки",
    href: "/settings",
  },

]

export function Navbar() {

  return (
    <NavigationMenu className="w-full px-8 pt-4">
      <NavigationMenuList className="flex-wrap">
      
      {pages.map((x, i)=>(
        <NavigationMenuItem key={i}>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={x.href}>{x.title}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
        
    
      </NavigationMenuList>
    </NavigationMenu>
  )
}

