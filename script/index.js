const students = [
  {
    id: 10,
    name: 'John Smith',
    marks: [10, 8, 6, 9, 8, 7]
  },
  {
    id: 11,
    name: 'John Doe',
    marks: [ 9, 8, 7, 6, 7]
  },
  {
    id: 12,
    name: 'Thomas Anderson',
    marks: [6, 7, 10, 8]
  },
  {
    id: 13,
    name: 'Jean-Baptiste Emanuel Zorg',
    marks: [10, 9, 8, 9, 12, 12]
  }
]
averageStudentMark(10); 
averageGroupMark(students);

function averageStudentMark(id) {
  
  const student = students.find((student) => {
    return student.id === id
  })
  const markSum = student.marks.reduce((total, amount) => {

   return total + amount
  })
   return markSum / student.marks.length
}

function averageGroupMark (students) {
  const allMarksAllStudents = students.reduce((total, student) => {
    return total.concat(student.marks)
  }, [])
  const marksSum = allMarksAllStudents.reduce((total, mark) => {
   return total + mark
  })
  return marksSum / allMarksAllStudents.length
}



console.log(averageStudentMark(13))
console.log(averageGroupMark(students))