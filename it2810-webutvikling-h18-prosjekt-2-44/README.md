# Prosjekt 2 Gruppe 44

## Valg teknologi
I henhold til oppgaven har vi basert oppgaven på react og ES6

### ECMASCRIPT 6
ECMAScript er en standardisert skript-spesifikkasjon for å standardisere JavaScript og for å oppfordre til flere uavhengige Javascript implementasjoner

ES6 (offisielt kalt ECMAScript 2015) har introdusert en mengde ny syntax som muligjør utvilking av komplekse aplikasjoner og rammeverk.

ES6 intorudserer blant annet klasser, iteratorer, for/of loops, generatorer, arrow functions, collections, promises.

#### this
I denne oppgaven har vi blant annet brukt arrow functions.
En fordel med arrow functions er at **this** beholder sin verdi utenfor sitt scope. Dette gjør at man kan man feks kan bruke **this** i arrow-funksjoner på samme måte som i java.

#### Fetch og Promises
Vi tok også i bruk promises gjennom Fetch-api. 
TextLoader og PictureLoader-komponente bruker fetch og promise for å hente tekst i JSON-format og SVG i xml-format asynkront fra webserveren.
Fetch metoden tar en URL som argument og returnerer et Promise som løses til en Response. 

Siden JavaScript kun kjører i en enkelt tråd, er ikke concurrency mulig i JS. Det vil si at flere deler av et script ikke kan kjøre samtidig. 

Med promises kan man kjøre asyncrone kall, uten at man er sikker på om de vil lykkes eller ikke.

Et Promise kan være i en av tre tilstander.

* **Pending**: Promise ennå ikke avgjort, for eksempel ett HTTP-kall som ikke har returnert. Fra denne tilstanden kan et promise gå til tilstanden **fulfilled** eller **rejected**.
* **Fulfilled**: Promise ble utfrørt som lovet med en verdi som resultat. For eksempel et GET HTTP-kall som returnerer med 200 status kode. I TextLoader er value en JSON hvor verdiene author og text blir satt i state.
* **Rejected**: Promise ble ikke utført som lovet. For eksempel et HTTP-kall som returnerer med 500 status kode. Resultatet blir satt til et error-objekt. Her oppdateres state med at det har skjedd en feil og feilmeldingen rendres i stedet for bilde eller tekst.

### React
React er et JavaScript-bibliotek, som er utviklet og vedlikeholdt av Facebook i tillegg til et open source community.

React bygger enkeltstående komponenter, med egen tilstand og logikk. Disse er gjenbrukbare og kan brukes til å lage komplekse brukerinterfaces.

#### Components
Komponenter kan deineres som funksjoner eller klasser i JavaScript. Disse må utvides fra **React.Component** -klassen

#### JSX
JSX er en utvidelse av JavaScript som kompilerer/transpileres til vanlig JavaScript.

JSX er en kombinasjon av XML/HTML og JavaScript som gjør det enkelt å definere brukergrensesnitt.

#### Component lifecycle
##### Render
Hver gang et komponent blir oppdatert, blir det gjort et kall til render-metoden komponent-objektet. Denne metoden returnerer JSX som transpileres til javascript og oppdaterer DOM-elementet i siden.

##### Props
Brukes for å sende data mellom foreldre- og barne-komponenter. Dette kan være funksjoner som en foreldre sender til barnet, som barnet for eksempel kan kalle ved en event, eller en variabel med en verdi som foreldre-komponenten vil sende til barnet. Vi brukte props til å sende funksjoner ned til Categories som ble kallet ved events i Categories-komponenten.

##### State
I motsetning til props som blir sendt til komponentet, mens state behandles inne i componentet.
State oppdateres ved å kalle setState-funksjonen til komponentet. Kall til setState trigger en oppdatering av komponentet og er asynkrone. Ved å sammenligne props og state kan man ta en avgjørelse om man vil oppdatere komponentet.

##### Lifecycle
Et komponent har en rekke funksjoner som kalles i de ulike livssyklusene til et komponent.

###### Mounting
Disse funksjonene kalles når et komponent blir instansiert og satt inn i DOM
1. constructor()
2. static getDerivedStateFromProps()
3. render()
4. componentDidMount()

Vi brukte componentDidMount til å gjøre et ajax-kall ved første rendering av TextLoader og PictureLoader

###### Oppdatering
Disse blir forårsaket av endring i props eller state
1. static getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

Vi brukte ComponentDidUpdate for å sjekke om props hadde forandret seg i forhold til forrige update. Dette ble gjort ved å sammenligne forrige props med nye props.

###### Unmounting
Kalles når komponentet blir fjernet fra DOM
1. componentWillUnmount()

###### Feilhåndtering
Kalles når det oppstår feil under rendering.


#Testplan

#Scenariobaserte tester:
Vi har fullført og skrevet scenario tester og brukertester som planlagt for hver eneste form av media. 

#Brukertesting:
Brukertesting ble foretatt for det meste av andre studenter. Disse studentene kom fra andre studieretninger og hadde begrenset IT-kunnskaper. Vi tok med oss tilbakemeldinger videre i utviklingsprosessen. Brukerne fra brukertestingen fikk også jobbe seg gjennom våre scenario tester for å se om de oppfyller akseptanse kravene. 

For brukertesting, vi fikk studenter som bor på kollektivet til å navigere gjennom nettside og vi fikk en god tilbakemelding fra alle som testet nettsiden. Oppgaven for dem var at de skal bytte på forskjellig medier og gi oss tilbakemelding  om funksjonaliteten av nettside.

#Akseptansetesting:
Videre når det kommer til akseptansetesting hadde vi ikke mulighet til å få noen med IT-bakgrunn som ønsket å skrive tester til systemet vårt for å finne bugs vi kanskje har oversett. Vi løste akseptansetesting ved å sette nye medlemmer av gruppen vår på testing av ukjent kode. Dette har vært en mer tidkrevende prosess men har gruppen mener at det har økt test dekningen av koden.I tillegg vi utførte tester på forskjellig nettlesere for å være sikkert at nettsiden er kompatible på diverse plattformer. For enhetstesting vi åpnet nettside på en mac, windows pc, iphone og en android mobil for å sjekke om nettside fungerte på forskjellig enheter. 

#Akseptansetesting steg for steg:
1. Last ned Mozilla Firefox, Opera Mini, Google Chrome, Safari og Internet Explorer.
2. Åpen nettside på alle nettlesere.
3. Navigere gjennom nettsiden og sjekke om funksjonaliteten.
4. Bytt på medietype.
5. Sjekke om medie blir byttet med en annen form av samme medietype.
6. På bilder, bytt til andre bilde kategorier og sjekke om bildet blir byttet.
7. Gjør det samme for andre medietyper. 
8. Bytt på tabs og utfør 4-7.

##Loader Components
AudioLoader laster lydfilene på nettsiden og brukeren kan spille lydfilene via denne loaderen. Dette lar brukeren velge forskjellige lydfiler som de kan spille på nettstedet.

PictureLoader laster tilfeldige bilder fra tre kategorier. Hver gang en bruker klikker på en bildekategori, blir et tilfeldig bilde fra den kategorien lastet inn på nettsiden.

Det er tre kategorier for bilder og tekst og tre lydstyper. Kategoriene for bilder er book, iphone og mac. For tekst er kategoriene haiku, poem og music og de tre kategoriene for 8-bit, drums og party.

Det er 4 faner på nettsiden. Hver fane har alle de samme funksjonene, men brukeren kan ha forskjellige kategorier aktive på hver tab.

Oppsettet av nettstedet på en PC vil ha 4 faner på toppen, valgknappen for radio buttons på høyre side og innholdet på midtsiden. På en mobil vil nettsiden være responsiv og tilpasset til skjermen på telefonen.

