export type ServiceCards = {
  id: number,
  image: string,
  title: string,
  text: React.ReactNode | string,
  moreInfo: string,
  page: string,
  delay: number
}

export type ReferenceSeriesOneBlock = {
  currentSeries: string[]
}