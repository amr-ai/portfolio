const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">AK</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">
              AI Engineer
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Amr Khalafalla. Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
