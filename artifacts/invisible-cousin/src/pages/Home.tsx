import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#040D14] text-[#F5F5F5] font-sans">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 px-6 py-4 flex items-center justify-between ${
          scrolled ? "bg-[rgba(4,13,20,0.97)]" : "bg-transparent"
        }`}
      >
        <div className="text-[#F5F5F5] font-serif italic text-lg sm:text-xl uppercase tracking-widest cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          The Invisible Cousin
        </div>
        <div className="hidden md:flex gap-6 text-[#F5F5F5] text-sm uppercase tracking-widest font-medium">
          <button data-testid="nav-claim" onClick={() => scrollTo("claim")} className="hover:text-[#00FFD4] transition-colors">Claim</button>
          <button data-testid="nav-layers" onClick={() => scrollTo("layers")} className="hover:text-[#00FFD4] transition-colors">Layers</button>
          <button data-testid="nav-tests" onClick={() => scrollTo("tests")} className="hover:text-[#00FFD4] transition-colors">Tests</button>
          <button data-testid="nav-verify" onClick={() => scrollTo("verify")} className="hover:text-[#00FFD4] transition-colors">Verify</button>
          <button data-testid="nav-collaborate" onClick={() => scrollTo("collaborate")} className="hover:text-[#00FFD4] transition-colors">Collaborate</button>
        </div>
      </nav>

      {/* SECTION 1 — HERO */}
      <section className="min-h-[100dvh] bg-[#040D14] flex flex-col items-center justify-center text-center px-4 relative pt-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <p className="text-[#6A8A85] text-xs sm:text-sm uppercase tracking-widest">
            Independent Research · Atlantic Beach, NY · 2026
          </p>
          <h1 className="font-serif italic text-[#F5F5F5] leading-tight text-5xl sm:text-6xl md:text-[clamp(3rem,6vw,6rem)]">
            The Invisible Cousin
          </h1>
          <p className="text-[#00FFD4] text-lg sm:text-xl max-w-2xl">
            Parallel Micro-Scale Complexity, Detection Blind Spots, and Implications for SETI and Evolutionary Biology
          </p>
          <p className="text-[#6A8A85] text-sm">Justin Malkin</p>
          <p className="text-[#6A8A85] text-sm">Independent researcher. Creator of Bridget — a multi-model AI debate and synthesis platform.</p>
          <p className="text-[#F5F5F5] max-w-[580px] mx-auto text-base sm:text-lg leading-relaxed mt-4">
            Standard measurement pipelines are systematically insensitive to distributed, transient microbial coordination. This is a statement about methodology — not a claim about what we would find.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              data-testid="button-read-manuscript"
              href="mailto:justin.malkin@outlook.com"
              className="bg-[#00FFD4] text-[#040D14] px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-opacity-90 transition-colors"
            >
              Request Manuscript
            </a>
            <a 
              data-testid="button-osf"
              href="https://osf.io/ntxr9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-[#00FFD4] text-[#00FFD4] px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-[#00FFD4] hover:bg-opacity-10 transition-colors inline-block"
            >
              Pre-registration: OSF
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer" onClick={() => scrollTo("claim")}>
          <ChevronDown className="text-[#6A8A85] w-8 h-8 animate-bounce" />
        </div>
      </section>

      {/* SECTION 2 — CLAIM */}
      <section 
        id="claim" 
        ref={(el) => sectionRefs.current[0] = el}
        className="fade-section bg-[#071820] py-32 px-6"
      >
        <div className="max-w-[680px] mx-auto flex flex-col items-center text-center gap-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#00A88F]">The Smallest, Most Defensible Claim</h2>
          
          <blockquote className="border-l-4 border-[#00FFD4] pl-6 sm:pl-8 py-2 text-left italic text-xl sm:text-2xl leading-relaxed text-[#F5F5F5]">
            "A systematic detection blind spot exists in our collective ability to characterize micro-scale biological complexity. This blind spot is not simply 'we haven't looked enough.' It is structurally induced by the dominant ways microbiology is done and interpreted."
          </blockquote>
          
          <p className="text-[#6A8A85] italic text-sm sm:text-base">
            This claim does not require panspermia, alien life, or microbial intelligence. It is a statement about methodology.
          </p>
        </div>
      </section>

      {/* SECTION 3 — LAYERS */}
      <section 
        id="layers" 
        ref={(el) => sectionRefs.current[1] = el}
        className="fade-section bg-[#040D14] py-32 px-6 text-[#F5F5F5]"
      >
        <div className="max-w-[900px] mx-auto flex flex-col items-center gap-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#00FFD4]">A Two-Layer Argument</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="bg-[#040D14] p-8 border-t-4 border-[#00FFD4]">
              <p className="text-[#00FFD4] text-xs uppercase tracking-widest mb-4">Layer 1 — Established Science</p>
              <p className="leading-relaxed text-lg text-white/90">
                Microbial diversity on Earth is vastly undercharacterized. Standard methods erase in situ collective behaviors. Interstellar microbial transfer is physically plausible. These are current scientific consensus.
              </p>
            </div>
            
            <div className="bg-[#040D14] p-8 border-t-4 border-[#6A8A85]">
              <p className="text-[#00FFD4] text-xs uppercase tracking-widest mb-4">Layer 2 — Bounded Inference, Testable</p>
              <p className="leading-relaxed text-lg text-white/90">
                The upper bound of micro-scale collective complexity is unknown and untested. No coordinated research program is designed to falsify this hypothesis. Current methods cannot detect it even if it exists.
              </p>
            </div>
          </div>
          
          <p className="text-[#6A8A85] italic text-sm sm:text-base text-center">
            Readers who accept only Layer 1 still have a specific, actionable gap in scientific coverage.
          </p>
        </div>
      </section>

      {/* SECTION 4 — TESTS */}
      <section 
        id="tests" 
        ref={(el) => sectionRefs.current[2] = el}
        className="fade-section bg-[#071820] py-32 px-6"
      >
        <div className="max-w-[900px] mx-auto flex flex-col items-center gap-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#00A88F]">Two Tests That Could Resolve This</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="bg-[#071820] p-8 border-t-4 border-[#00FFD4] shadow-sm">
              <p className="text-[#00FFD4] text-xs uppercase tracking-widest mb-4">Priority 1 — Immediate</p>
              <h3 className="font-serif text-2xl mb-4 text-[#F5F5F5]">AI Pattern Detection on Existing Data</h3>
              <p className="leading-relaxed mb-6 text-[#F5F5F5]">
                Existing metagenomic datasets have never been analyzed for anomalous coordination. Initiatable within weeks using publicly available data.
              </p>
              <p className="text-[#00FFD4] font-semibold text-sm tracking-wide">
                $15,000 – $50,000 · 3–4 months
              </p>
            </div>
            
            <div className="bg-[#071820] p-8 border-t-4 border-[#6A8A85] shadow-sm">
              <p className="text-[#00FFD4] text-xs uppercase tracking-widest mb-4">Priority 2 — Decisive</p>
              <h3 className="font-serif text-2xl mb-4 text-[#F5F5F5]">Theoretical Upper Bound Modeling</h3>
              <p className="leading-relaxed mb-6 text-[#F5F5F5]">
                What is the maximum information processing capacity of a microbial network? If trivially low, the motivation dissolves. If high, every observational proposal gains quantitative justification.
              </p>
              <p className="text-[#00FFD4] font-semibold text-sm tracking-wide">
                $150,000 – $300,000 · 18–24 months
              </p>
            </div>
          </div>
          
          <p className="text-[#6A8A85] italic text-sm sm:text-base text-center">
            A carefully obtained null result is more valuable than a dramatic positive claim that does not withstand scrutiny.
          </p>
        </div>
      </section>

      {/* SECTION 5 — VERIFY */}
      <section 
        id="verify" 
        ref={(el) => sectionRefs.current[3] = el}
        className="fade-section bg-[#040D14] py-32 px-6 text-[#F5F5F5]"
      >
        <div className="max-w-[900px] mx-auto flex flex-col items-center gap-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#00FFD4]">Pre-Registered. Stress-Tested. On Record.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            <div className="flex flex-col gap-4">
              <p className="text-[#00FFD4] text-xs uppercase tracking-widest">Pre-Registration</p>
              <p className="leading-relaxed text-sm sm:text-base text-white/80 flex-grow">
                Quantitative thresholds pre-specified and publicly registered before analysis.
              </p>
              <a 
                data-testid="link-osf"
                href="https://osf.io/ntxr9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00FFD4] text-sm hover:underline mt-auto"
              >
                OSF · DOI: 10.17605/OSF.IO/NTXR9
              </a>
            </div>
            
            <div className="flex flex-col gap-4">
              <p className="text-[#00FFD4] text-xs uppercase tracking-widest">Multi-Model Stress Test</p>
              <p className="leading-relaxed text-sm sm:text-base text-white/80 flex-grow">
                9-round rigorous debate across multiple AI models with Devil's Advocate enabled.
              </p>
              <a 
                data-testid="link-bridget"
                href="https://verdicts.fyi/verdict/589a2265-9b57-4162-9ac3-e0d02e93d255" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00FFD4] text-sm hover:underline mt-auto"
              >
                View Verdict · Bridget
              </a>
            </div>
            
            <div className="flex flex-col gap-4">
              <p className="text-[#00FFD4] text-xs uppercase tracking-widest">Full Manuscript</p>
              <p className="leading-relaxed text-sm sm:text-base text-white/80 flex-grow">
                Complete paper with appendices and pre-specified falsification criteria.
              </p>
              <span className="text-sm mt-auto">
                Manuscript available upon request ·{" "}
                <a
                  href="mailto:justin.malkin@outlook.com"
                  className="text-[#00FFD4] hover:underline"
                  data-testid="link-manuscript-email"
                >
                  justin.malkin@outlook.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — COLLABORATE */}
      <section 
        id="collaborate" 
        ref={(el) => sectionRefs.current[4] = el}
        className="fade-section bg-[#071820] py-32 px-6"
      >
        <div className="max-w-[600px] mx-auto flex flex-col items-center text-center gap-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#00A88F]">The Micro-Scale Complexity Consortium</h2>
          
          <p className="leading-relaxed text-lg text-[#F5F5F5]">
            This investigation falls between microbiology, ecology, neuroscience, astrobiology, and computer science. No single discipline owns it. A distributed research consortium — the MSCC — would coordinate investigation across fields with explicit decision gates at each phase.
          </p>
          
          <div className="w-full flex flex-col text-[#F5F5F5]">
            <div className="py-4 border-b border-[#6A8A85]/30 text-lg">Computational neuroscience</div>
            <div className="py-4 border-b border-[#6A8A85]/30 text-lg">Microbial ecology / biophysics</div>
            <div className="py-4 border-b border-[#6A8A85]/30 text-lg">Information theory / theoretical computer science</div>
            <div className="py-4 border-b border-[#6A8A85]/30 text-lg">High-performance computing</div>
          </div>
          
          <a 
            data-testid="link-contact"
            href="mailto:justin.malkin@outlook.com" 
            className="text-[#00FFD4] text-xl font-serif italic hover:underline"
          >
            justin.malkin@outlook.com
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#040D14] py-16 px-6 text-center">
        <div className="flex flex-col gap-4">
          <p className="font-serif italic text-[#00FFD4] text-xl">The Invisible Cousin</p>
          <p className="text-[#6A8A85] text-xs sm:text-sm uppercase tracking-wider">Justin Malkin · Independent Researcher · Atlantic Beach, NY · 2026</p>
          <p className="text-[#6A8A85] text-xs sm:text-sm">
            invisiblecousin.org · Pre-registration: osf.io/ntxr9
          </p>
        </div>
      </footer>
    </div>
  );
}
