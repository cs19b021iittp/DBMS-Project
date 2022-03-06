const Pool = require("pg").Pool;

const connectionString =
  "postgres://adsiyzevrrecmg:7566bfc82cad927f2290999e3defd202170248c39bff7d1650550bcfc805f7df@ec2-54-205-149-187.compute-1.amazonaws.com:5432/d6ofhsgi58mtav";

// const pool = new Pool({
//   user: "rtcsssygbdbyvl",
//   password: "36b8a60c1358b1654845fcc3cb65523c7142418a7fdd3a278fd135889dacb0c2",
//   database: "d6mfc1hklp366s",
//   host: "ec2-3-209-61-239.compute-1.amazonaws.com",
//   port: 5432,
//   ssl: true,
// });

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect();

module.exports = pool;
