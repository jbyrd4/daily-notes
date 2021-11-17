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

console.log(notes);

for (const note of notes) {
    console.log(`Note ${note.id}.`)
    console.log(note.date)
    console.log(`I learned about ${note.subject}.`)
    console.log(`I spent ${note.timeSpent} minutes working on it.`)
    console.log(`I felt ${note.feeling}.`)
}