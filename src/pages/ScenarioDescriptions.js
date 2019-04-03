import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 0px 20px 20px 20px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;
`;

const markdownFiles = [
  'descriptions/0_intro.md',
  'descriptions/1_basicscenarios.md',
  'descriptions/2_enhedslisten.md',
  'descriptions/3_socialistiskfolkeparti.md',
  'descriptions/4_radikalevenstre.md',
  'descriptions/5_socialdemokratiet.md',
  'descriptions/6_alternativet.md',
  'descriptions/7_regeringen.md',
]

class ScenarioDescriptions extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const posts = await Promise.all(
      markdownFiles.map(file => fetch(file).then(res => res.text()))
    ).catch(err => console.error(err));

    this.setState(state => ({ ...state, posts }));
  }

  render() {
    /* eslint-disable react/no-array-index-key */
    const { posts } = this.state;

    return (
      <AboutContainer>
        {posts.map((post, idx) => (
          <div key={idx}>
            <ReactMarkdown source={post} escapeHtml={false} />
          </div>
        ))}
      </AboutContainer>
    );
    /* eslint-enable react/no-array-index-key */
  }
}

export default ScenarioDescriptions;
