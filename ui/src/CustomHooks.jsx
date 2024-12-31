import { useState } from "react";

export function useActionState(fn) {
  const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState("");

  const formAction = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fn();
    //   setMessage("Action completed successfully.");
    } catch (error) {
    //   setMessage(error.message || "Something went wrong.");
        console.log({"Error in Custom Hook":error});
        
    } finally {
      setIsLoading(false);
    }
  };

  return [formAction, isLoading ];
}