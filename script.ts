declare var scrapbox: any;

scrapbox.PageMenu.addMenu({
  title: 'CopyAsBracket',
  icon: 'kamon kamon-copy',
  onClick: () => {navigator.clipboard.writeText(`[${decodeURIComponent(new URL(document.URL).pathname)}]`)}
});
