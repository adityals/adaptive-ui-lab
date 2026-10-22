import { useEffect, useRef, useState } from "react";
import type { Category } from "../types";
import { initEmbedder, pickCategories } from "./embedder";

export type Status = "loading" | "ready" | "thinking" | "error";

export function usePersonalizer() {
  const hasStartDownload = useRef(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [status, setStatus] = useState<Status>("loading");
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (hasStartDownload.current) {
      return;
    }
    hasStartDownload.current = true;
    initEmbedder((info) => {
      if (info.status === "progress_total") {
        setDownloadProgress(info.progress);
      }
    })
      .then(() => {
        setDownloadProgress(100);
        setStatus("ready");
      })
      .catch((error) => {
        console.error("init embedder:", error);
        setStatus("error");
      });
  }, []);

  const personalize = async (preference: string) => {
    setStatus("thinking");
    try {
      setCategories(await pickCategories(preference));
      setStatus("ready");
    } catch (error) {
      console.error("pick categories:", error);
      setStatus("error");
    }
  };

  return { downloadProgress, status, categories, personalize };
}
