import { Button } from "@/components/ui/button";
import { FileText, Download, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function PDFDownload() {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      const response = await fetch("/api/generate-pdf");
      if (!response.ok) throw new Error("Failed to generate PDF");
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Karl_Mehanna_Portfolio.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      toast({
        title: "PDF Downloaded!",
        description: "Your portfolio has been saved as a PDF.",
      });
    } catch (error) {
      toast({
        title: "Download Ready",
        description: "Click to download the portfolio summary.",
        variant: "default",
      });
      
      const pdfContent = generatePortfolioText();
      const blob = new Blob([pdfContent], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Karl_Mehanna_Portfolio.txt";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
    
    setIsGenerating(false);
  };

  const generatePortfolioText = () => {
    return `
================================================================================
                         KARL MEHANNA - PORTFOLIO
================================================================================

COMPUTER ENGINEER STUDENT | AI & MACHINE LEARNING ENTHUSIAST
Location: Troyes, Grand Est, France
LinkedIn: https://linkedin.com/in/karl-mehanna-363569263
GitHub: https://github.com/KarlMh

================================================================================
                              ABOUT ME
================================================================================

I am passionate about artificial intelligence and emerging technologies.
Currently studying at UTT in France, seeking internships in AI, software
development, and information systems.

================================================================================
                         FEATURED PROJECT
================================================================================

SIGN LANGUAGE TRANSLATION SYSTEM
Company: Aubay Paris | Role: ML/CV Engineer Intern

Developed an innovative system that translates sign language gestures into
written text in real-time using machine learning and computer vision
technologies.

Tech Stack: Python, TensorFlow, OpenCV, MediaPipe, Computer Vision, Deep Learning

================================================================================
                           EXPERIENCE
================================================================================

ML/CV ENGINEER INTERN | Aubay
Paris, France | 2024
- Developed real-time sign language to text translation system
- Worked with TensorFlow, OpenCV, and MediaPipe for gesture recognition

ENGINEER INTERN | Gamma Computer
Beirut, Lebanon | Jun 2024 - Jul 2024
- 2-month internship in computer engineering
- Hands-on experience with technical projects and system implementations

VOLUNTEER | Order of Malta Lebanon
Lebanon | Dec 2021 - Feb 2024
- 2+ years dedicated to social services
- Helped communities in need and organized charitable events

================================================================================
                            EDUCATION
================================================================================

UNIVERSITE DE TECHNOLOGIE DE TROYES (UTT)
Engineer's Degree in Computer Engineering (ISI)
2024 - 2027 | Troyes, France

HOLY SPIRIT UNIVERSITY OF KASLIK (USEK)
Engineer's Degree in Computer Engineering
2022 - 2024 | Lebanon

================================================================================
                       SKILLS & CERTIFICATIONS
================================================================================

PROGRAMMING LANGUAGES:
Python, JavaScript, Java, TypeScript, HTML/CSS, SQL

AI & MACHINE LEARNING:
TensorFlow, Machine Learning, Computer Vision, Deep Learning, MediaPipe

WEB DEVELOPMENT:
React, Flask, Django, Node.js, REST APIs

CLOUD:
AWS, Cloud Applications, Serverless

CERTIFICATIONS:
- AWS Academy Cloud Web Application Builder (Dec 2024)
- Machine Learning with Python - freeCodeCamp (Aug 2024)
- CS50P: Programming With Python - CS50/Harvard (Mar 2023)
- CS50x: Computer Science - Harvard University (Jan 2023)

================================================================================
                           CONTACT
================================================================================

Email: karl.mehanna@utt.fr
Location: Troyes, Grand Est, France
Status: Open to internships and opportunities

================================================================================
`;
  };

  return (
    <Button
      variant="outline"
      onClick={generatePDF}
      disabled={isGenerating}
      className="gap-2"
      data-testid="button-download-pdf"
    >
      {isGenerating ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <FileText className="h-4 w-4" />
          Download Portfolio
        </>
      )}
    </Button>
  );
}
