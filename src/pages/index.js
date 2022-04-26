import React, { useEffect } from "react";
import { Redirect, useLocation, useHistory } from "@docusaurus/router";

export default function Home() {
  const location = useLocation();
  const history = useHistory();

  console.log("location.pathname", location.pathname);
  useEffect(() => {
    if (location.pathname.indexOf("/architecture/use-cases") !== -1) {
      history.push("/welcome");
    }
    console.log(location.pathname);
  }, [location.pathname]);

  return <Redirect to="welcome" />;
}
