import React from "react";

const Context = React.createContext();

export const PortFolioProvider = Context.Provider;
export const PortFolioConsumer = Context.Consumer;

export default Context;