const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'Első új bekezdés';
document.getElementById('target').before(newParagraph);
const newParagraphEnd = document.createElement('p');
newParagraphEnd.innerHTML = 'Utolsó új bekezdés';
document.getElementById('target').after(newParagraphEnd);