let IS_PROD = true;

const servers = IS_PROD
  ? "https://faceconnecticabackend.onrender.com"
  : "http://localhost:8000";

export default servers;
