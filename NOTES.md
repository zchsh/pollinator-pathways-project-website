# Notes

## Next steps

- [x] Fix `/admin` redirect loop
- [x] Update `README.md`, with notes on deployment strategy
- [x] Add custom domain
  - I've purchased `pollinatorpathwaysproject.ca` on NameCheap
  - Going forward, could redirect `pollinatorpathwaysproject.com` to `.ca`
  - Alternately, if it's an option, could transfer `pollinatorpathwaysproject.com` to some custom P3 account that I could make in NameCheap. Would also transfer `pollinatorpathwaysproject.ca` to that account.
- [x] Ensure custom domain actually works
  - `pollinatorpathwaysproject.ca` should function as expected
- [x] Ensure non-editable build works as static pages, editable is editable
  - Can test this locally
  - Or, should be able to go to `pollinatorpathwaysproject.ca/admin`, and be redirected

## `/connect`

- [x] Build out functional contact form
  - Using [Formik](https://formik.org/docs/overview), familiar and I know it works
  - Next step is to get a submission to val.town working, should send the contact form as an email to myself. Can later update this to be a pollinator pathways email... but that will come WAY later.

## Navigation editing

- [x] Test out wiring up the navigation to be editable
- [ ] Implement editable top nav on all pages

## Remaining pages

- [ ] Get a rough implementation of all pages done
  - Goal is to have content on the page. Doesn't need to be editable. Doesn't need to look good. That can come later.
  - Already mostly done this, kind of "tracking" it in Figma
- [ ] Get a polished design done for each page
  - Stay in Figma for now. You'll have wireframed everything out, screengrab the wireframes and reference them.
  - Current goal is parity with the existing website. Can probably avoid review cycles by sticking to that.
- [ ] Plan out design and development tasks for remaining pages
  - aka rough wire-framing, searching for potentially sharp edges
  - Component-by-component breakdown might be nice
  - Dropping placeholder components into the page might make sense as well. Could use this as a way to test the basic functionality... does it feel right? If so, then layer nicer design, then do final implementation. If not, iterate on the stubbed-in implementation till it feels right.

- [ ] Continue work on page implementation
  - Once first cut is shared, may as well get ahead of it. Start with what you feel most sure of.

### Blog post changes needed

- [x] Model support for "cover image"
- [x] Model support for "author" (exists on current blog, even if unused)
  - For now, this can be text field I think... later could have author collection
- [x] Render "author"
- [x] Render "cover image"
- [x] Model support for "category"
- [x] Render "category" (link to category pages?)
- [x] Model support for "date"
- [x] Render "date"

### Blog post migration

Migration status: 3 / 33

- [x] <https://www.pollinatorpathwaysproject.com/post/program-overview-central-london-pathway>
- [x] <https://www.pollinatorpathwaysproject.com/post/earth-day-is-everyday>
- [ ] <https://www.pollinatorpathwaysproject.com/post/pollinators-to-expect-in-your-garden-this-spring>
- [ ] <https://www.pollinatorpathwaysproject.com/post/spring-is-near-time-to-start-planning-your-garden>
- [ ] <https://www.pollinatorpathwaysproject.com/post/why-pollinators-are-the-best-innovators>
- [ ] <https://www.pollinatorpathwaysproject.com/post/looking-out-for-the-little-guy>
- [ ] <https://www.pollinatorpathwaysproject.com/post/pollinator-pathways-garden-at-western-fair-and-museum-london>
- [ ] <https://www.pollinatorpathwaysproject.com/post/new-year-new-environmental-actions>
- [ ] <https://www.pollinatorpathwaysproject.com/post/sowing-your-seeds-in-the-winter>
- [ ] <https://www.pollinatorpathwaysproject.com/post/getting-to-know-pollinators>
- [ ] <https://www.pollinatorpathwaysproject.com/post/pollinator-in-a-box-an-environmentally-friendly-holiday-gift>
- [ ] <https://www.pollinatorpathwaysproject.com/post/winterizing-your-garden>
- [ ] <https://www.pollinatorpathwaysproject.com/post/pollinators-from-around-the-world-the-himalayan-cliff-honey-bee>
- [ ] <https://www.pollinatorpathwaysproject.com/post/eco-mimicry-an-alternative-to-blandscaping>
- [ ] <https://www.pollinatorpathwaysproject.com/post/pollination-with-purpose>
- [ ] <https://www.pollinatorpathwaysproject.com/post/pollinator-pathways-take-ecosystem-scientist-down-a-new-path>
- [ ] <https://www.pollinatorpathwaysproject.com/post/growing-a-community-withthe-pollinator-pathways-project>
- [ ] <https://www.pollinatorpathwaysproject.com/post/london-environmental-network-and-pollinator-pathways-project-are-launching-a-spring-giveaway>
- [x] <https://www.pollinatorpathwaysproject.com/post/six-bees-to-look-out-for-this-spring-summer>
- [ ] <https://www.pollinatorpathwaysproject.com/post/dutch-ingenuity-leads-the-way-saving-pollinators-in-urban-environments>
- [ ] <https://www.pollinatorpathwaysproject.com/post/now-hiring-pollinator-pathways-communications-coordinator>
- [ ] <https://www.pollinatorpathwaysproject.com/post/monarch-butterflies-in-the-city>
- [ ] <https://www.pollinatorpathwaysproject.com/post/london-ont-group-paving-pollinator-pathways-in-honour-of-world-bee-day>
- [ ] <https://www.pollinatorpathwaysproject.com/post/8-pollinator-favourite-spring-blooms>
- [ ] <https://www.pollinatorpathwaysproject.com/post/15-in-season-holiday-recipes>
- [ ] <https://www.pollinatorpathwaysproject.com/post/boycott-plastic-with-these-bees-knees-food-wraps>
- [ ] <https://www.pollinatorpathwaysproject.com/post/bee-kind-helping-urban-pollinators>
- [ ] <https://www.pollinatorpathwaysproject.com/post/what-is-a-pollinator-species-how-does-pollination-work>
- [ ] <https://www.pollinatorpathwaysproject.com/post/bee-hotels-back-to-nature>
- [ ] <https://www.pollinatorpathwaysproject.com/post/the-importance-of-water-in-a-pollinator-garden>
- [ ] <https://www.pollinatorpathwaysproject.com/post/how-to-start-a-pollinator-garden>
- [ ] <https://www.pollinatorpathwaysproject.com/post/so-what-are-pollinator-pathways-anyway>
- [ ] <https://www.pollinatorpathwaysproject.com/post/community-engaged-learning-project>
