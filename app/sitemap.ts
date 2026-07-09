import type { MetadataRoute } from 'next';
import {
  buildSitemapEntries,
  getRoutesForSitemapShard,
  SITEMAP_SHARD_IDS,
  type SitemapShardId,
} from '@/lib/seo';

export async function generateSitemaps() {
  return SITEMAP_SHARD_IDS.map((id) => ({ id }));
}

export default async function sitemap(props: {
  id: Promise<SitemapShardId>;
}): Promise<MetadataRoute.Sitemap> {
  const id = await props.id;
  return buildSitemapEntries(getRoutesForSitemapShard(id));
}
