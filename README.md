# Minai Karlsson – Portfolio

En responsiv portfolio byggd med React och TypeScript för att visa upp mina projekt, kunskaper och kontaktuppgifter som frontendutvecklare under utbildning på Medieinstitutet.

## Länkar

- **Publicerad webbplats:** https://portfolio-react-puce-seven-87.vercel.app/
- **Figma-design:** [Visa designen i Figma](https://www.figma.com/design/SnOGLzYllf1rZ1d3ry0z75/Portfolio?node-id=0-1&t=6vPGNCBqhTZK96BV-1)
- **GitHub-repo:** https://github.com/minza-42/portfolio-react

## Tekniker

- React
- TypeScript
- Vite
- SCSS
- Git och GitHub
- Vercel

## Funktioner

- Responsiv layout för mobil, surfplatta och desktop.
- Språkväxling mellan svenska och engelska.
- Återanvändbara React-komponenter för sidans olika delar.
- Projektinformation lagrad separat och renderad dynamiskt.
- Filtrering av projekt baserat på valda tekniker.
- Möjlighet att rensa valda filter.
- Kontaktformulär med kontrollerade fält, validering och bekräftelsemeddelande.
- Länkar till GitHub, LinkedIn, e-post och utvalda projekt.

**Obs!** Kontaktformuläret hanterar validering i webbläsaren och visar ett bekräftelsemeddelande, men skickar inte meddelanden till en backend eller e-posttjänst.

## Projekt

Portfolion presenterar projekt från mina studier och egna arbeten, bland annat:

- Anoteros
- Arossnickeri
- Juniper AB
- The Temple of Five
- Budget App
- Minza's Sushi House
- Valentine Project

Projektkorten innehåller beskrivningar, tekniktaggar, bilder och tillgängliga projektlänkar.

## Kom igång lokalt

### Förutsättningar

- Node.js
- npm

### Installation

1. Klona repot:

   ```bash
   git clone https://github.com/minza-42/portfolio-react.git
   ```

2. Gå till projektmappen:

   ```bash
   cd portfolio-react
   ```

3. Installera beroenden:

   ```bash
   npm install
   ```

4. Starta utvecklingsservern:

   ```bash
   npm run dev
   ```

Vite visar den lokala adressen i terminalen.

### Tillgängliga kommandon

| Kommando          | Beskrivning                                             |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Startar utvecklingsservern                              |
| `npm run build`   | Kontrollerar TypeScript och bygger produktionsversionen |
| `npm run lint`    | Kör ESLint för att kontrollera koden                    |
| `npm run preview` | Förhandsvisar produktionsbygget lokalt                  |

## Design

Portfolion planerades i Figma med skisser för mobil och desktop innan implementationen påbörjades. Designen implementerades därefter med responsiv styling.

Den färdiga webbplatsen har utvecklats under arbetets gång. Eventuella skillnader mellan den ursprungliga designen och slutresultatet bör beskrivas här.

**Figma:** [Visa designskisserna](https://www.figma.com/design/SnOGLzYllf1rZ1d3ry0z75/Portfolio?node-id=0-1&t=6vPGNCBqhTZK96BV-1)

## Reflektion

Det har varit roligt att arbeta med den här portfolion och att få använda Figma igen. Jag valde en enkel och stilren design eftersom jag inte hade så mycket tid att vara lika kreativ som jag hade velat. Trots det är jag mycket mer nöjd med den här portfolion än den vi gjorde i början av utbildningen.

En ändring jag gjorde ganska sent var att lägga till en bild på mig själv i sektionen Om mig. Bilden fanns inte med i min ursprungliga Figma-skiss, men jag tyckte att den gjorde portfolion mer personlig. Jag behövde också anpassa layouten så att bilden passade ihop med texten och informationskorten.

Jag har tyckt att det varit roligt att arbeta med React och lära mig mer om hur det fungerar. Jag har delat upp webbplatsen i mindre komponenter, till exempel Header, Hero, About, Projects, Contact och Footer. Det gör koden mer organiserad och enklare att underhålla. Jag använder state för att hantera språkväxlingen, mobilmenyn, projektfiltreringen och kontaktformuläret. På så sätt kan sidan uppdateras när användaren gör olika val eller ändrar information. TypeScript har varit lite svårare, men jag tror att jag blir bättre genom att fortsätta öva.

Ett av mina mål var att göra portfolion tillgänglig på både svenska och engelska. Jag tyckte att det var roligt att hitta ett enkelt sätt att byta språk utan att behöva skapa två separata webbplatser.

För att kontrollera koden har jag använt `npm run build` och `npm run lint`. Det hjälper mig att kontrollera att projektet kan byggas och att hitta möjliga problem i koden.

Om jag hade mer tid skulle jag vilja utveckla designen ytterligare och koppla kontaktformuläret till en tjänst så att meddelanden faktiskt kan skickas.

Jag har använt AI som stöd för felsökning, kodgenomgång och dokumentation. Jag har gått igenom förslagen och använt dem som hjälp under arbetet. Sammantaget har projektet gett mig mer erfarenhet av React, TypeScript och responsiv design.
