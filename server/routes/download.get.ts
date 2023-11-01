import PDFDocument from 'pdfkit';

export default defineEventHandler(async (event) => {
  const { chapterId, comicId } = getQuery(event);

  if (!chapterId || !comicId) {
    return {
      status: 400,
      message: 'Bad request',
    };
  }

  const { baseURL } = useRuntimeConfig().public;

  const data: any = await $fetch(`/comics/${comicId}/chapters/${chapterId}`, {
    baseURL,
  });
  const { images, chapter_name, comic_name } = data;

  const doc = new PDFDocument({ autoFirstPage: false });

  const filename = encodeURIComponent(`${comic_name}(${chapter_name})`);
  const stream = event.node.res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment;filename=${filename}.pdf`,
  });

  doc.on('data', (chunk) => stream.write(chunk));
  doc.on('end', () => stream.end());

  const promises = images.map((image: any) => {
    return $fetch(image.src, {
      responseType: 'arrayBuffer',
    })
      .then((data) => data)
      .catch(() => {
        return $fetch(image.backup_src, {
          responseType: 'arrayBuffer',
        })
          .then((data) => data)
          .catch(() => {});
      });
  });

  const imagesResponse = await Promise.all(promises);
  imagesResponse.forEach((imageData) => {
    if (!imageData) return;
    //@ts-ignore
    const img = doc.openImage(imageData);
    doc.addPage({ size: [img.width, img.height] });
    doc.image(img, 0, 0);
  });

  doc.end();

  event.node.res.end();
});
