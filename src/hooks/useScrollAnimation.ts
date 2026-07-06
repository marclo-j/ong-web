import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap-setup";

type AnimationCallback = (gsap: typeof import("gsap")) => void;

export function useScrollAnimation(callback: AnimationCallback, deps: unknown[] = []) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(gsap);
    }, ref);

    return () => {
      ctx.revert();
    };
  }, deps);

  return ref;
}
