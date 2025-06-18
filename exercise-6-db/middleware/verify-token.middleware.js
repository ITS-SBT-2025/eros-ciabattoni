import jwt from "jsonwebtoken";
import ErrorWithStatus from "../error-with-status.js";

// middleware che verifica la correttezza del token
const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    // auth header = "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxx"

    if (!authHeader) {
      throw new ErrorWithStatus(401, "Accesso negato");
    }

    const token = authHeader.split(" ")[1];

    // verifico l'integrità del token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // se il token è corretto, salvo dentro req.user la decodifica del token
    // per poter identificare l'utente e applicare policy autorizzative
    req.user = decoded;

    next();
  } catch (error) {
    throw new ErrorWithStatus(401, "Accesso negato");
  }
};

export default verifyToken;
