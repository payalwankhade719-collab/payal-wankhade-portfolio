import styles from "./Examination.module.css";

interface ExaminationRecord {
  qualification: string;
  institute: string;
  year: string;
  percentage: string;
}

const examinationData: ExaminationRecord[] = [
  {
    qualification: "Master of Computer Applications (MCA)",
    institute: "P. R. Pote College of Engineering and Management",
    year: "2027",
    percentage: "Pursuing",
  },
  {
    qualification: "Bachelor of Computer Applications (BCA)",
    institute: "Degree College of Physical Education, H.V.P.M., Amravati",
    year: "2024",
    percentage: "Completed",
  },
  {
    qualification: "Higher Secondary (12th)",
    institute: "Mahtma Jyotiba Phule College",
    year: "2021",
    percentage: "Completed",
  },
  {
    qualification: "Secondary (10th)",
    institute: "Chhogalal Rathi Gurukul Vidhyalay, Bhatkuli",
    year: "2019",
    percentage: "Completed",
  },
];

function Examination() {
  return (
    <section
      id="examination"
      className={styles.examination}
    >
      <div className={styles.container}>
        <p className={styles.subtitle}>MY EDUCATION</p>

        <h2>Examination</h2>

        <p className={styles.description}>
          My academic qualifications and examination details.
        </p>

        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>Qualification</th>
                <th>Institute</th>
                <th>Year</th>
                <th>Percentage / Status</th>
              </tr>
            </thead>

            <tbody>
              {examinationData.map((exam) => (
                <tr key={exam.qualification}>
                  <td>{exam.qualification}</td>
                  <td>{exam.institute}</td>
                  <td>{exam.year}</td>
                  <td>{exam.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Examination;
