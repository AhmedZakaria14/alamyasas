# Exact-replica update checklist

- [ ] Unpack and inventory all seven supplied ZIP archives.
- [ ] Identify the canonical archive and duplicated page/assets bundles.
- [ ] Extract original HTML, CSS, JavaScript, fonts, images, and page routes.
- [ ] Compare the supplied source against the current React implementation.
- [ ] Rebuild missing layouts, content, responsive rules, and interactions.
- [ ] Reproduce the original scroll and entrance animations.
- [ ] Verify all source pages and links in desktop and mobile previews.
- [ ] Save a checkpoint and push the exact-replica update to GitHub.

## HTML conversion

- [ ] Inventory React routes, shared components, CSS, and interactions.
- [ ] Create standalone HTML documents for all public pages.
- [ ] Extract shared CSS and implement vanilla JavaScript navigation, FAQ, and scroll animations.
- [ ] Verify direct loading of every HTML page on desktop and mobile.
- [ ] Remove React-only runtime assumptions from the static delivery.
- [ ] Commit and push the HTML conversion to GitHub.

## Vercel deployment fix

- [ ] Inspect repository root, Vercel configuration, and deployed entrypoint assumptions.
- [ ] Ensure every HTML page and referenced asset exists at the deployment root.
- [ ] Add static-hosting fallback rules if needed without exposing source code as page content.
- [ ] Test root page, internal pages, assets, and mobile navigation locally.
- [ ] Commit and push the Vercel deployment fix to GitHub.

## Mobile menu fix

- [ ] Ensure the mobile navigation is hidden by default.
- [ ] Open it only after the menu button is clicked and close it after navigation.
- [ ] Test desktop and mobile breakpoints, then push the fix to GitHub.

## Arabic RTL conversion

- [ ] Select and load a distinctive Arabic font suitable for a Saudi-facing brand.
- [ ] Translate every page, navigation label, CTA, form label, footer item, and status message.
- [ ] Set Arabic document metadata and apply RTL direction globally.
- [ ] Adjust alignment, icon direction, spacing, dropdowns, mobile navigation, and forms for RTL.
- [ ] Test all pages at desktop and mobile widths.
- [ ] Commit and push the Arabic RTL version to GitHub.

## Arabic compatibility repair

- [ ] Audit image, stylesheet, script, and font URLs from every root HTML page.
- [ ] Check for missing assets and broken relative paths on direct page loads.
- [ ] Repair mobile breakpoints, overflow, text wrapping, buttons, cards, forms, and navigation.
- [ ] Add compatibility fallbacks for browsers that do not support newer CSS features.
- [ ] Test all eight pages at desktop, tablet, and mobile widths.
- [ ] Push the repair and save a new stable checkpoint.

## Local SEO: Cairo and Giza

- [ ] Define a clean district/area taxonomy for Cairo and Giza and map primary search intents.
- [ ] Create unique location-page templates with title, meta description, canonical, Open Graph, FAQ, and LocalBusiness schema.
- [ ] Write original Arabic content for each target area without keyword stuffing or duplicate doorway pages.
- [ ] Add relevant local imagery, alt text, breadcrumbs, internal links, and service-to-area navigation.
- [ ] Build an interactive mega-menu for القاهرة والجيزة with searchable or grouped area links.
- [ ] Generate sitemap.xml, robots.txt, and localized structured data.
- [ ] Test page rendering, mobile navigation, asset loading, metadata, and broken links.
- [ ] Push the SEO expansion and save a stable checkpoint.

## Expanded Cairo and Giza coverage

- [ ] Compile a broad area inventory including official districts, named neighborhoods, suburbs, and major compounds/settlements.
- [ ] Normalize duplicate names and create stable URL slugs for Arabic pages.
- [ ] Add unique area context and service wording for every new page instead of cloning identical doorway content.
- [ ] Update the interactive menu, areas index, related-area links, sitemap, and structured data.
- [ ] Audit the expanded page set for missing files, broken links, metadata, and mobile layout.
- [ ] Commit the expanded coverage and save a new stable checkpoint.

## Comprehensive local SEO expansion

- [ ] Collect official districts, neighborhoods, cities, villages, suburbs, compounds, and common aliases for Cairo and Giza.
- [ ] Record source URLs and distinguish administrative names from colloquial search names.
- [ ] Map aliases to canonical pages or create a new page only when the intent and local context are meaningfully different.
- [ ] Add service-specific and area-specific content with useful local details, not spun or duplicate copy.
- [ ] Expand area navigation, breadcrumbs, related-area links, sitemap, and structured data.
- [ ] Audit indexability, canonical URLs, metadata, assets, mobile layout, and broken links.
- [ ] Push the expansion and save a stable checkpoint.

## Al Alamy brand identity

- [ ] Prepare the supplied logo for header and favicon use without re-viewing the attachment.
- [ ] Replace the Movion logo and brand name with «العالمي» throughout all generated pages.
- [ ] Apply the logo blue and navy colors to the identity accents while preserving readability.
- [ ] Update title, meta, Open Graph, schema, sitemap branding references, and favicon links.
- [ ] Test header/logo rendering on desktop and mobile, then push and save a checkpoint.

## تدقيق وإصلاحات ما بعد الهوية

- [x] فحص الحزمة المنشورة في الجذر ومجلد html-site لاكتشاف فروق النشر أو الروابط أو الأصول الناقصة.
- [x] تدقيق metadata وcanonical وOpen Graph وJSON-LD لكل صفحة منطقة في القاهرة والجيزة.
- [x] تحسين خصوصية العنوان والوصف والمحتوى الهيكلي لصفحات المناطق من دون تكرار أو حشو كلمات مفتاحية.
- [x] ضبط أبعاد الشعار وموضعه في الهيدر والتذييل واستجابته على الشاشات الصغيرة.
- [x] إعادة بناء صفحات HTML واختبار الروابط الداخلية وملفات sitemap وrobots وعدم ظهور الاسم السابق.
- [ ] حفظ checkpoint ومزامنة الإصلاحات إلى GitHub.

## شفافية شعار الهيدر

- [x] إزالة الخلفية غير المرغوبة من نسخة شعار العالمي المستخدمة في الهيدر فقط، مع إبقاء التذييل وfavicon بلا تغيير.
- [x] إعادة بناء الصفحات والتحقق من مظهر الشعار على سطح المكتب والهاتف ثم مزامنة التعديل إلى GitHub.
