# ncp-website
New Century Party Main Website

## Privacy-friendly visitor stats (GitHub Pages)

This site now includes a lightweight GoatCounter loader in:

- `js/privacy-analytics.js`

It is disabled by default. To enable:

1. Create a free GoatCounter account and site at https://www.goatcounter.com/.
2. Open `js/privacy-analytics.js`.
3. Set `GOATCOUNTER_ENDPOINT` to your endpoint, for example:
   `https://YOUR-SITE.goatcounter.com/count`
4. Push to GitHub Pages.

After deployment, visits will start appearing in your GoatCounter dashboard without cookie banners or invasive user profiling.
