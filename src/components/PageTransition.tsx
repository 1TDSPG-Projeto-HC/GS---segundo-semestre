import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function PageAppear({ children }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] transform
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
      `}
    >
      {children}
    </div>
  );
}
