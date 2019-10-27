import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <div>Désolé nous ne trouvons pas votre page</div>
    <div>
      <Link to="/">Retourner à l'accueil</Link>
    </div>
  </>
);

export default NotFound;
