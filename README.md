# DALnet Documentation Homepage

This is a complete static redesign prototype for `https://docs.dal.net/`.

## Design direction

- Purpose-built DALnet / IRC visual identity rather than a generic dashboard.
- Dark network-inspired background with subtle connection nodes and glow.
- Search is the primary action.
- Language navigation is now a searchable responsive directory.
- Existing DALnet destinations are preserved.
- Documentation Team receives a dedicated section and visible identity.
- No framework or build step is required.

## Files

- `index.html` — homepage markup
- `styles.css` — responsive visual system
- `script.js` — language filter, navigation, update date, search validation
- `assets/dalnet-docs-logo.png` — current DALnet Documentation Team logo asset

## Existing routes preserved

The language routes follow the current site, including:
`main.htm`, `mainur.htm`, `maines.htm`, `mainde.htm`, `mainfr.htm`, `mainpt.htm`, `mainro.htm`, `mainru.htm`, `mainhi.htm`, `maintr.htm`, `mainid.htm`, `mainmy.htm`, `mainar.htm`, `mainhe.htm`, `mainse.htm`, `mainno.htm`, `mainit.htm`, `mainba.htm`, `maingr.htm`.

The existing search continues to submit to `search.htm?start=1&q=...` through GET parameters.

## Deployment

Upload the contents of this folder to a test location first. The design uses only HTML/CSS/vanilla JS and can be deployed without npm, a framework, or a build pipeline.
