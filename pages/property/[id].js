import { fetchApi, baseUrl } from "../../utils/fetchData";
import { Box, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HorizontalSlider from "react-horizontal-slider";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";

const Property = ({ details }) => {
  console.log(details);
  return (
    <Box>
      <Flex>
        <Image src={details.coverPhoto.url} width={352} height={197} />
        <Flex flexDirection={"column"} alignItems="center">
          <Flex flexDirection="column" alignItems={"center"}>
            <Text>{details.title}</Text>
            <Flex>
              {details.location.map((loc) => (
                <Text>{loc.name}&nbsp;</Text>
              ))}
            </Flex>
          </Flex>
          <Flex>
            <Flex flexDirection={"column"} alignItems="center">
              Bedrooms
              <Flex>
                {details.rooms}&nbsp; <FaBed />
              </Flex>
            </Flex>
            <Flex flexDirection={"column"} alignItems="center">
              Bathroom
              <Flex>
                {details.baths}&nbsp; <FaBath />
              </Flex>
            </Flex>
            <Flex flexDirection={"column"} alignItems="center">
              Area<Flex>{details.area}</Flex>
            </Flex>
            <Flex flexDirection={"column"} alignItems="center">
              Rent Frequency
              <Flex>
                {details.rentFrequency.charAt(0).toUpperCase() +
                  details.rentFrequency.slice(1)}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box></Box>
    </Box>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  return {
    props: {
      details: data,
    },
  };
}

export default Property;
