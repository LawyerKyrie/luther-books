// 34 books from the old Luther Books
// organizing it different and planning to view the source, url and format with actions
const books = [
  {
    id: 1,
    title: 'Weimar Edition - WA',
    description: 'Dr. Martin Luthers Werke - WA (Ger)',
    category: 'Weimar Edition',
    tags: ['WA (Ger)'],
    urls: ['http://www.lutherdansk.dk/WA/D.%20Martin%20Luthers%20Werke,%20Weimarer%20Ausgabe%20-%20WA.htm#ab3'],
    formats: ['pdf/doc/flip']
  },
  {
    id: 2,
    title: 'Walch 2 Edition of Luthers work',
    description: 'Overview of all (St.L) volumes with links.',
    category: 'Walck Edition',
    tags: ['St. Louis (St.L).'],
    urls: ['https://luther-books.vercel.app/blog/luther-writings#walch-edition-2'],
    formats: ['md, html']
  },
  {
    id: 3,
    title: 'Overview annas-archive.org',
    description: '55 + 27 vol. (63/82 online)',
    category: 'Vol. overview',
    tags: ['55 volumes'],
    urls: ['http://www.lutherdansk.dk/Martin%20Luther%20in%20English.htm'],
    formats: ['pdf']
  },
  {
    id: 4,
    title: 'Sermons, Commentary & other Works',
    description: 'Big overview of sermons etc. on GodRules.net',
    category: 'Books, comments etc.',
    tags: ['GodRules.net'],
    urls: ['https://godrules.net/library/luther/luther.htm'],
    formats: ['html']
  },
  {
    id: 5,
    title: '496 Luther books at HathiTrust',
    description: 'The best alternative to archive.org and annas-archive.org',
    category: '496 online books',
    tags: ['HathiTrust'],
    urls: ['https://catalog.hathitrust.org/Search/Home?adv=1&setft=true&ft=ft&lookfor%5B%5D=Luther%2C+Martin%2C+1483-1546.&format%5B%5D=author&fqor-language%5B%5D=English'],
    formats: ['html']
  },
  {
    id: 6,
    title: '📂 Best online Book of Concord',
    description: 'Two similar web sites of the same Concord - (html format)',
    category: 'Book of Concord',
    tags: ['TheBookOfConcord', 'BookOfConcord'],
    urls: ['https://thebookofconcord.org/three-universal-or-ecumenical-creeds/', 'https://bookofconcord.org/'],
    formats: ['html', 'html']
  },

  {
    id: 8,
    title: '📂 E. Jacobs Book of Concord',
    description: 'Concordia By Henry Eyster Jacobs (txt, pdf etc.)',
    category: 'E. Jacobs Doctrine',
    tags: ['Archive', 'LutheranLibrary'],
    urls: ['https://archive.org/details/thebookofconcord00unknuoft', 'https://www.lutheranlibrary.org/pdf/250-jacobs-book-of-concord.pdf'],
    formats: ['txt. pdf etc.', 'pdf']
  },
  {
    id: 10,
    title: 'Concordia Triglotta - archive.org',
    description: 'St. Louis (1921) - Concordia in German, Latin & English',
    category: 'Concordia Trig.',
    tags: ['Triglotta'],
    urls: ['https://archive.org/details/concordiatriglot0000unse/mode/2up'],
    formats: ['txt/ pdf etc.']
  },
  {
    id: 11,
    title: 'Bente, Historical Introductions',
    description: 'Bente, Hist. intro to Concordia Triglotta (1921)',
    category: 'F. Bente, Doctrine',
    tags: ['Historical'],
    urls: ['https://archive.org/details/bente-historical-introductions-triglotta-from-ocr2/mode/1up'],
    formats: ['txt/ pdf etc.']
  },
  {
    id: 12,
    title: '📂 Christian Dogmatics',
    description: 'Muellers short version of the 3.volume Dogmatics by Pieper',
    category: 'Mueller, Doctrine',
    tags: ['Md version', 'Archive version'],
    urls: ['https://christian-dogmatics.vercel.app', 'https://archive.org/details/muellerchristiandogmatics/mode/2up'],
    formats: ['MarkDown', 'txt, pdf etc.']
  },
  {
    id: 14,
    title: '📂 Dr. Piepers Christian Dogmatics',
    description: 'Chistian Dogmatics of Pieper, Vol. I, II and III',
    category: 'Pieper, Doctrine',
    tags: ['Pieper Vol.1', 'Pieper Vol.2', 'Pieper Vol.3'],
    urls: ['https://archive.org/details/christliche-dogmatik-vol-1-2023-10-31-deep-l-en-no-highlight/mode/2up', 'https://archive.org/details/pieper-cdk-2-001-672-deep-l-en/mode/2up', 'https://archive.org/details/cdk-vol-3-deep-l-en-corrected-2023-11-28-no-shading/mode/2up'],
    formats: ['txt, pdf etc.', 'txt, pdf etc.', 'txt, pdf etc.']
  },

  {
    id: 17,
    title: 'Pieper, Dogmatics Study Guide',
    description: 'Study Guide to Pieper',
    category: 'Pieper, Doctrine',
    tags: ['Study-Guide'],
    urls: ['https://scholar.csl.edu/christiandogmatics/'],
    formats: ['pdf']
  },
  {
    id: 18,
    title: 'Doctrinal Theology of H. Schmid',
    description: 'Schmid, Heinrich (ELC) (Pieper is referring a lot to this book)',
    category: 'Doctrinal Theology',
    tags: ['Heinrich Schmid'],
    urls: ['https://archive.org/details/doctrinaltheolog00schmuoft'],
    formats: ['txt, pdf etc.']
  },
  {
    id: 19,
    title: '📂 Systematic Theology Vol 1',
    description: 'Charles Hodge (1872) Vol I, II and III',
    category: 'C. Hodge, Doctrine',
    tags: ['Hodge Vol.1', 'Hodge Vol.2', 'Hodge Vol.3'],
    urls: ['https://archive.org/details/systematic-theology-vol-1/mode/2up', 'https://archive.org/details/systematic-theology-vol-2/mode/2up', 'https://archive.org/details/systematictheolo014257mbp/mode/2up'],
    formats: ['txt, pdf etc.', 'txt, pdf etc.', 'txt, pdf etc.']
  },

  {
    id: 22,
    title: 'Questions & index to Quenstedt',
    description: 'Overview of the doctrine of J. A. Quenstedt (1528–1590)',
    category: 'Quenstedt, Doctrine',
    tags: ['J.A. Quenstedt († 1590)'],
    urls: ['https://trhalvorson.com/wp-content/uploads/2023/04/Quenstedt_Index.pdf'],
    formats: ['pdf']
  },
  {
    id: 23,
    title: '📂 Small catechism',
    description: 'Luthers small Catechism (md + html formats)',
    category: 'Luther, Catechism',
    tags: ['MarkDown', 'CPH/ LCMS'],
    urls: ['https://luther-books.vercel.app/blog/the-small-catechism', 'https://catechism.cph.org/'],
    formats: ['md, html', 'html']
  },

  {
    id: 25,
    title: 'The 95 Theses',
    description: 'The 95 Theses in MD format',
    category: 'Luther, 95 Theses',
    tags: ['Luther/ 95-theses'],
    urls: ['https://luther-books.vercel.app/blog/the-95-theses'],
    formats: ['md/ html']
  },
  {
    id: 26,
    title: 'Church Postil (Eng/Ger/Ned)',
    description: 'Overview of Church Postil',
    category: 'Overview Postils',
    tags: ['Church Postil'],
    urls: ['https://martinlutherpostil.com'],
    formats: ['html']
  },
  {
    id: 27,
    title: 'Church Postil (Eng)',
    description: 'Church Postil in one file',
    category: 'Overview Postils',
    tags: ['Church Postil'],
    urls: ['https://www.lutheranlibrary.org/504-luther-church-postil-complete/'],
    formats: ['pdf/ epub']
  },
  {
    id: 28,
    title: 'Church Postil (Da & Eng)',
    description: 'Overview of Church Postil',
    category: 'Overview Postils',
    tags: ['Church Postil'],
    urls: ['http://www.lutherdansk.dk/KP%20-%20enkeltpr%C3%A6dikener/KP%20-%20Forside%20med%20indeks/index.htm'],
    formats: ['html/ pdf']
  },
  {
    id: 29,
    title: '📂 Church Postil',
    description: 'Advent - Trinity (6 parts)',
    category: 'Sermons',
    tags: ['Advent Postil', 'Christmas Postil', 'Lent Postil', 'Summer Postil', 'Trinity I Postil', 'Trinity II Postil'],
    urls: ['http://www.lutherdansk.dk/Web-advent%20engelsk-KP/default.htm', 'http://www.lutherdansk.dk/Web-Julepostillen%20AM/default.htm', 'http://www.lutherdansk.dk/Web-Fastepostillen%20AM/index.htm', 'http://www.lutherdansk.dk/Web-sommerpostillen%20AM/default.htm', 'http://www.lutherdansk.dk/1%20Web-AM%20-%20Trinity%201-12/index.htm', 'http://www.lutherdansk.dk/Web-Trinitatis%20AM/index.htm'],
    formats: ['html', 'html', 'html', 'html', 'html', 'html']
  },
  {
    id: 35,
    title: 'Walch 1 and 2 in German',
    description: 'Overview Walch 1753 and 1910 in German',
    category: 'German-Walch',
    tags: ['Walch'],
    urls: ['https://martinluther.us'],
    formats: ['html-pdf']
  },
  {
    id: 36,
    title: '📂 Works of Cole on HathiTrust',
    description: 'Translated from the works of Luther by Henry Cole',
    category: 'Select-Works',
    tags: ['H. Cole Vol.1', 'H. Cole Vol.2', 'H. Cole Vol.3', 'H. Cole Vol.4'],
    urls: ['https://babel.hathitrust.org/cgi/pt?id=hvd.ah3v2n', 'https://babel.hathitrust.org/cgi/pt?id=hvd.ah3v2p', 'https://babel.hathitrust.org/cgi/pt?id=hvd.ah3v2q', 'https://babel.hathitrust.org/cgi/pt?id=hvd.ah3v2r'],
    formats: ['html, txt, pdf', 'html, txt, pdf', 'html, txt, pdf', 'html, txt, pdf']
  },
  {
    id: 40,
    title: '📂 Works of Cole on archive.org',
    description: '3 volumes of Henry Cole',
    category: 'Select-Works',
    tags: ['H. Cole Vol.1', 'H. Cole Vol.2', 'H. Cole Vol.3', 'H. Cole Vol.4'],
    urls: ['https://archive.org/details/selectworkstrby01luthgoog', 'https://archive.org/details/selectworksmart01colegoog', 'https://archive.org/details/selectworkstrby00luthgoog', 'https://babel.hathitrust.org/cgi/pt?id=hvd.ah3v2r'],
    formats: ['txt, pdf etc.', 'txt, pdf etc.', 'txt, pdf etc.', 'html']
  },
  {
    id: 44,
    title: 'Henry Cole vol. 1/4',
    description: 'librivox rec. Vol. 1 of Select Works',
    category: 'Mp3 audio',
    tags: ['Cole, Henry'],
    urls: ['https://archive.org/details/selectworksofmartinluthervol1_2403_librivox'],
    formats: ['mp3']
  },
  {
    id: 45,
    title: 'Henry Cole on librivox',
    description: 'librivox rec. of Henry Cole',
    category: 'Mp3 audio',
    tags: ['Cole, Henry'],
    urls: ['https://librivox.org/author/7047?primary_key=7047&search_category=author&search_page=1&search_form=get_results&search_order=alpha'],
    formats: ['mp3']
  },
  {
    id: 46,
    title: 'Translations of Henry Cole etc.',
    description: 'Site with all sermons and commentaries',
    category: 'Luther Sermons',
    tags: ['Cole, Henry'],
    urls: ['https://sermons.martinluther.us/workscomm.html'],
    formats: ['html, pdf']
  }
]

export default defineEventHandler(() => {
  return books
})
