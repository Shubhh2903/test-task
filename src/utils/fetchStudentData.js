export const fetchStudentData = async (id) => {
  const studentsData = [
    {
      id: "1",
      schoolId: "school1",
      legalguardianId: "guardian1",
    },
    {
      id: "2",
      schoolId: "school2",
      legalguardianId: "guardian2",
    },
    {
      id: "3",
      schoolId: "school3",
      legalguardianId: "guardian3",
    },
    {
      id: "4",
      schoolId: "school4",
      legalguardianId: "guardian4",
    },
    {
      id: "5",
      schoolId: "school5",
      legalguardianId: "guardian5",
    },
    {
      id: "6",
      schoolId: "school6",
      legalguardianId: "guardian6",
    },
    {
      id: "7",
      schoolId: "school7",
      legalguardianId: "guardian7",
    },
    {
      id: "8",
      schoolId: "school8",
      legalguardianId: "guardian8",
    },
    {
      id: "9",
      schoolId: "school9",
      legalguardianId: "guardian9",
    },
    {
      id: "10",
      schoolId: "school10",
      legalguardianId: "guardian10",
    },
  ];
  return studentsData.filter((student) => student.id === id);
};
