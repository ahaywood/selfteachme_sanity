import { useState, useEffect } from "react";
import client from "utils/client";
import groq from "groq";

const LogoGrid = () => {
  const [logos, setLogos] = useState();

  useEffect(() => {
    const query = groq`*[_type == "brandsWorkedWith"] | order(order asc){name, "logo": logo.asset->}`;
    client.fetch(query).then((res) => setLogos(res));
  }, []);

  return (
    <div className="grid grid-cols-4 md:grid-cols-5 gap-5 sm:gap-16 items-center justify-items-center align-content-center px-4 md:px-0">
      {logos && logos.map(item => (
        <div>
          <img src={item.logo.url} alt={item.name} className="max-w-1 max-h-11" />
        </div>
      ))}
    </div>
  )
};

export { LogoGrid }