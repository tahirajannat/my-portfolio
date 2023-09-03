import { data } from "autoprefixer";
import React from "react";

const Education = () => {
  const education = [
    {
      certificate: "B.S.C in Computer Science & Engineering",
      year: "2017-2022 (4 year)",
      description:
        "There are many variations of passages of Lorem Ipsum available.",
    },
    {
        certificate: "H.S.C (Science)",
        year: "2011-2013 (2 year)",
        description:
          "There are many variations of passages of Lorem Ipsum available.",
      },
      {
        certificate: "S.S.C (Science)",
        year: "2009-2010 (2 year)",
        description:
          "There are many variations of passages of Lorem Ipsum available.",
      },
  ];
  return (
    <>
      {education.map((data, index) => (
        <div className="my-4">
          <h2 className="mb-2 text-xl"> {data.certificate}</h2>
          <h3 className="text-sm mb-4">{data.year} </h3>
          <p>{data.description}</p>
        </div>
      ))}
    </>
  );
};

export default Education;
