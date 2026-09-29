import React from 'react';

/**
 * Task 1: Reusable Component with Props
 * 
 * Instructions:
 * Create a ProductCard component that accepts title, price, and category as props 
 * and displays them inside a styled box layout. Reuse this ProductCard component 
 * in the main App component to display two different products with unique data.
 */

/**
 * ProductCard Component
 * Accepts title, price, and category as props and displays them inside a styled box layout.
 *
 * @param {Object} props
 * @param {string} props.title - The title or name of the product
 * @param {number|string} props.price - The price of the product
 * @param {string} props.category - The product category
 */
export const ProductCard = ({ title, price, category }) => {
  return (
    <div style={styles.card}>
      {/* Category Tag */}
      <span style={styles.badge}>{category}</span>

      {/* Product Title */}
      <h3 style={styles.title}>{title}</h3>

      {/* Product Price */}
      <div style={styles.priceContainer}>
        <span style={styles.priceLabel}>Price:</span>
        <span style={styles.priceValue}>
          ${typeof price === 'number' ? price.toFixed(2) : price}
        </span>
      </div>
    </div>
  );
};

/**
 * Main App Component for Task 1
 * Reuses the ProductCard component to display two different products with unique data.
 */
export default function App() {
  // Product 1 - Unique Data
  const product1 = {
    title: "Sony WH-1000XM5 Wireless Headphones",
    price: 399.99,
    category: "Electronics",
  };

  // Product 2 - Unique Data
  const product2 = {
    title: "Ergonomic Lumbar Office Desk Chair",
    price: 249.5,
    category: "Furniture",
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.mainHeading}>Task 1: Reusable Component with Props</h1>
        <p style={styles.subHeading}>
          Demonstrating component reusability by passing unique <code>title</code>, <code>price</code>, and <code>category</code> props into <code>ProductCard</code>.
        </p>
      </header>

      {/* Reusing ProductCard component for two different products */}
      <div style={styles.grid}>
        <ProductCard
          title={product1.title}
          price={product1.price}
          category={product1.category}
        />

        <ProductCard
          title={product2.title}
          price={product2.price}
          category={product2.category}
        />
      </div>
    </div>
  );
}

// Inline styles for modern card box layout
const styles = {
  container: {
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
    maxWidth: '850px',
    margin: '40px auto',
    padding: '32px 24px',
    backgroundColor: '#f8fafc',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
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
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    justifyContent: 'center',
  },
  card: {
    flex: '1 1 300px',
    maxWidth: '380px',
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '14px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    padding: '4px 12px',
    borderRadius: '9999px',
    marginBottom: '14px',
    border: '1px solid #bfdbfe',
  },
  title: {
    fontSize: '19px',
    fontWeight: '600',
    color: '#1e293b',
    margin: '0 0 20px 0',
    lineHeight: '1.4',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px',
    marginTop: 'auto',
    paddingTop: '16px',
    borderTop: '1px solid #f1f5f9',
  },
  priceLabel: {
    fontSize: '14px',
    color: '#64748b',
    fontWeight: '500',
  },
  priceValue: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#059669',
  },
};
