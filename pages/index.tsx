import React from 'react';
import { GeistWrapper, Container, Avatar, H1, AvatarGroup } from '~/components';
import { H3 } from '~/components/style/h3';

const Index = () => (
  <div
    css={`
      min-height: 100vh;
      max-width: 1250px;
      margin: 0 auto;
      padding: 0 var(--geist-gap);
    `}
  >
    <div className="container">
      <H1>Avatar</H1>
      <div
        className="title-bar"
        css={`
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 1rem 0;
        `}
      >
        <H3>Avatar</H3>
      </div>
      <GeistWrapper>
        <Container preview>
          <Container>
            <Container row vcenter>
              <Avatar boxSize={90} username="evilrabbit" />
              <Avatar boxSize={60} username="evilrabbit" />
              <Avatar boxSize={30} username="evilrabbit" />
              <Avatar boxSize={20} username="evilrabbit" />
            </Container>

            <Container row>
              <Avatar boxSize={30} username="rauchg" />
              <Avatar boxSize={30} username="leo" />
              <Avatar boxSize={30} username="timothy" />
              <Avatar boxSize={30} username="pacocoursey" />
              <Avatar boxSize={30} username="arunoda" />
              <Avatar boxSize={30} username="hbp" />
              <Avatar boxSize={30} username="shuding" />
            </Container>
          </Container>
        </Container>
      </GeistWrapper>
      <div
        className="title-bar"
        css={`
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 1rem 0;
        `}
      >
        <H3>Avatar Group</H3>
      </div>
      <GeistWrapper>
        <Container preview>
          <Container>
            <Container row>
              <AvatarGroup
                size={30}
                limit={7}
                members={[
                  { username: 'rauchg' },
                  { username: 'leo' },
                  { username: 'timothy' },
                  { username: 'pacocoursey' },
                  { username: 'arunoda' },
                  { username: 'hbp' },
                  { username: 'shuding' },
                ]}
              />
            </Container>

            <Container row>
              <AvatarGroup
                size={30}
                limit={3}
                members={[
                  { username: 'rauchg' },
                  { username: 'leo' },
                  { username: 'timothy' },
                  { username: 'pacocoursey' },
                  { username: 'arunoda' },
                  { username: 'hbp' },
                  { username: 'shuding' },
                ]}
              />
            </Container>
          </Container>
        </Container>
      </GeistWrapper>
    </div>
  </div>
);

export default Index;
