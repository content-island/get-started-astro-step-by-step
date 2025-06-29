import client from "../../lib/client";
import type { About } from "./about.model";

export async function getAbout(): Promise<About> {
  const about: About = await client.getContent<About>({
    id: "685eb36e45767b0f312fce64",
    contentType: "About",
  });

  return about;
}
