
var fonts = {
	Roboto: {
		normal: 'fonts/Roboto-Regular.ttf',
		bold: 'fonts/Roboto-Medium.ttf',
		italics: 'fonts/Roboto-Italic.ttf',
		bolditalics: 'fonts/Roboto-MediumItalic.ttf'
	}
};

var pdfmake = require('../js/index');
pdfmake.setFonts(fonts);

var docDefinition = {
	content: [
		{
			toc: {
				title: { text: 'TABLE OF CONTENTS', style: 'tocTitle' },
				leader: { text: ' . ' }
			}
		},
		{
			text: [
				'This is a TOC example.',
				'Text elements marked with tocItem: true will be located in the toc.',
				'Simple paragraphs can be marked as toc entries. You can also style them as you want.'
			],
			style: 'story',
			tocItem: true,
			tocStyle: { bold: true }
		},
		{
			text: 'Still to come',
			style: 'h1',
			tocItem: true
		}
	],
	styles: {
		h1: {
			fontSize: 22,
			bold: true,
			margin: [0, 15, 0, 5]
		},
		story: {
			alignment: 'justify',
			margin: [0, 0, 0, 15]
		},
		tocTitle: {
			fontSize: 16,
			bold: true,
			alignment: 'center',
			margin: [0, 0, 0, 15]
		}
	}
};

var pdf = pdfmake.createPdf(docDefinition);
pdf.write('pdfs/toc_with_leaders.pdf');
