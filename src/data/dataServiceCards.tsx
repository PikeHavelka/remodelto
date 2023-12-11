import livingroom from "../assets/images/serviceCardImages/servicesCardLivingroom.png"
import stairs from "../assets/images/serviceCardImages/servicesCardStairs.png"
import buildingExtension from "../assets/images/serviceCardImages/servicesCardBuildingExtension.png"
import paintingFloorPlan from "../assets/images/serviceCardImages/servicesCardPaintingFloorPlan.png"
import outdoorPool from "../assets/images/serviceCardImages/servicesCardOutdoorPool.png"
import roomRenovation from "../assets/images/serviceCardImages/servicesCardRoomRenovation.png"
import { ServiceCards } from "../types/allTypes"

const dataserviceCards: { [key: string]: ServiceCards } = {
  interiery: {
    id: 1,
    image: livingroom,
    title: "Interiéry",
    text: <p>Jsme vaším partnerem pro <strong>interiérové řešení</strong> vašeho <strong>domova</strong> nebo <strong>komerčního prostoru</strong>. Naše stavební dovednosti a kreativita spolu s vášmi představami přemění každý interiér na místo, které odráží vaši jedinečnou osobnost a styl.</p>,
    moreInfo: "Více informací zde",
    page: "/interiery",
    delay: .3
  },

  renovace: {
    id: 2,
    image: roomRenovation,
    title: "Renovace",
    text: <p>Naše dovednosti a zkušenosti jsou vám k dispozici. Pokud máte <strong>starou</strong> nebo <strong>opotřebovanou budovu</strong>, neváhejte se na nás obrátit. Naše služby zahrnují <strong>kompletní renovaci, modernizaci</strong> a zvýšení energetické účinnosti vaší nemovitosti.</p>,
    moreInfo: "Více informací zde",
    page: "/renovace",
    delay: .3
  },

  stavebniPrace: {
    id: 3,
    image: stairs,
    title: "Stavební práce",
    text: <p>Nabízíme <strong>stavební služby</strong> pro <strong>všechny typy budov</strong>, od <strong>malých domků</strong> po <strong>komerční stavby</strong>. Naši zkušení stavitelé a řemeslníci vám zajistí kvalitní výsledky, ať už jde o <strong>novou konstrukci, rozšíření stávající budovy</strong> nebo <strong>údržbu</strong>.</p>,
    moreInfo: "Více informací zde",
    page: "/stavebni-prace",
    delay: .3
  },

  vystavbaBudov: {
    id: 4,
    image: buildingExtension,
    title: "Výstavba budov",
    text: <p>Pomáháme vám s <strong>návrhem</strong> a <strong>realizací nových budov</strong>, ať už jde o <strong>bytové jednotky, komerční prostory</strong> nebo <strong>jiné projekty</strong>. Spolehněte se na naši expertizu a profesionalitu.</p>,
    moreInfo: "Více informací zde",
    page: "/vystavba-budov",
    delay: .3
  },

  konzultace: {
    id: 5,
    image: paintingFloorPlan,
    title: "Konzultace",
    text: <p>Máte nápad, ale nevíte, jak ho uskutečnit? Naši odborníci jsou tu, aby vám pomohli s <strong>plánováním</strong> a <strong>realizací vašeho projektu</strong>.</p>,
    moreInfo: "Více informací zde",
    page: "/konzultace",
    delay: .3
  },

  ostatni: {
    id: 6,
    image: outdoorPool,
    title: "Ostatní",
    text: <p>Máte <strong>speciální požadavek a nevíte, jak ho uskutečnit</strong>? Neváhejte nás <a href="#kontakt">kontaktovat</a>. Uděláme vše proto abychom vám vyšli vstříc.</p>,
    moreInfo: "Více informací zde",
    page: "/ostatni",
    delay: .3
  }
}

export default dataserviceCards