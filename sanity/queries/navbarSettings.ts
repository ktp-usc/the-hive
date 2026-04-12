import { defineQuery } from "next-sanity";

export const navbarSettingsQuery = defineQuery(`
  coalesce(
    *[_type == "navbarSettings" && _id == "drafts.navbarSettings"][0],
    *[_type == "navbarSettings" && _id == "navbarSettings"][0]
  ){
    items[]{
      _key,
      _type,
      _type == "navLink" => {
        labelEn,
        labelEsMx,
        href,
        openInNewTab
      },
      _type == "navDropdown" => {
        labelEn,
        labelEsMx,
        items[]{
          _key,
          labelEn,
          labelEsMx,
          href,
          openInNewTab
        }
      }
    },
    footerQuickLinks[]{
      _key,
      labelEn,
      labelEsMx,
      href,
      openInNewTab
    },
    donate{
      labelEn,
      labelEsMx,
      url,
      openInNewTab
    }
  }
`);

export type NavbarSettingsDonate = {
  labelEn?: string | null;
  labelEsMx?: string | null;
  url?: string | null;
  openInNewTab?: boolean | null;
};

export type NavbarSettingsNavLink = {
  _key?: string;
  _type: "navLink";
  labelEn?: string | null;
  labelEsMx?: string | null;
  href?: string | null;
  openInNewTab?: boolean | null;
};

export type NavbarSettingsNavDropdown = {
  _key?: string;
  _type: "navDropdown";
  labelEn?: string | null;
  labelEsMx?: string | null;
  items?: Array<{
    _key?: string;
    labelEn?: string | null;
    labelEsMx?: string | null;
    href?: string | null;
    openInNewTab?: boolean | null;
  }> | null;
};

export type NavbarSettingsItem = NavbarSettingsNavLink | NavbarSettingsNavDropdown;

/** Flat link row from `footerQuickLinks` (always `navLink` objects). */
export type NavbarSettingsFooterLink = {
  _key?: string;
  labelEn?: string | null;
  labelEsMx?: string | null;
  href?: string | null;
  openInNewTab?: boolean | null;
};

export type NavbarSettingsData = {
  items?: NavbarSettingsItem[] | null;
  footerQuickLinks?: NavbarSettingsFooterLink[] | null;
  donate?: NavbarSettingsDonate | null;
} | null;
