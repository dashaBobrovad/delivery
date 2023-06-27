import { useEffect } from "react";

const listenerCallbacks = new WeakMap();

let observer: any;

function handleIntersections(entries: any) {
  entries.forEach((entry: any) => {
    if (listenerCallbacks.has(entry.target)) {
      const cb = listenerCallbacks.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listenerCallbacks.delete(entry.target);
        cb();
      }
    }
  });
}

function getIntersectionObserver() {
  if (observer === undefined) {
    observer = new IntersectionObserver(handleIntersections, {
      rootMargin: "100px",
      threshold: "0.15" as any,
    });
  }
  return observer;
}

function useIntersection(elem: any, callback: any) {
  useEffect(() => {
    const target = elem.current;
    const observ = getIntersectionObserver();
    listenerCallbacks.set(target, callback);
    observ.observe(target);

    return () => {
      listenerCallbacks.delete(target);
      observ.unobserve(target);
    };
  }, []);
}

export default useIntersection;
