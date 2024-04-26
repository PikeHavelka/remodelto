import { MouseEventHandler } from "react"

export type ServiceCards = {
  id: number,
  image: string,
  title: string,
  text: React.ReactNode | string,
  moreInfo: string
  page: string,
  delay: number
}

export type ReferenceSeries = {
  id: number,
  title: string,
  references: string,
  description: React.ReactNode | string,
  titleImage: string
}

export type ReferenceSeriesProps = ReferenceSeries & {
  series: string[],
  seriesFullSized: string[],
  showPreviousSeriesComponent: MouseEventHandler,
  showNextSeriesComponent: MouseEventHandler
}

export type logosTypes = {
  img: string,
  url: string,
  ariaLabel: string
}