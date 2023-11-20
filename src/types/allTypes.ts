export type ServiceCards = {
  id: number,
  image: string,
  title: string,
  text: React.ReactNode | string,
  moreInfo: string,
  page: string
}

export type BlockOfMoreReferences = {
  id: number,
  image: string,
  title: string,
  text: React.ReactNode | string
}

export type MoreReferencesWithImages = {
  blockOfMoreReferencesData: BlockOfMoreReferences
}

export type ReferenceImages = {
  id: number,
  image: string,
  alt: string
}