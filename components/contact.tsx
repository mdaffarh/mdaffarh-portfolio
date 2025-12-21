import { Mail, Github, Linkedin, FileText } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-20 max-w-5xl">
      <div className="max-w-2xl">
        <div className="text-[15px] lg:text-base text-primary mb-4 tracking-wide">Incase you miss it, here's my contact.</div>
        <h2 className="text-xl md:text-4xl font-bold mb-6 text-foreground">Get In Touch</h2>
        <p className="text-foreground/80 mb-8 tracking-wide">I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
        <div className="space-y-4">
          <a href="mailto:daffarizmawan@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
            <Mail className="h-5 w-5 text-primary" />
            <span className="font-mono">daffarizmawan@gmail.com</span>
          </a>

          <a href="https://github.com/mdaffarh/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
            <Github className="h-5 w-5 text-primary" />
            <span className="font-mono">github.com/mdaffarh</span>
          </a>

          <a href="https://linkedin.com/in/daffa-rizmawan/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
            <Linkedin className="h-5 w-5 text-primary" />
            <span className="font-mono">linkedin.com/in/daffa-rizmawan</span>
          </a>
          <a href="https://drive.google.com/file/d/14vpS2NvOgi_pNf0zP4B2Hh7Z9TeYNi5A/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
            <FileText className="h-5 w-5 text-primary" />
            <span className="font-mono">Access My CV</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border/50">
        <p className="text-sm text-muted-foreground font-mono text-center">
          © 2025 Built with 💚 by{" "}
          <span className="hover:underline hover:font-bold">
            <a href="https://instagram.com/m_daffarh" rel="noopener noreferrer" target="_blank">
              Naksu
            </a>
          </span>
        </p>
      </div>
    </section>
  )
}
