export type ServiceCards = {
  id: number,
  image: string,
  title: string,
  text: React.ReactNode | string
}

export type BlockOfMoreReferences = {
  id: number,
  image: string,
  title: string,
  text: React.ReactNode | string
}

export type MoreReferencesWithImages = {
  blockOfMoreReferencesData: BlockOfMoreReferences,
  referenceImages: string[]
}

export type ReferenceImages = {
  id: number,
  image: string,
  alt: string
}