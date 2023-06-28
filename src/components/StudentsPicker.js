import { useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const StudentsPicker = ({ onPickHandler }) => {
  const [selectedStudent, setSelectedStudent] = useState("");

  const handleOnChange = (event) => {
    setSelectedStudent(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onPickHandler(selectedStudent);
    setSelectedStudent("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Box display="flex" gap={2}>
        <TextField
          label="Student ID"
          value={selectedStudent}
          onChange={handleOnChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </form>
  );
};

const StudentsTable = ({ studentsData, schoolsData, legalguardiansData }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Student ID</StyledTableCell>
            <StyledTableCell>School ID</StyledTableCell>
            <StyledTableCell>Legal Guardian ID</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsData?.map((student, index) => (
            <TableRow key={index}>
              <StyledTableCell>{student.id}</StyledTableCell>
              <StyledTableCell>{student.schoolId}</StyledTableCell>
              <StyledTableCell>{student.legalguardianId}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { StudentsPicker, StudentsTable };
