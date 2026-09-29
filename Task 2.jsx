import React, { useState } from 'react';

/**
 * Task 2: State & Event Handling (useState)
 * 
 * Instructions:
 * Build an interactive LikeButton component using React's useState Hook. 
 * Implement event handling so that clicking the button dynamically increments 
 * the total like count displayed on the screen.
 */

/**
 * LikeButton Component
 * Uses React's useState hook to maintain like count state.
 * Implements an onClick event handler that dynamically increments the count.
 */
export const LikeButton = () => {
  // State Hook: Initializes 'likes' to 0
  const [likes, setLikes] = useState(0);

  // Event handler for button click
  const handleLike = () => {
    // Functional state update ensures accurate state increments
    setLikes((prevLikes) => prevLikes + 1);
  };

  // Event handler to reset the counter
  const handleReset = () => {
    setLikes(0);
  };

  return (
    <div style={styles.card}>
      {/* Visual Badge Icon */}
      <div style={styles.iconCircle}>
        <span style={styles.icon}>❤️</span>
      </div>

      <h2 style={styles.cardTitle}>Interactive Like Counter</h2>
      <p style={styles.cardDescription}>
        Click the button below to dynamically increment the total like count displayed on the screen.
      </p>

      {/* Dynamic Count Display */}
      <div style={styles.counterBox}>
        <span style={styles.counterLabel}>Total Likes</span>
        <span style={styles.counterNumber}>{likes}</span>
      </div>

      {/* Action Buttons */}
      <div style={styles.buttonGroup}>
        <button
          onClick={handleLike}
          style={styles.likeButton}
          aria-label="Like button"
        >
          <span style={styles.buttonIcon}>👍</span>
          Like
        </button>

        {/* Conditional Reset Button */}
        {likes > 0 && (
          <button
            onClick={handleReset}
            style={styles.resetButton}
            aria-label="Reset likes"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

/**
 * Main App Component for Task 2
 * Embeds and displays the LikeButton component.
 */
export default function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.mainHeading}>Task 2: State & Event Handling</h1>
        <p style={styles.subHeading}>
          Demonstrating React's <code>useState</code> hook and dynamic <code>onClick</code> event handling.
        </p>
      </header>

      <LikeButton />
    </div>
  );
}

// Inline styles for interactive UI
const styles = {
  container: {
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
    maxWidth: '650px',
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
    lineHeight: '1.5',
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '40px 24px',
    textAlign: 'center',
    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconCircle: {
    width: '68px',
    height: '68px',
    borderRadius: '50%',
    backgroundColor: '#fee2e2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  icon: {
    fontSize: '32px',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#1e293b',
    margin: '0 0 8px 0',
  },
  cardDescription: {
    fontSize: '14px',
    color: '#64748b',
    maxWidth: '420px',
    margin: '0 0 28px 0',
    lineHeight: '1.5',
  },
  counterBox: {
    backgroundColor: '#f1f5f9',
    borderRadius: '14px',
    padding: '16px 40px',
    marginBottom: '28px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '160px',
    border: '1px solid #e2e8f0',
  },
  counterLabel: {
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#64748b',
    fontWeight: '700',
  },
  counterNumber: {
    fontSize: '44px',
    fontWeight: '800',
    color: '#2563eb',
    marginTop: '4px',
    lineHeight: '1',
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    padding: '12px 28px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(37, 99, 235, 0.3)',
    transition: 'background-color 0.2s ease, transform 0.1s ease',
  },
  buttonIcon: {
    marginRight: '8px',
    fontSize: '18px',
  },
  resetButton: {
    backgroundColor: '#f1f5f9',
    color: '#475569',
    border: '1px solid #cbd5e1',
    borderRadius: '10px',
    padding: '12px 22px',
    fontSize: '15px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
};
