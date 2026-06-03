"use client";

import { useEffect, useState } from "react";
import { getWeather, PEREIRO, type Weather as WeatherData } from "@/lib/weather";

const CACHE_KEY = "weather:pereiro";

/**
 * Live weather readout for the footer, e.g. `13.9°C Rain`. Fetched once per
 * session (sessionStorage-cached). Renders nothing until data is in hand and
 * stays hidden on failure — never a broken or loading stub.
 */
export function Weather() {
  const [data, setData] = useState<WeatherData | null>(null);

  useEffect(() => {
    let alive = true;

    (async () => {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        try {
          if (alive) setData(JSON.parse(cached) as WeatherData);
          return;
        } catch {
          /* fall through to refetch */
        }
      }

      const weather = await getWeather(PEREIRO.lat, PEREIRO.lon);
      if (!alive || !weather) return;
      setData(weather);
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(weather));
    })();

    return () => {
      alive = false;
    };
  }, []);

  if (!data) return null;

  return (
    <span className="tabular-nums text-muted" aria-label={`Current weather in ${PEREIRO.label}`}>
      <span className="text-fg">{data.temp}°C</span> {data.label}
    </span>
  );
}
