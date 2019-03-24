import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import breakpoint from "styled-components-breakpoint";

const AboutContainer = styled.div`
  padding: 0px 20px 20px 20px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;
`;
const AboutHeader = styled.a`
  font-size: 2em;
  ${breakpoint("mobile", "desktop")`
    font-size: 1.5em;
  `}
  font-weight: bold;
  text-decoration: none;
  color: black;
  cursor: none;
`;
const AboutHeader2 = styled.a`
  padding-top: 30px;
  font-size: 1.5em;
  ${breakpoint("mobile", "desktop")`
    font-size: 1em;
  `}
  font-weight: bold;
  text-decoration: none;
  color: black;
`;
const AboutHeader3 = styled.h3`
  padding-top: 10px;
  margin-bottom: 0px;
  font-size: 1.2em;
  ${breakpoint("mobile", "desktop")`
    font-size: 1em;
  `}
  font-weight: bold;
`;
const AboutHeader4 = styled.h4`
  margin: 20px 0px 0px 0px;
  font-size: 1em;
  ${breakpoint("mobile", "desktop")`
    font-size: 1em;
  `}
  font-weight: bold;
`;
const AboutBody = styled.div`
  padding: 10px 0px 0px 0px;
  margin: 0px;
  font-size: 1em;
  ${breakpoint("mobile", "desktop")`
    font-size: 0.7em;
  `}
`;
const AboutList = styled.ul`
  font-size: 1em;
  ${breakpoint("mobile", "desktop")`
    font-size: 0.7em;
  `}
`;
const ListItem = styled.li`
  font-size: 1em;
  ${breakpoint("mobile", "desktop")`
    font-size: 0.7em;
  `}
`;
const ListItemBold = styled.li`
  font-size: 1em;
  ${breakpoint("mobile", "desktop")`
    font-size: 0.7em;
  `}
  font-weight: bold;
`;
const AboutImage = styled.img`
  padding: 20px 0px;
  max-width: 752px;
  ${breakpoint("mobile", "desktop")`
    max-width: 250px;
    max-height: 142px;
  `}
`;
const AboutMore = styled.a`
  padding: 0px 0px 0px 0px;
  margin: 0px;
  font-size: 1em;
  ${breakpoint("mobile", "desktop")`
		font-size: 0.7em;
  `}
  text-decoration: none;
`;
const AboutBackToTop = styled.a`
  padding: 10px 0px 0px 0px;
  margin: 0px;
  font-size: 1em;
  ${breakpoint("mobile", "desktop")`
		font-size: 0.7em;
	`}
`;

export default () => (
  <AboutContainer>
    <AboutHeader
      name="scenariodescriptions-top"
      href="#scenariodescriptions-top"
    >
      Scenariebeskrivelser
    </AboutHeader>
    <AboutBody>
      Herunder er en beskrivelse af de forskellige partier, organisationer og
      regeringens udspil til en klimaaftale. I hvert af de detaljerede
      oversigter over deres målsætningerne og virkemidler har vi markeret
      teksten med fed, hvor vi har kunne inkludere tiltaget i vores
      modelberegninger. Derudover har vi lavet en række scenarier man kan
      sammenligne med. Et Frozen policy scenarie som viser udviklingen med
      allerede vedtagne politikker (dvs. inkl. energiaftalen fra 2018) og så to
      udgaver af et scenario som holder summen af de danske fremtidige CO2
      udledninger under 500 Mt, hvilket nok er minimumskravet hvis vi skal
      opfylde Paris-aftalen. Frozen policy scenariet anvendes som grundlag for
      alle de andre udspil, dvs. deres tiltag bygger ovenpå det som allerede er
      inkluderet i Frozen policy.
    </AboutBody>
    <AboutHeader3>Enhedslisten</AboutHeader3>
    <AboutBody>
      Med klimaudspillet ’En Social Retfærdig Vej Til Det Grønne Samfund’ lægger
      Enhedslisten op til en overordnet målsætning om at reducere Danmarks
      CO2-udledning med 70 pct. i 2030 og 100 pct. i 2040 (ift. 1999). Som et
      centralt element foreslår Enhedslisten at udarbejde en klimalov, som
      gennem bindende målsætninger skal sikre, at Danmark holder sig på kursen
      mod 70 pct. og 100 pct. reduktion i hhv. 2030 og 2040. Inden for
      transportområdet foreslår Enhedslisten at forbyde salg af diesel- og
      benzinbiler i hhv. 2022 og 2025, og fremsætter en række tiltag for at
      understøtte denne udfasning. Inden for landbrugsområdet foreslår
      Enhedslisten at drivhusgasudledningen fra landbruget bør reduceres til
      mindst en tredjedel i 2030. Enhedslisten fremsætter et mål om, at vi i
      2030 ikke importerer mere el, el vi gør i dag. For at understøtte dette,
      ønsker Enhedslisten at investere i vindenergi og andre vedvarende
      energikilder og samtidig nedsætte brugen af biomasse.
    </AboutBody>
    <AboutMore href="#enhedslisten">Mere...</AboutMore>

    <AboutHeader3>Socialistisk Folkeparti</AboutHeader3>
    <AboutBody>
      Socialistisk Folkeparti (SF) har en overordnet målsætning at reducere
      Danmarks klimaforureningen med 60% i 2030 (ift. 1990). For at nå denne
      målsætning foreslår SF en række tiltag til at reducere klimabelastning,
      særligt fra transport- og landbrugssektoren. Inden for transportsektoren
      har de en overordnet målsætning om at elbiler udgør 50% af den danske
      bilpart i starten af 2030’erne. Samtidig sætter de en målsætning om, at
      mindst 95% af den kollektive trafik skal køre på vedvarende energi i 2030.
      De foreslår at nå disse målsætninger gennem en omstilling af beskatningen
      af fossildrevne køretøjer, samt investeringer i den kollektive trafik. Den
      overordnede målsætning inden for landbrugssektoren er at nedbringe
      klimaforureningen fra landbruget med op mod 25 pct. i 2030 i forhold til i
      dag (2019). For at nå denne målsætning, foreslår SF at mindske det danske
      landbrugsareal og samtidig udvide skovarealet, fremme klimavenlige
      afgrøder, husdyrsfoder og dyrkningsteknikker, samt elektrificere
      landbruget og sætte krav om at efterbehandle staldgylle mm.
    </AboutBody>
    <AboutMore href="#socialistisk-folkeparti">Mere...</AboutMore>

    <AboutHeader3>Radikale Venstre</AboutHeader3>
    <AboutBody>
      Med klimaplanen ’Klimaet Kalder. Fremad’ fremsætter Radikale Venstre en
      overordnet målsætning om at reducere udledningen af drivhusgasser med 60
      pct. i 2030 (ift. 1999). I samme år skal danskernes energiforsyning være
      helt fri for fossile brændsler. Dette skal understøtte en fuldstændig
      omlægning til vedvarende energi i 2050. Inden for transportsektoren er
      målsætningen 1 mio. elbiler i Danmark i 2030, hvilket skal understøttes af
      en række tiltag. Yderligere foreslår de at gøre al offentlig tranport
      eldrevet. Radikale Venstre foreslår desuden at udtage en tredjedel af
      opdyrket land i Danmark til naturarealer, og samtidig arbejde for et
      giftfrit landbrug i 2050. Indenfor energiområdet ønsker Radikale Venstre
      at satse på produktion samt eksport af vindenergi, og foreslår at etablere
      3 havvindmølleparker udover dem, som allerede er vedtaget med
      energiaftalen. Endelig fremsætter de et mål om at halvere CO2-aftrykket
      fra nybyggeri af huse i 2030.
    </AboutBody>
    <AboutMore href="#radikale-venstre">Mere...</AboutMore>

    <AboutHeader3>Socialdemokratiet</AboutHeader3>
    <AboutBody>
      Socialdemokratiet foreslår i klimaudspillet ’Danmark Skal Igen Være En
      Grøn Stormagt’ en overordnet vision om, at Danmark skal være fossilfrit i
      2045. Som et centralt element ønsker Socialdemokratiet at oprette en grøn
      fremtidsfond, der skal støtte udviklingen af nye teknologier og
      virksomheder inden for grøn energi, lagring og bedre anvendelse af energi,
      vandknaphed, fødevareproduktion. Inden for transportområdet forslår
      Socialdemokratiet en målsætning om 500.000 grønne biler i Danmark i 2030.
      Derudover foreslår de en række tiltag der skal fremme vedvarende energi,
      herunder særligt vindenergi, og foreslår en målsætning om at 55 pct. af
      det danske energiforbrug i 2030 skal komme fra vedvarende kilder. Tilmed
      fremsætter de en række tiltag med henblik på at energibespare i bygninger
      og industri. Endelig ønsker Socialdemokratiet at arbejde for at reducere
      CO2-udledningen fra landbruget og samtidig udlægge 75.000 hektar af det
      danske areal til urørt skov.
    </AboutBody>
    <AboutMore href="#socialdemokratiet">Mere...</AboutMore>

    <AboutHeader3>Alternativet</AboutHeader3>
    <AboutBody>
      Alternativet har en overordnet målsætning om, at Danmark skal være
      fossilfrit senest i 2040. De forslår yderligere en række delmål: Mindst 60
      pct. reduktion i 2025, mindst 80 pct. reduktion i 2030 og mindst 95
      reduktion i 2035. Inden for transportområdet foreslår alternativet at
      udfase fossilbiler inden 2025 og foreslår samtidig en målsætning om, at
      den kollektive vej- og søtransport skal være fossilfri senest i 2025.
      Inden for boligområdet er deres målsætning, at dansk byggeri skal
      energieffektivisere med 40 procent i 2030. Reduktion af landbrugets
      klimabelastning foreslås at nå 66 pct. i 2035 sammenlignet med i dag.
      Inden for energiområdet ønsker Alternativet Danmarks indvinding af fossile
      brændsler afviklet over en 10-årig periode, samt udfase
      førstegenerations-biobrændsel inden 2025. Desuden ønsker Alternativet at
      investere i vedvarende energi, herunder særligt vindenergi. Endelig
      formulerer Alternativet også en række forslag der skal bidrage til en
      adfærdsændring for den enkelte dansker.
    </AboutBody>
    <AboutMore href="#alternativet">Mere...</AboutMore>

    <AboutHeader3>Regeringen</AboutHeader3>
    <AboutBody>
      I Klima- og luftudspillet ’Sammen om en grønnere fremtid’ fremsætter
      regeringen en overordnet målsætning om, at Danmark skal være klimaneutral
      i 2050. Herunder en reduktion af drivhusgasser fra ikke-kvotebelagte
      sektorer (landbrugs-, transports- og boligsektoren) med 39 pct. i 2030
      (ift. 2005). Regeringens overordnede målsætning inden for
      transportsektoren er at nå 1 mio. elbiler, plug-in hybridbiler eller
      tilsvarende biler i 2030. Indenfor landbrugsområdet ønsker regeringen at
      mindske luftforureningen og drivhusgasudledningen, og vil derfor gennem en
      række tiltag udbrede og forbedre løsninger inden for fx biogas,
      præcisionslandbrug og jordfordeling. Mht. boligområdet er målet, at
      Danmark på sigt skal være uafhængigt af fossile brændsler. På kort sigt
      igangsættes en række initiativer med henblik på at udfase ældre brændeovne
      og klimaskadelige gasser i køleanlæg. På længere sigt vil regeringen
      formulere en strategi for at udvikle gassystemet, der skal bidrag til et
      klimaneutralt Danmark i 2050.
    </AboutBody>
    <AboutMore href="#regeringen">Mere...</AboutMore>

    <AboutHeader3>Frozen policy scenario</AboutHeader3>
    <AboutBody>
      DTU Frozen Policy scenario er som Energistyrelsens basisfremskrivning. Det
      indeholder alle allerede besluttede politikker, inklusiv den seneste
      energiaftales, samt samme brændselspriser som anvendes af Energistyrelsen.
      Dvs. et energiscenarie med fastlåst politik frem til 2050. Det antages, at
      der udpeges områder til udbygning af havvindmøller i både øst og vest
      Danmark, samt at udbuddet af el og hybrid biler i 2025 er på niveau med i
      dagens udbud af benzin biler – dette kræver formentlig en klar udmelding
      fra regeringen om at de ser elbiler som den fremtidige løsning i Danmark,
      ellers vil bilproducenterne sandsynligvis ikke bringe nok el- og
      hybridbiler på markedet i Danmark. Der er i modellen taget højde for
      omkostninger til udbygning af infrastruktur til el- og gasbiler og
      modellen bygger automatisk denne infrastruktur og dermed er det implicit
      antaget at der er politisk opbakning til en sådan udbygning. Der er i
      modellen antaget en maksimal udbygning af 6200 MW landvind, 50000 MW
      havvind, 3000 MW bølgeenergi, 12000 MW tag solceller og 3000 MW mark
      solcelleanlæg - det sidste svarende til et areal på ca. halvdelen af
      Langeland. Scenariet inkluderer international bunkering fra shipping
      industrien og international flytransport. Dvs. det inkluderer den danske
      del af den internationale skibs- og flytrafik og tilhørende energiforbrug
      og emissioner. Det er vigtigt at betragte hele den danske udledning af
      drivhusgasser i forbindelse med dansk ansvar i en global klimaaftale.
    </AboutBody>

    <AboutHeader4>Målsætninger:</AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>55 % VE andel i 2030</ListItem>
        <ListItem>Et grønt baseret el system i 2030</ListItem>
        <ListItem>
          Fjernvarmesektoren højst 10% af produktionen baseret på fossile
          brændsler
        </ListItem>
      </AboutList>
    </AboutBody>

    <AboutHeader4>Politikker:</AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>3 nye havvindmølle parker (estimeret til at bliver 2,6 GW).</ListItem>
        <ListItem>
          Landvind begrænses til et maksimalt antal møller (lineær reduktion fra
          XX til 1850 møller i 2030)
        </ListItem>
        <ListItem>
          4.2 Mia. DKK i teknologi neutral støtte i alt mellem 2020 og 2024
        </ListItem>
        <ListItem>
          Statsstøtten til biomasse-kraftvarmeanlæg fjernes for nye anlæg fra
          april 2019. Eksisterende ikke afskrevne anlæg modtager forsat støtte i
          resterende levetid max 15/20 år.
        </ListItem>
        <ListItem>Støtte til biogas forlænges frem til 2032</ListItem>
        <ListItem>Afgiftslempelse på elafgift</ListItem>
        <ul>
          <ListItem>El-varmeafgift sænkes til 15,5 øre/kWh</ListItem>
          <ListItem>
            Den almindelige elafgift sænkes med 4 øre/kWh i 2019-2022, 7 øre/kWh
            i 2023, 8 øre/kWh i 2024 og 14 øre/kWh i 2025 (2018-priser). Som
            følge af aftalen vil elafgiften således udgøre 77,4 øre/kWh i 2025
            (2018-priser).
          </ListItem>
          <ListItem>Elafgift til liberale erhverv sænkes til proces sats</ListItem>
        </ul>
        <ListItem>
          Udfasning af kul i el-produktion (giver en åbning for de centrale
          kraftvarmeværker at fortsætte kul forbrænding til varmeproduktion)
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>Politikker endnu ikke implementeret i modellen:</AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          500 mio. årligt til energibesparelser i industrien i perioden
          2020-2024
        </ListItem>
        <ul>
          <ListItem>200 mio. er øremærket til energibesparelser i bygninger</ListItem>
        </ul>
        <ListItem>
          Fuld genopbygning af Thyra-anlæggene i Nordsøen, sikrer at de
          resterende ressourcer hentes op fra undergrunden
        </ListItem>
      </AboutList>
    </AboutBody>

    <AboutHeader3>Lav vækst scenario</AboutHeader3>
    <AboutBody>
      Er identisk med Frozen policy scenariet udover at den økonomiske aktivitet
      i alle danske erhverv antages at stagnere fra 2030 og derefter have
      nulvækst frem til 2050. Transportarbejdet antages ligeledes at stagnere
      fra 2030. Scenariet er tænkt som illustration af hvor meget væksten i
      økonomisk aktivitet betyder for energiforbrug og CO2 udledning.
    </AboutBody>
    <AboutHeader3>
      Målsætnings-scenarier (Carbon budget 1.5C og Carbon budget 1.5C (bio))
    </AboutHeader3>
    <AboutBody>
      Disse to scenarier adskiller sig fra de andre ved at være
      målsætningsstyrede scenarier. Det eneste som styrer modellen her er et
      krav om at Danmark ikke må udlede mere end 500 Mt CO2 frem til 2050,
      hvilket svarer til hvad Danmark kan tillade sig at udlede under
      Paris-aftalen. I scenariet med tilføjelsen (bio) er der desuden tilføjet
      en restriktion om at Danmark ikke netto må importere biomasse efter 2030.
      I disse scenarier inkluderer vi ikke skatter og afgifter og det er derfor
      en ren samfundsøkonomisk optimering – dermed viser de den billigste
      løsning for hvordan Danmark kan holde sig under de 500 Mt CO2 frem til
      2050. Disse scenarier kan således bruges til at måle de andre såkaldte
      politikscenarier mod.
    </AboutBody>
    <AboutHeader2 name="enhedslisten" href="#scenariodescriptions-top">
      Enhedslisten
    </AboutHeader2>
    <AboutBackToTop href="#scenariodescriptions-top">Tilbage</AboutBackToTop>
    <AboutBody>
      På nedenstående figur ses en reduktionskurve baseret på Enhedslistens
      foreslåede tiltag frem til 2040.
    </AboutBody>
    <AboutImage
      src="images/Enhedslisten_CO2.png"
      alt="SF´s reduktionskurve"
      width="752"
      height="452"
    />
    <AboutBody>
      I nedenstående findes en mere uddybet beskrivelse af Enhedslistens
      konkrete målsætninger og virkemidler inden for klimaområdet, primært
      baseret på klimaudspillet ’En Social Retfærdig Vej Til Det Grønne
      Samfund’.
    </AboutBody>
    <AboutHeader3>Målsætninger inden for transportsektoren</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          Udfasning af hhv. dieselbiler og benzinbiler i 2022 og 2025, samt at
          fremme elbiler.{" "}
        </ListItem>
        <ListItem>
          Derudover foreslår Enhedslisten konkrete forslag konkret forslag med
          henblik på etablering af anlæg til at tanke gas til gasdrevne
          lastbiler, samt eldrevne færger. Tilmed ønsker Enhedslisten at fremme
          cyklisme samt offentlig transport. Endelige ønsker Enhedslisten at
          mindske drivhusgasudledningen fra flytransport.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Med henblik på at understøtte udfasningen af dieselbiler og benzinbiler
      samt fremme eldrevne køretøjer ønsker Enhedslisten
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItemBold>
          At indføre et forbud mod salg af nye dieselbiler i 2022. Brugte
          dieselbiler skal fortsat kunne handles.
        </ListItemBold>
        <ListItemBold>
          At indføre et forbud mod salg af nye benzinbiler i 2025. Brugte
          benzinbiler skal fortsat kunne handles.
        </ListItemBold>
        <ListItemBold>
          At omlægning af registreringsafgiften, så de seneste lempelser
          annulleres. Det indebærer bl.a., at den højeste sats på
          registreringsafgiften ændres fra 150 pct. til 180 pct., mens den lave
          sats ændres fra 85 pct. til 105 pct.
        </ListItemBold>
        <ListItem>
          At hæve skrotningspræmien for benzin-, diesel- og hybridbiler fra
          2.200 kr. til 20.000 kr. i 2026. Herefter udfases den forhøjede
          skrotningspræmie gradvist frem mod 2029.
        </ListItem>
        <ListItemBold>
          At hæve afgiften på diesel fra 2020 med 69 øre pr. liter svarende til
          22 pct. Samtidig hæves benzinafgiften med 69 øre pr. liter svarende
          til 15 pct. Hele provenuet fra de øgede afgifter føres til- bage til
          borgerne via den grønne check. Forøgelsen af den grønne check fjernes
          igen, når provenuet bortfalder i takt med, at benzin- og dieselbiler
          helt udfases.
        </ListItemBold>
        <ListItemBold>
          At indføres en vejbenyttelsesafgift for personbiler på 1 kr. pr. km i
          byer, 0,25 kr. pr. km for motorveje og 0,1 kr. pr. km for øvrige veje.
          Vejbenyttelsesafgiften indføres ikke for at beskatte bilerne hårdere,
          men skal kompensere for provenutabet, når benzinbiler udfases til
          fordel for elbiler med lavere afgifter. Vejbenyttelsesafgiften vil
          samtidig hjælpe med at begrænse trængsel.
        </ListItemBold>
        <ListItemBold>
          At indfase elbiler i afgiftssystemet på lige fod med benzinbiler. De
          undtages dog fra minimumsafgiften, og batterifradraget fastholdes.
          Sammen med deres høje fradrag for god brændstoføkonomi betyder det, at
          der ikke skal betales registreringsafgift for langt de fleste små og
          mellemstore elbiler. Fra 2026-2030 vil el-biler gradvist få udfaset
          batterifradraget og indfaset minimumssatsen. Dog vil mikro-elbiler
          fortsat være fritaget for minimumssatsen.
        </ListItemBold>
        <ListItemBold>
          At indføres et tilskud på 50.000-100.000 kr. til købet af en elbil i
          perioden 2020-2025. Tilskuddet gives til 250.000 elbiler i alt efter
          en trappemodel: 100.000 kr. til de første 100.000 elbiler, 75.000 kr.
          til de næste 100.000 og 50.000 kr. til de sidste 50.000.
        </ListItemBold>
        <ListItem>
          At der laves en pulje på 240 millioner kr. over fire år til at fremme
          udbredelsen af hurtigladestandere, hvor elbiler kan lade op i løbet af
          20-30 minutter.
        </ListItem>
        <ListItem>
          At alle nye p-pladser skal forberedes til elbiler, så mindst halvdelen
          af større p-pladser er forberedt til ladestandere, og så der findes
          mindst to ladestandere på alle større p-pladser.
        </ListItem>
        <ListItem>
          At give kommunerne mulighed for at indrette særlige kørebaner til
          elbiler og prioritere elbiler på offentlige p-pladser.
        </ListItem>
        <ListItemBold>
          Den særligt lave elafgiftssats for opladning i erhverv og offentligt
          tilgængelige ladestandere fastholdes frem til 2025.
        </ListItemBold>
        <ListItem>
          At oprette en pulje på 250 millioner kr. over fem år til at etablere
          gastankstationer bl.a. til lastbiler.
        </ListItem>
        <ListItem>At sætte et krav om, at alle nye færger er eldrevne fra 2025. </ListItem>
        <ListItem>
          Desuden foreslår Enhedslisten at afsættes 250 millioner kr. til en
          forskningspulje for grøn transport, der primært fokuseres på
          omstilling af luftfart og tung transport.{" "}
        </ListItem>
        <ListItem>
          Kommunerne skal have lov til at lave skærpede miljø- og
          nul-emissionszoner, hvor kommunerne selv bestemmer krav til
          udledninger. Miljøzonerne skal ikke, som nu, kun omfatte varebiler og
          lastbiler, men også personbiler og motorcykler.
        </ListItem>
        <ListItem>
          Fra 2025 skal der kun gives taxalicenser til nul-emissionskøretøjer.
          Inden 2025 skal taxalicenser prioriteres til nul-emissionskøretøjer
          som elbiler og brintbiler.
        </ListItem>
        <ListItem>
          At afsættes en pulje på ti millioner kr. årligt i fem år til hurtige
          ladestandere til taxaer, og de mest centrale taxa-parkerings- pladser
          prioriteres til nulemissionstaxa allerede fra 2020.
        </ListItem>
        <ListItemBold>
          At forbedre cykelinfrastrukturen, så det bliver mere attraktivt at
          tage cyklen frem for bilen. Derfor afsættes en pulje på en milliard
          kr. over fem år, som regioner og kommuner kan søge til cykelprojekter.
        </ListItemBold>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Med henblik på at fremme offentlig transpoort ønsker Enhedslisten
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItemBold>
          Der afsættes 15 milliarder kr. over ti år til at gennemføre anden fase
          af Togfonden DK.{" "}
        </ListItemBold>
        <ListItemBold>
          En pulje på to milliarder kr. over fem år skal sikre bedre trafik i
          yderområderne, bedre busser og tog samt understøtte tiltag som
          flextrafik, teletaxi og delebilsordninger i de områder, hvor den
          kollektive trafik er dårligst.
        </ListItemBold>
        <ListItemBold>
          Billetterne skal være billigere, så priserne for offentlig transport
          sænkes med 30 pct. fra 2020. Det koster årligt 1,3 milliarder kr.
        </ListItemBold>
        <ListItemBold>
          Der afsættes en milliard kr. årligt til at udvide passagerkapaciteten
          i busser og tog.
        </ListItemBold>
        <ListItemBold>
          Enhedslisten vil arbejde for, at der oprettes en Europæisk Tog- fond
          til at sikre bedre og hurtigere forbindelser med lyn- og nat- tog
          mellem de europæiske hovedstæder.
        </ListItemBold>
        <ListItemBold>
          Det offentlige indkøb af trafik skal være bæredygtigt. Det betyder, at
          fra 2020 skal alle offentlige nye indkøb og kontrakter vedr. trafik
          være såkaldte nul-emissionskøretøjer som el- og brintbiler, og fra
          2030 skal alle busser, taxi, biler og varebiler, der kører for det
          offentlige, være nul-emission.
        </ListItemBold>
        <ListItem>
          Overordnet at afsætte i alt 40 milliarder kr. til den kollektive
          trafik, fordel på ovenstående forslag.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at reducerer drivhusgasudledning fra flytransport
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItemBold>
          At indføre en flyafgift, der stiger med antallet af flyvninger,
          rejsens længde, og hvor meget plads man optager i flyet.
          Afgiftsniveauet er her fastsat, så det for flertallet af de rejsende
          er dyrere at tage til et naboland med lavere afgift og flyve derfra.
          Afgiften pålægges ved afrejse, og det betyder, at den skal betales to
          gange for flyvning tur-retur indenrigs, men kun én gang for afgangen
          fra Danmark ved flyvning udenrigs. Afgiften på indenrigsflyvninger
          indfases samtidig med, at time-modellen for togtrafik mellem
          landsdelene udrulles. Flyrejser, der baserer sig på 2. generations
          biobrændstof, el eller electrofuels, fritages for afgiften.
        </ListItemBold>
      </AboutList>
    </AboutBody>
    <AboutBody>
      <AboutImage
        src="images/Enhedslisten_Fly.png"
        alt="Enhedslistens flyafgifter"
        width="752"
        height="452"
      />
    </AboutBody>
    <AboutHeader3>Målsætninger inden for landbrug</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          Drivhusgasudledningen fra landbruget bør reduceres til mindst en
          tredjedel i 2030. Dette skal ske samtidig med, at landbruget gøres
          bæredygtigt og økologisk{" "}
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at nå ovenstående målsætning foreslår enhedslisten at indføre en CO2
      afgift{" "}
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          At indføre en afgift, hvor hver landbrugsbedrift skal betale 700 kr.
          pr. udledt ton CO2 fra 2027. I praksis betyder det afgift på husdyr,
          afgrødedyrkning samt kunstgødning. I takt med at bedrifterne reducerer
          CO2-udledningen ved f.eks. at omlægge til mindre klimabelastende
          produktion, vil landbruget blive mindre belastet af afgiften. Da
          afgiften kan føre til et tab af arbejdspladser i landbrugsklyngen,
          foreslår Enhedslisten at oprette en pulje på 100 millioner kr., der
          skal gå til at omskoling og videreuddannelse til dem, som skal finde
          et andet erhverv. Provenuet fra afgiften føres tilbage til landmanden
          med det formål at fremme bæredygtighed i produktionen. Det sker ud fra
          en fordelingsnøgle beregnet på baggrund af, hvor meget den enkelte
          bedrift udledte før indførelsen af afgiften. Jo mere man har mindsket,
          desto større kompensation. Provenuet fra afgiften vil falde i takt med
          omstillingen og nedgangen i udledningen af CO2. I takt med, at der
          kommer færre penge ind fra afgiften, bliver kompensationen også
          sænket.
        </ListItem>
        <ListItem>
          At udtage 108.000 hektar jorde med særligt højt kulstofindhold af
          drift frem mod 2030. Jordejerne skal kompenseres økonomisk for den
          tabte indtægt fra jorden.
        </ListItem>
        <ListItem>
          Inklusiv de særligt klimabelastende jorde, skal der udtages og
          omlægges 508.000 hektar landbrugsjord. Det svarer til 21 pct. af det
          danske landbrugsareal eller et område godt halvanden gange større end
          Fyn.
        </ListItem>
        <ListItem>
          At 100.000 hektar landbrugsjord omlægges til skov frem mod 2030. På
          længere sigt skal en del såsom urørt skov, hvilket vil være med til at
          styrke biodiversiteten. Jordejerne kompenseres økonomisk for
          forskellen i indtægter mellem landbrugsjord og skov.
        </ListItem>
        <ListItem>
          At 100.000 hektar landbrugsjord omlægges til flerårige energiafgrøder
          som pil og poppel. Det sker ved at lave en pulje til omlægningsstøtte
          på 950-1.300 kr. pr. hektar, der omlægges til energiafgrøder.
        </ListItem>
        <ListItem>
          200.000 hektar landbrugsjord udtages til natur. Jordejerne kompenseres
          økonomisk for den tabte indtægt fra jorden.
        </ListItem>
        <ListItem>
          At tilbyde et årligt klimatjek til landmanden, der kortlægger
          bedriftens nuværende udledninger og hjælper med at lave en
          klimahandlingsplan for, hvordan landmanden kan gøre sit landbrug mere
          klimavenligt. Den grønne omstilling er et fælles ansvar, som den
          enkelte landmand ikke skal stå alene med. Det vil sammen med andre
          indsatser fremme klimavenlig markdrift og landbrugsudvikling, såsom
          biokul, permakultur og flere træer på landbrugsarealerne.
        </ListItem>
        <ListItem>
          Der skal arbejdes for at EU’s landbrugsstøtte, indtil den er afviklet,
          understøtter omlægningen til et klimavenligt, bæredygtigt landbrug.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader3>Målsætninger for Energisektoren</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          I 2030 skal vi ikke importerer mere el, end vi gør i dag, hvilket
          kræver flere havvindmøller end hidtil planlagt.
        </ListItem>
        <ListItem>
          Alle fossile energikilder (kul, olie, naturgas) skal udfases i 2040
        </ListItem>
        <ListItem>
          Danmark skal udfase udvindingen af olie- og gasudvinding i Nordsøen
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at imødekomme målsætningen om, at vi ikke importere mere el i 2030
      ift. i dag
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItemBold>
          At der opføres flere havvindmøller frem mod 2030 end aftalt i
          Energiaftalen. Helt konkret to ekstra havmølleparker svarende til
          strømforbruget fra 1,7 millioner husstande.
        </ListItemBold>
        <ListItem>
          At fjerne det nuværende krav om at kommuner skal oprette et separat
          selskab for hver bygning, hvor der etableres solceller. Samtidig
          undtages kommunale energieffektiviseringer og udbygning af vedvarende
          energi fra budgetlovens begrænsning af kommunernes årlige
          anlægsudgifter.
        </ListItem>
        <ListItem>
          At ligestille solceller med varmepumper, så det bliver muligt for
          private hjem at abonnere på solceller, som en ejer virksomhed og for
          et månedligt beløb driver og vedligeholder.
        </ListItem>
        <ListItem>
          At undtage store varmepumper for elafgiftsstigningen til 1 øre/kWh.{" "}
        </ListItem>
        <ListItemBold>Varmpumper til geotermi fritages helt for elafgift</ListItemBold>
        <ListItem>
          At boligejere i yderområderne skal kunne få favorable statsgaranterede
          lån under Danmarks Grønne Investeringsfond til energi-
          effektiviseringer. Lånet tilbagebetales via besparelser på
          energiregningen.
        </ListItem>
        <ListItem>
          At der oprettes en pulje på 50 millioner kr. til gratis klimatjek af
          boliger i yderområderne.
        </ListItem>
        <ListItem>
          At der udarbejdes en plan for, hvordan mængden af træ kan forøges i
          offentlige byggerier.
        </ListItem>
        <ListItem>
          At bygningsreglementet opdateres, så bæredygtigt byggeri tilgodeses.
        </ListItem>
        <ListItem>
          At der stille krav om livscyklusanalyse for alle større byggerier.
        </ListItem>
        <ListItem>
          At der stilles krav om genanvendelse og livscyklusberegninger ved
          offentlige udbud.
        </ListItem>
        <ListItem>
          At det skal være muligt at stille krav til materialeanvendelse i
          kommune- og lokalplaner.
        </ListItem>
        <ListItem>
          At indføre et centralt register over brugte byggematerialer oprettes.
        </ListItem>
        <ListItem>
          Ud over den eksisterende pulje til energibesparelser i erhverv forøges
          Danmarks Grønne Investeringsfond med 100 millioner kr. pr. år fra
          2021-2024, hvilket giver en ekstra låneramme på ti milliarder kr.
        </ListItem>
        <ListItem>
          Ud over den eksisterende pulje til energibesparelser i erhverv forøges
          Danmarks Grønne Investeringsfond med 100 millioner kr. pr. år fra
          2021-2024, hvilket giver en ekstra låneramme på ti milliarder kr.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Med henblik på at udfase udvindingen af olie- og gasudvinding i Nordsøen
      forslår Enhedslisten
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          At udvindingstilladelser stoppes i takt med, at de udløber, og der
          gennemføres ikke flere udbudsrunder. Dermed lukker raffinaderierne på
          længere sigt. Indtil dette sker, skal selskaberne fra 2020 betale for
          deres CO2-kvoter, som de hidtil har fået gratis. Indtægten indgår i en
          statslig skovfond til skovrejsning i det globale syd, som kan optage
          CO2.{" "}
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader3>
      Enhedslisten formulerer desuden en række tiltag med henblik på at reducere
      afbrændingen af plast. De har en målsætning om{" "}
    </AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>At reducere afbrændingen af plast med mindst 80 procent i 2030</ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>For at opnå denne målsætning forslås følgende</AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          At Danmark skal arbejde for et forbud mod at eksportere plast ud af
          EU, så Danmark og de øvrige europæiske lande selv må håndtere eget
          affald og på den måde bliver presset til at udvikle
          genanvendelsesløsninger.
        </ListItem>
        <ListItem>
          At der fra 2030 skal det være forbudt mod at importere plastaffald, så
          man ikke kan tjene penge på at brænde det af og producere energi.
        </ListItem>
        <ListItem>
          At der stilles krav om fuld sortering af plast i erhverv inden 2030.
          Samtidig får virksomhederne mulighed for at komme billigt af med
          sorteret plast i den kommunale affaldsindsamling.
        </ListItem>
        <ListItem>
          At gennemføre en række tiltag skal gøre det nemmere at sortere og
          genanvende plast. Det skal bl.a. være et krav, at plastemballage kun
          laves af én plasttype. Afgiften på emballage skal også tilpasses
          efter, hvor meget plast emballagen indeholder, og om den kan
          genanvendes.
        </ListItem>
        <ListItem>
          At brugen af pantsystemer udvides til at omfatte plastflasker og
          Tetrapak.
        </ListItem>
        <ListItem>
          At igangsætte en målrettet indsats for at reducere plastaffald i
          husholdninger bl.a. gennem forlængelse af reklamationsretten.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader3>
      Enhedslisten formulerer desuden en række virkemidler med henblik på at
      støtte den grønne omstilling af industrien{" "}
    </AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          De gratis CO2-kvoter gøres gradvist betalingspligtige fra 2021. I 2021
          betales for ti pct. af kvoterne, i 2030 for 100 pct. Pengene føres som
          udgangspunkt tilbage til virksomhederne som støtte til grøn
          omstilling. Ubrugte midler skal gå til en statslig skovfond til
          skovrejsning i det globale syd, som kan optage CO2.
        </ListItem>
        <ListItem>
          Ligesom i landbruget tilbydes et klimatjek, der kortlægger
          virksomhedens drivhusgasudledninger, og en klimahandlingsplan, der
          hjælper med at planlægge omstilling til en mere klimavenlig
          produktion.
        </ListItem>
        <ListItem>
          Pulje på 100 millioner kr. pr. år fra 2021-2030 til at støtte mindre
          fremstillingsvirksomheders omlægning til vedvarende energi.
        </ListItem>
        <ListItem>
          Lovkrav til virksomhederne om at gennemføre energieffektiviseringer,
          der tjener sig selv hjem over årene.
        </ListItem>
        <ListItem>
          Umiddelbart anlægsstop for anlæg, der anvender F-gasser, med mindre
          der ikke er andre tekniske muligheder, og et fuldt stop for brugen i
          2030. Der afsættes en pulje på ti millioner kr. pr. år til mindre
          virksomheder til at udfase brugen, hvis de kan påvise en
          tilbagebetalingstid på over fem år. Ellers er det muligt at op- tage
          lån under Danmarks Grønne Investeringsfond
        </ListItem>
        <ListItemBold>
          Øjeblikkeligt anlægsstop for nye fossile anlæg i virksomhederne.
          Stoppet gælder også større renoveringer, der vil forlænge levetiden af
          fossile anlæg.
        </ListItemBold>
        <ListItemBold>
          Forbud mod brug af kul, koks og petrokoks fra 2025 og krav om
          deponering af ekstremt forurenende petrokoks.
        </ListItemBold>
      </AboutList>
    </AboutBody>

    <AboutHeader2
      name="socialistisk-folkeparti"
      href="#scenariodescriptions-top"
    >
      Socialistisk Folkeparti
    </AboutHeader2>
    <AboutBackToTop href="#scenariodescriptions-top">Tilbage</AboutBackToTop>
    <AboutBody>
      I nedenstående findes en mere uddybet beskrivelse af SFs konkrete
      målsætninger og virkemidler inden for klimaområdet. Der er taget
      udgangspunkt i følgende udspil:
    </AboutBody>
    <AboutBody>
      <AboutList>
        <ListItem>Transportens CO2-Udslip Skal Ned – Og Vi Starter Nu</ListItem>
        <ListItem>En Grøn Investeringsplan For Transportsektoren i 2020’erne</ListItem>
        <ListItem>En Ægte Klimaindsats i Landbruget</ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader3>Målsætninger for transport sektoren</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          Salget af fossilbiler skal reduceres til 20% i 2022 og udfases helt i
          starten af 2030’erne.
        </ListItem>
        <ListItem>De store byer skal være dieselfri senest i 2025.</ListItem>
        <ListItem>
          Mindst 95% af den kollektive trafik skal køre på vedvarende energi i
          2030. Herunder skal alle busser i løbet af 2020’erne omlægges til
          eldrift, biogas eller lignende.{" "}
        </ListItem>
        <ListItem>
          Desuden foreslår SF en række tiltag, der skal sikre nedbringe
          drivhusgasudledningen fra flyvning, samt forureningen fra skibsfart.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      SF formulerer en række virkemidler som skal understøtte målsætningen om at
      stoppe salget af fossilbiler i starten af 2030’erne og samtidig sikre at
      de større byer er dieselfri i 2025
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItemBold>
          Afgiftslettelsen målrettes elbiler og plug-in hybridbiler, herunder
          varebiler, således at der betales fuld registreringsafgift med rabat
          for energieffektivitet og et nedslag i registreringsafgiften på 50.000
          kr. for elbiler
        </ListItemBold>
        <ListItemBold>
          Fradraget for batteri til elbiler gøres permanent indtil videre.
        </ListItemBold>
        <ListItem>
          Registreringsafgiften for de allermest energieffektive biler
          nedsættelse. Der afsættes 100 mio. kr. til dette.
        </ListItem>
        <ListItem>
          For at gøre det mere økonomisk rentabelt at vælge en elektrisk
          firmabil foreslår SF to konkrete tiltag, der vil lette skatten for
          elektriske firmabiler med 60%, og samtidig gøre det mindst 40% dyrere
          at køre i benzinbiler, der kører under end 25 km/l.: 1) at
          beskatningen af el-firmabiler i en periode foreløbig frem til 2022
          sænkes til 10% af prisen (mod i dag 20-25%) – dog kun op til en
          passende beløbsgrænse, så lettelsen begrænses for luksusmodeller. 2)
          at beskatningen hæves til ca. 35% for benzinbiler, der kører mindre
          end 25 km/liter – opgjort efter EU’s nye målemetoder, jfr. Ovenfor.{" "}
        </ListItem>
        <ListItem>
          Etablering af hurtigladestandere ved bl.a. motorveje, centrale steder
          i byerne, udvalgte tankstationer, hvoraf Staten finansierer 50% af en
          årlig ramme på 40 mio. Kr. (For dette beløb vil der årligt kunne
          etableres 25-40 anlæg á 4-6 hurtigladestandere (150kW)). SF foreslår
          derudover at oprette p-pladser decideret til elbiler og samtidig
          nedsætte p-afgiften for elbiler. Til sidst ønsker SF at indføre en
          ordning, som giver borgere mulighed for at prøvekøre en elbil til en
          favorabel pris.{" "}
        </ListItem>
        <ListItem>
          Indførsel af roadpricing for personbiler. Roadpricingen vil dels
          mindske trængslen på vejene, og således bidrage til en reducering af
          CO2-udledningen fra personbiler, og dels vil fordele trafikken mere
          jævnt, både geografisk og afhængigt af myldretid. SF har intet konkret
          forslag, men ønsker en udredning af, hvordan og hvor hurtigt en
          roadpricing kan indføres.
        </ListItem>
        <ListItemBold>
          Eldrevne varebiler friholdes for registreringsafgift indtil videre.
        </ListItemBold>
        <ListItem>
          Vægtgrænsen for eldrevne varebiler sættes op til 4,25 tons (en
          forhøjelse svarende til batterivægten)
        </ListItem>
        <ListItem>
          Der søges dispensation fra EU-reglerne for kørekortregulativet for
          eldrevne varebiler op til 4,25 ton.
        </ListItem>
        <ListItem>Afgiften på grøn gas til tung transport sænkes. </ListItem>
        <ListItem>
          Indførsel af et lovkrav om dieselfri miljøzoner i bykommunerne i 2025.
          Kommunerne bør desuden med det samme have mulighed for at stille
          skærpede miljøzonekrav. Hvis kommunerne ønsker det, skal
          industrikvarterer kunne undtages. Dieselforbuddet vil i første omgang
          ramme industrien, da der for personbiler vil være en overgangsperiode
          på 6 år. Dieselforbuddet indeholder desuden et krav om, at
          arbejdsmaskiner bør være dieselfri i seneste 2025 (der vil dog også
          være en dispensationsmulighed).{" "}
        </ListItem>
        <ListItem>
          Alle personbiler der ejes eller leases af eller udfører
          kontraktmæssige opgaver for det offentlige skal elektriske senest i
          2023. Der afsættes et beløb svarende til 5.000 kr. pr. år pr.
          personbil.
        </ListItem>
        <ListItem>
          Alle tunge køretøjer (varebiler og lastbiler) der ejes eller leases af
          eller udfører kontraktmæssige opgaver for det offentlige, skal være
          elektriske, køre på grøn gas el.lign. Der afsættes et beløb på 5.000
          kr. pr. år pr. køretøj.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at nå målsætningen om at 95% af den kollektive trafik skal køre på
      vedvarende energi i 2030 foreslår SF følgende
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItemBold>
          Overordnet foreslår SF samlet set investeringer for 50 mia. Kr. i
          kollektiv trafik samt cyklisme i løbet af en tiårsperiode. Omkring
          halvdelen af disse investeringer er allerede vedtaget i Togfonden, som
          SF bakker fuld op om. (Togfonden er en aftale indgået af regeringen,
          EL og DF i 2014, som afsatte 22,5 milliarder kroner til at løfte af
          den danske jernbane).
        </ListItemBold>
        <ListItemBold>
          Udbygning af letbaner i de større byer til et samlet beløb på 3,3 mia.
          kr.{" "}
        </ListItemBold>
        <ListItem>
          Forbedring af busdriften og indførsel af alternative former for
          offentlig transport i ydreområderne, fx selvkørende minibusser.
        </ListItem>
        <ListItem>
          Gennemførsel af timemodellen, der indeholder en række tiltag til at
          udbygge det danske jernbanenetværk.{" "}
        </ListItem>
        <ListItem>
          Forbedring af skifte- og parkingsforhold ved stationerne. I Togfonden
          er der afsat 400 mio. kr. til disse formål. SF ønsker beløbet hævet
          til 1,2 mia. kr. inkl. medfinansiering fra DSB, kommuner og regioner.
        </ListItem>
        <ListItem>
          Fjerne omprioriteringsbidraget (de årlige nedskæringer på regionernes
          bevillinger til kollektiv transport).{" "}
        </ListItem>
        <ListItem>
          Årlig afsættelse af 250 mio. kr./år til at gøre lange togrejser (og
          Bornholmertrafikken) billigere, bl.a. gennem bedre familierabat.
        </ListItem>
        <ListItem>
          Forbedring regional togtrafik (ved at etablere bedre forbindelser og
          forbedre hastigheden. Samt elektrificering af Vejle-Struer
          forbindelsen)
        </ListItem>
        <ListItem>Optimering og udbygge S-togsnettet</ListItem>
        <ListItem>
          Forbedring af muligheder for at kombinere rejse med offentlig
          transport med cyklen.{" "}
        </ListItem>
        <ListItemBold>
          Alle busser i ruter og busser der udfører opgaver for det offentlige
          skal være elektriske eller køre på grøn gas. Ved indgåelse af nye
          kontrakter om busdrift, bør der være krav om, elektrificering af
          busserne. Den lave elafgift for buskørsel gøres permanent og suppleres
          af et engangstilskud på 50.000 kr. pr. bus.
        </ListItemBold>
        <ListItemBold>
          Mindst halvdelen af alle nye taxaer skal køre på el senest i 2022 og
          100 pct. senest i 2025. Der afsættes 60 mio. kr. i 2019-21 til at
          understøtte omlægningen i en overgangsperiode.
        </ListItemBold>
        <ListItem>
          For færger der modtager offentlig støtte - til Bornholm og diverse øer
          - vil det være en betingelse for støtten at færgerne overgår til
          eldrift eller anden vedvarende energi i det omfang det er teknisk og
          økonomisk muligt. Kravet gælder ved udløb af gældende kontrakter.{" "}
        </ListItem>
        <ListItemBold>Etablering en cykelpulje på 100 mio. kr. </ListItemBold>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      SF vil imødekomme den store klimabelastning fra flytrafikken, ved i første
      omgang at indføre en personafgift på flyrejser
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItemBold>
          Konkret foreslås en personafgift på flyrejser med følgende takster:
        </ListItemBold>
        <AboutList>
          <ListItemBold>60 kr. på indenrigsfly og rejser til Europa</ListItemBold>
          <ListItemBold>200 kr. på mellemlange rejser</ListItemBold>
          <ListItemBold>400 kr. på interkontinentale rejser. </ListItemBold>
        </AboutList>
        <ListItemBold>
          For børn skal afgiften være det halve. Derudover vil det ikke være
          muligt for erhverv at trække af afgiften fra. Herudover indføres en
          afgift for godstransport pr. fly på 400 kr. pr. tons ankommende gods.
        </ListItemBold>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at sikre en mere klimavenlig skiftfart foreslår SF nedenstående
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          På kort sigt at arbejde på skærpet håndhævelse i Nordsøen og Østersøen
          af de allerede vedtagne stramninger af IMO-reglerne. Samtidig ønsker
          SF, at staten via forskning mv. støtter udviklingen af mere
          konkurrencedygtige ikke- fossile drivmidler til skibe – det kan være
          el, grøn gas, brint eller andet.{" "}
        </ListItem>
        <ListItem>
          Et forbud i beskyttede zoner som Nordsøen og Østersøen, så snart dette
          bliver muligt at tage op i den internationale havorganisation, IMO.{" "}
        </ListItem>
        <ListItem>
          Desuden ønskes det at Danmark skal spille en aktiv rolle i
          internationale fora for at få forbudt bunkerolie i al skibsfart,
          start- ende med Arktis, hvor der er særlig fare ved evt.
          kollisioner/skibbrud.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader3>Målsætninger for landbrugssektoren</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          Landbrugets klimaforurening skal nedbringes med op mod 25 pct. i 2030
          i forhold til i dag (2019). For at nå denne målsætning, ønsker SF at
        </ListItem>
        <ListItem>Mindske det danske landbrugsareal og udvide skovarealet.</ListItem>
        <ListItem>
          Fremme klimavenligere afgrøder, husdyrsfoder og dyrkningsteknikker.
        </ListItem>
        <ListItem>Fremme bæredygtigt proteinfoder og klimavenlig fodring af kvæg.</ListItem>
        <ListItem>Fremme efterbehandling af staldgylle fra husdyr.</ListItem>
        <ListItem>Mindske brugen af diesel i landbruget.</ListItem>
        <ListItem>
          Mindske energiforbruget og fremme elektrificering af landbruget.
        </ListItem>
        <ListItem>Fremme klimavenligere kostvaner.</ListItem>
        <ListItem>Mindske madspild.</ListItem>
        <ListItem>Fremme forskning og udvikling inden for området.</ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      SF foreslår en række tiltag, der skal mindske det danske landbrugsareal og
      fremme skovarealet
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          Dyrkning af de mest klimabelastende jorde (dvs. jorde med et stort
          indhold af kulstof, der omdannes til CO2 når jorden dyrkes) skal
          stoppes. Konkret foreslår SF at 65.000 hektar af disse kulstofrige
          jorde tages ud af drift, herunder at man stopper med dræning og
          gødning.{" "}
        </ListItem>
        <ListItem>
          Gennemførsel af en politisk aftale om en forpligtende plan for
          skovmålsætningen, som Danmark tilsluttede sig i 1989. Dette vil kræve
          at der rejses (netto) mindst 10.000 hektar skov årligt frem til 2065.{" "}
        </ListItem>
        <ListItem>
          Ændring af den målrettede kvælstofregulering, så der tilskyndes til at
          tage klimahensyn ved valg af virkemidler, og jordfordeling bør indgå i
          en løsning. Det er beregningsmæssigt antaget, at SF ’s forslag fører
          til en reduktion af landbrugsarealet med ca. 7 pct. i 2030, hvilket
          antages at medføre en tilsvarende reduktion af den husdyrrelaterede
          klimaforurening fra dansk landbrug
        </ListItem>
        <ListItem>
          Indførsel af et dansk forbud mod brug af soja, og samtidig gøre mere
          klimavenlige alternativer mere konkurrencedygtige.{" "}
        </ListItem>
        <ListItem>
          At stilles krav om fodring med øget fedt og kraftfoder for alle større
          kvægbesætninger på stald.{" "}
        </ListItem>
        <ListItem>
          At fremme forskning i klimavenligt foder, fodertilsætninger og avl på
          køer der bøvser mindre.
        </ListItem>
        <ListItem>
          At belønning for dyrkning af græs til foder. Græs binder langt mere
          kulstof end fx korn og raps, og kræver dertil kun pløjning hvert 4-5
          år. Dertil foreslår de et krav om certificering af soja, samt andre
          afgrøder såsom hestebønner.{" "}
        </ListItem>
        <ListItem>
          At tilbyde rådgivning og evt. lovgivning om klimavenlige
          dyrkningsteknikker.{" "}
        </ListItem>
        <ListItem>
          Indførsel af et krav om at efterbehandle staldgylle med regler for,
          hvor stor en klimagevinst, der skal opnås herved. De foreslår
          efterbehandling af alt staldgylle undtagen gylle fra små bedrifter.
          Der bør dog tages hensyn til økologisk brug, der ikke frit kan bruge
          gylle, der stammer fra konventionel brug. For at understøtte
          målsætningen om at udfase brugen af ubehandlet gylle, ønsker SF en
          tilskudsordning til biogasanlæg samt forskning inden for området.
          Disse tiltag vil betyde, at 85-90 pct. af staldgyllen efterbehandles i
          2030.
        </ListItem>
        <ListItemBold>
          At der med 3 års varsel indføres dieselafgift for landbruget, hvilket
          vil gøre det mere attraktivt at vælge energieffektive maskiner, at
          elektrificere mest muligt og at vælge dyrkningsmetoder, der i mindre
          grad forudsætter energikrævende kørsel med tunge maskiner,
        </ListItemBold>
        <ListItem>
          I første omgang at begrænse klimabelastningen fra vores fødevarer
          gennem oplysning, uddannelse af storkøkkenpersonale mv.
        </ListItem>
        <ListItem>
          At undersøge muligheden for at indføre en retvisende klimaafgift på
          fødevare.{" "}
        </ListItem>
        <ListItem>
          At nedsætte en fødevareklimakommission, der inden for et år skal komme
          med forslag til, hvordan det klimavenlige valg gøres til det oplagte –
          dvs. lettilgængelige og ikke for dyre – valg, herunder hvordan man ad
          den vej kan øge indtaget af vegetabilsk kost.{" "}
        </ListItem>
        <ListItem>
          At øge støtten til forskning og udvikling af alternative, velsmagende,
          sunde og mere klimavenlige produkter.
        </ListItem>
        <ListItem>
          Enkelte supermarkedskæder er stoppet med ”3 for 2’s pris” og lignende
          mængderabatter, som lokker forbrugerne til at købe mere end de kan nå
          at spise. Der skal forhandles med de øvrige kæder om at gøre det samme
          – ellers må der lovgives.{" "}
        </ListItem>
        <ListItem>
          Ligesom i Frankrig, skal vi i Danmark kræve, at supermarkeder ikke må
          kassere brugbare fødevarer, men skal donere dem til velgørende
          organisationer.
        </ListItem>
        <ListItem>
          Gennemførsel af en informationskampagne, som skal sikre, at
          forbrugerne ikke automatisk fravælger frugt og grønt med skønhedsfejl
          i supermarkederne.
        </ListItem>
        <ListItem>
          Alle folkeskoler skal undervise i brug af madrester i madlavningen.
        </ListItem>
        <ListItem>
          I højere grad at målrette den offentligt betalte forskning på
          landbrugsområdet, herunder det grønne udviklings- og
          demonstrationsprogram (GUDP) i retning af forskning i klimavenligt –
          og på anden måde miljøvenligt – landbrug og forøge indsatsen,
          efterhånden som der afsættes flere penge til offentlig forskning
          generelt.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader3>CO2 besparelse inden for landbrugssektoren</AboutHeader3>
    <AboutBody>
      SF har udregnet at virkningen af deres klima-landbrugsplan i 2030 vil
      bespare 3.554.000 ton CO2-EQ (CO2-EQ betegner den samlede belastning af
      drivhusgasser omregnet til CO2-udledning)
    </AboutBody>

    <AboutHeader2 name="radikale-venstre" href="#scenariodescriptions-top">
      Radikale Venstre
    </AboutHeader2>
    <AboutBackToTop href="#scenariodescriptions-top">Tilbage</AboutBackToTop>
    <AboutBody>
      I nedenstående findes en mere uddybet beskrivelse af Radikale Venstres
      konkrete målsætninger og virkemidler inden for klimaområdet, primært
      baseret på klimaudspillet ’Klimaet Kalder. Fremad’, samt deres udspil
      ’Klima 2030 – et grønt Danmark, der leder verden’.
    </AboutBody>
    <AboutHeader3>Målsætninger for transportsektoren</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          1 mio. elbiler i Danmark i 2030 samt udfasning af fossilbiler. Desuden
          ønsker de at fremme elcykler og har de en målsætning om, at alle
          offentlige køretøjer skal køre på el.
        </ListItem>
        <ListItem>
          Alle indenrigsfly i Danmark skal være eldrevne eller flyve på grøn
          biobrændstof i 2035. Desuden skal alle fly der letter fra Danmark i
          2025 iblande mindst 5% bæredygtige brændstoffer.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at nå deres målsætning om 1 mio. elbiler i 2030 og samtidig udfase
      fossilbiler foreslår Radikale Venstre at
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItemBold>
          Stoppe for nysalg af diesel- og benzinbiler i 2025. Fra 2030 vil dette
          også omfatte hybridbiler.
        </ListItemBold>
        <ListItemBold>
          Udskifte alle offentlige køretøjer til eldrevne køretøjer efterhånden
          som de skiftes ud med nye.
        </ListItemBold>
        <ListItemBold>
          Fritage el til opladning af elbiler for elafgift som minimum frem til
          2023. Det samme skal gælde lastbiler.
        </ListItemBold>
      </AboutList>
    </AboutBody>
    <AboutBody>
      <AboutList>
        <ListItem>
          Omlægge bilbeskatningen til en teknisk afgift, som begunstiger
          CO2-effektive biler. De ønsker at tilbagetrække regeringens lempelser
          af registreringsafgiften. De midler det frigiver, skal sikre at
          elbiler er begunstiget i overgangsperioden, så elbiler fortsat kan
          afgiftsfritages. Der prioriteres ca. 1 mia. kr. årligt mellem 2020 til
          2025 til dette. På længere sigt ønskes det provenu, er taber på fx
          benzin- og dieselafgifter, gradvist erstattes med andre afgifter i
          takt med, at der bliver flere grønne biler. De lægger bl.a. op til et
          storskala-forsøg med roadpricing, så det bliver muligt at indføre
          roadpricing i Danmark inden 2030. Derudover ønskes en omlægning af
          dele af bilafgifterne fra en engangsafgift til en løbende afgift, så
          særligt grønne biler bliver billigere at købe, men dyrere at eje i en
          periode.
        </ListItem>
        <ListItem>
          Give kommunerne mulighed for at indføre ren luft-zoner, som omfatter
          alle køretøjer. Konkret foreslås en model, hvor personbiler gradvist
          skal forurene mindre. Inden for ren luftzonerne skal personbiler leve
          op til Euronorm 5 (Euronorm 6 for lastbiler, busser og varebiler) fra
          2020 og Euronorm 6 fra 2022. Der vil dog være undtagelser for de typer
          af køretøjer og maskiner, hvor der ikke findes alternativer (et
          eksempel kunne være gravkøer).{" "}
        </ListItem>
        <ListItem>
          Fjerne storebæltstaksten for elbiler og rene brintbiler indtil 2023.
          Desuden bør Danmark indlede en drøftelse med Sverige om at gøre det
          samme for Øresundsbroen.
        </ListItem>
        <ListItem>
          Alle taxaer skal være nuludslipsbiler i 2025. Konkret betyder det, at
          der fra 2021 kun skal udstedes taxilicenser til hybridbiler eller
          nuludslipsbiler. Fra og med 2025 må der kun køre nuludslips-taxaer på
          vejene (dvs. rene eltaxaer eller brint).{" "}
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Radikale venstre foreslår desuden fire konkrete initiativer, der skal
      fremme elcykler. De forslår
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          En forsøgsordning med elcykler som erstatning af biler på særligt
          trafikerede strækninger. Bilister, der dagligt kører på udvalgte
          trafikerede strækninger, skal som et forsøg have en gratis elcykel i
          ét år. Efter forsøgsperioden kan brugeren købe elcyklen til nedsat
          pris.
        </ListItem>
        <ListItem>
          En forsøgsordning med elcykler som erstatning af biler på særligt
          trafikerede strækninger. Bilister, der dagligt kører på udvalgte
          trafikerede strækninger, skal som et forsøg have en gratis elcykel i
          ét år. Efter forsøgsperioden kan brugeren købe elcyklen til nedsat
          pris.
        </ListItem>
        <ListItem>
          At afskaffe afgiften på opladning af elcykler i det offentlige rum,
          ligesom det er tilfældet for elbiler.
        </ListItem>
        <ListItem>
          At alle nye ladestandere til elbiler skal også kunne oplade elcykler.
        </ListItem>
        <ListItem>At kommuner skal have lov til at give elcykler til ældre.</ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at imødekomme deres målsætning om at gøre fly grønnere foreslår
      Radikale Venstre at
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItemBold>
          Indføre en ordning, hvor alle fly der letter fra Danmark, skal betale
          250 kr. for hver ton CO2e flyet udleder. Ordningen ønskes indført
          gradvist over fem år. Hvis et flyselskab selv klimakompenserer for
          alle flyvninger fra Danmark, kan de fratrække udgiften til
          klimakompensation (Kun klimakompensation med guld-certificering vil
          gælde). Halvdelen af indtjeningen fra flyafgiften skal investeres
          skovrejsning. Radikale Venstre skønner at der på baggrund af den
          nuværende flytrafik, vil investeres 300 mio. kr. til skovrejsning om
          året. For dette beløb vil det være muligt at plante ca. 5.000 ha.
          skov, der vil optage 0,75 mio. tons CO2 over 20 år. Den anden halvdel
          af indtjeningen fra flyafgiften ønskes investeret I udvikling af
          grønnere fly.
        </ListItemBold>
      </AboutList>
    </AboutBody>
    <AboutHeader4>Målsætninger for Energisektoren</AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItemBold>
          Etablering af minimum 3.000 MW havvind mere end allerede aftalt i
          energiaftalen frem mod 2030, samt udbygning af landvind og solanlæg.
          Samtidig foreslås en række tiltag for at udfase fossile brændsler.
        </ListItemBold>
        <ListItemBold>
          Al el og fjernvarme i Danmark i 2030 skal produceres på vedvarende
          energi.
        </ListItemBold>
      </AboutList>
    </AboutBody>
    <AboutBody>
      <AboutList>
        <ListItem>
          En besparende på ca. 35 pct. af vores endelige energiforbrug i 2050.
        </ListItem>
        <ListItem>
          Frem mod 2030 skal 50 pct. af dansk produceret gylle skal forgasses.
          Målet er, at det over årene sker til samme pris som i dag, hvilket
          forudsætter en halvering af støtteniveauet i samme periode.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at udbygge vedvarende energi generelt, herunder særligt vindenergi,
      foreslår Radikale Venstre
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          At opføre tre store havvindmølleparker på minimum 3.000 MW, ud over
          dem som allerede er aftalt i energiaftalen.
        </ListItem>
        <ListItem>
          Udbygning af landvind og centrale solanlæg med cirka 3.000 MW, fordelt
          på cirka 300 MW om året i teknologineutrale udbud.
        </ListItem>
        <ListItem>
          At konvertere nogle af de nuværende decentrale værker foreslås
          konverteret til såkaldte ’Superflexværker’, dvs. decentrale
          kraftvarmeværker, som både kan bruge grøn gas og en eldrevet
          varmepumpe. Ved at skifte mellem gas og varmepumpe kan værkerne
          udnytte den fluktuerende elpris og fungerer dermed som
          spidsbelastning.
        </ListItem>
        <ListItem>
          Etablering af en geotermi handlingsplan, hvor der afsættes 500 mio.
          over perioden til udvikling og etablering af anlæg. Derudover indføres
          frit brændselsvalg for alle producenter på nær fossile brændsler og
          biomasse.
        </ListItem>
        <ListItem>
          Udarbejdelse af en strategi for den danske gasinfrastruktur frem mod
          2050. Analysen skal bl.a. konkretisere, hvordan og i hvilket omfang
          grøn gas kan erstatte diesel i den tunge transport til lastbiler og
          shipping.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at understøtte udfasningen af fossile brændsler foreslår Radikale
      Venstre yderligere
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItemBold>
          At nedsætte elvarmeafgiften permanent med 25 øre per kWh fra 2020 og
          at oprette støttemekanismer gennem den nye energispareordning for at
          sikre udbredelse af både individuelle og centrale varmepumper.
        </ListItemBold>
        <ListItemBold>
          At gøre installation af nye oliefyr forbudt fra 2020 og indføre et
          forbud mod oliefyr i 2030. Installation af individuelle naturgasfyr
          forbydes fra 2025.
        </ListItemBold>
      </AboutList>
    </AboutBody>
    <AboutBody>
      <AboutList>
        <ListItem>
          Samtidig ønskes en specifik afgift på biomasse på de decentrale
          værker, der straffer anvendelse af biomassekedler udover et antal
          fastlagte timer til spidsbelastning, fx 700 timer om året. Denne
          afgift forventes ikke at generere provenu af betydning.
        </ListItem>
        <ListItem>
          At indføre af en elafgift og en eltarif, der giver slutbrugeren
          incitamenter til at bruge strøm, når den produceres. I forbindelse med
          energiaftalen blev der nedsat en arbejdsgruppe, som skal se på netop
          dette. Radikale venstre ønsker, at forligskredsen forpligter sig til
          både at sikre fremdrift i arbejdsgruppens arbejde samt at gennemføre
          en model for ’omkostningsægte tariffer’ og ’dynamiske elafgifter’, så
          snart det er muligt.
        </ListItem>
        <ListItem>
          Som minimum at halvere afgiften på industriel overskudsvarme, samt
          sikre en mere individuel og målrettet planlægning af anvendelsen af de
          tyve største industrielle varmeproducenter som Apple, Facebook,
          Aalborg Portland, Shell, Novozymes mv.{" "}
        </ListItem>
        <ListItem>
          Alle offentlige bygninger skal gøres ”smart energy ready”, således at
          deres strømforbrug kan justeres efter vindenergiproduktionen. Konkret
          foreslås en metode, hvor private firmaer får mulighed for at byde ind
          og gennemgå offentlige bygninger gratis mod at få del i fremtidige
          besparelser{" "}
        </ListItem>
        <ListItem>
          At der øremærkes grønne forskningsmidler til såkaldte ”powertogas”
          teknologier, hvor overskuddet fra vind via elektrolyse omdannes til
          grøn gas eller metanol (drivmidler), der kan anvendes i
          transportsektoren.
        </ListItem>
        <ListItem>
          At arbejde for at 80 pct. af de decentrale, samt en markant del af de
          centrale værker, skal i 2030 anvende varmepumpe i stedet for naturgas.
          For det lille mindretal af såkaldte ”barmarksværker”, hvor det ikke er
          tilfældet, foreslås oprettelse af en skrotningspulje på 100 mio.
          (engangsudgift), så forbrugerne i stedet overgår til grøn, individuel
          opvarmning.
        </ListItem>
        <ListItem>
          Tre konkrete initiativer foreslås med henblik på at sikre, at
          overskudsvarmen fra datacentrene kommer ind i fjernvarmenettet og
          derfra ind i folks hjem: 1) Alle fremtidige datacentre skal ligge i
          eller tæt på et fjernvarmeområde, således at varmen kan bruges til
          fjernvarme, 2) Afgiften for overskudsvarme skal sænkes, så det bliver
          attraktivt at få overskudsvarmen ind i radiatorerne, 3) Alle
          datacentre skal love, at de bygger lige så meget grøn strøm, som deres
          datacenter bruger.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at nå målsætningen om at 50 pct. af dansk produceret gylle forgasses i
      2030 foreslår Radikale Venstre
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItemBold>
          At støtten til biogas begrænset ved at indføre automatisk aftrapning
          af tillægget på 26 øre/kWh (eller kr./GJ) ved en lineær aftrapning
          frem mod 2030.
        </ListItemBold>
      </AboutList>
    </AboutBody>
    <AboutBody>
      <AboutList>
        <ListItem>
          At biogasbaseret elproduktion frem over støttes via den gældende
          pristillægsmetode, således at værkerne får et motiv til at regulere
          elproduktionen efter markedsprisen på el. For at fastholde
          tilskudsmæssig ligestilling reguleres pristillægget samtidig, idet den
          forventede elmarkedspris i dag er lavere, end det var forventet,
          dengang pristillægget blev beregnet, dog fastholdes den nuværende
          gradvise reduktion af støtten ved ikke at pristalsregulere støtten.{" "}
        </ListItem>
        <ListItem>
          Endelig ønskes det at fastholde princippet om at støtte opgradering på
          samme niveau som anvendelse i kraftvarme, hvilket også foreskriver en
          teknologisk udvikling på dette område.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at understøtte målsætningen om at spare 35 pct. af vores endelige
      energiforbrug i 2050 foreslås det
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          At der oprettes en statslig udbudspulje eller et tilskudsprogram på
          400 mio. kr. om året med fokus på de energibesparelser, der opstår som
          følge af elektrificering. Der tænkes især på: Installation af
          individuelle og centrale varmepumper, omlægning af industrielle
          processer til grøn el, samt elektrificering af transport, fx større
          flåder af elbiler og andre køretøjer til offentlige og private
          virksomheder.
        </ListItem>
        <ListItem>
          At alle bygningstyper energirenoveres når der alligevel skal
          renoveres. Derfor foreslås følgende tiltag for energibesparelser i
          bygninger:{" "}
        </ListItem>
        <ListItem>
          1) Ved ejerskifte skal alle købere tilbydes en energirapport, der
          indeholder tre mulige scenarier for energirenovering, der kan anvendes
          direkte til indhentelse af tilbud og som dokumentation over for
          pengeinstitut. Energirapporten finansieres ligesom husforsikring halvt
          af sælger og halvt af køber, hvis køber vælger den.
        </ListItem>
        <ListItem>
          2) Kvaliteten af energimærket skal forbedres markant gennem en langt
          større anvendelse af digitale data og bedre uddannelse af de
          konsulenter, der udarbejder mærket. Derudover skal anvendelsen af
          energimærket udbredes, og det skal fremgå af ovenstående
          energirapport, hvilket energimærke man kan opnå ved renovering.{" "}
        </ListItem>
        <ListItem>
          3) Der bør lægges en strategi for renoveringer af forskellige typer af
          bygninger, herunder den offentlige bygningsmasse, og afsættes 300 mio.
          om året til målrettede tilskud til dybe renoveringer i den
          eksisterende bygningsmasse. Støtten skal administreres af en uafhængig
          aktør gennem udbud – og skal udbetales per sparet MWh og gradueres,
          alt efter om bygningen befinder sig uden for fjernvarmeområdet og om
          renoveringen er dyb.
        </ListItem>
        <ListItem>
          at der etableres et markedsorienteret udbud for udbud af
          energibesparelser i industrien, der ikke fokuserer på elektrificering.
          Hertil afsættes 300 mio. kroner årligt.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader3>Målsætningen for boligsektoren</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>CO2-aftrykket fra nybyggeri af huse skal halveres i 2030.</ListItem>
        <ListItem>
          Henholdsvis 25 pct. og 50 pct. af nyt lavt byggeri og et-etages
          byggeri skal i 2030 opføres i træ.
        </ListItem>
        <ListItem>
          Halvdelen af cement til beton i huse skal have et 30 pct. lavere
          klimaaftryk i 2030.
        </ListItem>
        <ListItem>
          I 2030 skal 40% af alt betonaffald genanvendes i ny beton imod under
          2% i dag. Resten skal så vidt muligt nyttiggøres på anden vis, fx til
          infrastrukturanlæg, hvor det bruges bedst muligt
        </ListItem>
        <ListItem>
          I 2050 skal vores bygninger bruge 45 pct. mindre energi end i 2011.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at understøtte den overordnede målsætning om at halvere CO2-aftrykket
      fra nybyggeri i 2030 foreslår Radikale Venstre{" "}
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          At der stilles der i offentligt udbud krav om, at 25% af alt
          offentligt byggeri og anlæg i 2022, 50% i 2025 og 100% i 2030
          udarbejder livscyklusanalyser og anvender grøn beton
        </ListItem>
        <ListItem>
          At energirenoveringer skal ske, når bygningen alligevel renoveres af
          andre årsager. Radikale Venstre ønsker energiaftalens 200 mio. kr.
          afsat til bygninger indrettes, så bygningsejere motiveres til dybe
          energirenoveringer ved eksempelvis at lade tilskuddets størrelse
          afhænge af, hvor mange trin opad, energistandarden øges.
        </ListItem>
        <ListItem>
          At alle købere ved ejerskifte skal tilbydes en energirapport, der
          indeholder tre mulige scenarier for energirenovering, der kan anvendes
          direkte til indhentelse af tilbud og som dokumentation over for
          pengeinstitut.{" "}
        </ListItem>
        <ListItem>
          At forbedre energimærkerapporten. Brugerne skal kunne bruge
          energimærket aktivt som en handlingsplan for bygningen, og de digitale
          muligheder bør udnyttes, så brugerne kan se, hvilken effekt
          gennemførte energiforbedringer har på energimærket, og hvilke tiltag
          der derefter vil være hensigtsmæssige.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Herunder foreslår de en række forslag for at nå deres målsætninger om at
      fremme træ som byggemateriale
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          Udarbejdelse en træbyggestrategi udarbejdes nærmere i et samspil med
          byggebranchen, skovbranchen og kyndige eksperter på området.
          Træbyggestrategien skal sikre at hhv. 50% nyt lavt byggeri og 25% af
          nyt etegages byggeri i 2030 opføres i træ.
        </ListItem>
        <ListItem>
          I forhandlingerne med kommunerne om deres økonomi, skal der opsættes
          konkrete og bindende mål for byggeri i træ og/eller reduktion af
          klimaaftrykket i kommunernes nybyggeri. Desuden foreslås det, at det
          offentlige skal udbyde tre større projekter bygget i træ.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Med henblik på i højere grad at genanvende byggematerialer foreslår
      Radikale venstre at
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          Få bedre styr på de nuværende standarder for genanvendelse af
          byggematerialer, samt opdatering af europæiske standarder. Desuden
          ønsker de, at offentlig-privat industrielt partnerskab omkring
          innovation, markedsmodning og markedsudvikling af grøn beton på tværs
          af værdikæden, med mål om at reducere CO2-aftrykket fra beton med 30%
          i 2030.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>Målsætninger for Landbrug og natur</AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          Udtage 2/3 af al opdyrket areal i Danmark til giftfrit landbrug frem
          mod 2050. Herunder 59.000 hektar frem mod 2030. De mest mindst
          effektive og kulstofholdige jorde vil blive prioriteret.
        </ListItem>
        <ListItem>Udtage de den resterende 1/3 af opdyrket land til naturarealer.</ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at understøtte ovenstående målsætninger foreslår Radikale Venstre
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>Indførsel af en afgift på ubehandlet husdyrsgødning.</ListItem>
        <ListItem>Ophævelse af pesticidafgiften.</ListItem>
        <ListItem>
          Desuden vil Radikale Venstre gennem en række initiativer opnå en
          klimagevinst på 1 mio. tons CO2e-reduktion årligt indtil 2030.
          Herunder forslås det at afsætte 100 mio. Kr. om året til en række
          initiativer og kvalitative puljer, som kan understøtte små producenter
          i fødevarebranchen, som leverer højkvalitetsprodukter.{" "}
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Med henblik på at udtage 1/3 af opdyrket land til naturarealer foreslår
      Radikale venstre
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          At oprette 10 nye vilde naturreservater på statsligt areal. Alle vilde
          naturreservater skal være store, sammenhængende områder på omkring 10
          km2 eller endnu større. Natur-reservaterne bliver ca. 120 km2 i alt.
        </ListItem>
        <ListItem>
          En ny jordbrugsreform, der skal forpligte hver kommune på at lave en
          jordreform for alle områder i kommunen. Der skal opstilles eksplicitte
          mål for jordreformen, såsom sikring af mere sammenhængende
          naturarealer, udtagning af lavbundsjord, fremme af omlægning til
          økologi og mere effektivt sammenhængende landbrugsarealer mv.
          Yderligere vil jordbrugsreformen sikre, at tinglysningsafgiften
          sløjfes, når et stykke jord byttes, sælges eller tinglyses til et
          specifikt formål i forbindelse med en jordreform.{" "}
        </ListItem>
      </AboutList>
    </AboutBody>

    <AboutHeader2 name="socialdemokratiet" href="#scenariodescriptions-top">
      Socialdemokratiet
    </AboutHeader2>
    <AboutBackToTop href="#scenariodescriptions-top">Tilbage</AboutBackToTop>
    <AboutBody>
      I nedenstående findes en mere uddybet beskrivelse af Socialdemokraterne
      konkrete målsætninger og virkemidler inden for klimaområdet. Det er
      baseret på klimaudspillet ’Danmark Skal Igen Være En Grøn Stormagt’.
    </AboutBody>
    <AboutHeader3>Målsætninger for transportsektoren</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          500.000 el-, opladningshybrid- og brintbiler i 2030. Dette skal
          understøttet af en udfasning fossildrevet transport.
        </ListItem>
        <ListItem>
          Desuden foreslås en række tiltag der skal styrke og elektrificere
          størstedelen af det danske jernbanenet.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at understøtte målsætningen om at sikre 500.000 el-, opladningshybrid-
      og brintbiler i 2030 og samtidig udfase fossildrevne transportmidler
      foreslår Socialdemokratiet
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          <b>
            At den særligt lave elafgift ved opladning forlænges yderligere for
            al vejtransport. Dermed sidestilles elbiler og eldrevne lastbiler
            med elbusser, der i dag er tildelt den særligt lave afgift i en
            længere periode.
          </b>
        </ListItem>
        <ListItem>
          <b>
            At staten finansierer tilslutningsbidrag for nye, hurtige
            ladestandere, hvor elbiler kan lade nok på ti minutter til at køre
            150-350 km.
          </b>
        </ListItem>
        <ListItem>
          Med inspiration fra Holland og Storbritannien at sænke
          firmabilbeskatningen for el- og opladningshybridbiler til hhv. 10 pct.
          og 15 pct.{" "}
        </ListItem>
        <ListItem>
          <b>At udskyde indfasningen af registreringsafgift på elbiler.</b>
        </ListItem>
        <ListItem>
          At give kommuner ret til et tilskud på 10.000 kr. til hver el- eller
          brintbil, de indkøber.
        </ListItem>
        <ListItem>
          <b>
            At stoppe for salg af nye dieselbiler fra 2030 og udfasning af
            nuværende dieselbiler. På kort sigt ønskes gennemførsel af afgifter,
            der vil gøre det mindre fordelagtigt at køre i dieselbil.{" "}
          </b>
        </ListItem>
        <ListItem>
          At evaluere og stramme af eksisterende miljøregler, så de tager højde
          for de nye teknologirske muligheder, der kommer i fremtiden.{" "}
        </ListItem>
        <ListItem>At støtte til lokale initiativer til at fremme elbusser.</ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Med henblik på at styrke den kollektive trafik og elektrificere
      størstedelen af det danske jernbanenet ønsker Socialdemokratiet
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          <b>
            At gennemføre den fulde elektrificering af jernbanestrækningerne,
            som tidligere har været aftalt med Togfonden DK. Potentialet for
            CO2­reduktion er ca. 170.000 ton pr. år.
          </b>
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader3>Målsætninger for energisektoren</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          55 pct. af det samlede danske energiforbrug skal komme fra vedvarende
          kilder i 2030. Herunder skal hele elforbruget i Danmark skal dækkes af
          vind, sol eller anden vedvarende energi i 2030.
        </ListItem>
        <ListItem>
          Desuden ønsker Socialdemokratiet at nedbringe CO2-udledningen fra
          varmesektoren.
        </ListItem>
        <ListItem>
          Endelig foreslås en række initiativer til der skal reducere
          energiforbruget i bygninger og industri.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Med henblik på at fremme vedvarende energi foreslår Socialdemokratiet
      følgende
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          <b>
            Opførsel af to ekstra havvindmølleparker frem mod 2030, ud over de
            tre der blev vedtaget med energiforliget 2018.{" "}
          </b>
        </ListItem>
        <ListItem>
          <b>
            Årlige udbud for landvind og solceller på 250 MW fra 2020-2030 for
            at sikre en markant udbygning på land, hvor den vedvarende energi
            stadig er billigst.{" "}
          </b>
        </ListItem>
        <ListItem>
          En ny udbudsmodel for vind- og solenergi der giver mere vedvarende
          energi for pengene. Den nye udbudsmodel for vind- og solenergi bør
          følge Klimarådets anbefalinger.{" "}
        </ListItem>
        <ListItem>
          Indførsel af nye principper for anvendelse af biomasse, der blandt
          andet sikre, at der ikke foretages nye miljø- eller samfundsmæssigt
          uhensigtsmæssige investeringer i biomasse.{" "}
        </ListItem>
        <ListItem>
          At lave en strategi for at erstatte naturgas med gas fra vedvarende
          energi.
        </ListItem>
        <ListItem>
          At afsætte en mia. Kr. årligt til forskning i energiteknologi og
          -løsninger.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at nedbringe CO2-udledningen fra varmesektoren foreslår
      Socialdemokratiet at
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          At nedsætte elvarmeafgiften, for at udbrede brugen af varmepumper. Ved
          bedre udnyttelse af overskudsvarme ved at fjerne administrative byrder
          eller tilpasse afgiftssystemet.{" "}
        </ListItem>
        <ListItem>At lave en strategi for at udfase oliefyr.</ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Socialdemokratiet foreslår en række initiativer til der skal reducere
      energiforbruget i bygninger og industri
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          Med inspiration fra de krav, statslige bygninger er underlagt, hvor
          ministerier og underliggende institutioner skal reducere
          energiforbruget med 14 pct. i perioden 2006-2020, at sættes krav til
          kommunale og regionale bygninger om at spare på energien
        </ListItem>
        <ListItem>
          At indføre en ny energispareordning med separate puljer til
          energibesparelser i bygninger og industri.
        </ListItem>
        <ListItem>
          At analysere hvilke barrierer der er for at forbedre energiforbruget i
          udlejningsejendomme uden, at det stiller lejerne ringere.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>Yderligere foreslår Socialdemokratiet</AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          At etablere et samarbejde mellem stat og relevante investorer om at
          fremme private grønne investeringer. Målet er at sikre investeringer i
          nye grønne innovationsprojekter og bedre udnyttelse af det store
          potentiale for grønne job og grøn vækst og eksport. Arbejdet skal
          bl.a. udmønte sig i en analyse, som skal afklare, om der er
          regulering, som forhindrer grønne og bæredygtige investeringer.
        </ListItem>
        <ListItem>
          At støtte til lokale initiativer til ordninger med skrotningspræmier
          for udfasning af, samt installation af filtre i brændeovne.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader3>Målsætninger for Landbrug og natur</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          Sætte et klimamål for landbruget med henblik på at reducere
          udledningen af drivhusgasser.
        </ListItem>
        <ListItem>
          Halvdelen, svarende til 55.000 hektar, af den danske statsskov skal
          være udlagt til urørt skov. Desuden skal 20.000 hektar privat skov på
          sigt være udlagt til urørt skov, enten ved at bytte eller opkøbe
          privat skov.{" "}
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at sætte klimamål for landbruget foreslår Socialdemokratiet
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          At nedsættes et råd med deltagelse af landbrugets parter. Rådet skal
          foreslå et fair og fornuftigt mål for, hvor meget landbruget kan
          reducere deres CO2-udledning samt foreslå, hvordan ambitionen kan
          indfries. Anbefalingerne skal tage udgangspunkt i realiseringen af
          Danmarks langsigtede klimamål.
        </ListItem>
        <ListItem>
          At foretage en national afdækning af, hvor jordfordelinger med fordel
          kan gennemføres gennem frivillige aftaler. Jordfordelinger giver
          klimagevinst, når lavbundsjorde tages ud af drift, da disse ellers
          udleder betydelige mængder CO2, når de drænes i forbindelse med
          opdyrkning.
        </ListItem>
        <ListItem>
          At prioritere midler til forskning i reduktion af metan fra husdyrbrug
          og lattergas fra planteproduktion.{" "}
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at understøtte målsætningen om at udlægge 75.000 hektar af det danske
      areal til urørt skov foreslår Socialdemokratiet{" "}
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          At etablere 15 vilde naturparker på statens og kommunernes areal, som
          skal give den sammenhængende og vilde natur et massivt løft.{" "}
        </ListItem>
        <ListItem>
          At udvikle dansk natur, så Danmark med tiden får et større beskyttet
          areal. Socialdemokratiet mener at Danmark i skal udpege flere områder
          som fredet natur, så de mest værdifulde dele af dansk natur kan
          bevares til kommende generationer
        </ListItem>
        <ListItem>
          At forbedre mulighederne for jordfordelinger. Bl.a. ved at afskaffe
          tinglysningsafgiften i forbindelse med jordbytte, en national
          afdækning af, hvor jordfordelinger kan gennemføres, og midler til
          opkøb af jord.{" "}
        </ListItem>
        <ListItem>
          At målrettet regulering af landbruget. Dansk landbrug skal have en
          balanceret og fornuftig tilgang til gødskning af deres afgrøder, og
          det sikrer vi med målrettet regulering af landbruget
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader3>
      Socialdemokratiet forslår desuden en række tiltag der skal øge
      incitamentet for at bruge mindre og genanvende mere plastik
    </AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          At indføre pant på flere typer af plastikflasker, f.eks. saftflasker,
          juiceflasker og proteinflasker
        </ListItem>
        <ListItem>
          En ressourceafgift på flaskevand af plastik. Det skal nedbringe vores
          forbrug af plastik.{" "}
        </ListItem>
        <ListItem>En forhøjelse af afgifterne på bæreposer af plastik. </ListItem>
        <ListItem>At forbyde at butikker udleverer poser med hank gratis. </ListItem>
        <ListItem>
          At udarbejde en producentansvarsordning der skal sikre, at producenten
          i højere grad bruger plasttyper, der kan genanvendes i andre produkter
          og samtidig undgår at blande plasttyper.{" "}
        </ListItem>
      </AboutList>
    </AboutBody>

    <AboutHeader2 name="alternativet" href="#scenariodescriptions-top">
      Alternativet
    </AboutHeader2>
    <AboutBackToTop href="#scenariodescriptions-top">Tilbage</AboutBackToTop>
    <AboutBody>
      I nedenstående findes en mere uddybende beskrivelse af Alternativets
      konkrete målsætninger og virkemidler inden for klimaområdet. Der er taget
      udgangspunkt i ’Alternativets Klimaplan 2030’ samt deres klimaudspil ’God
      Energi – Alternativets ambitioner for fremtidens bedste energipolitik’.
    </AboutBody>
    <AboutHeader3>Målsætninger for transportsektoren</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>Fossilbiler skal udfases inden 2025.</ListItem>
        <ListItem>
          Den kollektive vej- og søtransport skal være fossilfri senest i 2025
          og cyklisme skal fremmes.
        </ListItem>
        <ListItem>
          Desuden foreslår Alternativet en række tiltag, som skal imødekomme den
          store klimabelastning fra flytrafik.{" "}
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at imødekomme målsætningen om at udfase fossilbiler i 2025, foreslår
      Alternativet{" "}
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItemBold>At forbyde salget af fossile biler i 2025. </ListItemBold>
        <ListItemBold>
          At tilbagerulle af aftalen om sænkelse af registreringsafgiften på
          benzin- og dieselbiler over en kort årrække.{" "}
        </ListItemBold>
        <ListItemBold>
          At reducere afgiften på biogas, så den ligestilles med diesel. Dette
          vil betyde at afgiften sættes til max. 2 kr. og 65 øre.{" "}
        </ListItemBold>
        <ListItemBold>At fjerne afgiften på el- og brintbiler frem til 2022.</ListItemBold>
        <ListItemBold>
          At hæve benzinafgiften fra 4,61 kr./lt. til 6 kr./lt., mens
          dieselafgiften hæves fra 3,5 kr./ lt. til 4,32 kr./lt.{" "}
        </ListItemBold>
        <ListItemBold>
          At fjerne elafgiften for alle former for vejtransport til udgangen af
          2023. I 2023 skal ordningen evalueres og eventuelt videreføres.
        </ListItemBold>
        <ListItemBold>
          At indføre højere fradragsgrænse for benzin- og dieselbiler indtil der
          er indført en teknisk afgift, hvor man betaler for bilens forurening.
          Konkret foreslås at man i første omgang bør hæve grænsen for, hvornår
          biler kan få fradrag i registreringsafgiften, således at den kun
          omfatter biler, der som minimum er i energiklasse A++. Samtidig hæves
          tillægget for biler, der kører under grænsen, til 6.000 kr. pr. km.
          under grænsen. Ændringen af grænsen forventes at medføre et merprovenu
          på omkring 1 mia. kr. om året.
        </ListItemBold>
        <ListItemBold>
          At hæve brændstofafgifterne således at benzinafgift hæves fra 4,61
          kr./lt. til 6 kr./lt. mens dieselafgift hæves fra 3,5 kr./lt. til 4,32
          kr./lt.
        </ListItemBold>
      </AboutList>
    </AboutBody>
    <AboutBody>
      <AboutList>
        <ListItem>
          I forlængelse heraf foreslår Alternativet også at oprette en pulje på
          30 mio. kr., til at finansiere det nuværende tilslutningbidrag for
          opsætning af ladestationer. Generelt ønsker Alternativet at arbejde
          for bedre forhold for elbilsejere, fx ved at tilbyde gratis parkering
          til elbiler i byområder.
        </ListItem>
        <ListItem>
          At elektrificere vejnettet, så elbiler bliver ladt op mens de kører.
          På nuværende tidspunkt er prisen for en sådan ordning 7.5 mio. kr. pr.
          km. Alternativet ønsker i første omgang at elektrificere kortere
          stækninger, fx motorvejsstrækningen mellem Odense vest og Nr. Aaby
          (24km.).
        </ListItem>
        <ListItem>
          At nedsætte firmabilsskatten for elbiler fra nuværende 25% til 10 %
          for elbiler og 15% for opladningshybridbiler. For benzin- og
          dieselbiler skal firmabilskatten fortsat beregnes som 25 procent af de
          første 300.000 kr. og 20 procent af værdien over 300.000 kr.
        </ListItem>
        <ListItem>
          At fjerne broafgiften på Storebæltsbroen for elbiler og halvere prisen
          for fyldte biler (min. 4 personer i en personbil). Rabatterne forslås
          finansieret ved at udskyde tilbagebetalingstiden på Storebæltsbroen i
          tre år.{" "}
        </ListItem>
        <ListItem>
          At indføre en tillempet tysk ordning i Danmark for køretøjer over 7,5
          tons, men dækkende alle veje. Forslaget ventes at give et merprovenu
          på 1 mia. kr. med start fra 2019.{" "}
        </ListItem>
        <ListItem>At indføre en landsdækkende roadpricing </ListItem>
        <ListItem>
          Desuden foreslås det, at Danmark bør benytte fastprismodellen – den
          såkaldte CfD-model. Ved at benytte CfD sikres byerne faste priser på
          den el, de producerer over den årrække, de modtager tilskud. Derfor
          kan de byde ind med lavere samlede priser, da usikkerheden for
          prisudsving ligger hos udbyderen – altså staten.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at nå målsætningen om at sikre fossilfri kollektive vej- og
      søtransport i senest i 2025 forslås følgende{" "}
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItemBold>
          Cykelpuljen skal gøres permanent fra 2020 og de kommende årtier frem,
          og samtidig udvide den med 50 millioner kr. ekstra årligt. Dette vil
          betyde en investering på 200 mio. Kr. årligt til cykelstier mm.
        </ListItemBold>
      </AboutList>
    </AboutBody>
    <AboutBody>
      <AboutList>
        <ListItem>At nedbringe prisen på kollektiv transport med 30 pct. </ListItem>
        <ListItem>
          At statsfinansiere tilslutningen af eldrevne busser til elnettet.{" "}
        </ListItem>
        <ListItem>
          At give danskere der vælger at tage bussen eller toget på ferie,
          mulighed for at trække prisen for billetten fra i skat.
        </ListItem>
        <ListItem>
          At lave en strategi for elektrificering af det danske jernbanenetværk.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at imødekomme den store klimabelastning fra flytrafik forslår
      Alternativet{" "}
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItemBold>
          Med inspiration fra Sverige, at indføre en klimaafgift. Den svendske
          model kræver, at flyselskaber betaler:60 svenske kroner i gebyr pr.
          passager ved rejser inden for Europa, 250 svenske kroner i gebyr pr.
          passager ved mellemlange rejser, 400 svenske kroner i gebyr pr.
          passager ved oversøiske rejser.
        </ListItemBold>
        <ListItemBold>
          Samtidig foreslås det at indføre en klimaafgift på flyrejser på 80 kr.
          pr. flyvning fra danske lufthavne, fordi billige flyrejser er dyrt for
          klimaet og giver et stort minus på den bundlinje. Flyskatten vil være
          progressiv, således at den fordobles ved anden rejse på et år,
          tredobles ved tredje rejse osv. Der ønskes dog en øvre grænse for
          afgiftens størrelse.
        </ListItemBold>
      </AboutList>
    </AboutBody>
    <AboutBody>
      <AboutList>
        <ListItem>
          Det foreslås desuden, at der stilles krav om at alle
          indenrigsflyvninger skal være eldrevne fra 2040.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader3>Målsætninger for boligsektoren</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>Dansk byggeri skal energieffektivisere med 40 procent i 2030.</ListItem>
        <ListItem>
          Desuden foreslår Alternativet en række forslag med henblik på at sikre
          at flere bygninger forsynes med vedvarende energi, udfase brugen af
          brændeovne, samt fremme brugen af træ som bæredygtigt materiale i nyt
          byggeri
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Med henblik på at sikre 40 procent energieffektivisering af Dansk byggeri
      i 2030 forslår Alternativet følgende
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          Alle nybyggede boliger og bygninger på over 500 m2 skal have solceller
          installeret. Derudover foreslås det at etablere en nettomålerordning
          med et loft på tre gange husstandens forbrug for private med en tarif
          for netydelse på ca. 12 øre/kWh.
        </ListItem>
        <ListItem>
          Justere og relancere energimærkningen af private husstande, så den
          understøtter en bæredygtig og gradueret ejendomsbeskatning baseret på
          energimærket. Et A-mærket hus vil således skulle betale en lavere skat
          end et D-mærket hus. For at imødekomme en social slagside ved
          forslaget, skal ordningen kombineres med en støtteordning til
          renovering af huse med lave energimærker i lavprisområder.
        </ListItem>
        <ListItem>
          Alternativet foreslår en række forslag, der skal sikre
          energibesparelser i små og mellemstore virksomheder (SMV) og
          erhvervslivet generelt:
        </ListItem>
        <ListItem>
          SMV’er skal kunne få simpel rådgivning, der både identificerer
          potentialer for energibesparelser samt indsatser, der kan realisere
          dette potentiale. Det foreslås, at der afsættes 5 mio. kr. årligt til
          oprettelse og drift af et nyt sekretariat, som kan fortsætte
          Energisparesekretariatets indsats.
        </ListItem>
        <ListItem>Refusionen af elafgift i handel- og serviceerhverv skal sænkes.</ListItem>
        <ListItem>
          Der skal etableres en tilskudspulje på 100 mio. kr. om året i fem år
          til energieffektivisering hos de mere energitunge SMV’ere som
          eksempelvis fremstillingsvirksomheder.
        </ListItem>
        <ListItem>
          Grunduddannelserne for installatører og håndværkere bør fokusere mere
          på energirenoveringer og -besparelser i SMV’ere.
        </ListItem>
        <ListItem>
          Der skal udvikles en standard for erhvervslejekontrakter som motiverer
          begge parter til at investere i energiforbedringer.
        </ListItem>
        <ListItem>
          Der skal afsættelses af 10 mio. kr. til udvikling af
          kampagnematerialer mm., som kommunerne kan benytte lokalt. Disse
          materialer kan evt. udvikles i et samarbejde mellem kommunerne og et
          energisparesekretariat.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Alternativet har en række konkrete forslag, der skal sikre, at flere
      bygninger forsynes med vedvarende energi
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          Kommuner skal kunne etablere og drive solcelleanlæg på bygningernes
          tagflader efter lempeligere regler.{" "}
        </ListItem>
        <ListItem>
          Alle nybyggede boliger og bygninger på over 500 m2 skal have solceller
          installeret. Derudover foreslår vi at etablere en nettomålerordning
          med et loft på tre gange husstandens forbrug for private med en tarif
          for netydelse på ca. 12 øre/kWh.{" "}
        </ListItem>
        <ListItem>
          Lempelse af vilkårene for lokal forankring. Det gælder bl.a. i forhold
          til at sikre et bredt og alsidigt ejerskab af danske landvindmøller.
          Det er i Tyskland ikke nødvendigt for et lokalt projekt at have opnået
          en godkendt lokalplan inden deltagelse i et udbud. På den måde fjernes
          en del af risikoen, da planlægningsprocessen gøres nemmere.
          Tilsvarende ønsker Alternativet at indføre en lignende
          ”undtagelsesordning” i Danmark, der kan styrke den lokale opbakning
          til etablering af landvindmøller og fremme et bredt, alsidigt
          ejerskab.
        </ListItem>
        <ListItem>
          Merforbruget fra datacentre skal forsynes med vedvarende energikilder.
          Dette skal sikres ved at staten indgår i en dialog med de enkelte
          firmaer, der ønsker at opføre datacentre.{" "}
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at mindske luftforureningen fra brændeovne foreslår Alternativet
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          At indføre en afgift på brændeovne. Det skal ske ved indførelse af en
          varmemåler på ovnen, der måler den tid, ovnen benyttes. Denne model
          giver mulighed for at sætte afgiften efter, hvor meget ovnene
          benyttes, om ovnen er placeret i et tæt befolket område og hvor
          forurenende typen af brændeovn er. Det Miljøøkonomiske Råd har
          beregnet, at det vil give en samfundsøkonomisk gevinst på omkring 3.
          mia. kr. om året.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>Desuden foreslår alternativet</AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          At der åbnes op for mere træ i dansk byggeri og renovering via
          ændringer i bygningsreglement og lokalplaner.
        </ListItem>
        <ListItem>
          At etablering af en nettomålerordning med et loft på tre gange
          husstandens forbrug for private med en tarif for netydelse på ca. 12
          øre/kWh.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader3>Målsætninger indenfor landbrugssektoren</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          Reduktion af landbrugets klimabelastning med 66 pct. i 2035
          sammenlignet med i dag.{" "}
        </ListItem>
        <ListItem>
          Fossilfri landbrugsproduktion i 2030 (dvs. fuldstændig udfasning af
          fossile brændsler til maskiner og køleanlæg mv.)
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>Tiltag inden for landbrugssektoren</AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          At der som en del af EU’s landbrugsstøtte, der gives som passiv
          produktionsstøtte – grundbetalingen – i stigende grad skal overføres
          til konkrete støtteordninger, som resulterer i samfundsnyttige goder
          såsom bæredygtig og klimavenlig fødevareproduktion og naturtiltag. På
          kort sigt foreslår alternativet desuden, at Danmark udnytter
          muligheden for at bruge op til 15 pct. af støttemidlerne på
          bæredygtige landbrugsformer. På længere sigt ønsker Alternativet at
          arbejde for, at 100 pct. af EU-støtten til landbruget bliver betinget
          af natur-, miljø- og klimavenlig produktion.
        </ListItem>
        <ListItem>
          At fossile sær-subsidier til landbruget fjernes. Herunder
          afgiftsreduktionen på diesel.
        </ListItem>
        <ListItem>
          At påbyde landmænd udtagning af kulstofrige lavbundsjorde fra intensiv
          drift.
        </ListItem>
        <ListItem>
          At indføre individuelle klimaregnskaber for det enkelte landbrug, så
          drivhusgasudledningen fremover opgøres på bedriftsniveau. De
          individuelle klimaregnskaber bør indføres gradvist, startende med de
          største, som i dag er underlagt en miljøgodkendelse. Disse skal levere
          en årlig drivhusgasopgørelse samt en handlingsplan for reduktion af
          drivhusgasemissioner, så hele landbruget reducerer sin klimabelastning
          med 66 pct. i 2035. For at opnå den største klimamæssige effekt, skal
          alle landmændene desuden tilbydes klimarådgivning fra faglige
          eksperter, som kan hjælpe med at udpege klimamæssige
          forbedringsmuligheder.
        </ListItem>
        <ListItem>
          At husdyrproduktionen bliver baseret på dansk produceret foder ved et
          erstatte sojaimport med protein fra kløver, græs og andre flerårige
          afgrøder i Danmark.{" "}
        </ListItem>
        <ListItem>
          At der fortsat udbygning med større, fælles biogasanlæg. Disse anlæg
          skal håndtere såvel gylle fra landbruget som grønt affald fra både
          industri og husholdninger. Her og nu foreslår vi, at støtten til
          etablering af biogasanlæg målrettes de fælles anlæg og kun gradvist
          afvikles, samt at man sænker afgiften på biogas i transport fra 296
          øre til 267 øre.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader3>Målsætninger indenfor Energisektoren</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          Afvikling af indvindingen af fossile brændsler over en 10-årig
          periode. Desuden skal kul i dansk energiproduktion udfases senest i
          2028.
        </ListItem>
        <ListItem>
          Den flydende biomasse skal ikke fylde mere end 10-20 procent af
          energiproduktionen i 2030 og i så høj grad som muligt bestå̊ af lokalt
          overskud fra skånsom skovdrift. Desuden foreslås
          førstegenerationsbiobrændsler helt udfaset i 2025, hvor alt skal være
          andengenerationsbiobrændsler. Herfra og senest i 2035 skal Danmark
          udelukkende benytte avancerede biobrændsler.{" "}
        </ListItem>
        <ListItem>
          Desuden har Alternativet en række forslag, der skal fremme vedvarende
          energi, samt en række forslag med henblik på bedre udnyttelsen af
          overskudsvarme.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Med henblik på at udfase fossile brændsler foreslår alternativet
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          En ny undergrundslov, som understøtter klimalovens målsætning om, at
          Danmark skal være et lavemissionssamfund i 2050. Konkret vil dette
          betyde et forbud mod nye efterforsknings- og indvindingstilladelser
          til fossil energi, samt fjernelse af muligheden for at forlænge
          licenser. Endelig skal der laves en afviklingsplan for alle
          eksisterende kulbrinteindvendingsanlæg over en 10-årig periode.
          Alternativet ønsker yderligere at stoppe al ny efterforskning af olie
          og gas i Nordsøren ved næste udbud.{" "}
        </ListItem>
        <ListItem>
          At ændre Nordsøfondens formål, så den med vedtagelsen af
          afviklingsplanerne får rollen som statens aktør i afviklingen af den
          fossile industri.{" "}
        </ListItem>
        <ListItem>
          At fremtidige politiske forslag og beregninger bør basseres på Det
          Internationale Energiagenturs (IEA) Parisaftale-kompatible
          olieprisscenarie. Således vil beregninger og olieprisscenarier være
          baseret på en forventning om, at vi når Pariseraftalens målsætninger.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at udfase brugen af biomasse og førstegenerationsbiobrændsel foreslår
      Alternativet
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          At udarbejde en biomassestrategi for Danmark, der skal klarlægge hvad
          vi vil bruge biomassen til, og hvor meget den skal fylde i vores
          energiproduktion. Alternativet ønsker at nedsætte et uafhængigt
          biomasseudvalg, der får et halvt år til at udarbejde en strategi med
          det sigte, at biomasse skal fylde så lidt som muligt i
          energiproduktionen i 2030.
        </ListItem>
        <ListItem>
          At indføre en afgift på fast biomasse i fjernvarmeanlæg og i private
          ovne (ikke fastlagt)
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Alternativet foreslår med henblik på at fremme vedvarende energi
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItemBold>
          Opførsel af vindmølleparker der producere mindst 1 GW vedvarende
          energi om året i 2021-2030, hvoraf det meste skal dækkes af
          vindmøller.
        </ListItemBold>
        <ListItemBold>
          Desuden ønsker Alternativet at fremme brugen af varmepumper ved at
          halvere elafgiften permanent for de kollektive elvarmepumper (dvs. fra
          40 til 20 øre/kWh)
        </ListItemBold>
      </AboutList>
    </AboutBody>
    <AboutBody>
      <AboutList>
        <ListItem>
          Desuden skal havene skal udforskes som mulige placeringer, ligesom der
          skal gennemføres forsøg med lokale, folkelige projekter og
          energifællesskaber samt udpeges deciderede energizoner, hvor flere
          teknologier kombineres med henblik på synergi og minimal forstyrrelse
          af landskabet og naboer.{" "}
        </ListItem>
        <ListItem>
          Støtte den fortsatte udvikling af bølgeenergi med 50 mio. kr. om året
          i fem år.{" "}
        </ListItem>
        <ListItem>
          Fremme geotermi ved at fjerne kraftvarmekravet, ligestille geotermi og
          biomasse og give geotermi forrang for affald og fossilenergi i
          varmeområdet.
        </ListItem>
        <ListItem>
          Udbygge biogasanlæg så gylle og grønt affald kan omdannes til biogas
          og jordforbedringsmiddel frem for at blive spredt direkte eller gå til
          forbrænding.
        </ListItem>
        <ListItem>Naturgas foreslås gradvist udfaset.</ListItem>
        <ListItem>
          Derudover foreslår Alternativet at fjerne dobbeltbeskatningen af
          overskudsvarme, fritage overskudsvarmen fra varmeforsyningslovens
          prisbestemmelser, samt sikre afgiftsfrihed for de virksomheder, der
          vil forære varmen væk. Alternativet forslår konkret at der afsættes
          knap en milliard i perioden 2018 – 2021 til implementeringen af
          individuelle og kollektive varmepumper. Desuden forslår Alternativet
          at gøre eltariffer for fjernvarmen omkostningsægte, således at
          betaling for transport og levering af energien komme til at afspejle
          den reelle omkostning, som fjernvarmeselskaberne giver anledning til.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Alternativet har en række forslag, der tilsammen skal forbedre udnyttelsen
      af overskudsvarme
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          Elafgiften til opvarmningsformål skal sænkes permanent til 4 kr./MWh
          (EU’s minimumsafgift, ensartet), hvis der samtidig betales
          overskudsvarmeafgift på hele varmemængden.
        </ListItem>
        <ListItem>
          Supermarkeder fritages fra afgiften for den varme de selv bruger, og
          dermed gøre det mere rentabelt for supermarkeder at udnytte
          overskudsvarme.{" "}
        </ListItem>
        <ListItem>
          At indføre en bagatelgrænse i reglerne for overskudsvarmeafgiften samt
          en lempelse af Energitilsynets indrapporteringskrav (priser, budgetter
          og regnskaber) for mindre leverandører.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>Desuden foreslår Alternativet</AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          At øge støtten til energiforskning med mindst 1,5 mia. Kr. årligt frem
          til 2020. I perioden 2020-2030 bør energiforskningsmidlerne gradvist
          hæves til 2-4 milliarder kroner.
        </ListItem>
        <ListItem>
          At oprettelse af en energitestzone på Bornholm, hvor det er muligt at
          teste energiløsninger.{" "}
        </ListItem>
        <ListItem>At genindføre PSO-afgiften.</ListItem>
        <ListItem>
          At genindføre en forsimplet udgave af Grønne Regnskaber, der fokuserer
          på virksomhedens drivhusgasudledning. Den brede offentlighed skal have
          adgang til information om virksomhedernes samlede klimabelastning, og
          større virksomheder skal forpligtes til at udarbejde grønne
          regnskaber.
        </ListItem>
        <ListItem>
          Indførsel af en CO2e-skat for at implementere princippet om, at
          ’forureneren betaler’. Konkret forslås indførsel af en minimumspris
          for CO2 på 40 euro inden 2020 og 100 euro (125 dollars) inden 2025.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader3>
      Adfærd - Alternativet foreslår desuden en række tiltag, der skal bidrage
      til en adfærdsændring for den enkelte dansker. Deres målsætning er
    </AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          At den enkelte dansker bør max udlede 2-3 tons drivhusgasser i 2030.{" "}
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at nå denne målsætning foreslår Alternativet
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          At udarbejde handleplan for at nedbringe klimabelastningen til maks.
          2-3 tones drivhusgasser per dansker.
        </ListItem>
        <ListItem>
          At indføre en klimafgift på rødt kød og senere en generelt
          omstillingsbidrag på fødevarer med høj klimabelastning. Konkret
          foreslår de en afgift på okse- og kalvekød på 17 kr. pr. kg, hvilket
          svarer til en pris på 88 ører pr. kg CO2.{" "}
        </ListItem>
        <ListItem>
          At nedsættelse af momsen til 12,5 pct. på alle vegetabilske fødevarer
          som frugt, grønt, nødder, bønner, brød osv.{" "}
        </ListItem>
        <ListItem>
          At der bliver udviklet nye officielle kostråd, som er baseret på,
          hvorvidt fødevare er klimabelastende
        </ListItem>
        <ListItem>
          At sænke af kørselsfradrag for cyklister fra nuværende 24km. til 12km
          for cykler.{" "}
        </ListItem>
        <ListItem>
          At skabe større incitament til at reparere cykler, lædervarer og
          tekstiler, ved at halvere momsen for reparation af disse produkter.
          Derudover ønskes et skattefradrag for reparation og vedligeholdelse af
          hårde hvidevare. Fradraget vil være 50 pct. af arbejdsomkostningerne
          op til 12.000kr. pr. person.
        </ListItem>
        <ListItem>
          At indføre af pantordning for elektronik. Alternativet bakker op om
          SF’s forslag om at indføre en pantordning på 100-250 kr. for
          elektroniske produkter.{" "}
        </ListItem>
        <ListItem>
          At forlænge reklamationsretten og stille krav om til producenten om,
          at oplyse om produkters forventede levetid og garantere, at
          reservedele og opdateringer er til rådighed i hele levealderen. Alle
          væsentlige dele skal kunne udskiftes. Desuden ønskes en indførsel af
          et forbud mod ”planlagt forældelse” (dvs. produkter, der intentionelt
          er designet til at forældres før tid). Indtil et reelt forbud er
          muligt, kræver Alternativet at producenter oplyser om evt. planlagt
          forældelse.
        </ListItem>
      </AboutList>
    </AboutBody>

    <AboutHeader2 name="regeringen" href="#scenariodescriptions-top">
      Regeringen
    </AboutHeader2>
    <AboutBackToTop href="#scenariodescriptions-top">Tilbage</AboutBackToTop>
    <AboutBody>
      Nedenfor findes en mere uddybet beskrivelse af Regeringens konkrete
      målsætninger og virkemidler inden for klimaområdet. Der er taget
      udgangspunkt i Klima- og luftudspillet ’Sammen om en grønnere fremtid’,
      Energiaftalen 2018 samt regeringens seneste transportudspil.
    </AboutBody>
    <AboutHeader3>Målsætninger for transportsektoren</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          1 mio. Elbiler, plug-in hybridbiler eller tilsvarende biler i Danmark
          i 2030, samt udfasning af fossilbiler frem mod 2030.
        </ListItem>
        <ListItem>
          Desuden lægger regeringen op til en grøn omstilling af rutebusserne og
          taxiflåden.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>For at nå denne målsætning ønsker regeringen at</AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItemBold>
          Stoppe for salg af nye benzin- og dieselbiler fra 2030. Samtidig er
          det regeringens mål, at der fra 2035 heller ikke længere sælges
          plug-in hybridbiler.
        </ListItemBold>
        <ListItemBold>
          Fjerne registreringsafgiften på grønne biler under 400.000 kr. i 2019
          og 2020. Konkret ønsker regeringen at hæve bundfradraget i
          registreringsafgiften for el- og plug-in hybridbiler, så det i 2019
          udgør 40.000 kr. og 77.500 kr. i 2020. Regeringen vil samtidig udskyde
          indfasningen af registreringsafgiften med ét år.
        </ListItemBold>
        <ListItem>
          For at gøre grønne biler (fx el- eller plug-in hybridbiler) mere
          attraktive som firmabil og styrke markedet for brugte biler vil
          regeringen i en periode indføre et fradrag i beskatningsgrundlaget for
          de grønne biler på 30.000 kr.{" "}
        </ListItem>
        <ListItemBold>
          Afsætte en pulje på i alt 80 mio. kr. til hurtigladestandere, hvoraf
          20 mio. kr. øremærkes hurtigladestandere på statsvejnettet, og 60 mio.
          kr. øremærkes til det kommunale vejnet med særligt fokus på trafikale
          knudepunkter.
        </ListItemBold>
        <ListItem>
          Give kommunerne friere rammer til selv at give rabat til nul- og
          lavemissionsbiler.
        </ListItem>
        <ListItem>
          Indgå̊ aftale med kommunerne om at sikre areal til, at private aktører
          kan opsætte tilstrækkeligt med ladestandere i byerne.
        </ListItem>
        <ListItem>
          Give kommunerne mulighed for at tillade, at lav- og nulemissionsbiler
          kan køre i busbaner. Det kan gøre det grønne transportvalg mere
          attraktivt i bybilledet.
        </ListItem>
        <ListItem>
          Igangsætte forsknings- og udviklingsaktiviteter målrettet elbilers
          samspil med energisystemet. Det skal forberede systemet til et stort
          antal elbiler i fremtiden.
        </ListItem>
        <ListItem>
          Nedsætte en kommission, der får til opgave at analysere tiltag til
          udbredelse af grønne biler i stor skala i Danmark.{" "}
        </ListItem>
        <ListItem>
          Afsætter en pulje på 100 mio. kr. til midlertidigt at hæve
          skrotpræmien for ældre dieselbiler. Ejere af gamle dieselbiler fra før
          2006 vil således kunne få en skrotpræmie på 5000 kr.
        </ListItem>
        <ListItemBold>
          Forhøje kravet for iblanding af biobrændstoffer i benzin og diesel til
          8 pct. Det bidrager også̊ til, at Danmark kan opfylde sit EU-mål for
          vedvarende energi i transportsektoren i 2020.{" "}
        </ListItemBold>
        <ListItem>
          For at skabe renere luft til danskerne vil regeringen give de fem
          største danske byer mulighed for at indføre miljøzoner med skærpede
          krav til lastbiler, busser og varebiler. Derfor indføres reglerne
          smidigt og trinvist frem til 2025. Regeringen vil samtidig stramme
          håndhævelsen af miljøzonereglerne gennem en digitalisering af
          ordningen.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Regeringen fremsætter to konkrete forslag med henblik på grøn omstilling
      af busruterne og taxiflåden
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          Gennemføre en grøn omstilling af rutebusserne. Dette skal ske i tre
          trin:Første trin er i 2020, hvor nye busser skal være
          CO2-neutrale.Næste trin er i 2025, hvor nye busser i byerne hverken må
          udlede luftforurening eller CO2. Tredje trin er fra 2030, hvor ingen
          busser i byerne må udlede luftforurening eller CO2.Regeringen
          inviterer kommuner og regioner til en drøftelse om at gennemføre denne
          omstilling.
        </ListItem>
        <ListItem>
          Stramme energikravene til nye taxier i 2019, 2022 og 2025, så̊ ingen
          nye taxier udleder CO2 eller luftforurening fra 2025. Omsætningen i
          taxiflåden ventes at sikre, at den grønne omstilling er fuldt
          gennemført inden 2030. I 2019 og 2020 er antallet af nye taxilicenser
          begrænset til 500 om året, som fordeles ved lodtrækning. Regeringen
          vil give taxivognmænd med nulemissionsbiler garanti for en taxilicens.
          Yderligere vil regeringen etablere flere og hurtigere ladestandere,
          hvor der ved placeringen af standerne bliver taget særlige hensyn til
          taxierhvervets behov.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader3>Målsætninger for landbrug og natur</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          Styrke den forsatte reducering af drivhusgasudledningen fra
          landbruget.
        </ListItem>
        <ListItem>
          Arbejde for at nå Danmarks EU-forpligtelsen om at nedbringe
          ammoniakudledningen yderligere.
        </ListItem>
        <ListItem>
          Desuden vil regeringen fremme præcisionslandbrug og styrke
          klimaforskningen, samt partnerskabet mellem regering og landbrug.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Med henblik på at nedbringe drivhusgas-, samt ammoniakudledningen fra
      landbrug vil regeringen{" "}
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          Nedsætte et udvalg, som skal vurdere mulige tiltag, der kan bidrage
          til opfyldelse af målene om reduktion af ammoniak i NEC- direktivet.
          Blandt andet skal udvalget undersøge, hvordan ammoniakreducerende
          teknologi kan fremmes via støttemodeller, pilotordninger eller
          lignende. Allerede nu afsættes en pulje til konkrete tiltag, der skal
          anvendes til at følge op på udvalgets arbejde. Ialt afsættes 160 mio.
          kr. til indsatsen.
        </ListItem>
        <ListItem>
          Etablere en tilskudsordning til investeringer i nye slagtesvinestalde,
          der skal være med til at udbrede ammoniak- og drivhusgasreducerende
          teknologier som fx anlæg til gylleforsuring.{" "}
        </ListItem>
        <ListItem>
          Etablere et partnerskab med landbruget, der skal sigte efter fortsat
          at udvikle et klimavenligt dansk landbrug i verdensklasse.{" "}
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>For at nå denne målsætning ønsker regeringen at</AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          Fremme præcisionslandbrug, hvor man med højteknologiske løsninger som
          sensorer og GPS- data kan optimere dyrkningen.
        </ListItem>
        <ListItem>
          Derudover afsætter regeringen 90 mio. kr. til klimaforskning i
          landbruget.
        </ListItem>
        <ListItem>
          Desuden har regeringen sammen med Socialdemokratiet og Dansk
          Folkeparti i forbindelse med hjælpepakken til landbruget etableret en
          jordfordelingsfond på 150 mio. kr. Jordfordelingsfondens formål er,
          primært gennem køb og salg af jorder, at gennemføre multifunktionel
          jordfordeling.{" "}
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader3>Målsætninger for energisektoren</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>På sigt skal Danmark være uafhængigt af fossile brændsler. </ListItem>
        <ListItem>
          På kort sigt planlægger regeringen en række tiltag, som skal udfase
          ældre brændeovne og klimabelastende køleanlægsvæsker.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      For at nå disse målsætninger planlægger regeringen at
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          Formulere en gasstrategi, som skal skabe det nødvendige grundlag for
          et markedsbaseret og kommercielt udnyttet gassystem. Strategien skal
          blandt andet forholde sig til potentialet i biogas og andre grønne
          gasser og dermed bidrage til et klimaneutralt Danmark senest i 2050.
        </ListItem>
        <ListItem>
          Indføre en ordning, hvor der tages et tjek af, om den gamle brændeovn
          er så effektiv og miljørigtig, som den bør være, når danskerne køber
          sommerhus. Er brændeovnen fra før 2000, skal den skrottes eller
          udskiftes til en ny brændeovn.
        </ListItem>
        <ListItem>
          Regeringen afsætter 46 mio. kr. til en midlertidig national
          skrotningsordning for gamle brændeovne for at accelerere udskiftningen
          af de ældste brændeovne. Ejere af de ældste brændeovne vil derfor
          kunne få ca. 2000 kr. i tilskud, hvis de skrotter eller udskifter
          deres gamle brændeovn.
        </ListItem>
        <ListItem>
          Regeringen vil stramme kravene til anvendelse af kølemidlerne for at
          fremme mere klimavenlige alternativer, som findes på markedet.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader3>Regeringen planlægger desuden at</AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          Øge finansieringen til energi- og klimaforskning til 1 mia. kr. I
          2024. Konkret vil regeringen igangsætte forskning i CO2-optag og
          -lagring. Derudover vil regeringen igangsætte en analyse, der skal
          forbedre opgørelsesmetoderne, så man mere målrettet kan øge optaget af
          CO2.
        </ListItem>
        <ListItem>
          At annullere 8 mio. kvoter fra kvotehandelssystemet en del af
          klimaindsatsen frem mod 2030. Det betyder, at der bliver færre
          CO2-kvoter i systemet, og dermed bliver det dyrere at udlede CO2.{" "}
        </ListItem>
        <ListItem>
          Igangsætte en kampagne, der skal gøre det lettere at vælge klimaet
          til, selv i en travl hverdag. Med udgangspunkt i et klimamærke skal
          kampagnen gøre det lettere for danskerne at træffe grønne valg.
          Indsatsen vil blive tilrettelagt med rådgivning fra et panel af
          adfærds- og forbrugereksperter og i dialog med erhvervslivet. Desuden
          vil regeringen brede klimaengagementet ud til danskere i alle
          aldersgrupper gennem undervisningsinitiativer og folkelige
          aktiviteter. Regeringen vil lancere KLIMAETS PRIS, der årligt skal
          gives til det bedste danske klimainitiativ.
        </ListItem>
        <ListItem>
          Foretage en løbende opfølgning på klimaindsatsen i 2022, 2024 og 2027.
          Det vil give mulighed for løbende at vurdere behovet for at tilpasse
          indsatsen på klimaområdet.
        </ListItem>
        <ListItem>
          Regeringen har desuden sammen med aftalekredsen bag energiaftalen fra
          juni 2018.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutBody>
      De tiltag som regeringen har fremlagt i deres klima- og luftudspil ”Sammen
      om en grønnere fremtid”, vil, ifølge regeringen beregninger, reducere
      Danmarks samlede CO2 udledningen med 26 mio. ton frem mod 2030 (dog ikke
      medregnet gevinster fra udfasning af benzin- og dieselbiler, der kan give
      en ydereligere reduktion på 5,5 mio. ton CO2. frem mod 2030). Danmarks
      klimamål i EU er 32-37 mio. ton CO2 frem mod 2030. Regeringen vil sammen
      med energiaftalens parter tilvejebringe finansiering til yderligere tiltag
      på klimaområdet fra 2026-2030.
    </AboutBody>
    <AboutHeader3>Regeringens transportudspil</AboutHeader3>
    <AboutBody>
      Ud over ovenstående, er dele af den nylige aftale om et sammenhængende
      Danmark også medtaget i scenarierne. Med aftalen opnåede Regeringen og
      Dansk Folkeparti enighed om en samlet og fuldt finansieret
      investeringsplan for transportsektoren i perioden 2021-2030. Aftalen
      forventes at resultere i, at der samlet investeres i alt 112,7 mia. kr. på
      transportinfrastrukturområdet. Aftalen omfatter investering i ny
      infrastruktur, udbygning af eksisterende infrastruktur, vedligeholdelse
      samt en række puljer.
    </AboutBody>
    <AboutHeader3>
      Der afsættes i alt 30,4-32,1 mia. kr. til ny infrastruktur. Nedenfor ses
      en oversigt over aftalte investeringer i ny infrastruktur.{" "}
    </AboutHeader3>
    <AboutBody>
      <AboutList>
        <ListItem>
          Der afsættes, under forudsætning af et medfinasieringbidrag på samlet
          600 mio. kr., 6.580 mio. kr. (2019-pl) til anlæg af en tredje
          Limfjordsforbindelse på ca. 20 km lang, 4-sporet motorvej via Egholm
          med forbindelse til E45 Nordjyske Motorvej i syd og E39
          Hirtshalsmotorvejen i nord. Projektet igangsættes i 2024. Det
          forventes, at en mindre del af udgiften vil falde efter 2030.
        </ListItem>
        <ListItem>
          Der anlægges en ny midtjysk motorvej fra Haderslev til Give. I
          VVM-undersøgelsen af projektet undersøges både en linjeføring øst og
          vest om Billund. Den østlige linjeføring er i en strategisk analyse
          vurderet til 5.792 mio. kr., mens den vestlige ved et groft overslag
          er vurderet til omkring 7.500 mio. kr. Projektet igangsættes i 2023.
        </ListItem>
        <ListItem>
          Der afsættes 1.821 mio. kr. (2019-pl) til udbygning af den
          eksisterende vej til motorvej fra Regstrup til Svebølle og anlæg af ny
          motorvej mellem Svebølle og Kalundborg. Projektet igangsættes i 2023.
        </ListItem>
        <ListItem>
          Der afsættes 3.431 mio. kr. (2019-pl) til at etablere
          Frederikssundmotorvejen. Projektet igangsættes i 2022.
        </ListItem>
        <ListItem>
          Der afsættes 1.490 mio. kr. (2019-pl) til anlæg af en ca. 15 km lang
          motorvej mellem Næstved og Sydmotorvejen ved Rønnede. Projektet
          igangsættes i 2024.
        </ListItem>
        <ListItem>
          Der blev i aftalen opnået enige om at prioritere 6.470 mio. kr.
          (2019-pl) til en ny motorvej på den ca. 35 km lange strækning fra Køge
          til Frederikssundsvej. Projektet igangsættes i fase 2. Der er igangsæt
          en forundersøgelse af projektet, der forventes afsluttet 2021. Inden
          der kan igangsættes et konkret anlægsprojekt, skal der desuden
          gennemføres en VVM-undersøgelse og vedtages anlægslov. Anlægsarbejdet
          vurderes derfor først at kunne påbegyndes efter 2024. Det forventes,
          at en mindre del af anlægget vil ske efter 2030.
        </ListItem>
        <ListItem>
          Er blev yderligere opnået enige om at afsætte 4.848 mio. kr. (2019-pl)
          til en ny højhastighedsbane på jernbanestrækningen mellem Odense V og
          Kauslunde. Projektet igangsættes i 2024.
        </ListItem>
        <ListItem>
          Der igangsættes i 2019 en forundersøgelse af en fast
          Kattegatforbindelse som vil være den første konkrete
          planlægningsundersøgelse af projektet og vil samledes give et billede
          af, hvordan en fremtidig forbindelse potentielt kan se ud.
          Forundersøgelsen vil bl.a. indeholde undersøgelser af forskellige
          tekniske løsninger for den faste forbindelse (bro- og
          tunnelløsninger), mulige linjeføringer, screening af miljøforhold,
          geotekniske vurderinger samt trafikale, samfundsøkonomiske og
          finansielle analyser. Hvis forundersøgelsen viser, at projektet kan
          brugerfinansieres, vil aftaleparterne tage stilling til den videre
          proces.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>Regeringen planlægger desuden:</AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          Aftaleparterne er enige om at afsætte 1.467 mio. kr. (2019-pl) til
          udvidelse af Østjyske Motorvej fra Aarhus S til Aarhus N fra fire til
          seks spor. Projektet igangsættes i 2021.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 3.032 (2019-pl) mio. kr. til
          udvidelse af Østjyske Motorvej fra Hornstrup (Vejle) til Skanderborg S
          fra fire til seks spor. Projektet igangsættes i 2023.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 581 mio. kr. (2019-pl) til en
          udvidelse af E45/E20 mellem Kolding V og motorvejskryds Kolding fra
          4/6 til 6/8 spor. Projektet igangsættes i 2021.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 1.088 mio. kr. (2019-pl) til
          udvidelse af Fynske Motorvej fra afkørsel 53, Odense V til og med ny
          afkørsel 50 Hjallese fra fire til seks spor. Projektet igangsættes i
          2021. Med igangsættelse i 2021 vil udvidelsen ske i sammenhæng med
          udvidelse af motorvejen på Vestfyn.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 306 mio. kr. (2019-pl) til en
          række kapacitetsforbedrende tiltag på den ca. 20 km lange strækning.
          Projektet igangsættes i 2021.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 115 mio. kr. (2019-pl) til
          udvidelse af Hillerødmotorvejen fra M3 til Ring 4 (nordgående retning)
          samt 68 mio. kr. (2019-pl) til udvidelse af Hillerødmotorvejen fra M3
          til Ring 4 (sydgående retning). Projektet igangsættes i 2021.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 875 mio. kr. (2019-pl) til
          udvidelse af Ring 4 mellem Ballerup C og Hillerødmotorvejen. Projektet
          igangsættes i 2023. Desuden prioriteres 546 mio. kr. (2019-pl) til en
          udvidelse af Ring 4 mellem motorvejskryds Ishøj og motorvejskryds
          Vallensbæk. Projektet igangsættes i fase 2.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 855 mio. kr. (2019-pl) til at
          udvide den eksisterende motortrafikvej mellem Allerød og Hillerød til
          en 4-sporet motorvej. Projektet igangsættes i 2023.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at prioritere 800 mio. kr. (2019-pl) til
          udvidelse af Amagermotorvejen mellem motorvejskryds Avedøre og
          udfletningen mellem Øresundsmotorvejen og Centrumforbindelsen fra seks
          til otte spor. Projektet igangsættes i fase 2. Afhængigt af den
          besluttede anlægsstart i fase 2, kan en del af anlægget af projektet
          ske efter 2030.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at prioritere 800 mio. kr. (2019-pl) til en
          udvidelse af hele den 10 km lange strækning med et ekstra spor i hver
          retning. Projektet igangsættes i fase 2. Afhængigt af den besluttede
          anlægsstart i fase 2, kan en del af anlægget af projektet ske efter
          2030.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 548 mio. kr. (2019-pl) til at
          opgradere de to strækninger hhv. nord og syd om Herning til motorvej.
          Projektet igangsættes i 2023.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 485 mio. kr. (2019-pl) til en
          hastighedsopgradering af jernbanen mellem Ringsted og Odense.
          Projektet igangsættes i 2021.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 2.500 mio. kr. (2019-pl) til
          udbygning af Københavns Lufthavn Station. Projektet igangsættes i
          2022.
        </ListItem>
        <ListItem>
          Parterne er enige om at prioritere 251 mio. kr. (2019-pl) til
          etablering af 2 perronspor på Glostrup station. Projektet igangsættes
          i fase 2.
        </ListItem>
        <ListItem>
          Parterne er enige om at afsætte 52 mio. kr. (2019-pl) i 2022 som
          tilskud til etablering af Ny Ellebjerg Station.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Regeringen og Dansk Folkeparti opnåede desuden enighed om at iværksætte
      konkrete projekter, som sigter på at styrke den regionale opkobling på
      hovedstrækningerne. Aftaleparterne har således besluttet at igangsætte en
      række konkrete projekter på de øvrige statsveje i perioden 2021-2030. Der
      investeres et samlet beløb på 50,2-51,9 mia. kr. Aftalepartnerne er enige
      om følgende
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          Aftaleparterne er enige om at afsætte 139 mio. kr. (2019-pl) til at
          udbygge de resterende ca. 12 km af strækningen til 2+1 vej. Projektet
          igangsættes i 2021.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 377 mio. kr. (2019-pl) til anlæg
          af en omfartsvej ved Mariager. Projektet igangsættes i 2022.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 609 mio. kr. (2019-pl) til en
          opgradering af Rute 34 mellem Haderup og Skive. Det konkrete projekt
          vil afvente resultaterne af en VVM-undersøgelse. Projektet igangsættes
          i 2024.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 800 mio. kr. (2019-pl) til
          kapacitetsforbedringer på Rute 26 mellem Aarhus og Viborg. Det
          konkrete projekt vil afvente resultaterne af analysen. Projektet
          igangsættes i 2022.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 865 mio. kr. (2019-pl) til en
          udbygning af strækningen til 2+1 vej, dog med 1+1 vej ved krydsnings-
          punkter. Midlerne anvendes også til at etablere omfartsveje ved Barde
          og Havnstrup, forbedre Videbæk omfartsvej samt ombygge rundkørsel ved
          Røgind. Der forudsættes desuden fastsat en hastighedsgrænse på 90
          km/t. Projektet igangsættes i 2021.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 100 mio. kr. (2019-pl) til
          udbygning af Rute 15 fra Bale til Tåstrup. Det konkrete projekt vil
          afvente resultatet af VVM-undersøgelsen. Projektet igangsættes i 2024.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 400 mio. kr. (2019-pl) til
          kapacitetsforbedringer på Rute 11 mellem Korskroen og Varde. Det
          konkrete projekt afventer resultatet af VVM- undersøgelsen. Projektet
          igangsættes i 2024.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 125 mio. kr. (2019-pl) til
          kapacitetsforbedringer på Rute 9 ved Nørreballe, Lolland og yderligere
          5 mio. kr. til undersøgelse af mulige fremkommelighedstiltag på resten
          af strækningen. Det konkrete projekt vil afvente resultaterne af
          analysen. Projektet igangsættes i 2024.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at afsætte 450 mio. kr. (2019-pl) til
          udbygning af E55 mellem Sydmotorvejen og Nykøbing Falster til 2+2 vej.
          Projektet igangsættes i 2021.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at prioritere 926 mio. kr. (2019-pl) til at
          anlægge en ny bane mellem Vejle og Billund. Parterne mødes snarest for
          at fastlægge linjeføringen. Projektet igangsættes i 2023.
          Aftaleparterne er enige om at sikre finansiering til den efterfølgende
          togdrift inden banen åbner. Parterne er desuden enige om, at den
          samlede fremtidige kollektive betjening af Vejle-Billund Lufthavn og
          økonomien heri drøftes med de lokale parter med ansvar for den
          kollektive bustrafik ved anlæg af projektet.
        </ListItem>
      </AboutList>
    </AboutBody>
    <AboutHeader4>
      Aftalepartnerne opnåede desuden enighed om at investere 18,2 mia. kr. til
      oprettelse af en række puljer, samt vedligeholdelse af veje og baner. De
      18,2 mia. kr. er fordel således:
    </AboutHeader4>
    <AboutBody>
      <AboutList>
        <ListItem>
          Aftaleparterne er enige om at etablere en pulje på i alt 5,6 mia. kr.
          (2019-pl) til opgradering af øvrige statsveje.{" "}
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at etablere en pulje på i alt 1,5 mia. kr.
          (2019-pl) til bedre fremkommelighed, tilgængelighed og trafiksikkerhed
          som udmøntes løbende.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at etablere en pulje på i alt 1.630 mio.
          kr. til bedre støjbekæmpelse som ud- møntes løbende. Aftaleparterne
          ønsker, at mulighederne for kommunal medfinansiering indgår i det
          videre arbejde vedrørende udmøntning af puljen for at sikre mest mulig
          støjbekæmpelse for pengene og understøtte kommunal prioritering.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at etablere en pulje på i alt 1,0 mia. kr.
          til bedre cykelinfrastruktur i hele landet som udmøntes løbende.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at etablere en pulje på 2,1 mia. kr. til
          hastighedsopgraderinger mv. på jern- banen, som målrettes tiltag, der
          kommer passagerne mest til gode i form af kortere rejsetid og bedre
          punktlighed. Puljen kan udmøntes i fase 2.
        </ListItem>
        <ListItem>
          Aftaleparterne er enige om at etablere en pulje på 2,1 mia. kr. til
          hastighedsopgraderinger mv. på jern- banen, som målrettes tiltag, der
          kommer passagerne mest til gode i form af kortere rejsetid og bedre
          punktlighed. Puljen kan udmøntes i fase 2.
        </ListItem>
        <ListItem>
          Aftaleparterne er desuden enige om at etablere en pulje på i alt 0,3
          mia. kr. til undersøgelser af en række konkrete projekter.
        </ListItem>
      </AboutList>
    </AboutBody>

    <AboutBody>
      <Link to="/">Tilbage til forsiden</Link>
    </AboutBody>
  </AboutContainer>
);
