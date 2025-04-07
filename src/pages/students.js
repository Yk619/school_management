import React from 'react';
import TableHeader from './componenets/TableHeader';
import TableRow from './TableHeader/TableRow';

const headerColumn = ['ID', 'NAME', 'AGE', 'GRADE', 'ACTION']; 
const students = [
  { id: 1, name: 'John Doe', age: 20, grade: 'A' },
  { id: 2, name: 'Jane Smith', age: 22, grade: 'B' },
  { id: 3, name: 'Sam Wilson', age: 21, grade: 'A' }
];

const StudentTable = () => {
  return (
    <div className="container mt-4">
      <h2>Student Records</h2>
      <table className="table table-striped">
        <TableHeader columns ={headerColumn} />
        <tbody>
          {students.map((row) => (
            <TableRow key={student.id} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;







const Students1 = () => {
    return (
        <div>
            <h3>Students</h3>
        </div>
    );
};

const Students = () => {
    return <StudentTable />;
  };

export default Students;
