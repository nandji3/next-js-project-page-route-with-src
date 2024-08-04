"use-client";

import { store } from "@/lib/store/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

interface StoreProviderProps {
    children: ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
