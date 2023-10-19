import { createContext } from "react";

export const QRCodeFormContext = createContext({
  DrawerIsOpen: false,
  QRData: "",
});

function QRCodeFormContextProvider({ children }) {
  return <QRCodeFormContext.Provider>{children}</QRCodeFormContext.Provider>;
}
