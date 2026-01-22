export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  colorClass: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  content?: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "VISURA CATASTALE",
    excerpt: "La visura catastale è il primo documento da controllare quando compri casa. Capire cosa contiene ti aiuta a evitare errori banali ma costosi.",
    date: "22 Gennaio 2026",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=800&fit=crop",
    slug: "visura-catastale",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Immobiliar Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "6 min",
    content: `
      <p>La visura catastale è spesso il primo documento che viene richiesto durante una compravendita immobiliare, ma raramente viene letto con attenzione.</p>
      
      <h2>COS'È DAVVERO LA VISURA CATASTALE</h2>
      <p>È la carta d'identità dell'immobile dal punto di vista catastale. Riporta dati tecnici, intestazione e rendita.</p>
      <p>Non è una garanzia di regolarità urbanistica, ma un punto di partenza fondamentale.</p>
      
      <h2>COSA CONTROLLARE SUBITO</h2>
      <p>È importante verificare che l'intestatario coincida con chi vende e che i dati siano coerenti.</p>
      <p>In caso di discrepanze, è necessario fermarsi e chiedere chiarimenti.</p>
      
      <h2>ERRORI COMUNI</h2>
      <p>Molti acquirenti pensano che basti "averla". In realtà va letta e interpretata.</p>
      <p>Ignorare una visura errata può creare problemi più avanti.</p>
      
      <h2>QUANDO SERVE UN SUPPORTO</h2>
      <p>Se emergono dubbi su intestazione o categoria, è il momento di approfondire.</p>
      <p>Meglio farlo prima della proposta, non dopo.</p>
      
      <h2>CONCLUSIONE</h2>
      <p>La visura catastale non va sottovalutata: è un segnale iniziale della salute documentale dell'immobile.</p>
    `
  },
  {
    id: "2",
    title: "PLANIMETRIA CATASTALE",
    excerpt: "Confrontare la planimetria con lo stato reale della casa è uno dei controlli più sottovalutati da chi compra.",
    date: "18 Gennaio 2026",
    image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=800&h=800&fit=crop",
    slug: "planimetria-catastale",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Immobiliar Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "7 min",
    content: `
      <p>La planimetria catastale rappresenta graficamente l'immobile, ma non sempre riflette la realtà.</p>
      
      <h2>A COSA SERVE LA PLANIMETRIA</h2>
      <p>Serve a descrivere la distribuzione interna dell'immobile.</p>
      <p>È uno strumento di confronto, non una certificazione.</p>
      
      <h2>CONFRONTO CON LA CASA REALE</h2>
      <p>Ogni stanza, muro e apertura dovrebbe coincidere.</p>
      <p>Differenze evidenti sono segnali da non ignorare.</p>
      
      <h2>ERRORI FREQUENTI</h2>
      <p>Bagni spostati, verande chiuse o tramezzi aggiunti sono casi comuni.</p>
      <p>Non sempre sono sanabili.</p>
      
      <h2>IMPATTO SU MUTUO E ROGITO</h2>
      <p>Una planimetria non conforme può bloccare la perizia.</p>
      <p>Meglio verificare prima di impegnarsi.</p>
      
      <h2>CONCLUSIONE</h2>
      <p>La planimetria è uno specchio: se non riflette la realtà, qualcosa va chiarito.</p>
    `
  },
  {
    id: "3",
    title: "ATTO DI PROVENIENZA",
    excerpt: "Sapere come il venditore ha acquisito la casa è fondamentale per capire se può venderla senza problemi.",
    date: "14 Gennaio 2026",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=800&fit=crop",
    slug: "atto-di-provenienza",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Immobiliar Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "6 min",
    content: `
      <p>L'atto di provenienza racconta la storia giuridica dell'immobile.</p>
      
      <h2>COS'È L'ATTO DI PROVENIENZA</h2>
      <p>È il documento che spiega come il venditore è diventato proprietario.</p>
      <p>Può derivare da compravendita, successione o donazione.</p>
      
      <h2>PERCHÉ È IMPORTANTE</h2>
      <p>Non tutte le provenienze sono uguali dal punto di vista del rischio.</p>
      <p>Alcune richiedono maggiore attenzione.</p>
      
      <h2>DONAZIONI E SUCCESSIONI</h2>
      <p>Questi casi possono creare problemi in fase di mutuo.</p>
      <p>È bene chiarirli prima di fare offerte.</p>
      
      <h2>COSA CONTROLLARE</h2>
      <p>Quote, diritti reali e vincoli devono essere chiari.</p>
      <p>Nulla va dato per scontato.</p>
      
      <h2>CONCLUSIONE</h2>
      <p>Capire la provenienza significa sapere se stai comprando serenamente.</p>
    `
  },
  {
    id: "4",
    title: "ISPEZIONE IPOTECARIA",
    excerpt: "L'ispezione ipotecaria serve a scoprire vincoli e ipoteche che possono pesare sull'acquisto.",
    date: "10 Gennaio 2026",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop",
    slug: "ispezione-ipotecaria",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Immobiliar Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "5 min",
    content: `
      <p>L'ispezione ipotecaria verifica se sull'immobile gravano vincoli.</p>
      
      <h2>COSA RIVELA</h2>
      <p>Mostra ipoteche, pignoramenti e altri gravami.</p>
      <p>È uno strumento di tutela per l'acquirente.</p>
      
      <h2>QUANDO FARLA</h2>
      <p>Prima del preliminare o comunque prima di impegnarsi seriamente.</p>
      <p>Non è un dettaglio finale.</p>
      
      <h2>ERRORI COMUNI</h2>
      <p>Affidarsi a rassicurazioni verbali è rischioso.</p>
      <p>I vincoli vanno letti nero su bianco.</p>
      
      <h2>GESTIONE DELLE IPOTECHE</h2>
      <p>Non tutte le ipoteche sono un problema, ma vanno gestite.</p>
      <p>Serve chiarezza sui tempi di cancellazione.</p>
      
      <h2>CONCLUSIONE</h2>
      <p>Meglio sapere prima cosa grava sulla casa, che scoprirlo dopo.</p>
    `
  },
  {
    id: "5",
    title: "TITOLI EDILIZI",
    excerpt: "I titoli edilizi raccontano se ciò che vedi è stato autorizzato o no.",
    date: "6 Gennaio 2026",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop",
    slug: "titoli-edilizi",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Immobiliar Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "7 min",
    content: `
      <p>I titoli edilizi spiegano la storia urbanistica dell'immobile.</p>
      
      <h2>COSA SONO</h2>
      <p>Permessi, concessioni e pratiche depositate nel tempo.</p>
      <p>Servono a verificare la legittimità delle opere.</p>
      
      <h2>PERCHÉ CONTANO</h2>
      <p>Un immobile non conforme può non essere mutuabile.</p>
      <p>O può creare problemi futuri.</p>
      
      <h2>DIFFORMITÀ EDILIZIE</h2>
      <p>Non tutte sono sanabili.</p>
      <p>Vanno valutate caso per caso.</p>
      
      <h2>CHI DEVE OCCUPARSENE</h2>
      <p>Il venditore deve consegnare chiarezza, non problemi.</p>
      <p>L'acquirente deve sapere cosa sta comprando.</p>
      
      <h2>CONCLUSIONE</h2>
      <p>I titoli edilizi sono un passaggio chiave per acquistare serenamente.</p>
    `
  },
  {
    id: "6",
    title: "CONFORMITÀ URBANISTICA",
    excerpt: "Conformità urbanistica e catastale non sono la stessa cosa. Capirlo evita errori gravi.",
    date: "2 Gennaio 2026",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=800&fit=crop",
    slug: "conformita-urbanistica",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Immobiliar Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "6 min",
    content: `
      <p>Molti confondono catasto e urbanistica, ma sono piani diversi.</p>
      
      <h2>COSA SIGNIFICA CONFORMITÀ</h2>
      <p>Vuol dire che ciò che esiste è stato autorizzato.</p>
      <p>Non basta che sia accatastato.</p>
      
      <h2>PROBLEMI PIÙ COMUNI</h2>
      <p>Modifiche interne non dichiarate.</p>
      <p>Ampliamenti irregolari.</p>
      
      <h2>IMPATTO SULL'ACQUISTO</h2>
      <p>Può bloccare mutuo e rogito.</p>
      <p>O trasferire un problema all'acquirente.</p>
      
      <h2>QUANDO FERMARSI</h2>
      <p>Se la situazione non è chiara, è meglio approfondire.</p>
      <p>Prima di firmare.</p>
      
      <h2>CONCLUSIONE</h2>
      <p>La conformità è una tutela, non una formalità.</p>
    `
  },
  {
    id: "7",
    title: "AGIBILITÀ IMMOBILE",
    excerpt: "L'agibilità indica se una casa è idonea all'uso abitativo secondo la normativa.",
    date: "28 Dicembre 2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop",
    slug: "agibilita-immobile",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Immobiliar Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "5 min",
    content: `
      <p>L'agibilità è spesso sottovalutata, ma ha un significato preciso.</p>
      
      <h2>COSA ATTESTA</h2>
      <p>Certifica che l'immobile rispetta requisiti minimi.</p>
      <p>Non è sempre obbligatoria, ma è rilevante.</p>
      
      <h2>QUANDO MANCA</h2>
      <p>In alcuni immobili più vecchi può non esserci.</p>
      <p>Va valutato l'impatto.</p>
      
      <h2>RAPPORTO CON IL MUTUO</h2>
      <p>Alcune banche la richiedono.</p>
      <p>Meglio saperlo prima.</p>
      
      <h2>COSA FARE</h2>
      <p>Capire se è recuperabile o se è un limite.</p>
      <p>Non ignorare la questione.</p>
      
      <h2>CONCLUSIONE</h2>
      <p>L'agibilità contribuisce alla serenità dell'acquisto.</p>
    `
  },
  {
    id: "8",
    title: "APE ENERGETICO",
    excerpt: "L'APE non serve solo per la classe energetica: ha effetti pratici sull'acquisto.",
    date: "24 Dicembre 2025",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&h=800&fit=crop",
    slug: "ape-energetico",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Immobiliar Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "4 min",
    content: `
      <p>L'APE è obbligatorio e fornisce informazioni importanti.</p>
      
      <h2>COSA INDICA</h2>
      <p>La classe energetica e i consumi stimati.</p>
      <p>Influisce sui costi futuri.</p>
      
      <h2>PERCHÉ GUARDARLO</h2>
      <p>Non è solo un allegato.</p>
      <p>Aiuta a valutare sostenibilità e spese.</p>
      
      <h2>ERRORI COMUNI</h2>
      <p>Ignorare l'APE o leggerlo superficialmente.</p>
      <p>Ogni classe ha conseguenze diverse.</p>
      
      <h2>RAPPORTO CON IL VALORE</h2>
      <p>Incide sulla rivendibilità.</p>
      <p>E sul comfort abitativo.</p>
      
      <h2>CONCLUSIONE</h2>
      <p>L'APE è uno strumento informativo da usare, non da archiviare.</p>
    `
  },
  {
    id: "9",
    title: "MUTUO E PERIZIA",
    excerpt: "Mutuo e perizia sono momenti delicati: prepararsi evita sorprese.",
    date: "20 Dicembre 2025",
    image: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&h=800&fit=crop",
    slug: "mutuo-e-perizia",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Immobiliar Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "7 min",
    content: `
      <p>Il mutuo è un processo, non un semplice sì o no.</p>
      
      <h2>COME RAGIONA LA BANCA</h2>
      <p>Valuta reddito, stabilità e rischio.</p>
      <p>L'immobile è una garanzia.</p>
      
      <h2>LA PERIZIA</h2>
      <p>Stima un valore prudente.</p>
      <p>Non coincide sempre con il prezzo.</p>
      
      <h2>PROBLEMI FREQUENTI</h2>
      <p>Valore inferiore al previsto.</p>
      <p>Documenti incompleti.</p>
      
      <h2>PREPARAZIONE</h2>
      <p>Anticipare i problemi riduce stress.</p>
      <p>Meglio sapere prima che dopo.</p>
      
      <h2>CONCLUSIONE</h2>
      <p>Mutuo e perizia vanno gestiti, non subiti.</p>
    `
  }
];
