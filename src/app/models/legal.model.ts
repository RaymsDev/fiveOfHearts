export interface LegalMention {
  title: string;
  content: (string | { [key: string]: string })[];
}

export interface PrivacyPolicy {
  title: string;
  content: (string | { [key: string]: string | string[] })[];
}
