"use client";

// ModalContext.js

import { createContext, useContext, useState } from "react";

// Create a context to manage the modal state
const ModalContext = createContext();

// ModalProvider component
function ModalProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ modalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export { ModalProvider, ModalContext };
