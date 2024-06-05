import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

function Error({ message }: { message: string }) {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Alert variant="destructive" className="max-w-[400px]">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </div>
  );
}

export default Error;
