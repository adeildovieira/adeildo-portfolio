/** WMO weather code → short label (spec). */
const CODES: Record<number, string> = {
  0: "Clear", 1: "Mainly Clear", 2: "Partly Cloudy", 3: "Overcast",
  45: "Fog", 48: "Fog", 51: "Drizzle", 53: "Drizzle", 55: "Drizzle",
  61: "Rain", 63: "Rain", 65: "Heavy Rain", 71: "Snow", 73: "Snow",
  75: "Snow", 80: "Showers", 81: "Showers", 82: "Showers",
  95: "Storm", 96: "Storm", 99: "Storm",
};

export const PEREIRO = { lat: 36.001465, lon: -78.939133, label: "Durham, NC, USA" };

export interface Weather {
  temp: number;
  label: string;
}

/**
 * Fetch current weather from Open-Meteo (free, no API key). Client-side fetch
 * so it works under static export. Returns null on any failure — the caller
 * hides the widget silently rather than showing a broken/loading stub.
 */
export async function getWeather(lat: number, lon: number): Promise<Weather | null> {
  try {
    const url =
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const d = await res.json();
    const temp = d?.current?.temperature_2m;
    const code = d?.current?.weather_code;
    if (typeof temp !== "number") return null;
    return { temp: Math.round(temp), label: CODES[code] ?? "—" };
  } catch {
    return null;
  }
}
