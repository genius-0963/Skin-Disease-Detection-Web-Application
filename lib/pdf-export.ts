import { jsPDF } from 'jspdf';

export const exportToPDF = async (elementId: string, filename: string): Promise<boolean> => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Element not found');
    }

    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(20);
    doc.text('Skin Condition Analysis Report', 20, 20);
    
    // Add content from the element
    const content = element.textContent || '';
    const lines = content.split('\n').filter(line => line.trim());
    
    let y = 40;
    lines.forEach(line => {
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
      doc.text(line, 20, y);
      y += 10;
    });
    
    // Save the PDF
    doc.save(filename);
    return true;
  } catch (error) {
    console.error('PDF export failed:', error);
    return false;
  }
}; 