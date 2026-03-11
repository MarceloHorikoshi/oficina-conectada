const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Auto-Mático. Feito pra oficina, não pro PowerPoint.
          </p>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#solucao" className="transition-colors hover:text-foreground">Funcionalidades</a>
            <a href="#precos" className="transition-colors hover:text-foreground">Preços</a>
            <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
            <a href="#" className="transition-colors hover:text-foreground">Suporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
