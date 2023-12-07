export type ServiceCards = {
  id: number,
  image: string,
  title: string,
  text: React.ReactNode | string,
  moreInfo: string,
  page: string,
  delay: number
}

export type ReferenceSeriesOneBlock = { // odstranit
  currentSeries: string[]
}

export type ReferenceSeries = {
  id: number,
  title: string,
  references: string,
  description: string
}

export type ReferenceSeriesAllProps = {
  currentSeries: string[]
  dataReferenceSeriesAll: ReferenceSeries[]
  index: number
}