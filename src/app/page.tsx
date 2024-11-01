"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Select,
  Text,
} from "@radix-ui/themes";
import * as ScrollArea from "@radix-ui/react-scroll-area";

const images = [
  { id: "1", url: "/products/product1.webp" },
  { id: "2", url: "/products/product2.webp" },
  { id: "3", url: "/products/product3.webp" },
  { id: "4", url: "/products/product4.webp" },
  { id: "5", url: "/products/product5.webp" },
  { id: "6", url: "/products/product6.webp" },
  { id: "7", url: "/products/product7.webp" },
  // {id: "7", url: "/products/product7.webp"},
  // {id: "7", url: "/products/product7.webp"},
];

const description =
  "A Seiko mod watch is a customized timepiece that combines the reliable craftsmanship of Seiko with unique, personalized modifications. These modifications can range from simple changes, like swapping out the bezel or the dial, to more complex overhauls involving the movement and case design. Enthusiasts often modify Seiko watches to create unique aesthetics that reflect their personal style, drawing inspiration from high-end luxury models, vintage designs, or completely original concepts. The modular nature of Seiko watches, particularly the SKX and 5 series, makes them ideal canvases for such creative endeavors.The allure of Seiko mod watches lies in the blend of practicality and individuality. These customizations not only enhance the watch's appearance but can also improve its functionality and durability. For instance, modders might upgrade the crystal to sapphire for better scratch resistance or replace the stock hands with luminescent ones for improved visibility. The result is a timepiece that maintains Seiko's renowned reliability and precision while standing out as a one-of-a-kind accessory. Whether you're an experienced watch enthusiast or new to the hobby, a Seiko mod watch offers a unique opportunity to own a personalized piece of horological art.";

export default function page() {
  const [selected, setSelected] = useState(images[0]);

  return (
    <Container size="4" align="center" mt="150px" mb="150px">
      <Card>
        <Flex
          gap="6"
          align="start"
          justify="center"
          mr="4"
          ml="4"
          className="items-stretch pt-10 flex flex-col lg:flex-row"
        >
          <Flex direction="column"  className="lg:min-h-[845px] lg:w-1/2 w-full">
            <Box className="flex-1 lg:px-4">
              <Image
                alt="product img"
                width={575}
                height={720}
                src={selected.url}
                style={{ objectFit: "cover" }}
                className="h-full rounded-md w-full"
              />
            </Box>
            <Box className="w-full">
              <ScrollArea.Root className="mt-8 mx-4 px-4 w-full">
                <ScrollArea.Viewport>
                  <Flex gap="2" className="">
                    {images.map((img) => (
                      <div
                        className="w-[80px]"
                        key={img.id}
                        onClick={() => setSelected(img)}
                      >
                        <Image
                          alt="img prev"
                          src={img.url}
                          objectFit="cover"
                          width={80}
                          height={110}
                          className="w-[80px] h-[110px] rounded cursor-pointer target:border-2 target:border-blue-400"
                        />
                      </div>
                    ))}
                  </Flex>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar
                  className="ScrollAreaScrollbar w-1"
                  orientation="horizontal"
                >
                  <ScrollArea.Thumb className="ScrollAreaThumb bg-slate-100 rounded" />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
            </Box>
          </Flex>
          <Flex direction="column" className="flex-1 h-auto" gap="2">
            <Box className="bg-gray-900 rounded-tr-md rounded-tl-md p-4">
              <Text size="7" className="text-white" weight="medium">
                Patek Philippe 5990 1R-001 - Nautilus
              </Text>
              <Flex mt="2" mb="2" align="center" className='flex flex-col sm:flex-row items-stretch sm:gap-6 gap-4'>
                <Flex align="end" className='gap-3 sm:gap-8'>
                <Text size="6" className="text-green-500">
                  $85999.00
                </Text>
                <Text size="5" className="text-gray-300 line-through">
                  $96999.00
                </Text>
                </Flex>
                <Flex gap="2" align="center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <Text className='text-gray-300'>5.0 (5 reviews)</Text>
                </Flex>
              </Flex>

              <Flex justify="between" className="my-4">
                <Badge color="brown" variant="solid" radius="full" size="3">
                  11% Off
                </Badge>
                <Badge color="green" variant="solid" radius="full" size="3">
                  In stock
                </Badge>
              </Flex>

              <ScrollArea.Root
                className="bg-gray-800 bg-opacity-50 px-4 h-[400px]"
                type="always"
              >
                <ScrollArea.Viewport className="h-[400px] p-2">
                  <Text size="3" className="text-white">
                    {description}
                  </Text>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar
                  className="ScrollAreaScrollbar w-1"
                  orientation="vertical"
                >
                  <ScrollArea.Thumb className="ScrollAreaThumb bg-slate-100 rounded" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="ScrollAreaCorner" />
              </ScrollArea.Root>
            </Box>

            <Flex justify="between" mt="3" className='flex sm:flex-row flex-col gap-3 sm:gap-0'>
              <Select.Root size="3">
                <Select.Trigger
                  className="SelectTrigger sm:w-[30%]"
                  aria-label="Material"
                  placeholder="Strap material"
                  variant="classic"
                ></Select.Trigger>

                <Select.Group>
                  <Select.Content position="popper">
                    <Select.Group>
                      <Select.Item value="gold">Gold</Select.Item>
                      <Select.Item value="leather">Leather</Select.Item>
                    </Select.Group>
                  </Select.Content>
                </Select.Group>
              </Select.Root>
              <Select.Root size="3">
                <Select.Trigger
                  className="SelectTrigger sm:w-[30%]"
                  aria-label="Metal"
                  placeholder="Metal"
                  variant="classic"
                ></Select.Trigger>

                <Select.Group>
                  <Select.Content position="popper">
                    <Select.Group>
                      <Select.Item value="red_gold">Red Gold</Select.Item>
                      <Select.Item value="white_gold">White Gold</Select.Item>
                    </Select.Group>
                  </Select.Content>
                </Select.Group>
              </Select.Root>

              <Select.Root size="3">
                <Select.Trigger
                  className="SelectTrigger sm:w-[30%]"
                  aria-label="Size"
                  placeholder="Size"
                  variant="classic"
                ></Select.Trigger>

                <Select.Group>
                  <Select.Content position="popper">
                    <Select.Group>
                      <Select.Item value="s">S</Select.Item>
                      <Select.Item value="l">L</Select.Item>
                    </Select.Group>
                  </Select.Content>
                </Select.Group>
              </Select.Root>
            </Flex>
            <Flex mt="4" align="center" gap="2">
              <Button
                variant="classic"
                size="4"
                className="shadow-md border-none flex-grow bg-gradient-to-r from-blue-500 to-blue-600 flex items-center hover:cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-shopping-cart mr-2 h-5 w-5 hover:scale-110 "
                >
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                Add to cart
              </Button>

              <Button
                variant="outline"
                size="4"
                className="cursor-pointer bg-gradient-to-r from-gray-100 to-gray-200 border-none shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-heart h-6 w-6 transform transition-transform duration-800 hover:scale-110"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Container>
  );
}
