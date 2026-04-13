import {type SchemaTypeDefinition} from 'sanity'
import {contentCard} from './contentCard'
import {galleryEvent} from './galleryEvent'
import {navDropdown, navLink, navbarSettings} from './navbarSettings'
import {landingPopup} from './landingPopup'
import {page} from './page'
import {pageSectionTypes} from './pageSections'
import {partnerLogo} from './partnerLogo'
import {siteSettings} from './siteSettings'
import {teamMember} from './teamMember'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    ...pageSectionTypes,
    navLink,
    navDropdown,
    landingPopup,
    contentCard,
    partnerLogo,
    teamMember,
    galleryEvent,
    page,
    navbarSettings,
    siteSettings,
  ],
}
