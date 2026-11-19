'use client';
import { createContext, useContext, useState } from 'react';
import ContactModal from '@/components/ContactModal';

const ContactContext = createContext({
  openContactModal: () => {},
  closeContactModal: () => {},
  isContactOpen: false,
});

export function ContactProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = () => setIsOpen(true);
  const closeContactModal = () => setIsOpen(false);

  return (
    <ContactContext.Provider value={{ openContactModal, closeContactModal, isContactOpen: isOpen }}>
      {children}
      <ContactModal open={isOpen} onClose={closeContactModal} />
    </ContactContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactContext);
}

