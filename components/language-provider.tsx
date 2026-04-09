"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import {
  defaultLanguage,
  isLanguageCode,
  languageCookieKey,
  languageStorageKey,
  siteCopy,
  type LanguageCode,
} from "@/lib/site-copy";

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function readLanguageCookie() {
  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${languageCookieKey}=`));

  if (!cookie) {
    return undefined;
  }

  const value = decodeURIComponent(cookie.split("=")[1] ?? "");

  return isLanguageCode(value) ? value : undefined;
}

function subscribe(callback: () => void) {
  const handleChange = () => callback();

  window.addEventListener("storage", handleChange);
  window.addEventListener("languagechange", handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener("languagechange", handleChange);
  };
}

function getSnapshot(initialLanguage: LanguageCode) {
  const storedLanguage = window.localStorage.getItem(languageStorageKey);

  if (storedLanguage && isLanguageCode(storedLanguage)) {
    return storedLanguage;
  }

  return readLanguageCookie() ?? initialLanguage;
}

export function LanguageProvider({
  children,
  initialLanguage = defaultLanguage,
}: {
  children: ReactNode;
  initialLanguage?: LanguageCode;
}) {
  const language = useSyncExternalStore(
    subscribe,
    () => getSnapshot(initialLanguage),
    () => initialLanguage
  );

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(languageStorageKey, language);
    document.cookie = `${languageCookieKey}=${encodeURIComponent(language)}; path=/; max-age=31536000; SameSite=Lax`;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (nextLanguage: LanguageCode) => {
        window.localStorage.setItem(languageStorageKey, nextLanguage);
        document.cookie = `${languageCookieKey}=${encodeURIComponent(nextLanguage)}; path=/; max-age=31536000; SameSite=Lax`;
        window.dispatchEvent(new Event("languagechange"));
      },
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}

export function useSiteCopy() {
  const { language } = useLanguage();

  return siteCopy[language] ?? siteCopy[defaultLanguage];
}
