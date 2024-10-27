"use client";

import { createContext, useContext, ReactNode, useState } from "react";


type DialogContextType = {
  showEditStudent: () => void;
  showAddParent: () => void;
  showAddTeacher:() => void;
  showAddClass:() => void;
  showAddCourse:() => void;
  showAddExam:() => void;
  showAddAttendance:() => void;
  showAddSchedule:() => void;
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
  const [editStudentOpen, setEditStudentOpen] = useState(false);
  const [addTeacherOpen, setAddTeacherOpen] = useState(false);
  const [addStudentOpen, setAddStudentOpen] = useState(false);
  const [addParentOpen, setAddParentOpen] = useState(false);
  const [addClassOpen, setAddClassOpen] = useState(false);
  const [addCourseOpen, setAddCourseOpen] = useState(false);
  const [addExamOpen, setAddExamOpen] = useState(false);
  const [addSheduleOpen, setAddSheduleOpen] = useState(false);
  const [addAttendanceOpen, setAddAttendanceOpen] = useState(false);

  const showAddParent = () => {
    setAddParentOpen(true);
  };

  const showAddStudent = () => {
    setAddStudentOpen(true);
  };

  const showAddTeacher = () => {
    setAddTeacherOpen(true);
  };

  const showEditStudent = () => {
    setEditStudentOpen(true);
  };

  const showAddClass = () => {
    setAddClassOpen(true);
  };

  const showAddCourse = () => {
    setAddCourseOpen(true);
  };
  
  const showAddExam = () => {
    setAddExamOpen(true);
  };

  const showAddAttendance = () => {
    setAddAttendanceOpen(true);
  };

  const showAddSchedule = () => {
    setAddSheduleOpen(true);
  };


  return (
    <DialogContext.Provider value={{ showEditStudent, showAddTeacher, showAddParent, showAddClass, showAddCourse, showAddExam, showAddAttendance, showAddSchedule, }}>
      {children}
        {/* <EditStudentDialog
          open={editStudentOpen}
          onOpenChange={setEditStudentOpen}
        />
        <NewParentDialog
          open={addParentOpen}
          onOpenChange={setAddParentOpen}
        />
        <NewTeacherDialog 
          open={addTeacherOpen}
          onOpenChange={showAddTeacher}
        />
        <AddClassDialog 
          open={addClassOpen}
          onOpenChange={showAddClass}
        />
        <AddCourseDialog 
          open={addCourseOpen}
          onOpenChange={showAddCourse}
        />
        <AddExamDialog 
          open={addExamOpen}
          onOpenChange={showAddExam}
        />
        <AddAttendanceDialog 
          open={addAttendanceOpen}
          onOpenChange={showAddAttendance}
        />
        <AddScheduleDialog 
          open={addSheduleOpen}
          onOpenChange={showAddSchedule}
        /> */}
    </DialogContext.Provider>
  );
}
