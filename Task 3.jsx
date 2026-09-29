import React from 'react';

/**
 * Task 3: List Rendering & Conditional Rendering
 * 
 * Instructions:
 * Define an array of student objects containing id, name, and score. 
 * Render the list dynamically using the .map() method with unique key props. 
 * Use conditional rendering to display a "Pass" status in green text if the 
 * student's score is 50 or above (score >= 50), and a "Fail" status in red text 
 * if it is below 50.
 */

/**
 * StudentList Component
 * Renders a list of students dynamically using .map() and conditional rendering.
 */
export const StudentList = () => {
  // Define an array of student objects containing id, name, and score
  const students = [
    { id: 101, name: "Alexander Wright", score: 85 },
    { id: 102, name: "Sophia Martinez", score: 42 },
    { id: 103, name: "Liam Chen", score: 68 },
    { id: 104, name: "Emma Watson", score: 49 },
    { id: 105, name: "Noah Patel", score: 92 },
    { id: 106, name: "Olivia Brown", score: 50 },
    { id: 107, name: "James Wilson", score: 35 },
  ];

  return (
    <div style={styles.tableCard}>
      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Student Name</th>
            <th style={styles.th}>Score</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Dynamic List Rendering using Array.prototype.map() with unique key */}
          {students.map((student) => {
            // Conditional check: Score >= 50 passes, otherwise fails
            const isPassing = student.score >= 50;

            return (
              <tr key={student.id} style={styles.row}>
                <td style={styles.tdId}>#{student.id}</td>
                <td style={styles.tdName}>{student.name}</td>
                <td style={styles.tdScore}>
                  <strong>{student.score}</strong> / 100
                </td>
                <td style={styles.tdStatus}>
                  {/* Conditional Rendering:
                      "Pass" in green text if score >= 50,
                      "Fail" in red text if score < 50 */}
                  {isPassing ? (
                    <span style={styles.passStatus}>Pass</span>
                  ) : (
                    <span style={styles.failStatus}>Fail</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

/**
 * Main App Component for Task 3
 */
export default function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.mainHeading}>Task 3: List & Conditional Rendering</h1>
        <p style={styles.subHeading}>
          Dynamically mapped student records with unique <code>key</code> props and conditional status indicator:
          {' '}<span style={{ color: '#16a34a', fontWeight: 'bold' }}>Pass (Score &ge; 50)</span> vs{' '}
          <span style={{ color: '#dc2626', fontWeight: 'bold' }}>Fail (Score &lt; 50)</span>.
        </p>
      </header>

      <StudentList />
    </div>
  );
}

// Inline styles for table and conditional rendering status tags
const styles = {
  container: {
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
    maxWidth: '750px',
    margin: '40px auto',
    padding: '32px 24px',
    backgroundColor: '#f8fafc',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '28px',
  },
  mainHeading: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#0f172a',
    margin: '0 0 10px 0',
  },
  subHeading: {
    fontSize: '15px',
    color: '#64748b',
    margin: 0,
    lineHeight: '1.6',
  },
  tableCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '14px',
    overflow: 'hidden',
    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
  },
  headerRow: {
    backgroundColor: '#f1f5f9',
    borderBottom: '2px solid #e2e8f0',
  },
  th: {
    padding: '16px 20px',
    fontSize: '13px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    color: '#475569',
  },
  row: {
    borderBottom: '1px solid #f1f5f9',
  },
  tdId: {
    padding: '14px 20px',
    fontSize: '14px',
    color: '#64748b',
    fontWeight: '500',
  },
  tdName: {
    padding: '14px 20px',
    fontSize: '15px',
    color: '#0f172a',
    fontWeight: '600',
  },
  tdScore: {
    padding: '14px 20px',
    fontSize: '15px',
    color: '#334155',
  },
  tdStatus: {
    padding: '14px 20px',
  },
  // Green text for Pass (score >= 50)
  passStatus: {
    display: 'inline-block',
    color: '#16a34a', // Green text as required
    backgroundColor: '#dcfce7',
    fontWeight: '700',
    fontSize: '13px',
    padding: '4px 14px',
    borderRadius: '9999px',
    border: '1px solid #86efac',
  },
  // Red text for Fail (score < 50)
  failStatus: {
    display: 'inline-block',
    color: '#dc2626', // Red text as required
    backgroundColor: '#fee2e2',
    fontWeight: '700',
    fontSize: '13px',
    padding: '4px 14px',
    borderRadius: '9999px',
    border: '1px solid #fca5a5',
  },
};
