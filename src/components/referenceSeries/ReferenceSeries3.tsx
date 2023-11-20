import "./referenceSeries.scss"
import SeriesIntroductionPhoto3 from "../../assets/images/references/SeriesIntroductions/SeriesIntroduction3.jpg"

export const ReferenceSeries3 = () => {
  /* Store Assets from folders */
  function importAll(r: any): string[] {
    const assets: string[] = []
    r.keys().forEach((item: string, index: number) => {
      assets[index] = r(item)
    })
    return assets
  }

  const dataReferenceSeries3 = importAll(require.context("../../assets/images/references/series3", false, /\.(png|jpe?g)$/))

  return (
    <section className="references-series">
      <div className="references-series-title-text-photo">
        <div className="references-series-title-text">
          <div className="references-series-subtitle">
            <h2>Renovace rodinného domku s terasou</h2>
            <h3>Reference</h3>
          </div>


          <div className="references-series-text">
            <p>
              Kompletní rekonstrukce interiéru rodinného domu se vším všudy. Práce zahrnovaly výměnu kabeláže, modernizaci topení, instalaci nových sanitárních zařízení a spoustu dalších. Stará a zastaralá infrastruktura ustoupila inovativním systémům, zajišťujícím nejen efektivitu, ale i bezpečnost.
            </p>
          </div>
        </div>

        <img 
          className="references-series-introduction-photo"
          src={SeriesIntroductionPhoto3}
          alt="rekonstrukce"
        />
      </div>

      <div className="references-series-img-container">
        {dataReferenceSeries3.map((oneImage, index) => {

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
