const books = [
  {
    id: 1,
    tag: 'Ger',
    category: 'Overview',
    title: 'Dr. Martin Luthers Werke (Ger)',
    description: 'Weimar Edition',
    format: 'pdf/doc/flip',
    url: 'http://www.lutherdansk.dk/WA/D.%20Martin%20Luthers%20Werke,%20Weimarer%20Ausgabe%20-%20WA.htm#ab3',
    note: 'Original'
  },
  {
    id: 2,
    tag: 'Walch Edition 2',
    category: 'All-Writings',
    title: 'Revised Walch Edition of Luthers work',
    description: 'luthers-works.vercel.app',
    format: 'md, html',
    url: 'https://luthers-works.vercel.app',
    note: 'Best site with search functionality.'
  },
  {
    id: 3,
    tag: 'Eng',
    category: 'Overview',
    title: '63 of 82 volumes online',
    description: 'annas-archive.org',
    format: 'html',
    url: 'http://www.lutherdansk.dk/Martin%20Luther%20in%20English.htm',
    note: 'Not complete'
  },
  {
    id: 4,
    tag: 'Eng',
    category: 'Overview',
    title: 'Sermons, Commentary & other Works',
    description: 'godrules.net/library/luther',
    format: 'html',
    url: 'https://godrules.net/library/luther/luther.htm',
    note: 'Very big'
  },
  {
    id: 5,
    tag: 'Search',
    category: 'Search-engine',
    title: 'Search for Luther on hathitrust.org',
    description: 'hathitrust.org',
    format: 'html',
    url: 'https://catalog.hathitrust.org/Search/Home?adv=1&setft=true&ft=ft&lookfor%5B%5D=Luther%2C+Martin%2C+1483-1546.&format%5B%5D=author&fqor-language%5B%5D=English',
    note: 'The best alternative to archive.org and annas-archive.org'
  },
  {
    id: 6,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Book of Concord',
    description: 'With numbered sections (BEST)',
    format: 'html',
    url: 'https://thebookofconcord.org/three-universal-or-ecumenical-creeds/',
    note: 'The best version of the Book of Concord on net.'
  },
  {
    id: 7,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Book of Concord',
    description: 'bookofconcord.org',
    format: 'html',
    url: 'https://bookofconcord.org/',
    note: 'A third net site with The Book of Concord'
  },
  {
    id: 8,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Book of Concord',
    description: 'archive.org',
    format: 'txt, pdf etc.',
    url: 'https://archive.org/details/thebookofconcord00unknuoft',
    note: 'Very good with txt, pdf etc.'
  },
  {
    id: 9,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'The Book of Concord',
    description: 'www.lutheranlibrary.org',
    format: 'pdf',
    url: 'https://www.lutheranlibrary.org/pdf/250-jacobs-book-of-concord.pdf',
    note: 'By Henry Eyster Jacobs'
  },
  {
    id: 10,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Concordia Triglotta',
    description: 'St. Louis (1921)',
    format: 'pdf/txt etc.',
    url: 'https://archive.org/details/concordiatriglot0000unse/mode/2up',
    note: 'Concordia in German Latin & English'
  },
  {
    id: 11,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Historical Introductions to Concordia Triglotta',
    description: 'F. Bente (1921)',
    format: 'pdf/txt etc.',
    url: 'https://archive.org/details/bente-historical-introductions-triglotta-from-ocr2/mode/1up',
    note: ''
  },
  {
    id: 12,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Christian Dogmatics',
    description: 'Mueller´ version of Pieper´ work',
    format: 'markdown',
    url: 'https://christian-dogmatics.vercel.app',
    note: 'The most modern net site of this book.'
  },
  {
    id: 13,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Christian Dogmatics',
    description: 'archive.org',
    format: 'pdf/txt etc.',
    url: 'https://archive.org/details/muellerchristiandogmatics/mode/2up',
    note: 'The original book'
  },
  {
    id: 14,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Dr. Piepers Christian Dogmatics',
    description: 'Vol. I',
    format: 'pdf/txt etc.',
    url: 'https://archive.org/details/christliche-dogmatik-vol-1-2023-10-31-deep-l-en-no-highlight/mode/2up',
    note: 'Pieper, vol I'
  },
  {
    id: 15,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Dr. Piepers Christian Dogmatics',
    description: 'Vol. II',
    format: 'pdf/txt etc.',
    url: 'https://archive.org/details/pieper-cdk-2-001-672-deep-l-en/mode/2up',
    note: 'Pieper, vol II'
  },
  {
    id: 16,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Dr. Piepers Christian Dogmatics',
    description: 'Vol. III',
    format: 'pdf/txt etc.',
    url: 'https://archive.org/details/cdk-vol-3-deep-l-en-corrected-2023-11-28-no-shading/mode/2up',
    note: 'Pieper, vol III'
  },
  {
    id: 17,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Dr. Francis Piepers Christian Dogmatics Study Guide',
    description: 'CSLScholar',
    format: 'pdf',
    url: 'https://scholar.csl.edu/christiandogmatics/',
    note: 'Study Guide to Pieper'
  },
  {
    id: 18,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'The doctrinal theology of the Evangelical Lutheran Church',
    description: 'Schmid, Heinrich',
    format: 'pdf/txt etc.',
    url: 'https://archive.org/details/doctrinaltheolog00schmuoft',
    note: 'Pieper is referring a lot to this book'
  },
  {
    id: 19,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Systematic Theology Vol 1',
    description: 'Charles Hodge (1872)',
    format: 'pdf/txt etc.',
    url: 'https://archive.org/details/systematic-theology-vol-1/mode/2up',
    note: 'Hodge, vol I'
  },
  {
    id: 20,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Systematic Theology Vol 2',
    description: 'Charles Hodge (1872)',
    format: 'pdf/txt etc.',
    url: 'https://archive.org/details/systematic-theology-vol-2/mode/2up',
    note: 'Hodge, vol II'
  },
  {
    id: 21,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Systematic Theology Vol 3',
    description: 'Charles Hodge (1872)',
    format: 'pdf/txt etc.',
    url: 'https://archive.org/details/systematictheolo014257mbp/mode/2up',
    note: 'Hodge, vol III'
  },
  {
    id: 22,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Index of Parts, Chapters, Members, Sections, and Questions',
    description: 'Johannes Andreas Quenstedt (1528–1590)',
    format: 'pdf',
    url: 'https://trhalvorson.com/wp-content/uploads/2023/04/Quenstedt_Index.pdf',
    note: 'Quenstedt - The first dogmatican after Luther'
  },
  {
    id: 23,
    tag: 'Luther',
    category: 'Books',
    title: 'Small catechism',
    description: 'luther-books.vercel.app',
    format: 'markdown',
    url: '../books/the-small-catechism',
    note: 'Luthers small Catechism'
  },
  {
    id: 24,
    tag: 'Luther',
    category: 'Books',
    title: 'Small catechism (by lcms)',
    description: 'cph.org',
    format: 'html',
    url: 'https://catechism.cph.org/',
    note: 'LCMS net version of the small catechism'
  },
  {
    id: 25,
    tag: 'Luther',
    category: 'Writings',
    title: 'The 95 Theses',
    description: 'luther-books.vercel.app',
    format: 'markdown',
    url: '../books/the-95-theses',
    note: 'The 95 Theses in MD format'
  },
  {
    id: 26,
    tag: 'Postil',
    category: 'Overview',
    title: 'Church Postil (Eng/Ger/Ned)',
    description: 'martinlutherpostil.com',
    format: 'html',
    url: 'https://martinlutherpostil.com',
    note: 'Overview of Church Postil'
  },
  {
    id: 27,
    tag: 'Postil',
    category: 'Overview',
    title: 'Church Postil (Eng)',
    description: 'www.lutheranlibrary.org',
    format: 'pdf',
    url: 'https://www.lutheranlibrary.org/504-luther-church-postil-complete/',
    note: 'Church Postil in one file'
  },
  {
    id: 28,
    tag: 'Postil',
    category: 'Overview',
    title: 'Church Postil (Da & Eng)',
    description: 'www.lutherdansk.dk',
    format: 'html/pdf',
    url: 'http://www.lutherdansk.dk/KP%20-%20enkeltpr%C3%A6dikener/KP%20-%20Forside%20med%20indeks/index.htm',
    note: 'Overview of Church Postil'
  },
  {
    id: 29,
    tag: 'Postil',
    category: 'Sermons',
    title: 'Church Postil',
    description: 'Advents Postil',
    format: 'html',
    url: 'http://www.lutherdansk.dk/Web-advent%20engelsk-KP/default.htm',
    note: 'First part of the Church Postil'
  },
  {
    id: 30,
    tag: 'Postil',
    category: 'Sermons',
    title: 'Church Postil',
    description: 'Christmas Postil',
    format: 'html',
    url: 'http://www.lutherdansk.dk/Web-Julepostillen%20AM/default.htm',
    note: 'Second part of the Church Postil'
  },
  {
    id: 31,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Church Postil',
    description: 'Lent Postil',
    format: 'html',
    url: 'http://www.lutherdansk.dk/Web-Fastepostillen%20AM/index.htm',
    note: 'Third part of the Church Postil'
  },
  {
    id: 32,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Church Postil',
    description: 'Summer Postil (Easter)',
    format: 'html',
    url: 'http://www.lutherdansk.dk/Web-sommerpostillen%20AM/default.htm',
    note: 'Four part of the Church Postil'
  },
  {
    id: 33,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Church Postil',
    description: 'Trinity Postil I (Early Autumn)',
    format: 'html',
    url: 'http://www.lutherdansk.dk/1%20Web-AM%20-%20Trinity%201-12/index.htm',
    note: 'Fifth part of the Church Postil'
  },
  {
    id: 34,
    tag: 'Lutheran',
    category: 'Doctrine',
    title: 'Church Postil',
    description: 'Trinity Postil II (Late Autumn)',
    format: 'html',
    url: 'http://www.lutherdansk.dk/Web-Trinitatis%20AM/index.htm',
    note: 'Sixth part of the Church Postil'
  }
]

export default defineEventHandler(() => {
  return books
})
