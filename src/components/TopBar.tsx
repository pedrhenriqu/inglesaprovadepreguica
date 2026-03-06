import { useEffect, useState } from "react";

const TopBar = () => {
  const [time, setTime] = useState({ h: 23, m: 59, s: 57 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="w-full bg-[hsl(var(--topbar-bg))] py-2.5 px-4 text-center text-sm font-bold text-primary-foreground">
      OFERTA LIMITADA! Expira em: {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
      <span className="mx-2">•</span>
      de <s>R$997</s> por <span className="text-primary-foreground font-extrabold">R$37</span>
      <span className="ml-2 bg-primary-foreground/20 text-primary-foreground text-xs px-2 py-0.5 rounded font-bold">96% OFF</span>
    </div>
  );
};

export default TopBar;
