import S from "@sanity/desk-tool/structure-builder";
import { RiLinksLine as socialMediaIcon } from "react-icons/ri";
import { BsFillGearFill as settingsIcon } from "react-icons/ri";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          // Make a list in the second pane called Settings
          S.list()
            .title("Settings")
            .items([
              S.listItem()
                .title("Post Categories")
                .schemaType("category")
                .child(S.documentTypeList("category").title("Post Categories")),
              S.listItem()
                .title("Snippet Categories")
                .schemaType("snippetCategory")
                .child(
                  S.documentTypeList("snippetCategory").title(
                    "Snippet Categories"
                  )
                ),
              S.listItem()
                .title("Legal")
                .schemaType("legal")
                .child(S.documentTypeList("legal").title("Legal")),
              S.listItem()
                .title("Social Media")
                .icon(socialMediaIcon)
                .child(
                  S.editor()
                    .schemaType("socialMedia")
                    .documentId("socialMedia")
                    .title("Social Media Links")
                ),
            ])
        ),
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["category", "snippetCategory", "legal", "socialMedia"].includes(
            listItem.getId()
          )
      ),
    ]);
