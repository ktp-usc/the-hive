import {type SchemaTypeDefinition} from 'sanity'
import {navDropdown, navLink, navbarSettings} from './navbarSettings'
import {landingPopup} from './landingPopup'
import {page} from './page'
import {pageSectionTypes} from './pageSections'
import {partnerLogo} from './partnerLogo'
import {siteSettings} from './siteSettings'
import {teamMember} from './teamMember'
import { localizedString, localizedText } from './localized'

export const schema: {types: SchemaTypeDefinition[]} = {
    types: [
        localizedString,
        localizedText,

        ...pageSectionTypes,

        navLink,
        navDropdown,
        landingPopup,
        partnerLogo,
        teamMember,
        page,
        navbarSettings,
        siteSettings,
    ],
}
