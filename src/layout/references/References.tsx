import "./references.scss"
import { useState } from "react"
import { ReferenceSeries, ReferenceSlider } from "../../components/"
import dataReferenceSeries from "../../data/dataReferenceSeries"
import { DoubleArrow } from "../../assets/svgIcons"

export const References = () => {
  const [indexSeriesComponent, setIndexSeriesComponent] = useState(0)

  /* Store Assets from folders */
  function importAll(r: any): string[] {
    const assets: string[] = []
    r.keys().forEach((item: string, index: number) => {
      assets[index] = r(item)
    })
    return assets
  }

  // Thumbnails
  const series1 = importAll(require.context("../../assets/images/references/thumbnails/series1", false, /\.(png|jpe?g)$/))
  const series2 = importAll(require.context("../../assets/images/references/thumbnails/series2", false, /\.(png|jpe?g)$/))
  const series3 = importAll(require.context("../../assets/images/references/thumbnails/series3", false, /\.(png|jpe?g)$/))
  const series4 = importAll(require.context("../../assets/images/references/thumbnails/series4", false, /\.(png|jpe?g)$/))
  const series5 = importAll(require.context("../../assets/images/references/thumbnails/series5", false, /\.(png|jpe?g)$/))
  const series6 = importAll(require.context("../../assets/images/references/thumbnails/series6", false, /\.(png|jpe?g)$/))
  const series7 = importAll(require.context("../../assets/images/references/thumbnails/series7", false, /\.(png|jpe?g)$/))
  const series8 = importAll(require.context("../../assets/images/references/thumbnails/series8", false, /\.(png|jpe?g)$/))
  const series9 = importAll(require.context("../../assets/images/references/thumbnails/series9", false, /\.(png|jpe?g)$/))
  const series10 = importAll(require.context("../../assets/images/references/thumbnails/series10", false, /\.(png|jpe?g)$/))

  //Full size
  const series1FullSized = importAll(require.context("../../assets/images/references/fullSize/series1", false, /\.(png|jpe?g)$/))
  const series2FullSized = importAll(require.context("../../assets/images/references/fullSize/series2", false, /\.(png|jpe?g)$/))
  const series3FullSized = importAll(require.context("../../assets/images/references/fullSize/series3", false, /\.(png|jpe?g)$/))
  const series4FullSized = importAll(require.context("../../assets/images/references/fullSize/series4", false, /\.(png|jpe?g)$/))
  const series5FullSized = importAll(require.context("../../assets/images/references/fullSize/series5", false, /\.(png|jpe?g)$/))
  const series6FullSized = importAll(require.context("../../assets/images/references/fullSize/series6", false, /\.(png|jpe?g)$/))
  const series7FullSized = importAll(require.context("../../assets/images/references/fullSize/series7", false, /\.(png|jpe?g)$/))
  const series8FullSized = importAll(require.context("../../assets/images/references/fullSize/series8", false, /\.(png|jpe?g)$/))
  const series9FullSized = importAll(require.context("../../assets/images/references/fullSize/series9", false, /\.(png|jpe?g)$/))
  const series10FullSized = importAll(require.context("../../assets/images/references/fullSize/series10", false, /\.(png|jpe?g)$/))

  const referenceSeriesComponents = [
    <ReferenceSeries
      {...dataReferenceSeries.series1}
      series={series1}
      seriesFullSized={series1FullSized}
    />,

    <ReferenceSeries
      {...dataReferenceSeries.series2}
      series={series2}
      seriesFullSized={series2FullSized}
    />,

    <ReferenceSeries
      {...dataReferenceSeries.series3}
      series={series3}
      seriesFullSized={series3FullSized}
    />,

    <ReferenceSeries
      {...dataReferenceSeries.series5}
      series={series5}
      seriesFullSized={series5FullSized}
    />,

    <ReferenceSeries
      {...dataReferenceSeries.series6}
      series={series6}
      seriesFullSized={series6FullSized}
    />,

    <ReferenceSeries
      {...dataReferenceSeries.series7}
      series={series7}
      seriesFullSized={series7FullSized}
    />,

    <ReferenceSeries
      {...dataReferenceSeries.series8}
      series={series8}
      seriesFullSized={series8FullSized}
    />,

    <ReferenceSeries
      {...dataReferenceSeries.series9}
      series={series9}
      seriesFullSized={series9FullSized}
    />,

    <ReferenceSeries
      {...dataReferenceSeries.series10}
      series={series10}
      seriesFullSized={series10FullSized}
    />
  ]

  /* Buttons Show Series */
  const showNextSeriesComponent = () => {
    setIndexSeriesComponent(indexSeriesComponent + 1)

    if (indexSeriesComponent === referenceSeriesComponents.length - 1) setIndexSeriesComponent(0)
  }

  const showPreviousSeriesComponent = () => {
    setIndexSeriesComponent(indexSeriesComponent - 1)

    if (indexSeriesComponent <= 0) setIndexSeriesComponent(referenceSeriesComponents.length - 1)
  }

  return (
    <section className="references" id="reference">
      <article className="references-article container-second">

        <ReferenceSlider />

        <div className="references-series-container">
          <section className="references-series">
            {referenceSeriesComponents[indexSeriesComponent]}
          </section>

          <button
            className="references-left-btn"
            onClick={showPreviousSeriesComponent}
            title="předchozí reference">
            <DoubleArrow />
          </button>

          <button
            className="references-right-btn"
            onClick={showNextSeriesComponent}
            title="další reference">
            <DoubleArrow />
          </button>
        </div>
      </article>
    </section >
  )
}