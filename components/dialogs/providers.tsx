"use client";

import { createContext, useContext, ReactNode } from "react";

type DialogContextType = {
  showEditStudent: () => void;
};

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export function useDialog() {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
}

export function DialogProvider({ children }: { children: ReactNode }) {




  const showEditStudent = () => {
    // setEditStudentOpen(true);
  };



  return (
    <DialogContext.Provider value={{ showEditStudent }}>
      {children}
        {/* <AddMemberDialog
          open={editStudentOpen}
          onOpenChange={setEditStudentOpen}
        /> */}
    </DialogContext.Provider>
  );
}
