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
} from "@chakra-ui/react";

const RangeSliderComponent = ({
  title,
  defaultValue,
  min,
  max,
  setState,
  state,
  label,
}) => {
  return (
    <Stack direction={"column"} w={"10%"} alignItems={"center"}>
      <Text>{title}</Text>
      <RangeSlider
        defaultValue={defaultValue}
        min={min}
        max={max}
        onChange={(val) => setState(val)}
        onChangeEnd={(val) => setState(val)}
      >
        <RangeSliderTrack bg={"blackAlpha.500"}>
          <RangeSliderFilledTrack bg={"#e7b22b"} />
        </RangeSliderTrack>
        <Tooltip label={label} placement={"bottom"} isOpen color="#e7b22b">
          <RangeSliderThumb index={0} w={"2px"} />
        </Tooltip>
        <Tooltip
          label={label}
          placement={"top"}
          closeDelay={1000}
          color="#e7b22b"
        >
          <RangeSliderThumb index={1} w={"2px"} />
        </Tooltip>
      </RangeSlider>
    </Stack>
  );
};

export default RangeSliderComponent;
