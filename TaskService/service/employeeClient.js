const axios = require("axios");
require("dotenv").config();

async function validateEmployee(employeeId, token) {
  try {
    const response = await axios.get(`${process.env.EMPLOYEE_SERVICE_URL}/${employeeId}`, {
      headers: { Authorization: token }
    });
    return response.data.payload ? true : false;
  } catch {
    return false;
  }
}

module.exports = { validateEmployee };
