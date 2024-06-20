export interface SocialMediaContainer {
  /**
   * Child content of
   */
  children: React.ReactElement[];
}

export function SocialMediaContainer({ children }: SocialMediaContainer) {
  return <div className="flex flex-row items-center justify-around">{children}</div>;
}
