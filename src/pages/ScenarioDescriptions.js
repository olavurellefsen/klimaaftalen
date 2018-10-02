import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoint from 'styled-components-breakpoint';

const AboutContainer = styled.div`
  padding: 0px 20px 20px 20px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;
  `
const AboutHeader = styled.h1`
  font-size: 2em;
  ${breakpoint('mobile','desktop')`
    font-size: 1.5em;
  `}
  font-weight: bold;
  `
  AboutHeader.displayName = 'AboutHeader'
const AboutHeader2 = styled.h2`
  font-size: 1.5em;
  ${breakpoint('mobile','desktop')`
    font-size: 1em;
  `}  
  font-weight: bold;
  `
const AboutBody = styled.p`
  padding: 10px 0px 0px 0px;
  margin: 0px;
  font-size: 1em;
  ${breakpoint('mobile','desktop')`
    font-size: 0.7em;
  `}  
  `
const AboutList = styled.ul`
  font-size: 1em;
  ${breakpoint('mobile','desktop')`
    font-size: 0.7em;
  `}  
  `
const AboutImage = styled.img`
  padding: 20px 0px;
  max-width: 752px;
  ${breakpoint('mobile','desktop')`
    max-width: 250px;
    max-height: 142px;
  `}  
  `

export default () => (
  <AboutContainer>
    <AboutHeader>Scenariebeskrivelser</AboutHeader>
    <AboutHeader2>DTU Frozen Policy scenario</AboutHeader2>
    <AboutBody>
      DTU Frozen Policy scenario er som Energistyrelsens basisfremskrivning. 
      Det indeholder alle allerede besluttede politikker samt samme brændselspriser 
      som anvendes af Energistyrelsen. Dvs. et energiscenarie med fastlåst politik 
      frem til 2050. Det antages, at der udpeges områder til udbygning af havvindmøller 
      i både øst og vest Danmark, samt at udbuddet af EL og Hybrid biler i 2025 er 
      på niveau med i dagens udbud af benzin biler – dette kræver formentlig en 
      klar udmelding fra regeringen om at de ser elbiler som den fremtidige 
      løsning i Danmark, ellers vil bil-producenterne sandsynligvis ikke bringe 
      nok el- og hybridbiler på markedet i Danmark. Der i modellen taget højde 
      for omkostninger til udbygning af infrastruktur til el- og gasbiler og 
      modellen bygger automatisk denne infrastruktur og dermed er det implicit 
      antaget at der er politisk opbakning til en sådan udbygning. 
    </AboutBody>
    <AboutBody>
      Der er i modellen antaget en maksimal udbygning af 4400 MW landvind, 50000 MW havvind,
      3000 MW bølgeenergi, 12000 MW tag solceller og 3000 MW mark solcelleanlæg -  det sidste
      svarende til et areal på ca. halvdelen af Langeland. 
    </AboutBody>
    <AboutBody>
      De følgende scenarier bygger alle oven på DTU Frozen Policy scenario: 
    </AboutBody>    
    <AboutHeader2>DTU Frozen Policy inkl. International skibsfart scenario</AboutHeader2>
    <AboutBody>
      Scenariet inkluderer international bunkering fra shipping industrien,
      foruden de samme antagelser som i Frozen Policy scenariet. Dvs. det inkluderer
      den danske del af den internationale skibstrafik og tilhørende
      energiforbrug og emissioner. Det er vigtigt at betragte hele den danske udledning af drivhusgasser 
      i forbindelse med dansk ansvar i en global klimaaftale.
    </AboutBody>
    <AboutHeader2>Energiaftalen 2018</AboutHeader2>
    <AboutBody>
      Målsætninger:
    </AboutBody>
      <AboutList>
        <li>55 % Ve andel i 2030</li>
        <li>Et grønt baseret elsystem</li>
        <li>Fjernvarmesektoren højst 10 % af produktionen baseret på fossile brændsler</li>
      </AboutList>
    <AboutBody>
      Politikker:
    </AboutBody>
      <AboutList>
        <li>3 nye havvindmølleparker (estimeret til at blive 3 GW)</li>
        <li>Landvind begrænses til maksimalt 1850 vindmøller (estimeret til at være 6.2 GW i 2030)</li>
        <li>4.2 Mia. DKK i teknologi neutral støtte for perioden 2020-2024</li>
        <li>statsstøtten til biomasse-kraftvarmeanlæg fjernes for nye anlæg fra april 2019. Eksisterende ikke afskrevne
             anlæg modtager fortsats støtte i resterende levetid dog maksimalt 15/20 år. (Antages at støtte i gennemsnit
             bliver udbetalt i 7.5 år år yderligt)</li>
        <li>Støtte til biogas forlænges frem til 2032</li>
        <li>Afgiftslempelse på elafgift</li>
          <AboutList>
            <li>El-varmeafgift sænkes til 15,5 øre/kWh</li>
            <li>Den almindelige elafgift sænkes med 4 øre/kWh i 2019-2022, 7 øre/kWH i 2023, 8 øre/kWH i 2024 
            og 14 øre/kWh i 2025 (2018-priser). Som følger af aftalen vil elafgiften således udgøre 77,4 øre/kWh 
            i 2025 (2018-priser).</li>
            <li>Elafgiften til liberale erhverv sænkes til proces sats</li>
          </AboutList>
        <li>Udfasning af kul i el-produktion i 2030</li>
      </AboutList>
    <AboutBody>
      Politikker endnu ikke implementereet i modellen:
    </AboutBody>
      <AboutList>
        <li>500 mio. årligt til energibesparelser i industrien i perioden 2020-2024</li>
        <AboutList>
          <li>200 mio. er øremærker til energibesparelser i bygninger</li>
        </AboutList>
        <li>Fuld genopbygning af Thyra-anlæggene i Nordsøen, sikre at de resterende resourcer hentes op fra undergrunden.</li>
     </AboutList>
    <AboutHeader2>Regeringens forslag til en energiaftale</AboutHeader2>
    <AboutBody>
      Målsætninger:
    </AboutBody>
    <AboutList>
      <li>Mindst 50 % VE andel i 2030</li>
      <li>Uafhængige af fossile Brændsler i 2050</li>
    </AboutList>
    <AboutBody>
      Politikker:
    </AboutBody>
    <AboutList>
      <li>Ingen kul i elforsyningen fra 2030</li> 
      <li>800 MW vindmøllepark implementeret i 2025</li> 
      <li>Reduktion af elvarme afgiften med 25 øre/kWh</li> 
      <li>Reduktion af elafgiften med 30 øre/kWh</li> 
      <li>0.5 mia. kr i årlig reserve efter 2025 for at nå målsætningen (her modelleret som 1400 MW havvindmøller)</li> 
      <li>10 øre/kWh støtte til sol og landvind til 2025</li> 
      <li>Forlængelse af biomassestøtten for eksisterende anlæg til 2030.</li>
      <li>Reduktion af elafgift til liberale erhverv</li>
    </AboutList>
    <AboutBody>
      Politikker endnu ikke implementeret i modellen: 
    </AboutBody>
    <AboutList>
      <li>Støtteordning til industrielle energibesparelser</li>
      <li>Informationsstøtte til husholdningers energibesparelser</li>
    </AboutList>    
    <AboutHeader2>Radikale Venstre's forslag til en energiaftale</AboutHeader2>
    <AboutBody>
      Målsætninger:
    </AboutBody>
    <AboutList>
      <li>60 % VE i 2030</li>
      <li>60 % CO2 reduktion i forhold til 1990 i 2030</li>
      <li>16 % effektivisering i 2030</li>
      <li>80 % varmepumper i decentrale fjernvarme områder og væsentlig dele af centrale områder</li>
      <li>Fossilfri el og varme sektor i 2030</li>
      <li>1 million el og plug in hybridbiler i 2030</li>
    </AboutList>
    <AboutBody>
      Politikker:
    </AboutBody>
    <AboutList>
      <li>Fossilt forbud i el og varme sektoren fra 2030</li>
      <li>6000 MW VE</li>
      <AboutList> 
        <li>3000 MW havvind bygget i 2024, 2026 og 2028</li>
        <li>300 MW årlig udbygning af sol og landvind</li>
      </AboutList>
      <li>Elafgift til opvarmning sænkes med 25 øre/kWh</li>
      <li>Årlig støtte på 300 mio. til husholdningers energibesparelser</li>
    </AboutList>
    <AboutBody>
      Politikker endnu ikke implementeret i modellen:
    </AboutBody>
    <AboutList>
      <li>10 øre/kWh minimums pris på el</li>
      <li>Afgift på biomasse til varmeanlæg med over 700 fuldlasttimer</li>
      <li>Støtte til biogas</li>
      <li>Støtteordning til industrielle energibesparelser</li>
    </AboutList>
    <AboutHeader2>Alternativets forslag til en energiaftale</AboutHeader2>
    <AboutBody>
      Målsætninger:
    </AboutBody>
    <AboutList>
      <li>Fossilfrit Danmark i 2035</li>
      <li>Energieffektivisering i bygninger på 40 procent i 2030</li>
      <li>Reduktion af drivhusgasudledninger</li>
      <AboutList>
        <li>Mindst 60 % i 2025</li>
        <li>Mindst 80 % i 2030</li>
        <li>Mindst 95 % i 2035</li>
        <li>Mindst 100 % i 2040</li>
      </AboutList>
    </AboutList>
    <AboutBody>
      Politikker:
    </AboutBody>
    <AboutList>
      <li>10.000 MW VE udbygning mod 2030</li>
      <AboutList> 
        <li>5000 MW havvindmøller</li>
        <li>5000 MW landvind og solceller</li>
      </AboutList>
      <li>1 generations biobrændsler udfases fra 2025</li>
      <li>Minimum CO2 kvote pris på 40 Euro og 100 Euro i henholdsvis 2025 og 2030</li>
      <li>Elafgift til opvarmning sænkes med 20 øre/kWh</li>
      <li>Elafgift til varmepumper med brug af overskudsvarme sænkes til proces afgiften på 4 kr./GJ</li>
      <li>Udfasning af kul i 2028</li>
      <li>Genindføring af PSO afgiften</li>
      <li>Nul afgift på el og brint biler</li>
      <li>Nul salg af benzin og diesel fra 2025</li>
      <li>Ingen elafgift til transport indtil 2023</li>
      <li>Hævning af fradragsgrænsen for registreringsafgifts reduktion til 25.2 og 28.1 km/l for henholdsvis benzin og diesel biler.</li>
      <li>Afgiftsstigning for biler under fradragsgrænsen til 6000 kr.</li>
      <li>Offentlig transport fossilfri i 2025</li>
      <li>Stigning af benzin og diesel afgifter til 6 og 4.32 kr/l</li>
    </AboutList>
    <AboutBody>
      Politikker endnu ikke implementeret i modellen:
    </AboutBody>
    <AboutList>
      <li>Støtte på 50 mio. kr til bølgeenergi</li>
      <li>Netto måleordning til solceller med net ydelse på 12 øre/kWh</li>
      <li>Den faste biomasse (til el og varme) skal Maks fylde 10-20 procent i 2030</li>
      <li>Afgift på fast biomasse i fjernvarmeanlæg og private ovne</li>
      <li>En milliard til implementering af varmepumper</li>
      <li>Ingen parkeringsafgifter og pris for at køre over Storebælt for elbiler</li>
      <li>Støtte til cykelstier på 200 mio. kr årligt</li>
      <li>Tillempelse af den tysk miljø ordning for lastbiler, men med dækning af alle veje</li>
      <li>Klimaafgift på flyrejser 80 kr./flyvning</li>
      <li>El-indenrigsfly i 2040</li>
      <li>Minimum 1.5 mia. til forskning</li>
    </AboutList>  
    <AboutHeader2>Socialdemokratiets forslag til en energiaftale</AboutHeader2>
    <AboutBody>
      Målsætninger:
    </AboutBody>
    <AboutList>
      <li>Fossil fri 2045</li>
      <li>55 % VE andel 2030</li>
      <li>Ingen fossil afbrænding i el sektoren fra 2030</li>
      <li>500.000 PHEV/EV/Brint biler i 2030</li>
    </AboutList>
    <AboutBody>
      Politikker:
    </AboutBody>
    <AboutList>
      <li>3 havvindmølleparker inden 2030 med total kapacitet på 2750 MW, tender 2019, 2022 og 2024 med opsætning efter 5 år.</li>
      <li>Forlængelse af afgiftsfritagelsen for el til transport (5 år)</li>
      <li>Registreringsafgift til elbiler udskydes (forsættes med 20 % beskatning til 2021)</li>
      <li>Permanent nedsættelse af elvarmeafgift (antages magen til regeringens udspil)</li>
      <li>Årlig udbygning af 250 MW landvind/solceller fra 2020-2030</li>
      <li>Stop salg af dieselbiler i 2030</li>
    </AboutList>
    <AboutBody>
      Politikker endnu ikke implementeret i modellen:
    </AboutBody>
    <AboutList>
      <li>Ny energispareordning</li>
      <li>Afgiftsændring for dieselbiler i dag</li>
      <li>Staten finansierer tilslutningsbidrag til lyhnopladning</li>
      <li>Støtteordning til industrielle energibesparelser</li>
      <li>Informationsstøtte til husholdningers energibesparelser</li>
    </AboutList>
    <AboutHeader2>Carbon budget 2 graders temperatur stigning</AboutHeader2>
    <AboutBody>
      Et scenarie, der viser den maksimale grænse for CO2 Danmark kan udlede såfremt man vil holde 
      sig med 66% sikkerhed inden for en 2 graders temperatur stigning frem mod 2050. Danmarks andel 
      af det globale kulstofbudget, som kan udledes til atmosfæren er beregnet via en fordelingsnøgle 
      der vægter befolkningstal og historiske emissioner med hver 50%. 
    </AboutBody>
    <AboutBody>
      Kulstofbudgettet er beregnet ud fra IPCC´s tal, der også er brugt som grundlag til Parisaftalen.
    </AboutBody>
    <AboutHeader2>Carbon budget 2 graders temperatur stigning med en begrænset biomasse import</AboutHeader2>
    <AboutBody>
       Carbon budget scenarie med en 2 graders temperatur stigning, hvortil biomasse importen falder til 0 i 2050. Dermed sikres at Danmark kan blive uafhængige af importeret energivare.
    </AboutBody>
    <AboutHeader2>Carbon budget, der opfylder Parisaftalen</AboutHeader2>
    <AboutBody>
      Dette scenarie viser den maksimale grænse for CO2 Danmark kan udlede såfremt man vil holde sig 
      med 66 % sikkerhed inden for en 1.5 graders temperatur stigning frem mod 2050. Grænsen for 
      Danmarks CO2-udledning blev overskrevet i slutningen af 2017, hvorfor det kun kan lade sig gøre 
      for Danmark at opfylde sin del af Paris-aftalen såfremt Carbon Capture and Storage (CCS) 
      teknologier bliver implementeret i fremtiden.
    </AboutBody>
    <AboutBody>
      Kulstofbudgettet er beregnet ud fra IPCC´s tal, der også er brugt som grundlag til Parisaftalen.
    </AboutBody>
    <AboutHeader2>Carbon budget, der opfylder Parisaftalen med en begrænset biomasse import</AboutHeader2>
    <AboutBody>
       Carbon budget scenarie med opfyldelse af Paris aftalen, hvortil biomasse importen falder til 0 i 2050. Dermed sikres at Danmark kan blive uafhængige af importeret energivare.
    </AboutBody>
    <AboutBody>
      I de fire Carbon budget scenarier er der ikke medtaget afgifter og subsidier. Scenarierne tjener 
      først og fremmest til sammenligning med de andre scenarier mht. hvor hurtigt CO2 emissionerne 
      skal reduceres, og hvor hurtigt energisystemet skal omstilles. Modellen er i disse kørsler 
      blevet tvunget til at overholde carbon budgetterne og er altså ikke politik scenarier som de øvrige.
    </AboutBody>
    <AboutBody>
      <AboutImage src="images/Carbon_budget.png" alt="Opdateret dansk carbon budget primo 2018" width="752" height="452" />
    </AboutBody>
    <AboutHeader2>Klimarådets biomasse rapport</AboutHeader2>
    <AboutBody>
      Et scenarie baseret på Klimarådets rapport om bæredygtig biomasse (Biomassens betydning for grøn 
      omstilling), hvori alle energiafgifter omlægges til en CO2 baseret afgiftsstruktur. Prisen per 
      ton CO2 antages at være 857 kr/tCO2, efter rapports beskrivelse. CO2-prisen er modelleret, som en 
      minimums afgift for kvote markedet. Desuden anvendes en fælles elafgift på 65 kr/GJ, som 
      foreskrevet i rapporten. 
    </AboutBody>
     <AboutBody>
       <Link to='/'>Tilbage til forsiden</Link>
     </AboutBody>
  </AboutContainer>
)
