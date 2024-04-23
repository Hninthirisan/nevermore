"use client";
import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Link,
} from "@nextui-org/react";
import { useState } from "react";

export default function Price() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [isCardNumberValid, setIsCardNumberValid] = useState(false);

  const handleCardNumberChange = (e) => {
    const inputCardNumber = e.target.value;
    setCardNumber(inputCardNumber);
    setIsCardNumberValid(inputCardNumber === "5401871326082441"); // Validating against hardcoded card number
  };

  return (
    <div className="flex flex-row justify-center items-center w-auto h-screen bg-gradient-to-r from-neutral-950 to-zinc-900">
      <BackgroundBeams />
      <Card
        isFooterBlurred
        className="max-w-[300px] h-[500px] flex m-5 bg-neutral-500 transform hover:translate-y-unit-md zoom-in-50 ease-in-out duration-300">
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-130 -translate-y-6 object-cover"
          src="/basic.jpeg"
        />
        <CardFooter className="absolute bg-white/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-transparent"
              src="/logo.png"
            />
            <div className="flex flex-col">
              <p className="text-black text-tiny">Basic Plan</p>
              <p className="text-black text-tiny">Free</p>
            </div>
          </div>
          <Button className="text-tiny" radius="full" size="sm" color="default">
            Basic
          </Button>
        </CardFooter>
      </Card>

      <Card
        isFooterBlurred
        className="max-w-[300px] h-[500px] flex m-5  bg-slate-800 transition hover:translate-y-unit-md zoom-in-50 ease-in-out duration-300">
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover scale-130"
          src="/enterprise.jpeg"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="/logo.png"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Available Soon</p>
              <p className="text-tiny text-white/60">Get Notify</p>
            </div>
          </div>
          <Button radius="full" size="sm" color="danger" onPress={onOpen}>
            Enterprise
          </Button>
          <Modal
            backdrop="blur"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            radius="lg"
            classNames={{
              body: "py-6",
              backdrop: "bg-[#292f46]/50 backdrop-opacity-100",
              base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
              header: "border-b-[1px] border-[#292f46]",
              footer: "border-t-[1px] border-[#292f46]",
              closeButton: "hover:bg-white/5 active:bg-white/10",
            }}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Payment information
                  </ModalHeader>
                  <ModalBody>
                    <p>Enter your valid card information</p>
                    <Input
                      autoFocus
                      label="Card Number"
                      variant="bordered"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                    />
                    <Input label="Card Holder Name" variant="bordered" />
                    <div className="flex flex-row justify-start">
                      <Input
                        type="number"
                        label="Expiration Date"
                        placeholder="MM"
                        variant="bordered"
                        className="mr-2"
                      />
                      <Input
                        type="number"
                        label="Expiration Date"
                        placeholder="YY"
                        variant="bordered"
                        className="ml-2"
                      />
                    </div>
                    <Input
                      label="CVV"
                      variant="bordered"
                      type={isVisible ? "text" : "password"}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cancel
                    </Button>
                    <Button
                      color="primary"
                      onPress={onClose}
                      isDisabled={!isCardNumberValid} // Conditionally set isDisabled based on isCardNumberValid
                      href={isCardNumberValid ? "/profile" : undefined} // Set href only if isCardNumberValid is true
                      as={Link}>
                      Purchase
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </CardFooter>
      </Card>
    </div>
  );
}
