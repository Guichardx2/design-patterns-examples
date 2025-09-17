// Classes concretas
class PdfReport {
  generate() {
    return "Relatório em PDF gerado!";
  }
}

class PdfInvoice {
  generate() {
    return "Fatura em PDF gerada!";
  }
}

class DocxReport {
  generate() {
    return "Relatório em DOCX gerado!";
  }
}

class DocxInvoice {
  generate() {
    return "Fatura em DOCX gerada!";
  }
}


class DocsFactoryAbstract {
  createInvoiceDoc() {
    throw new Error("Método abstrato deve ser implementado");
  }
  createReportDoc() {
    throw new Error("Método abstrato deve ser implementado");
  }
}


class PdfFactory extends DocsFactoryAbstract {
  createInvoiceDoc() {
    return new PdfInvoice();
  }
  createReportDoc() {
    return new PdfReport();
  }
}

class DocxFactory extends DocsFactoryAbstract {
  createInvoiceDoc() {
    return new DocxInvoice();
  }
  createReportDoc() {
    return new DocxReport();
  }
}

const factories = {
  pdf: new PdfFactory(),
  docx: new DocxFactory(),
};


class DocumentApp {
  constructor(factory) {
    this.report = factory.createReportDoc();
    this.invoice = factory.createInvoiceDoc();
  }

  generateDocuments() {
    console.log(this.report.generate());
    console.log(this.invoice.generate());
  }
}


function main() {
  const types = ["pdf", "docx"];

  types.forEach((type) => {
    console.log(`\n>> Fábrica selecionada: ${type} <<`);
    const factory = factories[type];
    
    if (!factory) throw new Error("Tipo de fábrica desconhecido");

    const app = new DocumentApp(factory);
    app.generateDocuments();
  });
}

main();