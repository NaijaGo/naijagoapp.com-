# Customer website category imagery

Updated locally on 2026-10-12 for `naijagoapp.com`.

## Delivered assets

Generated with the built-in image generation tool, using the imagegen skill.
Each photo is representative category artwork, not evidence of a particular
vendor's listing, inventory, authenticity or price. The page makes that clear
and links visitors to the existing app download route for current listings.

All final website images are saved in **`public/images/categories/`**:

| Category | File | Dimensions | Bytes |
| --- | --- | --- | ---: |
| Electronics | `electronics.jpg` | 960 × 640 | 86,668 |
| Fashion | `fashion.jpg` | 960 × 640 | 83,243 |
| Groceries | `groceries.jpg` | 960 × 640 | 138,771 |
| Home & Living | `home-living.jpg` | 960 × 640 | 79,479 |
| Beauty | `beauty.jpg` | 960 × 640 | 63,023 |
| Computing | `computing.jpg` | 960 × 640 | 65,499 |

Total: 516,683 bytes, approximately 505 KiB. Existing Windows imaging tools
exported smaller JPEG copies at quality 88. The original generated PNG files
remain in the Codex generated-images directory. No new package was installed.

## Final prompt set

Each category was generated separately. The shared prompt was:

> Use case: product-mockup. Asset type: category-card photograph for the NaijaGo
> Nigerian shopping website. Create a premium photorealistic editorial studio
> still-life, landscape 3:2 composition. Background pale warm off-white, soft
> daylight from upper left, clean subtle contact shadows, restrained elegant
> ecommerce art direction, realistic materials and crisp detail. Arrange objects
> together centrally with generous empty margins on every edge so cropping a
> wide category card never cuts the subjects. No people, no hands, no lettering,
> no logos, no brand names, no watermarks, no text, no prices. This is
> representative category imagery, not a specific vendor listing.

Category-specific additions:

- **Electronics:** A matte charcoal portable Bluetooth speaker, a pair of sleek
  navy over-ear headphones and small wireless earbuds with an open charging
  case. Balanced modern gadget still life. Show clear believable objects with
  no screens or text.
- **Fashion:** Cream low-top trainers, a folded deep navy cotton shirt and an
  elegant medium tan leather handbag. Neutral contemporary everyday fashion
  collection, physically realistic natural folds and stitching.
- **Groceries:** A small woven grocery basket with fresh tomatoes, red and green
  peppers, a pineapple and ripe bananas, with two leafy greens and a cucumber
  beside it. Lush natural produce photographed fresh and clean, believable
  Nigerian grocery selection.
- **Home & Living:** A small ivory upholstered accent armchair, a warm wooden
  side table carrying a ceramic cup and a compact linen-shade table lamp, with
  a simple houseplant in a beige pot beside it. Miniature room-scale furniture
  vignette with a seamless studio background, beautifully composed natural
  home objects.
- **Beauty:** A plain opaque ivory skincare pump bottle, a simple amber glass
  bottle with dropper, a closed cream cosmetic jar, a neutral makeup brush and
  a small folded white towel. Refined personal-care still life with every
  container blank and unbranded. No medicine or medical claims.
- **Computing:** An open silver laptop showing only a softly illuminated blank
  navy screen, a compact wireless keyboard, a mouse and a slim dark external
  storage drive. Precisely proportioned computer accessories on a clean studio
  surface, no brands, no text.

## Website changes

- Image cards replace the existing icon-only category cards. Their six display
  labels remain Electronics, Fashion, Groceries, Home & Living, Beauty and
  Computing. The short subcategory previews use existing NaijaGo subcategory
  labels; this display content does not change the backend taxonomy or IDs.
- Category filtering searches only the featured category names and their
  subcategory labels. It is not a live product-inventory search.
- Clicking a category expands its subcategory preview. Native buttons support
  keyboard use and expose their expanded state. Actual shopping continues in
  the app through the existing download route.
- The hero uses the same photography with clearer customer-facing copy and
  working category/download links. Hard-coded sample prices, fabricated
  marketplace totals and unverified best-seller labels were removed.
- Category discovery now precedes the founder video. The existing video,
  legal/contact routes, company registration wording and app-store URLs remain.
- The header wordmark uses blue and green. The duplicated desktop download
  shortcut was removed; the menu still provides its download link and the
  existing app-download dialog remains available.
- Images have descriptive alternative text, fixed dimensions and lazy loading
  below the hero. Motion respects the reduced-motion preference. The document
  template uses the NaijaGo favicon, a specific title and description.

## Validation and publication status

- ESLint passed for the changed React components/data and existing App wiring.
- `npm.cmd run build` passed. Compiled assets and all six category photos are
  present in the ignored `dist/` directory.
- Isolated local desktop/mobile previews were visually reviewed with external
  traffic blocked. At 1440 and 390 CSS-pixel widths, content fit the viewport
  and all six category images loaded at their intended 960-pixel source width.
- No test suite was added or run. Physical devices, interactive browser flows
  and the live website were not tested. The existing baseline-browser-mapping
  package emitted a stale-data notice; dependencies were not changed.
- The first Windows build invocation was blocked by the system policy for
  `npm.ps1`. Using the existing `npm.cmd` executable resolved it without changing
  system execution policy.
- No backend, mobile app, admin panel, production data, package dependency,
  deployment configuration or store URL was changed. No commit, push or
  publication occurred during this website pass.

The production bundle is ready for review. Publishing it remains a separate
step; editing the React source does not update the live GitHub Pages site.
