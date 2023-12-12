import { SeriesIntroduction1, SeriesIntroduction2, SeriesIntroduction3, SeriesIntroduction4, SeriesIntroduction5, SeriesIntroduction6, SeriesIntroduction7, SeriesIntroduction8, SeriesIntroduction9, SeriesIntroduction10 } from "../assets/images/references"
import { ReferenceSeries } from "../types/allTypes"

const dataReferenceSeries: { [key: string]: ReferenceSeries } = {
  series1: {
    id: 1,
    title: "Renovace rodinného domu",
    references: "Reference",
    description: <p>Během <strong>rekonstrukce interiéru rodinného domu</strong> došlo k důkladné proměně prostorů. Práce se zaměřily hlavně na výměnu <strong>zastaralých sanitárních zařízení</strong>, což zahrnovalo <strong>modernizaci koupelny</strong> a výměnu starého schodiště.</p>,
    titleImage: SeriesIntroduction1
  },

  series2: {
    id: 2,
    title: "Koupelna s novým kabátem",
    references: "Reference",
    description: <p>Nový design koupelny nejen že odráží vkus našeho klienta, ale také nabízí maximální funkcionalitu. S novými prvky, <strong>kvalitními materiály</strong> a inovativním uspořádáním jsme vytvořili elegantní prostředí.</p>,
    titleImage: SeriesIntroduction2
  },

  series3: {
    id: 3,
    title: "Malý a velmi útulný",
    references: "Reference",
    description: <p>Dokončili jsme <strong>rekonstrukci malého bytu</strong> v samém srdci Prahy a jsme nadšeni výsledkem. Navzdory omezenému prostoru se nám podařilo vytvořit elegantní a funkční obydlí. Propojili jsme design s praktičností, využili jsme každý kousek prostoru a vytvořili harmonické prostředí.</p>,
    titleImage: SeriesIntroduction3
  },

  series4: {
    id: 4,
    title: "NEVYPLNĚNO 4",
    references: "Reference",
    description: <p>NEVYPLNĚNO</p>,
    titleImage: SeriesIntroduction4
  },

  series5: {
    id: 5,
    title: "Renovace rodinného domku s terasou",
    references: "Reference",
    description: <p>Kompletní <strong>rekonstrukce rodinného domku s terasou</strong>. Práce zahrnovaly <strong>výměnu kabeláže</strong>, <strong>modernizaci topení</strong> a <strong>instalaci nových sanitárních zařízení</strong>. Stará a zastaralá infrastruktura ustoupila inovativním systémům, zajišťujícím nejen efektivitu, ale i bezpečnost.</p>,
    titleImage: SeriesIntroduction5
  },

  series6: {
    id: 6,
    title: "Proměna Domova: Krok za Krokem",
    references: "Reference",
    description: <p>Během <strong>rekonstrukce interiéru bytu</strong> je klíčové zvážit jak estetické, tak i funkční požadavky. Prvním krokem je <strong>demontáž</strong> a <strong>příprava prostoru</strong> pro změny v <strong>rozvodech elektriky, vodovodu</strong> a <strong>vytápění</strong>. Poté následuje <strong>práce</strong> na <strong>povrchových úpravách</strong>, jako jsou <strong>omítky</strong>, <strong>podlahy</strong> a <strong>malba</strong>, které přinášejí nový vzhled a atmosféru do celého prostoru. Poslední fází je <strong>instalace nového nábytku</strong> a <strong>dekorací</strong>, které dokreslují celkový design a zajišťují pohodlné a funkční prostředí.</p>,
    titleImage: SeriesIntroduction6
  },

  series7: {
    id: 7,
    title: "Renovace bytu v Praze",
    references: "Reference",
    description: <p>Byt prošel transformací od podlahy po strop. Každý detail získal novou podobu. Materiály a prvky vytvořily oslnivý nový prostor. Tento byt teď vypráví svůj vlastní příběh proměny a nekonečného potenciálu.</p>,
    titleImage: SeriesIntroduction7
  },

  series8: {
    id: 8,
    title: "Mezonetový byt v Haštalské, Praha",
    references: "Reference",
    description: <p>Naše <strong>rekonstrukce získala ocenění <a className="references-series-href-italic" href="https://www.interierroku.cz/cs/interier/1161/#vice">Interiér roku</a></strong>! Hlavním cílem <strong>rekonstrukce</strong> byla <strong>modernizace</strong> stávajícího <strong>mezonetového bytu</strong> a zlepšení jeho technického stavu. Otevřením vstupního prostoru do obývací části, <strong>odstraněním sádrokartonových příček</strong>, odhalením dřevěných částí krovů a použitím světlých pastelových barevných odstínů v kombinaci s černou se dosáhlo okamžité příjemné změny v celém interiéru.</p>,
    titleImage: SeriesIntroduction8
  },

  series9: {
    id: 9,
    title: "Moderní koupelna",
    references: "Reference",
    description: <p>Dokončili jsme úžasnou <strong>renovaci koupelny</strong>, která doslova září. Nový design spojuje praktičnost s ohromující estetikou, vytvářející prostor plný elegance a moderního vzhledu. Výsledek? Koupelna, která okouzluje stylovými detaily a pohodlím zároveň, přinášející do každého dne nový zážitek.</p>,
    titleImage: SeriesIntroduction9
  },

  series10: {
    id: 10,
    title: "Revitalizace koupelny",
    references: "Reference",
    description: <p><strong>Renovace moderní koupelny</strong> není pouze o změně vzhledu, ale o transformaci prostoru, kde se spojuje funkčnost s elegancí. Každý detail od nových obkladů až po inovativní osvětlení byl pečlivě navržen s ohledem na estetiku a praktičnost. Luxusní sanitární vybavení a prvotřídní materiály vytvářejí atmosféru relaxace a moderního designu.</p>,
    titleImage: SeriesIntroduction10
  }
}

export default dataReferenceSeries