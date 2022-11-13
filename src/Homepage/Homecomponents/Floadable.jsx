import { eleBike } from "../LocalDatabase/bannerData";
import { HStack, Image, Stack } from "@chakra-ui/react";
import { SellerCard } from "./SellerCard";

export const Floadable = () => {
  const data = eleBike;
  return (
    <Stack flexDirection={["column", "row"]} m={"auto"} my={"3em"} width={"90%"} border={"1px"}>
      <Image src={"https://img.gkbcdn.com/bb/engwe-20221110163953412._p1_.jpg"} width={"25vw"}></Image>
      <HStack>
        {data.map((item, i) => {
          return <SellerCard key={i + 1} item={item} />;
        })}
      </HStack>
    </Stack>
  );
};
