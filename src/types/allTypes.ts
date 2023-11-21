export type ServiceCards = {
  id: number,
  image: string,
  title: string,
  text: React.ReactNode | string,
  moreInfo: string,
  page: string
}

export type ReferenceSeriesOneBlock = {
  currentSeries: string[]
}