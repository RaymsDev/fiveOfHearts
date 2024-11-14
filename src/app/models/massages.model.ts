export interface MassageSection {
  subtitle: string;
  text: string;
}

export interface MassageBlock {
  image: string;
  alt: string;
  sections: MassageSection[];
}

export interface MassageContent {
  title: string;
  blocks: MassageBlock[];
}
