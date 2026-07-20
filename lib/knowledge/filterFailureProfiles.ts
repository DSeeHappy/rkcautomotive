/** Model-scoped filtering for brandFailureProfiles — prevents cross-model contamination. */

export type FailureProfile = {
  title: string;
  description: string;
};

/** Exact catalog match — no substring includes (TLX ≠ TLX Type S). */
export function matchesCommonModel(
  modelName: string,
  commonModels: readonly string[],
): boolean {
  const normalized = modelName.toLowerCase();
  return commonModels.some((commonModel) => commonModel.toLowerCase() === normalized);
}

/**
 * Longest-first mention detection so "TLX Type S" in text does not also match base "TLX".
 */
export function getModelsMentionedInProfile(
  profile: FailureProfile,
  commonModels: readonly string[],
): string[] {
  const text = `${profile.title} ${profile.description}`.toLowerCase();
  const sorted = [...commonModels].sort((a, b) => b.length - a.length);
  let remaining = text;
  const mentioned: string[] = [];

  for (const commonModel of sorted) {
    const token = commonModel.toLowerCase();
    if (remaining.includes(token)) {
      mentioned.push(commonModel);
      remaining = remaining.replaceAll(token, ' ');
    }
  }

  return mentioned;
}

/** True when a failure profile explicitly names this model (or a variant name that equals it). */
export function profileAppliesToModel(
  profile: FailureProfile,
  modelName: string,
  commonModels: readonly string[],
): boolean {
  const mentioned = getModelsMentionedInProfile(profile, commonModels);
  if (mentioned.length === 0) return false;
  const normalized = modelName.toLowerCase();
  return mentioned.some((name) => name.toLowerCase() === normalized);
}

/** Keep only failure modes that explicitly apply to the requested model slug/name. */
export function filterFailureProfilesForModel(
  profiles: readonly FailureProfile[],
  modelName: string,
  commonModels: readonly string[],
): FailureProfile[] {
  return profiles.filter((profile) => profileAppliesToModel(profile, modelName, commonModels));
}

export function formatFailureProfiles(profiles: readonly FailureProfile[]): string {
  return profiles.map((profile) => `${profile.title}: ${profile.description}`).join(' ');
}

/** Normalize buyerWarning to mention only the target model when possible. */
export function modelScopedBuyerWarning(
  buyerWarning: string,
  modelName: string,
  commonModels: readonly string[],
): string {
  const normalized = modelName.toLowerCase();
  if (buyerWarning.toLowerCase().includes(normalized)) return buyerWarning;
  return `When considering a used ${modelName}, prioritize a complete service history and a pre-purchase inspection. ${buyerWarning.split('.')[0] ?? buyerWarning}.`;
}
