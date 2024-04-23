import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button, Spinner } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

function Loading() {
  return (
    <div className="flex items-center justify-center">
      <AuroraBackground>
        <div className="h-screen w-screen flex flex-col justify-center items-center space-y-10">
          <Spinner
            label="Loading..."
            color="secondary"
            labelColor="secondary"
            size="lg"
          />
          <Link href={"/"}>
            <Button color="primary" radius="lg" size="lg" variant="solid">
              Go Home
            </Button>
          </Link>
        </div>
      </AuroraBackground>
    </div>
  );
}

export default Loading;
