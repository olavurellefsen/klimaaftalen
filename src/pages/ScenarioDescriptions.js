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
    AboutHeader.displayName = 'AboutHeader'
const AboutHeader3 = styled.h3`
  font-size: 1.2em;
  ${breakpoint('mobile','desktop')`
    font-size: 1em;
  `}  
  font-weight: bold;
  `
    AboutHeader.displayName = 'AboutHeader'
const AboutHeader4 = styled.h4`
  font-size: 1em;
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
  const AboutListB = styled.ul`
  font-size: 1em;
  ${breakpoint('mobile','desktop')`
    font-size: 0.7em;
  `}  
    font-weight: bold;
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
	
	<AboutHeader2>Enhedslisten</AboutHeader2>
    <AboutBody>
		Med klimaudspillet ’En Social Retfærdig Vej Til Det Grønne Samfund’ lægger Enhedslisten op til en overordnet målsætning om at reducere Danmarks CO2-udledning med 70 pct. i 2030 og 100 pct. i 2040 (ift. 1999). Som et centralt element foreslår Enhedslisten at udarbejde en klimalov, som gennem bindende målsætninger skal sikre, at Danmark holder sig på kursen mod 70 pct. og 100 pct. Reduktion i hhv. 2030 og 2040. Indenfor transportområdet foreslår Enhedslisten at forbyde salget af diesel- og benzinbiler i hhv. 2022 og 2025, og fremsætter en række tiltag for at understøtte denne udfasning. Inden for landbrugsområdet foreslår Enhedslisten at drivhusgasudledningen fra landbruget bør reduceres til mindst en tredjedel i 2030. Enhedslisten fremsætter et mål om, at vi i 2030 ikke importerer mere el, el vi gør i dag. For at understøtte dette, ønsker Enhedslisten at investere i vindenergi og andre vedvarende energikilder og samtidig nedsætte brugen af biomasse. På nedenstående figur ses en reduktionskurve baseret på Enhedslistens foreslåede tiltag frem til 2040
    </AboutBody>
	      <AboutImage src="images/Enhedslisten_CO2.png" alt="SF´s reduktionskurve" width="752" height="452" />
	<AboutBody>
		I nedenstående findes en mere uddybet beskrivelse af Enhedslistens konkrete målsætninger og virkemidler inden for klimaområdet, primært baseret på klimaudspillet ’En Social Retfærdig Vej Til Det Grønne Samfund’.
	</AboutBody>
	<AboutHeader3>Målsætninger inden for transportsektoren</AboutHeader3>
	<AboutBody>
	  <AboutList>
        <li>Udfasning af hhv. dieselbiler og benzinbiler i 2022 og 2025, samt at fremme elbiler. </li>
        <li>Derudover foreslår Enhedslisten konkrete forslag konkret forslag med henblik på etablering af anlæg til at tanke gas til gasdrevne lastbiler, samt eldrevne færger. Tilmed ønsker Enhedslisten at fremme cyklisme samt offentlig transport. Endelige ønsker Enhedslisten at mindske drivhusgasudledningen fra flytransport.</li>
      </AboutList>
	</AboutBody>
	<AboutHeader4>Med henblik på at understøtte udfasningen af dieselbiler og benzinbiler samt fremme eldrevne køretøjer</AboutHeader4>
	<AboutBody>
	  <AboutListB>
        <li>At indføre et forbud mod salg af nye diesel i 2022. Brugte dieselbiler skal fortsat kunne handles.</li>
        <li>At indføre et forbud mod salg af nye benzinbiler i 2025. Brugte benzinbiler skal fortsat kunne handles.</li>
		<li>At omlægning af registreringsafgiften, så de seneste lempelser annulleres. Det indebærer bl.a., at den højeste sats på registreringsafgiften ændres fra 150 pct. til 180 pct., mens den lave sats ændres fra 85 pct. til 105 pct.</li>
      </AboutListB>
	  <AboutList>
	    <li>At hæve skrotningspræmien for benzin-, diesel- og hybridbiler fra 2.200 kr. til 20.000 kr. i 2026. Herefter udfases den forhøjede skrotningspræmie gradvist frem mod 2029.</li>
	  </AboutList>
	  <AboutListB>
	    <li>At hæve afgiften på diesel fra 2020 med 69 øre pr. liter svarende til 22 pct. Samtidig hæves benzinafgiften med 69 øre pr. liter svarende til 15 pct. Hele provenuet fra de øgede afgifter føres til- bage til borgerne via den grønne check. Forøgelsen af den grønne check fjernes igen, når provenuet bortfalder i takt med, at benzin- og dieselbiler helt udfases.</li>
		<li>At indføres en vejbenyttelsesafgift for personbiler på 1 kr. pr. km i byer, 0,25 kr. pr. km for motorveje og 0,1 kr. pr. km for øvrige veje. Vejbenyttelsesafgiften indføres ikke for at beskatte bilerne hårdere, men skal kompensere for provenutabet, når benzinbiler udfases til fordel for elbiler med lavere afgifter. Vejbenyttelsesafgiften vil samtidig hjælpe med at begrænse trængsel.</li>
		<li>At indfase elbiler i afgiftssystemet på lige fod med benzinbiler. De undtages dog fra minimumsafgiften, og batterifradraget fast- holdes. Sammen med deres høje fradrag for god brændstoføkonomi betyder det, at der ikke skal betales registreringsafgift for langt de fleste små og mellemstore elbiler. Fra 2026-2030 vil el- biler gradvist få udfaset batterifradraget og indfaset minimumssatsen. Dog vil mikro-elbiler fortsat være fritaget for minimumssatsen.</li>
		<li>At indføres et tilskud på 50.000-100.000 kr. til købet af en elbil i perioden 2020-2025. Tilskuddet gives til 250.000 elbiler i alt efter en trappemodel: 100.000 kr. til de første 100.000 elbiler, 75.000 kr. til de næste 100.000 og 50.000 kr. til de sidste 50.000.</li>
	  </AboutListB>
	  <AboutList>
		<li>At der laves en pulje på 240 millioner kr. over fire år til at fremme udbredelsen af hurtigladestandere, hvor elbiler kan lade op i løbet af 20-30 minutter.</li>
		<li>At alle nye p-pladser skal forberedes til elbiler, så mindst halvdelen af større p-pladser er forberedt til ladestandere, og så der findes mindst to ladestandere på alle større p-pladser.</li>
		<li>At give kommunerne mulighed for at indrette særlige kørebaner til elbiler og prioritere elbiler på offentlige p-pladser.</li>
	  </AboutList>
	  <AboutListB>
		<li>Den særligt lave elafgiftssats for opladning i erhverv og offentligt tilgængelige ladestandere fastholdes frem til 2025.</li>
	  </AboutListB>
	  <AboutList>
		<li>At oprette en pulje på 250 millioner kr. over fem år gå til at etablere gastanke bl.a. til lastbiler.</li>
		<li>At sætte et krav om, at alle nye færger er eldrevne fra 2025. </li>
		<li>Desuden foreslår Enhedslisten at afsættes 250 millioner kr. til en forskningspulje for grøn transport, der primært fokuseres på omstilling af luftfart og tung transport. </li>
		<li>Kommunerne skal have lov til at lave skærpede miljø- og nul-emissionszoner, hvor kommunerne selv bestemmer krav til udledninger. Miljøzonerne skal ikke, som nu, kun omfatte varebiler og lastbiler, men også personbiler og motorcykler.</li>
		<li>Fra 2025 skal der kun gives taxalicenser til nul-emissionskøretøjer. Inden 2025 skal taxalicenser prioriteres til nul-emissionskøretøjer som elbiler og brintbiler.</li>
		<li>At afsættes en pulje på ti millioner kr. årligt i fem år til hurtige ladestandere til taxaer, og de mest centrale taxa-parkerings- pladser prioriteres til nulemissionstaxa allerede fra 2020.</li>
	  </AboutList>
	  <AboutListB>
		<li>At forbedre cykelinfrastrukturen skal forbedres, så det bliver mere attraktivt at tage cyklen frem for bilen. Derfor afsættes en pulje på en milliard kr. over fem år, som regioner og kommuner kan søge til cykelprojekter.</li>
	  </AboutListB>
	</AboutBody>	
	<AboutHeader4>Med henblik på at fremme offetnlig transpoort</AboutHeader4>
	<AboutBody>
	  <AboutListB>
		<li>Der afsættes 15 milliarder kr. over ti år til at gennemføre anden fase af Togfonden DK. </li>
		<li>En pulje på to milliarder kr. over fem år skal sikre bedre trafik i yderområderne, bedre busser og tog samt understøtte tiltag som flextrafik, teletaxi og delebilsordninger i de områder, hvor den kollektive trafik er dårligst.</li>
		<li>Billetterne skal være billigere, så priserne for offentlig transport sænkes med 30 pct. fra 2020. Det koster årligt 1,3 milliarder kr.</li>
		<li>Der afsættes en milliard kr. årligt til at udvide passagerkapaciteten i busser og tog.</li>
		<li>Enhedslisten vil arbejde for, at der oprettes en Europæisk Tog- fond til at sikre bedre og hurtigere forbindelser med lyn- og nat- tog mellem de europæiske hovedstæder.</li>
		<li>Det offentlige indkøb af trafik skal være bæredygtigt. Det betyder, at fra 2020 skal alle offentlige nye indkøb og kontrakter vedr. trafik være såkaldte nul-emissionskøretøjer som el- og brintbiler, og fra 2030 skal alle busser, taxi, biler og varebiler, der kører for det offentlige, være nul-emission.</li>
	  </AboutListB>
	  <AboutList>	
		<li>Overordnet at afsætte i alt 40 milliarder kr. til den kollektive trafik, fordel på ovenstående forslag.</li>
	  </AboutList>
	</AboutBody>
	<AboutHeader4>For at reducerer drivhusgasudledning fra flytransport</AboutHeader4>
	<AboutBody>
	  <AboutListB>
		<li>At indføre en flyafgift, der stiger med antallet af flyvninger, rejsens længde, og hvor meget plads man optager i flyet. Afgiftsniveauet er her fastsat, så det for flertallet af de rejsende er dyrere at tage til et naboland med lavere afgift og flyve derfra. Afgiften pålægges ved afrejse, og det betyder, at den skal betales to gange for flyvning tur-retur indenrigs, men kun én gang for afgangen fra Danmark ved flyvning udenrigs. Afgiften på indenrigsflyvninger indfases samtidig med, at time-modellen for togtrafik mellem landsdelene udrulles. Flyrejser, der baserer sig på 2. generations biobrændstof, el eller electrofuels, fritages for afgiften.</li>
	  </AboutListB>
	</AboutBody>
    <AboutBody>
	 <AboutImage src="images/Enhedslisten_Fly.png" alt="Enhedslistens flyafgifter" width="752" height="452" />
	</AboutBody>
	<AboutHeader3>Målsætninger inden for landbrug</AboutHeader3>
	<AboutBody>
	  <AboutList>
		<li>Drivhusgasudledningen fra landbruget bør reduceres til mindst en tredjedel i 2030. Dette skal ske samtidig med, at landbruget gøres bæredygtigt og økologisk </li>
	  </AboutList>
	</AboutBody>
	<AboutHeader4>For at nå ovenstående målsætning foreslår Enhedslisten foreslår enhedslisten at indføre en CO2 afgift </AboutHeader4>
	<AboutBody>
	  <AboutList>
		<li>At indføre en afgift, hvor hver landbrugsbedrift skal betale 700 kr. pr. udledt ton CO2 fra 2027. I praksis betyder det afgift på husdyr, afgrødedyrkning samt kunstgødning. I takt med at bedrifterne reducerer CO2-udledningen ved f.eks. at omlægge til mindre klimabelastende produktion, vil landbruget blive mindre belastet af afgiften. Da afgiften kan føre til et tab af arbejdspladser i landbrugsklyngen, foreslår Enhedslisten at oprette en pulje på 100 millioner kr., der skal gå til at omskoling og videreuddannelse til dem, som skal finde et andet erhverv. Provenuet fra afgiften føres tilbage til landmanden med det formal at fremme bæredygtighed i produktionen. Det sker ud fra en fordelingsnøgle beregnet på baggrund af, hvor meget den enkelte bedrift udledte før indførelsen af afgiften. Jo mere man har mindsket, desto større kompensation. Provenuet fra afgiften vil falde i takt med omstillingen og nedgangen i udledningen af CO2. I takt med, at der kommer færre penge ind fra afgiften, bliver kompensationen også sænket.</li>
		<li>At udtage 108.000 hektar jorde med særligt høje kulstofindhold af drift frem mod 2030. Jordejerne skal kompenseres økonomisk for den tabte indtægt fra jorden.</li>
		<li>Inklusiv de særligt klimabelastende jorde skal der udtages og omlægges 508.000 hektar landbrugsjord. Det svarer til 21 pct. af det danske landbrugsareal eller et område godt halvanden gange større end Fyn.</li>
		<li>At 100.000 hektar landbrugsjord omlægges til skov frem mod 2030. På længere sigt skal en del såsom urørt skov, hvilket vil være med til at styrke biodiversiteten. Jordejerne kompenseres økonomisk for forskellen i indtægter mellem landbrugsjord og skov.</li>
		<li>At 100.000 hektar landbrugsjord omlægges til flerårige energiafgrøder som pil og poppel. Det sker ved at lave en pulje til omlægningsstøtte på 950-1.300 kr. pr. hektar, der omlægges til energiafgrøder.</li>
		<li>200.000 hektar landbrugsjord udtages til natur. Jordejerne kompenseres økonomisk for den tabte indtægt fra jorden.</li>
		<li>At tilbyde et årligt klimatjek til landmanden, der kortlægger bedriftens nuværende udledninger og hjælper med at lave en klimahandlingsplan for, hvordan landmanden kan gøre sit land- brug mere klimavenligt. Den grønne omstilling er et fælles ansvar, som den enkelte landmand ikke skal stå alene med. Det vil sammen med andre indsatser fremme klimavenlig markdrift og landbrugsudvikling, såsom biokul, permakultur og flere træer på landbrugsarealerne.</li>
		<li>Der skal arbejdes for at EU’s landbrugsstøtte, indtil den er afviklet, understøtter omlægningen til et klimavenligt, bæredygtigt landbrug.</li>
	  </AboutList>
	</AboutBody>
	<AboutHeader3>Målsætninger for Energisektoren</AboutHeader3>
	<AboutBody>
	  <AboutList>
		<li>I 2030 skal vi ikke importerer mere el, end vi gør i dag, hvilket kræver flere havvindmøller end hidtil planlagt.</li>
		<li>Alle fossile energikilder (kul, olie, naturgas) skal udfases i 2040</li>
		<li>Danmark skal udfase udvindingen af olie- og gasudvinding i Nordsøen</li>
	  </AboutList>
	</AboutBody>
	<AboutHeader4>For at imødekomme målsætningen om, at vi ikke importere mere el i 2030 ift. i dag</AboutHeader4>
	<AboutBody>
	  <AboutListB>
		<li>At der opføres flere havvindmøller frem mod 2030 end aftalt i Energiaftalen. Helt konkret to ekstra havmølleparker svarende til strømforbruget fra 1,7 millioner husstande.</li>
	  </AboutListB>
	  <AboutList>
		<li>At fjerne det nuværende krav om at kommuner skal oprette et separat selskab for hver bygning, hvor der etablere solceller. Samtidig undtages kommunale energieffektiviseringer og udbygning af vedvarende energi fra budgetlovens begrænsning af kommunernes årlige anlægsudgifter.</li>
		<li>At ligestille solceller med varmepumper, så det bliver muligt for private hjem at abonnere på solceller, som en ejer virksomhed og for et månedligt beløb driver og vedligeholder. </li>
		<li>At undtaged store varmepumper for elafgiftsstigningen til 1 øre/kWh. </li> 
	  </AboutList>
	  <AboutListB>
		<li>Varmpumper til geothermi fritages helt for elafgift</li>
	  </AboutListB>
	  <AboutList>
		<li>At boligejere i yderområderne skal kunne få favorable statsgaranterede lån under Danmarks Grønne Investeringsfond til energi- effektiviseringer. Lånet tilbagebetales via besparelser på energiregningen.</li>
		<li>At der oprettes en pulje på 50 millioner kr. til gratis klimatjek af boliger i yderområderne.</li>
		<li>At der udarbejdes en plan for, hvordan mængden af træ kan for- øges i offentlige byggerier.</li>
		<li>At bygningsreglementet opdateres, så bæredygtigt byggeri tilgodeses.</li>
		<li>At der stille krav om livscyklusanalyse for alle større byggerier</li>
		<li>At der stilles krav om genanvendelse og livscyklusberegninger ved offentlige udbud.</li>
		<li>At det skal være muligt at stille krav til materialeanvendelse i kommune- og lokalplaner.</li>
		<li>At indføre et centralt register over brugte byggematerialer oprettes.</li>
		<li>Ud over den eksisterende pulje til energibesparelser i erhverv forøges Danmarks Grønne Investeringsfond med 100 millioner kr. pr. år fra 2021-2024, hvilket giver en ekstra låneramme på ti milliarder kr.</li>
		<li>Ud over den eksisterende pulje til energibesparelser i erhverv forøges Danmarks Grønne Investeringsfond med 100 millioner kr. pr. år fra 2021-2024, hvilket giver en ekstra låneramme på ti milliarder kr.</li>
	  </AboutList>
	</AboutBody>
	<AboutHeader4>Med henblik på at udfase udvindingen af olie- og gasudvinding i Nordsøen forslår Socialdemokratiet</AboutHeader4>
	<AboutBody>
	  <AboutList>
		<li>At udvindingstilladelser stoppes i takt med, at de udløber, og der gennemføres ikke flere udbudsrunder. Dermed lukker raffinaderierne på længere sigt. Indtil dette sker, skal selskaberne fra 2020 betale for deres CO2-kvoter, som de hidtil har fået gratis. Indtægten indgår i en statslig skovfond til skovrejsning i det globale syd, som kan op- tage CO2. </li>
	  </AboutList>
	</AboutBody>
	<AboutHeader3>Enhedslisten formulerer desuden en række tiltag med henblik på at reducere afbrændingen af plast. De har en målsætning om </AboutHeader3>
	<AboutBody>
	  <AboutList>
		<li>At reducere afbrændingen af plast med mindst 80 procent i 2030</li>
	  </AboutList>
	 </AboutBody>
	<AboutHeader4>For at opnå denne målsætning forslås følgende</AboutHeader4>
	<AboutBody>
	<AboutList>
		<li>At Danmark skal arbejde for et forbud mod at eksportere plast ud af EU, så Danmark og de øvrige europæiske lande selv må håndtere eget affald og på den måde bliver presset til at udvikle genanvendelsesløsninger.</li>
		<li>At der fra 2030 skal det være forbudt mod at importere plastaffald, så man ikke kan tjene penge på at brænde det af og producere energi.</li>
		<li>At der stilles krav om fuld sortering af plast i erhverv inden 2030. Samtidig får virksomhederne mulighed for at komme billigt af med sorteret plast i den kommunale affaldsindsamling.</li>
		<li>At gennemføre en række tiltag skal gøre det nemmere at sortere og genanvende plast. Det skal bl.a. være et krav, at plastemballage kun laves af én plasttype. Afgiften på emballage skal også tilpasses efter, hvor meget plast emballagen indeholder, og om den kan genanvendes.</li>
		<li>At brugen af pantsystemer udvides til at omfatte plastflasker og Tetrapak.</li>
		<li>At igangsætte en målrettet indsats for at reducere plastaffald i husholdninger bl.a. gennem forlængelse af reklamationsretten.</li>
	</AboutList>
	</AboutBody>
	<AboutHeader3>Enhedslisten formulerer desuden en række virkemidler med henblik på at støtte den grønne omstilling af industrien </AboutHeader3>
	<AboutBody>
	<AboutList>
		<li>De gratis CO2-kvoter gøres gradvist betalingspligtige fra 2021. I 2021 betales for ti pct. af kvoterne, i 2030 for 100 pct. Pengene føres som udgangspunkt tilbage til virksomhederne som støtte til grøn omstilling. Ubrugte midler skal gå til en statslig skovfond til skovrejsning i det globale syd, som kan optage CO2.</li>
		<li>Ligesom i landbruget tilbydes et klimatjek, der kortlægger virksomhedens drivhusgasudledninger, og en klimahandlingsplan, der hjælper med at planlægge omstilling til en mere klimavenlig produktion.</li>
		<li>Pulje på 100 millioner kr. pr. år fra 2021-2030 til at støtte mindre fremstillingsvirksomheders omlægning til vedvarende energi.</li>
		<li>Lovkrav til virksomhederne om at gennemføre energieffektiviseringer, der tjener sig selv hjem over årene.</li>
		<li>Umiddelbart anlægsstop for anlæg, der anvender F-gasser, med mindre der ikke er andre tekniske muligheder, og et fuldt stop for brugen i 2030. Der afsættes en pulje på ti millioner kr. pr. år til mindre virksomheder til at udfase brugen, hvis de kan påvise en tilbagebetalingstid på over fem år. Ellers er det muligt at op- tage lån under Danmarks Grønne Investeringsfond</li>
	</AboutList>
	<AboutListB>
		<li>Øjeblikkeligt anlægsstop for nye fossile anlæg i virksomhederne. Stoppet gælder også større renovationer, der vil forlænge levetiden af fossile anlæg.</li>
		<li>Forbud mod brug af kul, koks og petrokoks fra 2025 og krav om deponering af ekstremt forurenende petrokoks.</li>
	</AboutListB>
	</AboutBody>
	
	<AboutHeader2>Socialistisk Folkeparti</AboutHeader2>
	<AboutBody>
		Socialistisk Folkeparti (SF) har en overordnet målsætning at reducere Danmarks klimaforureningen med 60% i 2030 (ift. 1990). For at nå denne målsætning foreslår SF en række tiltag for at reducere klimabelastning, særligt fra transport- og landbrugssektoren. Inden for transportsektoren har de en overordnet målsætning om at elbiler udgør 50% af den danske bilpart i starten af 2030’erne. Samtidig sætter de en målsætning om, at mindst 95% af den kollektive trafik skal køre på vedvarende energi i 2030. De foreslår at nå disse målsætninger gennem en omstilling af beskatningen af fossildrevne køretøjer, samt investeringer i den kollektive trafik. Den overordnede målsætning inden for landbrugssektoren er at nedbringe klimaforureningen fra landbruget med op mod 25 pct. i 2030 i forhold til i dag (2019). For at nå denne målsætning, foreslår SF at mindske det danske landbrugsareal og samtidig udvide skovarealet, fremme klimavenlige afgrøder, husdyrsfoder og dyrkningsteknikker, samt elektrificere landbruget og sætte krav om at efterbehandle staldgylle mm.
	</AboutBody>
	<AboutBody>
		I nedenstående findes en mere uddybet beskrivelse af SFs konkrete målsætninger og virkemidler inden for klimaområdet. Der er taget udgangspunkt i følgende udspil: 
	</AboutBody>
	<AboutBody>
	  <AboutList>
		<li>Transportens CO2-Udslip Skal – Og Vi Starter Nu</li>
		<li>En Grøn Investeringsplan For Transportsektoren i 2020’erne</li>
		<li>En Ægte Klimaindsats i Landbruget</li>
	  </AboutList>
	</AboutBody>
	<AboutHeader3>Målsætninger for transport sektoren</AboutHeader3>
	<AboutBody>
	  <AboutList>
		<li>Salget af fossilbiler skal reduceres til 20% i 2022 og udfases helt i starten af 2030’erne.</li>
		<li>De store byer skal være dieselfri senest i 2025.</li>
		<li>Mindst 95% af den kollektive trafik skal køre på vedvarende energi i 2030. Herunder skal alle busser i løbet af 2020’erne omlægges til eldrift, biogas eller lignende. </li>
		<li>Desuden foreslår SF en række tiltag, der skal sikre nedbringe drivhusgasudledningen fra flyvning, samt forureningen fra skibsfart.</li>
	  </AboutList>
	</AboutBody>
	<AboutHeader4>SF formulerer en række virkemidler som skal understøtte målsætningen om at stoppe salget af fossilbiler i starten af 2030’erne og samtidig sikre at de større byer er dieselfri i 2025</AboutHeader4>
	<AboutBody>	
	  <AboutListB>
		<li>Afgiftslettelsen målrettes elbiler og plug-in hybridbiler, herunder varebiler, således at der betales fuld registreringsafgift med rabat for energieffektivitet og et nedslag i registreringsafgiften på 50.000 kr. for elbiler</li>
		<li>Fradraget for batteri til elbiler gøres permanent indtil videre.</li>
  	  </AboutListB>
	  <AboutList>
		<li>Registreringsafgiften for de allermest energieffektive biler nedsættelse. Der afsættes 100 mio. kr. til dette.</li> 
		<li>For at gøre det mere økonomisk rentabelt at vælge en elektrisk firmabil foreslår SF to konkrete tiltag, der vil lette skatten for elektriske firmabiler med 60%, og samtidig gøre det mindst 40% dyrere at køre i benzinbiler, der kører under end 25 km/l.: 1) at beskatningen af el-firmabiler i en periode foreløbig frem til 2022 sænkes til 10% af prisen (mod i dag 20-25%) – dog kun op til en passende beløbsgrænse, så lettelsen begrænses for luksusmodeller. 2) at beskatningen hæves til ca. 35% for benzinbiler, der kører mindre end 25 km/liter – opgjort efter EU’s nye målemetoder, jfr. Ovenfor. </li>
		<li>Etablering af hurtigstandere ved bl.a. motorveje, centrale steder i byerne, udvalgte tankstationer, hvoraf Staten finansierer 50% af en årlig ramme på 40 mio. Kr. (For dette beløb vil der årligt kunne etableres 25-40 anlæg á 4-6 hurtigladestandere (150kW)). SF foreslår derudover at oprette p-pladser decideret til elbiler og samtidig nedsætte p-afgiften for elbiler. Til sidst ønsker SF at indføre en ordning, som giver borgere mulighed for at prøvekøre en elbil til en favorabel pris. </li>
		<li>Indførsel af roadpricing for personbiler. Roadpricingen vil dels mindske trængslen på vejene, og således bidrage til en reducering af CO2-udledningen fra personbiler, og dels vil fordele trafikken mere jævnt, både geografisk og afhængigt af myldretid. SF har intet konkret forslag, men ønsker en udredning af, hvordan og hvor hurtigt en roadpricing kan indføres.</li>
	  </AboutList>
	  <AboutListB>
		<li>Eldrevne varebiler friholdes for registreringsafgift indtil videre.</li>
	  </AboutListB>
	  <AboutList>
		<li>Vægtgrænsen for eldrevne varebiler sættes op til 4,25 tons (en forhøjelse svarende til batterivægten)</li>
		<li>Der søges dispensation fra EU-reglerne for kørekortregulativet for eldrevne varebiler op til 4,25 ton.</li>
		<li>Afgiften på grøn gas til tung transport sænkes. </li>
		<li>Indførsel af et lovkrav om dieselfri miljøzoner i bykommunerne i 2025. Kommunerne bør desuden med det samme have mulighed for at stille skærpede miljøzonekrav. Hvis kommunerne ønsker det, skal industrikvarterer kunne undtages. Dieselforbuddet vil i første omgang ramme industrien, da der for personbiler vil være en overgangsperiode på 6 år. Dieselforbuddet indeholder desuden et krav om, at arbejdsmaskiner bør være dieselfri i seneste 2025 (der vil dog også være en dispensationsmulighed). </li>
		<li>Alle personbiler der ejes eller leases af eller udfører kontraktmæssige opgaver for det offentlige skal elektriske senest i 2023. Der afsættes et beløb svarende til 5.000 kr. pr. år pr. personbil.</li>
		<li>Alle tunge køretøjer (varebiler og lastbiler) der ejes eller leases af eller udfører kontraktmæssige opgaver for det offentlige, skal være elektriske, køre på grøn gas el.lign. Der afsættes et beløb på 5.000 kr. pr. år pr. Køretøj.</li>
	  </AboutList>
	</AboutBody>
	<AboutHeader4>For at nå målsætningen om at 95% af den kollektive trafik skal køre på vedvarende energi i 2030 foreslår SF følgende</AboutHeader4>
	<AboutBody>
	  <AboutListB>
		<li>Overordnet foreslår SF samlet set investeringer for 50 mia. Kr. i kollektiv trafik samt cyklisme i løbet af en tiårsperiode. Omkring halvdelen af disse investeringer er allerede vedtaget i Togfonden, som SF bakker fuld op om. (Togfonden er en aftale indgået af regeringen, EL og DF i 2014, som afsatte 22,5 milliarder kroner til at løfte af den danske jernbane).</li>
		<li>Udbygning af letbaner i de større byer til et samlet beløb på 3,3 mia. kr. </li>
	  </AboutListB>
	  <AboutList>
		<li>Forbedring af busdriften og indførsel af alternative former for offentlig transport i ydreområderne, fx selvkørende minibusser.</li>
		<li>Gennemførsel af timemodellen, der indeholder en række tiltag til at udbygge det danske jernbanenetværk. </li>
		<li>Forbedring af skifte- og parkingsforhold ved stationerne. I Togfonden er der afsat 400 mio. kr. til disse formål. SF ønsker beløbet hævet til 1,2 mia. kr. inkl. medfinansiering fra DSB, kommuner og regioner.</li>
		<li>Fjerne omprioriteringsbidraget (de årlige nedskæringer på regionernes bevillinger til kollektiv transport). </li>
		<li>Årlig afsættelse af 250 mio. kr./år til at gøre lange togrejser (og Bornholmertrafikken) billigere, bl.a. gennem bedre familierabat.</li>
		<li>Forbedring regional togtrafik (ved at etablere bedre forbindelser og forbedre hastigheden. Samt elektrificering af Vejle-Struer forbindelsen)</li>
		<li>Optimering og udbygge S-togsnettet</li>
		<li>Forbedring af muligheder for at kombinere rejse med offentlig transport med cyklen.  </li>
	  </AboutList>
	  <AboutListB>
		<li>Alle busser i ruter og busser der udfører opgaver for det offentlige skal være elektriske eller køre på grøn gas. Ved indgåelse af nye kontrakter om busdrift, bør der være krav om, elektrificering af busserne. Den lave elafgift for buskørsel gøres permanent og suppleres af et engangstilskud på 50.000 kr. pr. bus.</li>
		<li>Mindst halvdelen af alle nye taxaer skal køre på el senest i 2022 og 100 pct. senest i 2025. Der afsættes 60 mio. kr. i 2019-21 til at understøtte omlægningen i en overgangsperiode.</li>
	  </AboutListB>
	  <AboutList>
		<li>For færger der modtager offentlig støtte - til Bornholm og diverse øer - vil det være en betingelse for støtten at færgerne overgår til eldrift eller anden vedvarende energi i det omfang det er teknisk og økonomisk muligt. Kravet gælder ved udløb af gældende kontrakter. </li>
	  </AboutList>
	  <AboutListB>
		<li>Etablering en cykelpulje på 100 mio. kr. </li>
	  </AboutListB>
	</AboutBody>
	<AboutHeader4>SF vil imødekomme den store klimabelastning fra flytrafikken, ved i første omgang at indføre en personafgift på flyrejser</AboutHeader4>
	<AboutBody>
	<AboutListB>
		<li>Konkret foreslås en personafgift på flyrejser med følgende takster:</li>
			<AboutListB>
				<li>60 kr. på indenrigsfly og rejser til Europa</li>
				<li>200 kr. på mellemlange rejser</li>
				<li>400 kr. på interkontinentale rejser. </li>	
			</AboutListB>
		<li>For børn skal afgiften være det halve. Derudover vil det ikke være muligt for erhverv at trække af afgiften fra. Herudover indføres en afgift for godstransport pr. fly på 400 kr. pr. tons ankommende gods.</li>
	</AboutListB>	
	</AboutBody>
    <AboutHeader4>For at sikre en mere klimavenlig skiftfart foreslår SF nedenstående</AboutHeader4>
	<AboutBody>
	<AboutList>
		<li>På kort sigt at arbejde på skærpet håndhævelse i Nordsøen og Østersøen af de allerede vedtagne stramninger af IMO-reglerne. Samtidig ønsker SF, at staten via forskning mv. støtter udviklingen af mere konkurrencedygtige ikke- fossile drivmidler til skibe – det kan være el, grøn gas, brint eller andet. </li>
		<li>Et forbud i beskyttede zoner som Nordsøen og Østersøen, så snart dette bliver muligt at tage op i den internationale havorganisation, IMO. </li>
		<li>Desuden ønskes det at Danmark skal spille en aktiv rolle i internationale fora for at få forbudt bunkerolie i al skibsfart, start- ende med Arktis, hvor der er særlig fare ved evt. kollisioner/skibbrud.</li>
	</AboutList>
	</AboutBody>
	<AboutHeader3>Målsætninger for lanbrugssektoren</AboutHeader3>
	<AboutBody>
		<AboutList>
		<li>Landbrugets klimaforurening skal nedbringes med op mod 25 pct. i 2030 i forhold til i dag (2019). For at nå denne målsætning, ønsker SF at</li>
		<li>Mindske det danske landbrugsareal og udvide skovarealet.</li>
		<li>Fremme klimavenligere afgrøder, husdyrsfoder og dyrkningsteknikker.</li>
		<li>Fremme bæredygtigt proteinfoder og klimavenlig fodring af kvæg.</li>
		<li>Fremme efterbehandling af staldgylle fra husdyr.</li>
		<li>Mindske brugen af diesel i landbruget.</li>
		<li>Mindske energiforbruget og fremme elektrificering af landbruget.</li>
		<li>Fremme klimavenligere kostvaner.</li>
		<li>Mindske madspild.</li>
		<li>Fremme forskning og udvikling inden for området.</li>
		</AboutList>
	</AboutBody>
	<AboutHeader4>SF foreslår en række tiltag, der skal mindske det danske landbrugsareal og fremme skovarealet</AboutHeader4>
	<AboutBody>
	<AboutList>
		<li>Dyrkning af de mest klimabelastende jorde (dvs. jorde med et stort indhold af kulstof, der omdannes til CO2 når jorden dyrkes) skal stoppes. Konkret foreslår SF at 65.000 hektar af disse kulstofrige jorde tages ud af drift, herunder at man stopper med dræning og gødning. </li>
		<li>Gennemførsels af en politisk aftale om en forpligtende plan for skovmålsætningen, som Danmark tilsluttede sig i 1989. Dette vil kræve at der rejses (netto) mindst 10.000 hektar skov årligt frem til 2065. </li>
		<li>Ændring af den målrettede kvælstofregulering, så der tilskyndes til at tage klimahensyn ved valg af virkemidler, og jordfordeling bør indgå̊ i en løsning. Det er beregningsmæssigt antaget, at SF ’s forslag fører til en reduktion af landbrugsarealet med ca. 7 pct. i 2030, hvilket antages at medføre en tilsvarende reduktion af den husdyrrelaterede klimaforurening fra dansk landbrug</li>
		<li>Indførsel af et dansk forbud mod brug af soja, og samtidig gøre mere klimavenlige alternativer mere konkurrencedygtige. </li>
		<li>At stilles krav om fodring med øget fedt og kraftfoder for alle større kvægbesætninger på stald. </li>
		<li>At fremme forskning i klimavenligt foder, fodertilsætninger og avl på køer der bøvser mindre.</li>
		<li>At belønning for dyrkning af græs til foder. Græs binder langt mere kulstof end fx korn og raps, og kræver dertil kun pløjning hvert 4-5 år. Dertil foreslår de et krav om certificering af soja, samt andre afgrøder såsom hestebønner. </li>
		<li>At tilbyde rådgivning og evt. lovgivning om klimavenlige dyrkningsteknikker. </li>
		<li>Indførsel af et krav om at efterbehandle staldgylle med regler for, hvor stor en klimagevinst, der skal opnås herved. De foreslår efterbehandling af alt staldgylle undtagen gylle fra små bedrifter. Der bør dog tages hensyn til økologisk brug, der ikke frit kan bruge gylle, der stammer fra konventionel brug. For at understøtte målsætningen om at udfase brugen af ubehandlet gylle, ønsker SF en tilskudsordning til biogasanlæg samt forskning inden for området. Disse tiltag vil betyde, at 85-90 pct. af staldgyllen efterbehandles i 2030.</li>
	</AboutList>
	<AboutListB>
		<li>At der med 3 års varsel indføres dieselafgift for landbruget, hvilket vil gøre det mere attraktivt at vælge energieffektive maskiner, at elektrificere mest muligt og at vælge dyrkningsmetoder, der i mindre grad forudsætter energikrævende kørsel med tunge maskiner,</li>
	</AboutListB>
	<AboutList>
		<li>I første omgang at begrænse klimabelastningen fra vores fødevarer gennem oplysning, uddannelse af storkøkkenpersonale mv.</li>
		<li>At undersøge muligheden for at indføre en retvisende klimaafgift på fødevare. </li>
		<li>At nedsætte en fødevareklimakommission, der indenfor et år skal komme med forslag til, hvordan det klimavenlige valg gøres til det oplagte – dvs. lettilgængelige og ikke for dyre – valg, herunder hvordan man ad den vej kan øge indtaget af vegetabilsk kost. </li>
		<li>At øge støtten til forskning og udvikling af alternative, velsmagende, sunde og mere klimavenlige produkter.</li>
		<li>Enkelte supermarkedskæder er stoppet med ”3 for 2’s pris” og lignende mængderabatter, som lokker forbrugerne til at købe mere end de kan nå at spise. Der skal forhandles med de øvrige kæder om at gøre det samme – ellers må der lovgives. </li>
		<li>Ligesom i Frankrig, skal vi i Danmark kræve, at supermarkeder ikke må kassere brugbare fødevarer, men skal donere dem til velgørende organisationer.</li>
		<li>Gennemførsel af en informationskampagne, som skal sikre, at forbrugerne ikke automatisk fravælger frugt og grønt med skønhedsfejl i supermarkederne.</li>
		<li>Alle folkeskoler skal undervise i brug af madrester i madlavningen.</li>
		<li>I højere grad at målrette den offentligt betalte forskning på landbrugsområdet, herunder det grønne udviklings- og demonstrationsprogram (GUDP) i retning af forskning i klimavenligt – og på anden måde miljøvenligt – landbrug og forøge indsatsen, efterhånden som der afsættes flere penge til offentlig forskning generelt.</li>
	</AboutList>
	</AboutBody>
	<AboutHeader3>CO2 besparelse inden for landbrugssektoren</AboutHeader3>
	<AboutBody>
	SF har udregnet at virkningen af deres klima-landbrugsplan i 2030 vil bespare 3.554.000 ton CO2-EQ (CO2-EQ betegner den samlede belastning af drivhusgasser omregnet til CO2-udledning)
	</AboutBody>

	
	
	
	
	
	<AboutBody>
       <Link to='/'>Tilbage til forsiden</Link>
    </AboutBody>
  </AboutContainer>
)