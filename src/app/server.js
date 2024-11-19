const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const port = 5000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fatma123",
  database: "cpg_app",
});

connection.connect();

app.use(express.json());
app.use(cors());

app.get("/api/dpss", (req, res) => {
  const query = "SELECT * FROM cpg_app.dps";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing query: " + error.stack);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});

app.get("/api/dpss/:id", (req, res) => {
  const dpsId = req.params.id;
  const query = "SELECT * FROM cpg_app.dps where NDPS = ?";
  connection.query(query, [dpsId], (error, results) => {
    if (error) {
      console.error("Error executing query: " + error.stack);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});

app.post("/api/dpss", (req, res) => {
  const dpsData = req.body;
  const query =
    "INSERT INTO cpg_app.dps (NDPS, Nature, Proprietaire, Date, Degre, Imputation, Destination, Probleme, Utilisateur_NUser) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    dpsData.ndps,
    dpsData.nature,
    dpsData.proprietaire,
    dpsData.date,
    dpsData.degree,
    dpsData.imputation,
    dpsData.proprietaire,
    dpsData.probleme,
    dpsData.userId,
  ];
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error("Error executing MySQL query: ", error);
      return res
        .status(500)
        .json({ error: "Failed to insert DPS data into the database" });
    }
    res.json({ message: "DPS data inserted successfully" });
  });
});

app.delete("/api/dpss/:id/", (req, res) => {
  const userId = req.params.id;
  const query = "DELETE FROM cpg_app.dps WHERE NDPS  = ?";
  connection.query(query, [userId], (error, results) => {
    if (error) {
      console.error("Error executing query: " + error.stack);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});

app.get("/api/users", (req, res) => {
  const query = "SELECT * FROM cpg_app.utilisateur";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing query: " + error.stack);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});

app.get("/api/dpss/byUserId/:id", (req, res) => {
  const userId = req.params.id;
  const query = userId
    ? `SELECT * FROM cpg_app.dps WHERE Utilisateur_NUser = ${userId}`
    : "SELECT * FROM cpg_app.dps";
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get("/api/expertises/byUserId/:id", (req, res) => {
  const userId = req.params.id;
  const query = userId
    ? `SELECT * FROM cpg_app.expetise WHERE user_id = ${userId}`
    : "SELECT * FROM cpg_app.expetise";
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.post("/api/users", (req, res) => {
  const dpsData = req.body;
  const query =
    "INSERT INTO cpg_app.utilisateur (Nom, Email, MotPasse, Service_NService) VALUES (?, ?, ?, '123456')";
  const values = [dpsData.nom, dpsData.email, dpsData.password];
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error("Error executing MySQL query: ", error);
      return res
        .status(500)
        .json({ error: "Failed to insert utilisateur data into the database" });
    }
    res.json({ message: "utilisateur data inserted successfully" });
  });
});

app.get("/api/users/byId/:id", (req, res) => {
  const userId = req.params.id;
  const query = "SELECT * FROM cpg_app.utilisateur WHERE NUser = ?";
  connection.query(query, [userId], (error, results) => {
    if (error) {
      console.error("Error executing query: " + error.stack);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});

app.get("/api/users/byEmail/:email", (req, res) => {
  const userEmail = req.params.email;
  const query = "SELECT * FROM cpg_app.utilisateur WHERE Email = ?";
  connection.query(query, [userEmail], (error, results) => {
    if (error) {
      console.error("Error executing query: " + error.stack);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});

app.delete("/api/users/:id/", (req, res) => {
  const userId = req.params.id;
  const query = "DELETE FROM cpg_app.utilisateur WHERE NUser = ?";
  connection.query(query, [userId], (error, results) => {
    if (error) {
      console.error("Error executing query: " + error.stack);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});

app.put("/api/dpss/dpsUpdated", (req, res) => {
  const dpsData = req.body;
  const query =
    "update cpg_app.dps set etat = ? , Nature = ? , Proprietaire = ? , Date = ? , Degre = ? , Imputation = ? , Destination = ? ,  Probleme = ? where NDPS = ?";
  const values = [
    dpsData.etat,
    dpsData.nature,
    dpsData.proprietaire,
    dpsData.date,
    dpsData.degree,
    dpsData.imputation,
    dpsData.proprietaire,
    dpsData.probleme,
    dpsData.ndps,
  ];
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error("Error executing MySQL query: ", error);
      return res
        .status(500)
        .json({ error: "Failed to insert DPS data into the database" });
    }
    res.json({ message: "DPS data inserted successfully" });
  });
});

app.put("/api/users/userUpdated", (req, res) => {
  const data = req.body;
  const query =
    "update cpg_app.utilisateur set Email = ? , MotPasse = ?  where NUser = ?";
  const values = [data.email, data.motpasse, data.id];
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error("Error executing MySQL query: ", error);
      return res
        .status(500)
        .json({ error: "Failed to insert DPS data into the database" });
    }
    res.json({ message: "DPS data inserted successfully" });
  });
});

app.get("/api/expertises", (req, res) => {
  const query = "SELECT * FROM cpg_app.expetise";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing query: " + error.stack);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});

app.get("/api/expertises/:id", (req, res) => {
  const dpsId = req.params.id;
  const query = "SELECT * FROM cpg_app.expetise where NExp = ?";
  connection.query(query, [dpsId], (error, results) => {
    if (error) {
      console.error("Error executing query: " + error.stack);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});

app.post("/api/expertises", (req, res) => {
  const dpsData = req.body;
  const query =
    "INSERT INTO cpg_app.expetise (NExp, Nature, Date, Prest, DPS_NDPS, Quantite, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [
    dpsData.nexp,
    dpsData.nature,
    dpsData.date,
    dpsData.presentation,
    dpsData.ndps,
    dpsData.quantite,
    dpsData.user_id,
  ];
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error("Error executing MySQL query: ", error);
      return res
        .status(500)
        .json({ error: "Failed to insert DPS data into the database" });
    }
    res.json({ message: "DPS data inserted successfully" });
  });
});

app.delete("/api/expertises/:id/", (req, res) => {
  const userId = req.params.id;
  const query = "DELETE FROM cpg_app.expetise WHERE NExp  = ?";
  connection.query(query, [userId], (error, results) => {
    if (error) {
      console.error("Error executing query: " + error.stack);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});

app.put("/api/expertises/expUpdated", (req, res) => {
  const dpsData = req.body;
  const query =
    "update cpg_app.expetise set Nature = ? , Date = ? , Prest = ? , DPS_NDPS = ? ,  Quantite = ? where NExp = ?";
  const values = [
    dpsData.nature,
    dpsData.date,
    dpsData.presentation,
    dpsData.ndps,
    dpsData.quantite,
    dpsData.nexp,
  ];
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error("Error executing MySQL query: ", error);
      return res
        .status(500)
        .json({ error: "Failed to insert DPS data into the database" });
    }
    res.json({ message: "DPS data inserted successfully" });
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
