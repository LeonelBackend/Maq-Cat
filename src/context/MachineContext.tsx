import React, { createContext, useContext, useState } from 'react';
import { Machine, MACHINES_DATA } from '../data/machinesData';

interface MachineContextType {
  selectedMachine: Machine;
  setSelectedMachine: (machine: Machine) => void;
  selectMachineById: (id: string) => void;
}

const MachineContext = createContext<MachineContextType | undefined>(undefined);

export const MachineProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to 797F or first machine
  const [selectedMachine, setSelectedMachine] = useState<Machine>(
    MACHINES_DATA.find((m) => m.slug === 'camiones-mineros') || MACHINES_DATA[0]
  );

  const selectMachineById = (id: string) => {
    const found = MACHINES_DATA.find((m) => m.id === id || m.slug === id);
    if (found) {
      setSelectedMachine(found);
    }
  };

  return (
    <MachineContext.Provider
      value={{
        selectedMachine,
        setSelectedMachine,
        selectMachineById,
      }}
    >
      {children}
    </MachineContext.Provider>
  );
};

export const useMachine = () => {
  const context = useContext(MachineContext);
  if (!context) {
    throw new Error('useMachine must be used within a MachineProvider');
  }
  return context;
};
