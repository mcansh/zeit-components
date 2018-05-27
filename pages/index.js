import React from 'react';
import Card from '../components/card';
import { H1, H2, H3, P, Error } from '../components/headings';
import Link from '../components/link';
import { Code, CodeSnippet } from '../components/code';
import Button from '../components/button';
import List from '../components/lists';
import { TerminalInput, TerminalOutput } from '../components/terminal';

const Index = () => (
  <div>
    <Card>
      <H1>The Evil Rabbit Jumped over the Fence</H1>
    </Card>
    <Card>
      <H2>The Evil Rabbit Jumped over the Fence</H2>
    </Card>
    <Card>
      <H3>The Evil Rabbit Jumped over the Fence</H3>
    </Card>
    <Card>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </P>
    </Card>
    <Card>
      <P>
        To understand how our products work, developers can check out the{' '}
        <Link href="/docs">documentation</Link>.
      </P>
    </Card>
    <Card>
      <P>
        Our package <Link href="https://github.com/zeit/micro">micro</Link>{' '}
        {"let's"} you create async HTTP microservices with ease.
      </P>
    </Card>
    <Card>
      <P>
        If the developer makes a change, they write <Code>now</Code> again,
        getting a new URL server!
      </P>
    </Card>
    <Card>
      <Button>Hi There</Button>
    </Card>
    <Card>
      <Button dark>Hi There</Button>
    </Card>
    <Card>
      <List items={['Item', 'Item', 'Item']} />
    </Card>
    <Card>
      <List type="ol" items={['Item', 'Item', 'Item']} />
    </Card>
    <Card>
      <TerminalInput>npm --version</TerminalInput>
    </Card>
    <Card>
      <TerminalOutput>3.10.3</TerminalOutput>
    </Card>
    <Card>
      <Error>Something bad happened</Error>
    </Card>
    <Card>
      <CodeSnippet>
        <Code snippet>
          {JSON.stringify(
            {
              name: 'get-started-node',
              version: '0.1.0',
              dependencies: { micro: 'latest' },
            },
            null,
            2
          )}
        </Code>
      </CodeSnippet>
    </Card>
  </div>
);

export default Index;
