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
    <div className="grid grid-cols-5 gap-16 justify-items-center align-content-center">
      {logos && logos.map(item => (
        <div>
          <img src={item.logo.url} alt={item.name} className="max-w-1 max-h-11" />
        </div>
      ))}
    </div>
  )
};

export { LogoGrid }