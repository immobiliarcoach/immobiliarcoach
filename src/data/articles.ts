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
    title: "RICERCA IMMOBILIARE",
    excerpt: "La ricerca è il primo momento in cui si crea confusione. Impostarla con metodo significa arrivare alla scelta con criteri chiari e senza stanchezza decisionale.",
    date: "22 Gennaio 2026",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=800&fit=crop",
    slug: "consulenza-ricerca-immobiliare",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Immobiliar Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "7 min",
    content: `
      <p>La fase di ricerca è spesso sottovalutata, ma è qui che nascono molti degli errori che si trascinano fino al rogito. Senza criteri chiari, ogni visita aggiunge dubbi invece di ridurli.</p>
      
      <h2>PERCHÉ LA RICERCA DIVENTA CONFUSIONE</h2>
      <p>Annunci simili, informazioni incomplete e pareri esterni creano rumore.</p>
      <p>Senza una direzione, la ricerca si trasforma in accumulo di incertezza.</p>
      
      <h2>DEFINIRE CRITERI PRIMA DI INIZIARE</h2>
      <p>Stabilire priorità e limiti consente di filtrare le opportunità.</p>
      <p>Non tutte le caratteristiche hanno lo stesso valore nel tempo.</p>
      
      <h2>VISITARE CON UN OBIETTIVO</h2>
      <p>Ogni visita dovrebbe servire a confermare o escludere.</p>
      <p>Visitare senza obiettivo porta solo stanchezza.</p>
      
      <h2>QUANDO FERMARSI</h2>
      <p>Capire quando dire no è parte integrante della ricerca.</p>
      <p>Fermarsi in tempo evita decisioni affrettate.</p>
      
      <h2>CONCLUSIONE</h2>
      <p>Una ricerca strategica crea chiarezza, riduce stress e prepara a decisioni migliori.</p>
    `
  },
  {
    id: "2",
    title: "PREPARAZIONE ALLA PROPOSTA",
    excerpt: "Fare un'offerta è una decisione delicata. Valutare se farla, come farla e quando fermarsi protegge l'acquirente da pressioni e rimpianti.",
    date: "18 Gennaio 2026",
    image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=800&h=800&fit=crop",
    slug: "consulenza-preparazione-proposta",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Immobiliar Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "8 min",
    content: `
      <p>La proposta di acquisto è il primo atto realmente vincolante. Spesso viene fatta sotto pressione, quando la paura di perdere l'immobile prende il sopravvento.</p>
      
      <h2>LA PRESSIONE DEL MOMENTO</h2>
      <p>Agenti e contesto spingono verso una scelta rapida.</p>
      <p>La rapidità raramente tutela chi compra.</p>
      
      <h2>VALUTARE SE FARE L'OFFERTA</h2>
      <p>Non tutte le situazioni richiedono una proposta.</p>
      <p>Capire quando fermarsi è una forma di tutela.</p>
      
      <h2>COME STRUTTURARE L'OFFERTA</h2>
      <p>Prezzo, condizioni e tempistiche devono essere coerenti.</p>
      <p>Ogni elemento ha conseguenze concrete.</p>
      
      <h2>IL RUOLO DELLE TUTELE</h2>
      <p>Le clausole non sono dettagli tecnici.</p>
      <p>Sono strumenti di protezione per l'acquirente.</p>
      
      <h2>CONCLUSIONE</h2>
      <p>Prepararsi alla proposta significa decidere con lucidità, non con la paura.</p>
    `
  },
  {
    id: "3",
    title: "ANALISI DOCUMENTALE (STOP / GO)",
    excerpt: "I documenti raccontano la verità sull'immobile. Analizzarli serve a capire se è davvero acquistabile prima di impegnarsi.",
    date: "14 Gennaio 2026",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=800&fit=crop",
    slug: "consulenza-analisi-documentale",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Immobiliar Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "9 min",
    content: `
      <p>Quando arrivano i documenti, molti acquirenti pensano che il peggio sia passato. In realtà è il momento in cui si decide se proseguire o fermarsi.</p>
      
      <h2>PERCHÉ I DOCUMENTI SONO DECISIVI</h2>
      <p>I documenti definiscono diritti, vincoli e rischi.</p>
      <p>Non sono una formalità.</p>
      
      <h2>OLTRE LE RASSICURAZIONI</h2>
      <p>Le parole non sostituiscono ciò che è scritto.</p>
      <p>Conta solo ciò che risulta dai documenti.</p>
      
      <h2>PROBLEMI SANABILI E NON SANABILI</h2>
      <p>Non tutte le irregolarità hanno lo stesso impatto.</p>
      <p>Capire la differenza evita sorprese future.</p>
      
      <h2>LA DECISIONE STOP O GO</h2>
      <p>Arrivare a una decisione chiara protegge l'acquirente.</p>
      <p>Fermarsi in tempo è spesso la scelta più corretta.</p>
      
      <h2>CONCLUSIONE</h2>
      <p>L'analisi documentale è il punto in cui si decide davvero se comprare.</p>
    `
  },
  {
    id: "4",
    title: "TUTELA PRELIMINARE",
    excerpt: "Il preliminare concentra il rischio dell'acquisto. Capirlo prima di firmare permette di sapere cosa si rischia e cosa no.",
    date: "10 Gennaio 2026",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop",
    slug: "consulenza-tutela-preliminare",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Immobiliar Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "8 min",
    content: `
      <p>Il preliminare viene spesso firmato con leggerezza, ma è il contratto che stabilisce le conseguenze economiche in caso di problemi.</p>
      
      <h2>PERCHÉ IL PRELIMINARE È CRUCIALE</h2>
      <p>È il momento in cui l'impegno diventa reale.</p>
      <p>Da qui in poi le conseguenze sono concrete.</p>
      
      <h2>CAPARRA E RESPONSABILITÀ</h2>
      <p>La caparra definisce chi rischia cosa.</p>
      <p>Non è solo un anticipo.</p>
      
      <h2>TEMPISTICHE E MUTUO</h2>
      <p>Il preliminare deve essere compatibile con i tempi bancari.</p>
      <p>Scadenze errate creano problemi.</p>
      
      <h2>FIRMARE CONSAPEVOLMENTE</h2>
      <p>Capire cosa si firma riduce l'ansia.</p>
      <p>La chiarezza tutela l'acquirente.</p>
      
      <h2>CONCLUSIONE</h2>
      <p>La tutela preliminare è fondamentale per un acquisto sicuro.</p>
    `
  },
  {
    id: "5",
    title: "GESTIONE MUTUO E PERIZIA",
    excerpt: "Mutuo e perizia sono momenti critici. Arrivare preparati al confronto con banca e perito riduce blocchi e tensioni.",
    date: "6 Gennaio 2026",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop",
    slug: "consulenza-gestione-mutuo-perizia",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Immobiliar Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "9 min",
    content: `
      <p>Il mutuo non è solo una pratica bancaria, ma un processo complesso che coinvolge più soggetti.</p>
      
      <h2>COME RAGIONA LA BANCA</h2>
      <p>La banca valuta sostenibilità e rischio.</p>
      <p>L'immobile è una garanzia.</p>
      
      <h2>IL RUOLO DELLA PERIZIA</h2>
      <p>La perizia stima un valore prudente.</p>
      <p>Non sempre coincide con il prezzo concordato.</p>
      
      <h2>PROBLEMI PIÙ FREQUENTI</h2>
      <p>Documenti incompleti e aspettative errate.</p>
      <p>Anticiparli riduce stress.</p>
      
      <h2>PREPARARSI AL CONFRONTO</h2>
      <p>Arrivare preparati evita di subire il processo.</p>
      <p>La preparazione fa la differenza.</p>
      
      <h2>CONCLUSIONE</h2>
      <p>Gestire mutuo e perizia con metodo porta maggiore serenità.</p>
    `
  },
  {
    id: "6",
    title: "VERIFICA PRE-ROGITO",
    excerpt: "Il rogito è la firma definitiva. I controlli finali e l'allineamento evitano sorprese nell'ultimo passo.",
    date: "2 Gennaio 2026",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=800&fit=crop",
    slug: "consulenza-verifica-pre-rogito",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Immobiliar Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "7 min",
    content: `
      <p>Il rogito rappresenta la conclusione del percorso di acquisto, ma anche il momento più delicato dal punto di vista formale.</p>
      
      <h2>COSA SUCCEDE AL ROGITO</h2>
      <p>Si firmano atti e si effettuano pagamenti definitivi.</p>
      <p>Ogni dettaglio conta.</p>
      
      <h2>CONTROLLI FINALI</h2>
      <p>Documenti e importi devono essere coerenti.</p>
      <p>Nulla va dato per scontato.</p>
      
      <h2>GESTIRE LA PRESSIONE FINALE</h2>
      <p>La stanchezza può portare a errori.</p>
      <p>Meglio fermarsi che firmare con dubbi.</p>
      
      <h2>ALLINEAMENTO TRA LE PARTI</h2>
      <p>Banca, notaio e venditore devono essere allineati.</p>
      <p>L'ultimo controllo tutela l'acquirente.</p>
      
      <h2>CONCLUSIONE</h2>
      <p>La verifica pre-rogito è l'ultimo passo per firmare con serenità.</p>
    `
  }
];
