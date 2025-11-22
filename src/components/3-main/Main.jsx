import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const [expandedCards, setExpandedCards] = useState({}); // هنا التعديل

  const handleClick = (category) => {
    setCurrentActive(category);

    if (category === "all") {
      setArr(myProjects);
      return;
    }

    const newArr = myProjects.filter((item) =>
      item.category.includes(category)
    );

    setArr(newArr);
  };

  // toggle لكل بطاقة حسب ID أو imgPath
  const toggleDescription = (key) => {
    setExpandedCards((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <main id="projects" className="flex">
      {/* LEFT */}
      <section className="flex left-section">
        <button
          onClick={() => handleClick("all")}
          className={currentActive === "all" ? "active" : ""}
        >
          all projects
        </button>
        <button
          onClick={() => handleClick("css")}
          className={currentActive === "css" ? "active" : ""}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => handleClick("js")}
          className={currentActive === "js" ? "active" : ""}
        >
          JavaScript
        </button>
        <button
          onClick={() => handleClick("react")}
          className={currentActive === "react" ? "active" : ""}
        >
          React & MUI
        </button>
        <button
          onClick={() => handleClick("next")}
          className={currentActive === "next" ? "active" : ""}
        >
          next.js
        </button>
        <button
          onClick={() => handleClick("node")}
          className={currentActive === "node" ? "active" : ""}
        >
          Node & Express
        </button>
      </section>

      {/* RIGHT */}
      <section className="flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            const shortText = item.description.split(" ").slice(0, 3).join(" ");
            const isExpanded = expandedCards[item.imgPath] || false;

            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="card"
              >
                <img width={266} src={item.imgPath} alt="" />

                <div className="box" style={{ width: "266px" }}>
                  <h3 className="title">{item.projectTitle}</h3>

                  <p className="sub-title">
                    {isExpanded ? item.description : `${shortText}...`}
                  </p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div>
                        <a
                          className="icon-link"
                          target="_blank"
                          href={item.link}
                        ></a>
                      </div>
                      <div>
                        <a
                          className="icon-github"
                          target="_blank"
                          href="https://github.com/mohammed-sabrymahdy?tab=repositories"
                        ></a>
                      </div>
                    </div>

                    <button
                      className="link flex"
                      onClick={() => toggleDescription(item.imgPath)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      {isExpanded ? "less" : "more"}
                      <span className="icon-arrow-right2"></span>
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
