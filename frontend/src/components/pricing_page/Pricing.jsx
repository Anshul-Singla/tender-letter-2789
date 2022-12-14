import React from "react";
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Circle,
  Flex,
  HStack,
  List,
  ListIcon,
  ListItem,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  ScaleFade,
  SimpleGrid,
  Spacer,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import Footer from "./Footer";
import { useState } from "react";

const Pricing = () => {
  const [sliderValue, setSliderValue] = React.useState(1);
  const [price, setPrice] = React.useState({ business: 7, professional: 5 });
  const [annual, setAnnual] = useState(false);

  const handleSliderChange = (v) => {
    if (annual) {
      setPrice({ business: 70 * v, professional: 50 * v });
    } else {
      setPrice({ business: 7 * v, professional: 5 * v });
    }
    setSliderValue(v);
  };

  const handleSwitchToggle = (e) => {
    if (e.target.checked) {
      setPrice({ business: 70 * sliderValue, professional: 50 * sliderValue });
    } else {
      setPrice({ business: 7 * sliderValue, professional: 5 * sliderValue });
    }
    setAnnual(e.target.checked);
  };
  return (
    <ChakraProvider>
      <Box>
        <ScaleFade initialScale={0.9} in="true">
          <Center bg="#e8edff" padding="3rem">
            <VStack>
              <Text fontSize="60px" fontWeight="800" color="black">
                Pricing
              </Text>
              <Text fontSize="18px" fontWeight="600" color="black" pb={6}>
                All plans include free 30-day trial. No credit card required!
              </Text>
            </VStack>
          </Center>
        </ScaleFade>

        <SimpleGrid
          m={6}
          columns={[1, 1, 1, 3]}
          border="1px solid "
          borderColor="blackAlpha.300"
          borderRadius="15px"
          padding={4}
          spacing={6}
        >
          <Box paddingX={8}>
            <HStack>
              <Text as="b" fontSize="20px">
                Monthly
              </Text>
              <Switch
                size="lg"
                value={annual}
                colorScheme="green"
                onChange={handleSwitchToggle}
              />
              <Text as="b" fontSize="20px">
                Annually
              </Text>
            </HStack>
          </Box>

          <Box paddingX={8}>
            <Flex gap={4}>
              <Box>
                <Text as="b" fontSize="20px">
                  TeamSize
                </Text>
              </Box>
              <Spacer />
              <NumberInput
                step={1}
                value={sliderValue}
                min={1}
                max={100}
                onChange={handleSliderChange}
                size={["sm", "sm", "md", "md"]}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </Box>
          <Box paddingX={8} w="100%" justifyContent="center">
            <Slider
              id="slider"
              defaultValue={1}
              min={1}
              max={100}
              value={sliderValue}
              onChange={handleSliderChange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb>
                <Circle size="40px" bg="#e8edff">
                  <Text color="black">{sliderValue}</Text>
                </Circle>
              </SliderThumb>
            </Slider>
          </Box>
        </SimpleGrid>
        {/* pridce card */}

        <SimpleGrid columns={[1, 2, 3, 3]}>
          <Box m={6}>
            <VStack
              padding="20px"
              border="1px solid "
              borderColor="blackAlpha.300"
              borderRadius="15px"
            >
              <Text as="b" fontSize="50px" color="black" fontWeight="800">
                Business
              </Text>
              <Box>
                <Text fontSize="35px" as="b" color="black">
                  $ {price.business}/{annual ? "year" : "month"}
                </Text>
              </Box>
              <List fontSize="16px" fontWeight="600">
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Unlimited projects and clients
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Reporting
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Timer button in 50+ web apps
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Calendar integrations: Google, Outlook
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Billable rates and money tracking
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Budgeting for projects
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Invoicing
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Screenshots capturing
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Client logins for access to reports
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Paid time off tracking
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Payroll for employees
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Time tracking permissions
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Time-sync with Jira and QuickBooks
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Time-sync with GitLab and Redmine
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Work Schedule
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Team Dashboard
                </ListItem>
              </List>
            </VStack>
          </Box>
          <Box m={6}>
            <VStack
              padding="20px"
              border="1px solid "
              borderColor="blackAlpha.300"
              borderRadius="15px"
            >
              <Text as="b" fontSize="50px" color="black" fontWeight="800">
                Professional
              </Text>
              <Box>
                <Text fontSize="35px" as="b" color="black">
                  $ {price.professional} /{annual ? "year" : "month"}
                </Text>
              </Box>
              <List fontSize="16px" fontWeight="600">
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Unlimited projects and clients
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Reporting
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Timer button in 50+ web apps
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Calendar integrations: Google, Outlook
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Billable rates and money tracking
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Budgeting for projects
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Invoicing
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={AiFillCheckCircle} color="green.500" />
                  Screenshots capturing
                </ListItem>
                <ListItem mt={2}>
                  <ListIcon as={RxCross1} color="gray" />
                  Client logins for access to reports
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Paid time off tracking
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Payroll for employees
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Time tracking permissions
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Time-sync with Jira and QuickBooks
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Time-sync with GitLab and Redmine
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Work Schedule
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Team Dashboard
                </ListItem>
              </List>
            </VStack>
          </Box>
          <Box m={6}>
            <VStack
              padding="20px"
              border="1px solid "
              borderColor="blackAlpha.300"
              borderRadius="15px"
            >
              <Text as="b" fontSize="50px" color="black" fontWeight="800">
                Free
              </Text>
              <Box>
                <Text fontSize="35px" as="b" color="black">
                  $ 0 /{annual ? "year" : "month"}
                </Text>
              </Box>
              <List fontSize="16px" fontWeight="600">
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Unlimited projects and clients
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Reporting
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Timer button in 50+ web apps
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Calendar integrations: Google, Outlook
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Billable rates and money tracking
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Budgeting for projects
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Invoicing
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Screenshots capturing
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Client logins for access to reports
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Paid time off tracking
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Payroll for employees
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Time tracking permissions
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Time-sync with Jira and QuickBooks
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Time-sync with GitLab and Redmine
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Work Schedule
                </ListItem>
                <ListItem mt={2}>
                  {" "}
                  <ListIcon as={RxCross1} color="gray" />
                  Team Dashboard
                </ListItem>
              </List>
            </VStack>
          </Box>
        </SimpleGrid>
        <Box
          my="3rem"
          paddingY="5rem"
          backgroundSize="cover"
          backgroundImage={`url("https://tmetric.com/media/shvmqkff/colored-banner-image.png")`}
        >
          <Center>
            <VStack textAlign="center">
              <Text
                fontSize={["30px", "30px", "40px", "50px"]}
                fontWeight="700"
              >
                Make time work for you!
              </Text>
              <Button size="lg" colorScheme="facebook">
                Start Free Trial
              </Button>
            </VStack>
          </Center>
        </Box>

        <Footer />
      </Box>
      {/* footer */}
    </ChakraProvider>
  );
};

export default Pricing;
