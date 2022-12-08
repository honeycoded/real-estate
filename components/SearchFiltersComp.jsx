import { useState } from "react";
import Link from "next/link";
import {
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
  RadioGroup,
  Stack,
  Radio,
  Select,
  Tooltip,
  Flex,
  Button,
} from "@chakra-ui/react";
import RangeSliderComponent from "./RangeSliderComponent";
import { useRouter } from "next/router";
import MapPicker from "react-google-map-picker";

const SearchFiltersComp = () => {
  const [value, setValue] = useState("for-rent");
  const [priceRange, setPriceRange] = useState(0);
  const [roomsRange, setRoomsRange] = useState(0);
  const [bathsRange, setBathsRange] = useState(0);
  const [areaRange, setAreaRange] = useState(0);
  const [defaultLocation, setDefaultLocation] = useState({
    lat: 24.44365703814196,
    long: 54.648528636879874,
  });
  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(10);

  const router = useRouter();

  const handleChangeTest = ([a, b]) => {
    const path = router.pathname;
    const { query } = router;
    query[a] = b;
    router.push({ pathname: path, query: query });
  };

  const reset = () => {
    setDefaultLocation({
      lat: 24.44365703814196,
      long: 54.648528636879874,
    });
    setZoom(10);
  };

  const handleLocationChange = (lat, long) => {
    setLocation({ lat: lat, long: long });
  };

  return (
    <Box
      p={4}
      bgGradient="linear(to-r, #00B4DB, #0083B0)"
      sx={{ fontFamily: "Bubblegum Sans" }}
      borderBottom={"2px"}
      borderLeft={"2px"}
      borderRight={"2px"}
    >
      <Flex
        direction={"row"}
        justifyContent="space-around"
        alignItems={"center"}
      >
        <Stack direction={"column"} w={"15%"} textAlign="center">
          <Text as="u">Purpose</Text>
          <RadioGroup value={value} onChange={setValue}>
            <Stack direction={"row"} spacing={4}>
              <Radio value={"for-rent"} colorScheme="blackAlpha">
                For Rent
              </Radio>
              <Radio value={"for-sale"} colorScheme="blackAlpha">
                For Sale
              </Radio>
            </Stack>
          </RadioGroup>
          {value === "for-rent" && (
            <Select
              placeholder="Rent Frequency"
              size={"xs"}
              bg="gray.600"
              borderColor="gray.600"
              color={"#e7b22b"}
              onChange={(e) => {
                handleChangeTest(["rentFrequency", e.target.value]);
              }}
            >
              <option value={"monthly"}>Monthly</option>
              <option value={"yearly"}>Yearly</option>
            </Select>
          )}
        </Stack>
        {/* price range */}
        <RangeSliderComponent
          title={"Price Range"}
          defaultValue={[2290, 3200]}
          min={2290}
          max={3500}
          setState={setPriceRange}
          state={priceRange}
          label={`${priceRange} AED`}
        />
        {/* Rooms */}
        <RangeSliderComponent
          title={"Rooms Range"}
          defaultValue={[1, 2]}
          min={1}
          max={5}
          setState={setRoomsRange}
          state={roomsRange}
          label={`${roomsRange}`}
        />
        {/* Baths */}
        <RangeSliderComponent
          title={"Baths Range"}
          defaultValue={[1, 2]}
          min={1}
          max={4}
          setState={setBathsRange}
          state={bathsRange}
          label={`${bathsRange} `}
        />

        {/* area range */}
        <RangeSliderComponent
          title={"Area Range"}
          defaultValue={[10, 40]}
          min={0}
          max={90}
          setState={setAreaRange}
          state={areaRange}
          label={`${areaRange} sqft`}
        />
      </Flex>
      <MapPicker
        defaultLocation={defaultLocation}
        zoom={zoom}
        style={{ height: "300px", width: "300px", marginTop: "1rem" }}
        mapTypeId="roadmap"
        onChangeLocation={handleLocationChange}
        apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
      />
      <Flex justifyContent={"flex-end"} mt={"2rem"}>
        <Select
          placeholder="Sort"
          w={"20%"}
          bg={"gray.600"}
          borderColor={"gray.600"}
          textAlign={"center"}
          color={"#e7d22b"}
          size="sm"
          onChange={(e) => handleChangeTest(["sort", e.target.value])}
        >
          <option value={"asc"}>Lowest to Highest</option>
          <option value={"desc"}>Highest to Lowest</option>
        </Select>
        <Link
          href={`/search?purpose=${value}&priceMin=${priceRange[0]}&priceMax=${priceRange[1]}&areaMax=${areaRange[1]}&roomsMin=${roomsRange[0]}&roomsMax=${roomsRange[1]}&bathsMin=${bathsRange[0]}&bathsMax=${bathsRange[1]}`}
          passHref
        >
          <Button ml={"1rem"} size={"sm"}>
            Apply Filters
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default SearchFiltersComp;
