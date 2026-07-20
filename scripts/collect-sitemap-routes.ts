/** Emits all indexable routes as JSON for IndexNow postbuild (stdout). */
import { getAllSiteRoutes } from '../lib/seo';

console.log(JSON.stringify(getAllSiteRoutes()));
