import { useState, useEffect, useRef } from "react";
import { StudentsPicker, StudentsTable } from "./StudentsPicker";
import { fetchSchoolData } from "../utils/fetchSchoolData";
import { fetchStudentData } from "../utils/fetchStudentData";
import { fetchLegalguardianData } from "../utils/legalguardiansData";

const StudentData = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [schoolsData, setSchoolsData] = useState([]);
  const [legalguardiansData, setLegalguardiansData] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const fetchedSchools = useRef(new Set());
  const fetchedLegalGuardians = useRef(new Set());

  useEffect(() => {
    if (selectedStudents.length === 0) return;
    const fetchData = async () => {
      const studentsDataPromises = selectedStudents.map((id) =>
        fetchStudentData(id)
      );
      const fetchedStudentsData = await Promise.all(studentsDataPromises);
      const students = fetchedStudentsData.flat();
      const schoolsToFetch = [];
      const legalGuardiansToFetch = [];

      students.forEach(({ schoolId, legalguardianId }) => {
        if (!fetchedSchools.current.has(schoolId)) {
          fetchedSchools.current.add(schoolId);
          schoolsToFetch.push(fetchSchoolData(schoolId));
        }
        if (!fetchedLegalGuardians.current.has(legalguardianId)) {
          fetchedLegalGuardians.current.add(legalguardianId);
          legalGuardiansToFetch.push(fetchLegalguardianData(legalguardianId));
        }
      });

      const fetchedSchoolsData = await Promise.all(schoolsToFetch);
      const fetchedLegalGuardiansData = await Promise.all(
        legalGuardiansToFetch
      );

      setStudentsData((prev) => [...prev, ...students]);
      setSchoolsData((prev) => [...prev, ...fetchedSchoolsData.flat()]);
      setLegalguardiansData((prev) => [
        ...prev,
        ...fetchedLegalGuardiansData.flat(),
      ]);
    };

    fetchData();
  }, [selectedStudents]);

  const onStudentsPick = (studentId) => {
    setSelectedStudents((prev) => [...prev, studentId]);
  };

  return (
    <div className="flex">
      <StudentsPicker onPickHandler={onStudentsPick} />
      <StudentsTable
        studentsData={studentsData}
        schoolsData={schoolsData}
        legalguardiansData={legalguardiansData}
      />
    </div>
  );
};

export default StudentData;
