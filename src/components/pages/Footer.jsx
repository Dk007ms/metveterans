import React from "react";
import data from "../../data/footer-data"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {data.sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-lg font-semibold">{section.title}</h3>
            {section.content && <p className="text-sm">{section.content}</p>}
            {section.button && (
              <a
                href={section.button.link}
                className="bg-red-600 text-white py-2 px-4 rounded-md inline-block text-sm"
              >
                {section.button.label}
              </a>
            )}
            {section.details && (
              <ul className="space-y-2 text-sm">
                {Object.keys(section.details).map((key, i) => (
                  <li key={i}>
                    <strong>{key}:</strong>{" "}
                    {typeof section.details[key] === "object" ? (
                      <ul className="space-y-1">
                        {Object.keys(section.details[key]).map((subKey, j) => (
                          <li key={j}>
                            <a
                              href={section.details[key][subKey]}
                              className="hover:underline"
                            >
                              {subKey}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      section.details[key]
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
