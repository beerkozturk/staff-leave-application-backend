const mongoose = require("mongoose");

const LeaveRequestScehma = new mongoose.Schema(
  {
    startDate: Date,
    endDate: Date,
    description: String,
  },
  {
    collection: "LeaveRequest",
  }
);

mongoose.model("LeaveRequest", LeaveRequestScehma);
