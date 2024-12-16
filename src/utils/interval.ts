import { useRef, useEffect } from "react";

export const useInterval = (callback: () => void, interval: number, shouldRun: boolean) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!shouldRun) return;
    const id = setInterval(() => callbackRef.current(), interval);
    return () => clearInterval(id);
  }, [interval, shouldRun]);
}