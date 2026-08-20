function Skills() {
  const skills = [
    "C++",
    "JavaScript",
    "React",
    "Node.js",
    "Data Science",
    "Ai/ml"
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;