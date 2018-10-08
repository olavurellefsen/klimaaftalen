import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Octicon from 'react-octicon'

const AlertContainer = styled.div`
  padding: 10px;
  margin-bottom: 30px;
  border-width: 1px;
  border-color: blue;
  border-style: solid;
  background-color: mintcream;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  flex-direction: row;
  `
  AlertContainer.displayName = 'AlertContainer'
const AlertBody = styled.div`
  font-size: 1em;
  margin: 0px;
  align-self: center;
  flex: 1;
  `
  AlertBody.displayName = 'AlertBody'
const AlertBodyParagraph = styled.p`
  `
  AlertBodyParagraph.displayName = 'AlertBodyParagraph'
const CloseWindowIcon = styled.div`
  margin: 0px;
  border: 0;
  flex-shrink: 0;
  align-self: flex-start;
  :hover {
    cursor: pointer;
  }
  `
  CloseWindowIcon.displayName = 'CloseWindowIcon'

const Welcome = (props) => (
  <AlertContainer>
    <AlertBody>
      <AlertBodyParagraph>
        Med dette værktøj kan du udforske forskellige scenarier i forbindelse med Klimaaftalen 2018. Vælg et
        scenario i venstre menu og se resultatet i graferne nedenfor.
      </AlertBodyParagraph>
      <AlertBodyParagraph>
        De viste scenarier er baseret på beregninger i energisystemmodellen TIMES-DK. Scenario beskrivelserne
        og resultater er baseret på DTU’s fortolkning af regeringens udspil, udmeldinger fra andre partier samt
        egne scenarier. Scenarierne vil løbende blive opdateret når nye ting dukker op.
      </AlertBodyParagraph>
    </AlertBody>
    <CloseWindowIcon onClick={(event) => props.closeWelcome(event, 'showWelcome', false)}>
      <Octicon name='x' />
    </CloseWindowIcon>
  </AlertContainer>
)

Welcome.propTypes = {
  closeWelcome: PropTypes.func.isRequired
}

export default Welcome