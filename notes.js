const notes = [
    {
        id: 1,
        subject: "JavaScript",
        date: "11/16/2021",
        feeling: "confident",
        timeSpent: 60
    },

    {
        id: 2,
        subject: "Overwatch",
        date: "11/15/2021",
        feeling: "delightful",
        timeSpent: 120
    }
]

const today = {
    id: 3,
    subject: "Coding Stuff",
    date: "11/16/2021",
    feeling: "tired",
    timeSpent: 360
}

notes.push(today);

// console.log(notes);

// for (const note of notes) {
//     console.log(`Note ${note.id}.`)
//     console.log(note.date)
//     console.log(`I learned about ${note.subject}.`)
//     console.log(`I spent ${note.timeSpent} minutes working on it.`)
//     console.log(`I felt ${note.feeling}.`)
//     console.log(`-----------`)
// }

// const searchTerm = 'confident'

// for (const note of notes) {
//     if (note.feeling === searchTerm) {
//         const printID = note.id - 1
//         console.log(notes[printID])
//     }
// }

const newNote = {
    subject: "Functions",
    date: "11/17/2021",
    feeling: "brain hurt",
    timeSpent: 180
}

const createNote = (note) => {
    const lastID = notes.length
    const newID = lastID + 1
    note.id = newID
    note.date = Date()
    notes.push(note)
}

createNote(newNote);

console.log(notes)