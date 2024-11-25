const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  teamNumber: {
    type: Number,
    required: true,
    unique: true
  },
  studentNames: [
    {
      name: String,
     
    },
    // ... possibly more objects in the attendanceData array
  ],
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
