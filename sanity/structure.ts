import type {StructureResolver} from 'sanity/structure'

const PRIMARY_TYPE_IDS = new Set([
  'page',
  'contentCard',
  'partnerLogo',
  'teamMember',
  'galleryEvent',
  'navbarSettings',
])

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
  S.listItem()
    .title('Navigation')
    .id('navbarSettings')
    .child(
      S.document()
        .schemaType('navbarSettings')
        .documentId('navbarSettings')
        .title('Navigation')
    ),
  S.listItem()
    .title('Support Services Page')
    .child(
      S.documentList()
        .title('Support Services Page')
        .schemaType('page')
        .filter('_type == "page" && slug.current == $slug')
        .params({ slug: 'support' })
    ),
  S.divider(),
  S.documentTypeListItem('page').title('Pages'),
  S.divider(),
  S.documentTypeListItem('contentCard').title('Cards'),
  S.documentTypeListItem('partnerLogo').title('Partner logos'),
  S.documentTypeListItem('teamMember').title('Team members'),
  S.documentTypeListItem('galleryEvent').title('Past events'),
  ...S.documentTypeListItems().filter(
    (listItem) => !PRIMARY_TYPE_IDS.has(listItem.getId() || '')
  ),
])
