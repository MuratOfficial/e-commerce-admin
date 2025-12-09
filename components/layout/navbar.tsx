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
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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

    <nav className="w-full bg-white px-8 pt-2 flex flex-row justify-between border-b-2 pb-2 fixed">
      <NavigationMenu className="w-full">
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

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="mt-2">
          
            <Avatar className=" cursor-pointer ">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

      
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuLabel>Admin</DropdownMenuLabel>
        
          
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" cursor-pointer">
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>


    </nav>
    
  )
}

