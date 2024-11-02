import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Nav } from "./nav";
import { Button, Flex } from "@radix-ui/themes";

export const Header = () => {
  return (
    <header className="bg-white">
      <Flex
        className="container"
        justify="between"
        align="center"
        pt="3"
        pb="3"
      >
        <Link href="/">
          <Image src="/header/logo.webp" alt="logo" width={65} height={65} />
        </Link>

        <Nav />

        <Flex gap="3" ml="3">
          <Button
            variant="outline"
            size="3"
            className="my-0 ml-auto sm:ml-0 xs:flex hidden "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 hover:text-gray-900 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            Cart
          </Button>{" "}
          <Button size="3" variant="outline">
            Sign up
          </Button>
          <Button size="3" variant="solid">
            Login
          </Button>
        </Flex>
      </Flex>
    </header>
  );
};
