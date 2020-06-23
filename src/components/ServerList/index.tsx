import React from "react";

import ServerButton from '../ServerButton';

import { Container, Separator } from "./styles";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={300}/>
      <ServerButton />
    </Container>
  );
};

export default ServerList;
