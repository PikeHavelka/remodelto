import "./referenceSeries.scss"
import SeriesIntroductionPhoto5 from "../../assets/images/references/SeriesIntroductions/SeriesIntroduction5.jpg"

export const ReferenceSeries5 = () => {
  /* Store Assets from folders */
  function importAll(r: any): string[] {
    const assets: string[] = []
    r.keys().forEach((item: string, index: number) => {
      assets[index] = r(item)
    })
    return assets
  }

  const dataReferenceSeries5 = importAll(require.context("../../assets/images/references/series5", false, /\.(png|jpe?g)$/))

  return (
    <section className="references-series">
      <div className="references-series-title-text-photo">
        <div className="references-series-title-text">
          <div className="references-series-subtitle">
            <h2>Renovace rodinného domu</h2>
            <h3>Reference</h3>
          </div>

          <div className="references-series-text">
            <p>
              Během rekonstrukce interiéru rodinného domu došlo k důkladné proměně prostorů. Práce se zaměřily hlavně na výměnu zastaralých sanitárních zařízení, což zahrnovalo modernizaci koupelny. A výměnu starého schodiště.
            </p>
          </div>
        </div>

        <img 
          className="references-series-introduction-photo"
          src={SeriesIntroductionPhoto5}
          alt="rekonstrukce"
        />
      </div>

      <div className="references-series-img-container">
        {dataReferenceSeries5.map((oneImage, index) => {

          return <figure key={index}>
            <img
              src={oneImage}
              alt="rekonstrukce"
            />
          </figure>
        })}
      </div>
    </section>
  )
}
