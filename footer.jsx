function Footer({ email, year }) {
  return (
    <footer className="footer">
      <p>Contact: {email}</p>
      <p>© {year} Neel Gorasiya</p>
    </footer>
  );
}

export default Footer;
