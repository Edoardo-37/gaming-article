# ConsoleVault - Article and About Page
This is an article page from ConsoleVault built with **`HTML, CSS and JS`** about the best games of the last decade (2010-2019). **ConsoleVault is an invented brand** with which i have already done a react app with a full list of all the Nintendo, Sony and Microsoft consoles ever released. 

---
## NOTE

*This website is only for practice* and some buttons or links may not work (Example: the links of the dropdown named 'approfondimenti' don't redirect to any page. They have the `src` attribute set to `#`)

---

`HTML`:
1. **Article head** with title and intro.
2. **Article body** section with the main content of teh article
3. **Footer**
4. **About page** with some info on the brand.

`CSS`
- Responsive for mobile and desktop with @media
- Mobile first approach
- Grid & Flex
- `:root` variables
- Dark mode

`JavaScript`
- **Scroll-padding-top** property dynamically set by taking the exact `offsetHeight` of the navbar
- **Progress bar**
- **Scroll to top button**: when progress bar `scroll` value is at a certain value this fixed button appears to make navigation across the article easier
- **Lazy loading**