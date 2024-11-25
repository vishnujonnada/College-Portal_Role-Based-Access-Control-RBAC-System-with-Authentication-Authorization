const mongoose=require('mongoose')

    // Define schema for a single object in the array
const data = new mongoose.Schema({
  
    attendanceData: [
      {
        name: String,
        status: String,
      },
      // ... possibly more objects in the attendanceData array
    ],
    date: Date
  }
);

;
      
  
module.exports=mongoose.model("attendenceReport",data);
