# Language demographics for Finnish kindergartens by municipality (2024)

[Live Application](https://otsha-data-explorer.netlify.app/)

*A data explorer assignment for Yle, built with React, HeroUI and TailwindCSS on top of Vite.*

---

*Datatyökalu, jolla voidaan tarkastella vieraskielisten päiväkoti-ikäisten (0-7 v.) osuutta kunnittain.*

> Tekkistäkki: Vite, React, HeroUI, Tailwind, JSONStat-toolkit

Data haetaan suoraan [Tilastokeskuksen rajapinnasta](https://pxdata.stat.fi/PxWeb/pxweb/fi/StatFin/StatFin__vaka/statfin_vaka_pxt_14jt.px/) JavaScriptin Fetch-apilla ja pyöritellään sitten helpommin renderöitävään muotoon `JSONStat-toolkit` -kirjastoa apuna käyttäen (ks. `src/services/fetchData.js`).

Käyttöliittymän puolelta ideana ei ollut keksiä pyörää uudelleen, vaan laittaa pystyyn jotain samantyyppistä kuin Ylellä käytetään nykyäänkin artikkeleissa. Komponenttikirjastoksi valikoitui HeroUI johtuen tehtävän aikarajoitteesta; protoilu onnistuu tietenkin nopeammin tutummilla työkaluilla. Ko. kirjasto myös tukee Tailwindia ns. out-of-the-box, mikä tietysti osaltaan myös nopeuttaa edes jonkinlaisen miellyttävän käyttöliittymän kehittämisen tiukalla aikataululla.

Käyttöliittymä on koodattu mobile-first -periaatteella, joten se on myös responsiivinen, joskin suurempien näyttökokojen asettelussa olisi parannettavaa.

## Suoritus omalla koneella

0. Asenna Node.js ja npm
1. Kloonaa tai lataa tämä repositorio
2. Navigoi repon juureen ja asenna riippuvuudet:

```bash
$ npm install
```

3. Suorita sovellus kehittäjätilassa:

```bash
$ npm run dev
```

## Ajankäyttö

1 h 15 min - Datalähteeseen ja JSON-stat -formaattiin tutustuminen, koodi datan hakuun ja pyörittelyyn helposti renderöitävään muotoon

35 min - Karun käyttöliittymän pystyttäminen datan filtteröintiin ja näyttämiseen

15 min - Pientä lisätyylittelyä

\+ 15 min - Pikaista dokumentointia