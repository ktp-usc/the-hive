import type {StructureResolver} from 'sanity/structure'

const PRIMARY_TYPE_IDS = new Set([
  'page',
  'contentCard',
  'partnerLogo',
  'teamMember',
  'galleryEvent',
  'siteSettings',
])

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton — always open the one settings document directly
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('site-settings')
            .title('Site Settings'),
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
