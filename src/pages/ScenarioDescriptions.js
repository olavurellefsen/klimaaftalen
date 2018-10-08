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

export default () => (
  <AboutContainer>
    <AboutHeader>Scenariebeskrivelser</AboutHeader>
    <AboutHeader2>DTU Frozen Policy scenario</AboutHeader2>
    <AboutBody>
      DTU Frozen Policy scenario er som Energistyrelsens basisfremskrivning. Det
      indeholder alle allerede besluttede politikker, inklusiv den seneste energiaftales
      beslutninger, samt samme brændselspriser som anvendes af Energistyrelsen. Dvs.
      et energiscenarie med fastlåst politik frem til 2050. Det antages, at der udpeges
      områder til udbygning af havvindmøller i både øst og vest Danmark, samt at
      udbuddet af EL og Hybrid biler i 2025 er på niveau med i dagens udbud af benzin
      biler – dette kræver formentlig en klar udmelding fra regeringen om at de ser elbiler
      som den fremtidige løsning i Danmark, ellers vil bil-producenterne sandsynligvis ikke
      bringe nok el- og hybridbiler på markedet i Danmark. Der i modellen taget højde for
      omkostninger til udbygning af infrastruktur til el- og gasbiler og modellen bygger
      automatisk denne infrastruktur og dermed er det implicit antaget at der er politisk
      opbakning til en sådan udbygning.
    </AboutBody>
    <AboutBody>
      Der er i modellen antaget en maksimal udbygning af 6200 MW landvind, 50000 MW
      havvind, 3000 MW bølgeenergi, 12000 MW tag solceller og 3000 MW mark
      solcelleanlæg - det sidste svarende til et areal på ca. halvdelen af Langeland.
      Scenariet inkluderer international bunkering fra shipping industrien. Dvs. det
      inkluderer den danske del af den internationale skibstrafik og tilhørende
      energiforbrug og emissioner. Det er vigtigt at betragte hele den danske udledning af
      drivhusgasser i forbindelse med dansk ansvar i en global klimaaftale.
    </AboutBody>
    <AboutBody>
      De følgende scenarier bygger alle oven på DTU Frozen Policy scenario: 
    </AboutBody>
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
    <AboutHeader2>DTU Energispare scenarie</AboutHeader2>
    <AboutBody>
      Dette scenarie viser det danske energi system under antagelse at man i fremtiden
      udbygger væsentligt med energibesparelser i både industrien og bygningsmasse.
    </AboutBody>
    <AboutHeader2>DTU Lav vækst scenarie</AboutHeader2>
    <AboutBody>
      Dette scenarie viser det danske energi system under antagelse at den økonomiske
      vækst i Danmark er lavere end finansministeriets forventede fremskrivninger. Den
      finansielle udvikling stagnere i 2030 og forbliver kontant frem mod 2050 i dette
      scenarie.
    </AboutBody>
     <AboutBody>
       <Link to='/'>Tilbage til forsiden</Link>
     </AboutBody>
  </AboutContainer>
)
